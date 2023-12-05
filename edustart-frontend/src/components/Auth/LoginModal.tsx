import React, { useEffect, useState } from "react";
import Modal from "@/components/common/Modal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import useLoginValidator from "@/hooks/useLoginValidator";
import useLogin from "@/hooks/useLogin";
import useSignup from "@/hooks/useSingnup";
import { useUserDetails } from "@/context/UserContext";
import { setTokenInLS } from "@/utils/common";

const initialLoginDetails = {
  email: "",
  password: "",
};

const LoginModal: React.FC<{
  buttonLabel?: string;
  buttonClassName?: string;
}> = ({ buttonLabel = null, buttonClassName = "" }) => {
  const [modalType, setModalType] = useState<"Login" | "Register" | "forget">(
    "Login"
  );
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginDetails, setLoginDetails] = useState(initialLoginDetails);
  const [showErrors, setShowError] = useState(false);
  const { passwordErr, emailErr } = useLoginValidator(loginDetails);
  const { mutateAsync: loginMutate } = useLogin();
  const { mutateAsync: registerMutate } = useSignup();
  const { setUser, user, logoutUser } = useUserDetails();

  const handleChange = (e) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async () => {
    setShowError(false);
    if (passwordErr || emailErr) {
      setShowError(true);
      return;
    }
    let resp: any = {};
    try {
      if (modalType === "Login") {
        resp = await loginMutate(loginDetails);
      } else {
        resp = await registerMutate(loginDetails);
      }
      setUser(resp?.data?.data);
      setTokenInLS(resp.data?.data?.token);
      setIsLoginModalOpen(false);
    } catch (exp) {
      setShowError(true);
    }
  };

  useEffect(() => {
    if (!isLoginModalOpen) {
      setLoginDetails(initialLoginDetails);
      setShowError(false);
    }
  }, [isLoginModalOpen]);

  if (user !== null && !buttonLabel) {
    return <button onClick={logoutUser}>Logout</button>;
  }

  return (
    <>
      <button
        className={buttonClassName}
        onClick={() => setIsLoginModalOpen(true)}
      >
        {buttonLabel ? buttonLabel : "Login"}
      </button>

      <Modal
        containerClassName="w-80"
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <div>
          <h1 className="text-sky-900 text-lg">{modalType} in EduStart</h1>
          <form className="mt-4">
            <div className="mt-2 flex flex-col">
              <label className="font-normal text-xs" htmlFor="email">
                Email
              </label>
              <Input
                id={"email"}
                onChange={handleChange}
                name="email"
                value={loginDetails.email}
              />
            </div>

            <div className="mt-2 flex flex-col relative">
              <label className="font-normal text-xs" htmlFor="pass">
                Password
              </label>
              <Input
                id={"pass"}
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                name="password"
                value={loginDetails.password}
              />
              {!showPassword ? (
                <EyeIcon
                  color="#475569"
                  onClick={() => setShowPassword(true)}
                  className="absolute h-4 w-4 right-2 cursor-pointer top-6"
                />
              ) : (
                <EyeOffIcon
                  color="#475569"
                  onClick={() => setShowPassword(false)}
                  className="absolute h-4 w-4 right-2 cursor-pointer top-6"
                />
              )}
              {modalType === "Login" && (
                <div className="font-light ml-auto text-xs underline text-slate-400 cursor-pointer">
                  forgot password
                </div>
              )}
            </div>

            {showErrors && (
              <span
                className={`p-0 m-0 transition-all duration-200 text-xs text-red-400 
            ${showErrors ? "visible" : "invisible"}`}
              >
                {emailErr ? "Invalid email" : "Invalid Password"}
              </span>
            )}

            <div className="mt-2 flex flex-col">
              <Button
                type="button"
                className="bg-sky-500"
                onClick={handleLogin}
              >
                {modalType}
              </Button>
            </div>

            <div className="font-light mt-2 flex gap-2 text-xs text-slate-400">
              {modalType === "Register"
                ? "Already a user?"
                : "New to Edustart?"}
              <div
                onClick={() => {
                  if (modalType === "Login") setModalType("Register");
                  else setModalType("Login");
                }}
                className="underline text-sky-400 cursor-pointer"
              >
                {modalType === "Login" ? "Register" : "Login"} here
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;

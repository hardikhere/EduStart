import React, { useState } from "react";
import Modal from "@/app/components/common/Modal";
import Input from "@/app/components/common/Input";
import Button from "@/app/components/common/Button";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";

const LoginModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <button onClick={() => setIsLoginModalOpen(true)}>Login</button>

      <Modal
        containerClassName="w-80"
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <div>
          <h1 className="text-sky-900 text-lg">Login to Edustart</h1>
          <form className="mt-4 ">
            <div className="mt-2 flex flex-col">
              <label className="font-normal text-xs" htmlFor="email">
                Email
              </label>
              <Input id={"email"} />
            </div>

            <div className="mt-2 flex flex-col relative">
              <label className="font-normal text-xs" htmlFor="pass">
                Password
              </label>
              <Input id={"pass"} type={showPassword ? "text" : "password"} />
              {!showPassword ? (
                <EyeIcon
                  onClick={() => setShowPassword(true)}
                  className="absolute h-4 w-4 right-2 cursor-pointer top-6"
                />
              ) : (
                <EyeOffIcon
                  onClick={() => setShowPassword(false)}
                  className="absolute h-4 w-4 right-2 cursor-pointer top-6"
                />
              )}
              <div className="font-light ml-auto text-xs underline text-slate-400 cursor-pointer">
                forgot password
              </div>
            </div>
            <div className="mt-2 flex flex-col">
              <Button className="bg-sky-500">Login</Button>
            </div>

            <div className="font-light mt-2 flex gap-2 text-xs text-slate-400">
              New to Edustart?
              <div className="underline text-sky-400 cursor-pointer">
                Register here
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;

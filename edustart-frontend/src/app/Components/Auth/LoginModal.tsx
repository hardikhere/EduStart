import React, { useState } from "react";
import Modal from "@/app/components/common/Modal";
import Input from "@/app/components/common/Input";
import Button from "@/app/components/common/Button";

const LoginModal = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsLoginModalOpen(true)}>Login</button>

      <Modal
        containerClassName="h-60 w-80"
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      >
        <div>
          <h1 className="text-sky-900 text-lg">Login to Edustart</h1>
          <form className="mt-4">
            <div className="mt-2 flex flex-col">
              <label className="font-normal text-xs" htmlFor="email">
                Email
              </label>
              <Input id={"email"} />
            </div>

            <div className="mt-2 flex flex-col">
              <label className="font-normal text-xs" htmlFor="pass">
                Password
              </label>
              <Input id={"pass"} type="password" />
            </div>
            <div className="mt-2 flex flex-col">
              <Button className="bg-sky-500">Login</Button>
            </div>

            <div className="mt-2 flex gap-2 text-xs text-slate-400">
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

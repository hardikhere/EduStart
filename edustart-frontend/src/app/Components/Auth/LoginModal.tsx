import React, { useState } from "react";
import Modal from "@/app/components/common/Modal";
import Input from "@/app/components/common/Input";

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
            <div className="flex flex-col">
              <label className="font-normal text-xs" htmlFor="email">
                Email
              </label>
              <Input id={"email"} />
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default LoginModal;

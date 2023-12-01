import { ValidateEmail } from "@/app/utils/common";
import React, { useState, useEffect } from "react";

const useLoginValidator = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const [emailErr, setEmailError] = useState(false);
  const [passwordErr, setPasswordError] = useState(false);

  useEffect(() => {
    if (!ValidateEmail(email)) setEmailError(true);
    else setEmailError(false);
    if (password?.length < 8) {
      setPasswordError(true);
    } else setPasswordError(false);
  }, [email, password]);

  return {
    emailErr,
    passwordErr,
  };
};

export default useLoginValidator;

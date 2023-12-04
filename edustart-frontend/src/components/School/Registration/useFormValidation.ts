import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  ValidateEmail,
  validatePhone,
  validatePinCode,
} from "../../../utils/common";

Object.size = function (obj) {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};

const useFormValidation = () => {
  const schoolRegister = useSelector((state) => state.schoolRegister);
  const [hasAnyErrorForm1, sethasAnyErrorForm1] = useState(true);
  const [emailErr, setemailErr] = useState(false);
  const [yoeErr, setyoeErr] = useState(false);
  const [schoolNameErr, setschoolNameErr] = useState(false);
  const [phoneErr, setphoneErr] = useState(false);
  const [gradeErr, setgradeErr] = useState(false);
  const [addressErr, setaddressErr] = useState(false);
  const [pinCodeErr, setpinCodeErr] = useState(false);

  useEffect(() => {
    if (!ValidateEmail(schoolRegister.email)) setemailErr(true);
    else setemailErr(false);

    if (!schoolRegister.schoolName || schoolRegister.schoolName.length < 5)
      setschoolNameErr(true);
    else setschoolNameErr(false);
    if (
      !schoolRegister.yearOfEstablishment ||
      schoolRegister.yearOfEstablishment.length !== 4
    )
      setyoeErr(true);
    else setyoeErr(false);

    if (
      !schoolRegister.phoneNumber ||
      !validatePhone(schoolRegister.phoneNumber)
    )
      setphoneErr(true);
    else setphoneErr(false);

    if (!schoolRegister.pinCode || !validatePinCode(schoolRegister.pinCode))
      setpinCodeErr(true);
    else setpinCodeErr(false);

    if (!schoolRegister.address || schoolRegister.address?.length < 10) {
      setaddressErr(true);
    } else setaddressErr(false);
  }, [schoolRegister]);

  useEffect(() => {
    sethasAnyErrorForm1(
      yoeErr ||
        schoolNameErr ||
        emailErr ||
        phoneErr ||
        addressErr ||
        pinCodeErr
    );
  }, [yoeErr, schoolNameErr, emailErr, phoneErr, addressErr, pinCodeErr]);
  return {
    hasAnyErrorForm1,
    yoeErr,
    schoolNameErr,
    emailErr,
    phoneErr,
    addressErr,
    pinCodeErr,
  };
};

export default useFormValidation;

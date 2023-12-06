import { Modal } from "@/components/common";
import React, { useEffect, useMemo, useState } from "react";
import Button from "@/components/common/Button";
import { CheckIcon, PhoneIcon, TicketIcon } from "@heroicons/react/solid";
import Input from "@/components/common/Input";
import {
  getUserDetailsFromLS,
  saveUserDetailsInLS,
} from "@/components/School/utils";

const RequestCallbackModal = ({ id }: { id: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const [userDetails, setUserDetails] = useState({
    name: "",
    phone: "",
    schoolsDone: "",
  });
  const [error, setError] = useState("");
  const [hasAlreadySubmitted, setHasAlreadySubmitted] = useState(
    userDetails.schoolsDone.includes(id)
  );

  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const handleSubmit = () => {
    if (!userDetails.name.trim() || !userDetails.phone.trim()) {
      setError("Please fill in all fields.");
      return;
    }
    // Process the submission if validation passes
    // For now, just log the user details
    if (userDetails.schoolsDone.length === 0) {
      saveUserDetailsInLS({ ...userDetails, schoolsDone: id });
    } else {
      saveUserDetailsInLS({
        ...userDetails,
        schoolsDone: userDetails.schoolsDone.concat(`,${id}`),
      });
    }
    setHasAlreadySubmitted(true);

    // Close the modal after submission
    closeModal();
  };

  useEffect(() => {
    const savedDetails = getUserDetailsFromLS();
    if (isModalOpen) {
      setUserDetails((details) => ({
        ...details,
        ...savedDetails,
      }));
    }
    if (savedDetails?.schoolsDone?.includes(id)) {
      setHasAlreadySubmitted(true);
    }
  }, [isModalOpen, setIsModalOpen, id, setHasAlreadySubmitted]);

  return (
    <>
      {hasAlreadySubmitted ? (
        <Button className="bg-green-600 h-6 pt-4 pb-4 text-sm">
          <CheckIcon className="h-4" />
          Callback Requested
        </Button>
      ) : (
        <Button
          onClick={openModal}
          className="bg-sky-600 h-6 pt-4 pb-4 text-sm"
        >
          <PhoneIcon className="h-4" />
          Request a callback
        </Button>
      )}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="mb-2">
          <h1 className="text-sky-600 leading-0 mb-0 mt-0 pb-0">
            Thanks for showing interest
          </h1>
          <span className="text-sm text-slate-400 font-light leading-0">
            Kindly share your details
          </span>
        </div>
        <div className="mt-2 flex flex-col">
          <label className="font-normal text-xs" htmlFor="name">
            Name
          </label>
          <Input
            id={"name"}
            onChange={handleChange}
            name="name"
            value={userDetails.name}
          />
        </div>
        <div className="mt-2 flex flex-col">
          <label className="font-normal text-xs" htmlFor="phone">
            Phone No.
          </label>
          <Input
            id={"phone"}
            onChange={handleChange}
            name="phone"
            value={userDetails.phone}
          />
        </div>
        {error && (
          <div className="mt-2 text-xs font-light text-red-500">{error}</div>
        )}
        <div className="mt-2 flex flex-col">
          <Button className="bg-sky-500" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};

export default RequestCallbackModal;

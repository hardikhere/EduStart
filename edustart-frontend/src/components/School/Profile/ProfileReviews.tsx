import LoginModal from "@/components/Auth/LoginModal";
import { getAverageReviews } from "@/components/School/Profile/utils";
import { Modal } from "@/components/common";
import Button from "@/components/common/Button";
import Chip from "@/components/common/Chip";
import Input from "@/components/common/Input";
import { useUserDetails } from "@/context/UserContext";
import useReviewsMutation from "@/hooks/useReviewsMutation";
import { ChatIcon, CheckIcon, UserIcon } from "@heroicons/react/solid";
import { Rating } from "@smastrom/react-rating";
import React, { useEffect, useMemo, useState } from "react";

const ProfileReviews = ({ reviews }) => {
  const { user } = useUserDetails();

  const avgReviews = useMemo(() => {
    return getAverageReviews(reviews);
  }, [reviews]);

  return (
    <div
      className="mt-10 flex flex-col gap-2  w-96 bg-white rounded-lg p-4 flex flex-col gap-1 flex-wrap 
       mr-2 shadow"
    >
      <h2 className="text-sky-800 text-xl font-light">School Reviews</h2>
      <div className="flex gap-1 w-full flex-wrap">
        {Object.keys(avgReviews).map((key) => {
          return (
            <Chip
              key={key}
              className="bg-sky-50 
            text-sm py-1 px-4 w-36 text-slate-400"
            >
              {key}: {avgReviews[key]}
              <Rating value={avgReviews[key]} style={{ width: 80 }} readOnly />
            </Chip>
          );
        })}
      </div>
      <div
        className="rounded-md overflow-auto
      border border-slate-200 h-32 flex gap-1 flex-col pl-1"
      >
        {reviews.length === 0 && (
          <div className="w-full h-full flex justify-center items-center">
            <ChatIcon className="h-12 text-sky-300" />
            <h3 className="text-slate-300">No Reviews Yet</h3>
          </div>
        )}
        {reviews.map(({ content, createdAt }) => (
          <div
            className="bg-sky-100 rounded-full p-1 w-60
          text-xs px-4 py-1 my-1 flex"
            key={createdAt}
          >
            <UserIcon className="h-6 text-slate-600" />
            <div>
              <p className="text-slate-800">{content}</p>
              <p className="text-slate-400 font-light">
                {new Date(createdAt).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
      {!user ? (
        <LoginModal
          buttonClassName="bg-blue-400 text-slate-100 rounded-lg"
          buttonLabel="Login to write a review"
        />
      ) : (
        <ReviewModal />
      )}
    </div>
  );
};

export default ProfileReviews;

const initialReviewState = {
  infrastructure: 0,
  academics: 0,
  facilities: 0,
  sports: 0,
  faculty: 0,
  safety: 0,
  content: "",
};
const ReviewModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasGiven, setHasGiven] = useState(false);
  const { mutate } = useReviewsMutation();

  const [review, setReviews] = useState(initialReviewState);
  console.log(
    "🚀 ~ file: ProfileReviews.tsx:94 ~ ReviewModal ~ review:",
    review
  );

  const handleOnClose = () => {
    setIsModalOpen(false);
  };

  const handleRatingChange = (name) => (value) => {
    setReviews({ ...review, [name]: value });
  };

  const handleContentChange = (event) => {
    setReviews({ ...review, content: event.target.value });
  };

  const handleSubmit = () => {
    if (review.content.length === 0) {
      return;
    }
    setHasGiven(true);
    mutate({ review });
  };

  useEffect(() => {
    if (!isModalOpen) {
      setReviews(initialReviewState);
    }
  }, [isModalOpen]);

  if (hasGiven) {
    return (
      <Button onClick={() => setIsModalOpen(true)} className="bg-sky-600">
        <CheckIcon className="h-4" /> Review Submitted
      </Button>
    );
  }
  return (
    <>
      <Button onClick={() => setIsModalOpen(true)} className="bg-sky-600">
        Write a review
      </Button>
      <Modal isOpen={isModalOpen} onClose={handleOnClose}>
        <div className="flex flex-col gap-2">
          <div className="text-sm text-slate-400">
            Infrastructure:{" "}
            <Rating
              style={{ width: 150 }}
              value={review.infrastructure}
              onChange={handleRatingChange("infrastructure")}
            />
          </div>
          <div className="text-sm text-slate-400">
            Academics:{" "}
            <Rating
              style={{ width: 150 }}
              value={review.academics}
              onChange={handleRatingChange("academics")}
            />
          </div>
          <div className="text-sm text-slate-400">
            Facilities:{" "}
            <Rating
              style={{ width: 150 }}
              value={review.facilities}
              onChange={handleRatingChange("facilities")}
            />
          </div>
          <div className="text-sm text-slate-400">
            Sports:{" "}
            <Rating
              style={{ width: 150 }}
              value={review.sports}
              onChange={handleRatingChange("sports")}
            />
          </div>
          <div className="text-sm text-slate-400">
            Faculty:{" "}
            <Rating
              style={{ width: 150 }}
              value={review.faculty}
              onChange={handleRatingChange("faculty")}
            />
          </div>
          <div className="text-sm text-slate-400">
            Safety:{" "}
            <Rating
              style={{ width: 150 }}
              value={review.safety}
              onChange={handleRatingChange("safety")}
            />
          </div>
          <div className="flex flex-col ">
            <label className="text-sm text-slate-400" htmlFor="content">
              Write something about the school
            </label>
            <Input textArea id="content" onChange={handleContentChange} />
          </div>
          <Button
            disabled={review.content.length < 1}
            className={`${
              review.content.length < 1 ? "bg-slate-400" : "bg-blue-500"
            }`}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </>
  );
};

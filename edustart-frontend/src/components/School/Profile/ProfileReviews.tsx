import Button from "@/components/common/Button";
import Chip from "@/components/common/Chip";
import { ChartSquareBarIcon, ChatIcon, UserIcon } from "@heroicons/react/solid";
import { Rating } from "@smastrom/react-rating";
import React, { useMemo } from "react";

const ProfileReviews = ({ reviews }) => {
  const avgReviews = useMemo(() => {
    const averageReview = reviews
      .map(({ academics, infrastructure, facilities, safety, sports }) => ({
        academics,
        infrastructure,
        facilities,
        safety,
        sports,
      }))
      .reduce((acc, value) => {
        for (const key in value) {
          if (acc[key] === undefined) {
            acc[key] = 0;
          }
          acc[key] += value[key];
        }
        return acc;
      }, {});
    const totalReviews = reviews.length;

    for (const key in averageReview) {
      averageReview[key] /= totalReviews;
    }
    return averageReview;
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
              {key}: {reviews.length}
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
      <Button className="bg-sky-600">Write a review</Button>
    </div>
  );
};

export default ProfileReviews;

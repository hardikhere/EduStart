import React from "react";
import { Rating } from "@smastrom/react-rating";
import Chip from "@/components/common/Chip";
import { getSchoolTypeString } from "@/utils/common";
import { MapIcon } from "@heroicons/react/solid";
import Image from "next/image";

const ProfileMainDetails = ({
  schoolName,
  address,
  board,
  parentRating,
  schoolType,
  logoUrl,
}) => {
  return (
    <div className="flex flex-col items-center relative">
      {logoUrl && (
        <div
          className="mt-2 absolute -top-16 rounded-full h-24 w-24
                  bg-white shadow-md flex justify-center items-center
                  overflow-hidden"
        >
          <Image
            src={logoUrl}
            style={{ objectFit: "cover" }}
            alt="school Image"
            draggable={false}
            width={60}
            height={60}
          />
        </div>
      )}

      <div
        className="flex justify-center flex-col items-center rounded-lg 
      bg-white p-2 shadow"
      >
        <h1 className="text-3xl mt-10 text-center">{schoolName}</h1>
        {address && (
          <div className="max-h-8 overflow-hidden gap-2 text-sm mt-0 text-slate-500 font-light flex">
            <MapIcon className="h-4 text-slate-500" />
            {address}
          </div>
        )}
        <div className="flex mt-4 rounded-lg bg-zinc-50 p-1 flex justify-center">
          <div
            className="pr-2 border border-l-0 border-t-0 border-b-0
        border-r-1 border-dashed border-slate-300 flex flex-col items-center"
          >
            <span className="text-sm text-slate-400">Board:</span>
            <div className="pl-2 text-md pr-2 bg-sky-100 text-sky-600  rounded-full">
              {board}
            </div>
          </div>
          <div
            className="pl-2 pr-2 border border-l-0 border-t-0 border-b-0
        border-r-1 border-dashed border-slate-300 flex flex-col items-center"
          >
            <span className="flex items-center text-sm text-slate-400">
              Parents Rating:
              <span className="pl-1 text-sm  text-yellow-500">
                {parentRating}
              </span>
            </span>

            <Rating
              style={{ maxWidth: 120, maxHeight: 30 }}
              value={parentRating}
              readOnly
              onChange={() => {}}
            />
          </div>

          <div
            className="pl-2 pr-2 border border-l-0 border-t-0 border-b-0
        border-r-0 border-dashed border-slate-300 flex flex-col items-center"
          >
            <span className="text-sm text-slate-400">School Type:</span>
            <Chip className="bg-pink-100 text-red-500 ">
              {getSchoolTypeString(schoolType as any)}
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainDetails;

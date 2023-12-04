import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckIcon, MapIcon } from "@heroicons/react/solid";
import { Rating } from "@smastrom/react-rating";
import { getSchoolTypeString } from "@/utils/common";
import Button from "@/components/common/Button";
import Chip from "@/components/common/Chip";
import RequestCallbackModal from "@/components/School/RequestCallbackModal";
import { isSchoolSaved, saveSavedSchoolsInLS } from "@/components/School/utils";

const SchoolMiniCard = ({
  schoolName,
  imageUrls = [],
  logoUrl = null,
  board = "CBSE",
  address,
  parentRating,
  schoolType = "DAY",
  about = "",
  isAdmissionOpen = false,
  schoolId,
}) => {
  const image = imageUrls[0];
  const [saved, setIsSaved] = useState(() => {
    return isSchoolSaved(schoolId);
  });

  useEffect(() => {
    setIsSaved(isSchoolSaved(schoolId));
  }, [schoolId]);

  return (
    <div
      key={schoolName}
      className="p-2 border border-1 bg-white overflow-hidden
             h-96 w-72 rounded-md hover:border-slate-300 hover:shadow"
    >
      <div className=" relative">
        {image && (
          <Image
            className="h-28  w-100 rounded-md"
            src={image}
            draggable={false}
            style={{ objectFit: "cover" }}
            alt="school Image"
            width={300}
            height={100}
          />
        )}
        {isAdmissionOpen && (
          <Chip
            className="flex justify-center items-center gap-2 bg-green-100 
        text-green-500 absolute -top-2 -left-2 rounded-none rounded-br z-2 text-xs border-1 shadow p-1"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Admissions Open
          </Chip>
        )}

        {logoUrl && (
          <div
            className="absolute -bottom-8 left-2 rounded-full h-12 w-12
                  bg-white shadow-md
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
      </div>
      <div className="ml-16 mt-2 ">
        <h2 className="text-md hover:underline cursor-pointer mb-0 pb-0">
          {schoolName}
        </h2>
        {address && (
          <div className="max-h-8 overflow-hidden gap-2 text-xs mt-0 text-slate-500 font-light flex">
            <MapIcon className="h-4 text-slate-500" />
            {address}
          </div>
        )}
      </div>
      <div className="flex mt-2 rounded-lg bg-zinc-50 p-1 flex justify-center">
        <div
          className="pr-2 border border-l-0 border-t-0 border-b-0
        border-r-1 border-dashed border-slate-300 flex flex-col items-center"
        >
          <span className="text-xs text-slate-400">Board:</span>
          <div className="pl-2 text-sm pr-2 bg-sky-100 text-sky-600  rounded-full">
            {board}
          </div>
        </div>
        <div
          className="pl-2 pr-2 border border-l-0 border-t-0 border-b-0
        border-r-1 border-dashed border-slate-300 flex flex-col items-center"
        >
          <span className="flex items-center text-xs text-slate-400">
            Parents Rating:
            <span className="pl-1 text-xs  text-yellow-500">
              {parentRating}
            </span>
          </span>

          <Rating
            style={{ maxWidth: 80, maxHeight: 30 }}
            value={parentRating}
            readOnly
            onChange={() => {}}
          />
        </div>

        <div
          className="pl-2 pr-2 border border-l-0 border-t-0 border-b-0
        border-r-0 border-dashed border-slate-300 flex flex-col items-center"
        >
          <span className="text-xs text-slate-400">School Type:</span>
          <Chip className="bg-pink-100 text-red-500 ">
            {getSchoolTypeString(schoolType as any)}
          </Chip>
        </div>
      </div>
      <div
        className="mt-2 text-xs text-slate-400 
          font-light leading-0 flex h-20"
      >
        <span>
          {about.substring(0, 230).concat(" ")}
          {about.length > 230 && (
            <a
              href="javascript:void(0)"
              className="hover:underline text-sky-400
          "
            >
              Read more...
            </a>
          )}
        </span>
      </div>

      <div className="flex gap-1 mt-2 items-center">
        <RequestCallbackModal id={schoolId} />
        <Button
          onClick={
            saved
              ? () => {}
              : () => {
                  saveSavedSchoolsInLS(schoolId);
                  setIsSaved(true);
                }
          }
          className="h-6 pt-4 pb-4 bg-slate-100
        text-slate-500"
        >
          <>
            {saved && <CheckIcon className="h-4" />}
            {saved ? "Saved" : "Save"}
          </>
        </Button>
      </div>
    </div>
  );
};

export default SchoolMiniCard;

export const SchoolMiniCardSkeleton = () => {
  return (
    <div
      className=" animate-pulse  p-2 border border-1 bg-white overflow-hidden
             h-96 w-72 rounded-md "
    >
      <div className=" relative">
        <div
          className="h-28  w-100 rounded-md bg-slate-200"
          draggable={false}
          style={{ objectFit: "cover" }}
        ></div>

        <div
          className="absolute -bottom-8 left-2 rounded-full h-12 w-12
                  bg-white shadow-md
                  overflow-hidden bg-slate-100"
        ></div>
      </div>
      <div className="ml-16 mt-2 ">
        <div className="text-md h-2 w-40 rounded-full bg-slate-300  cursor-pointer mb-0 pb-0"></div>
        <div className="max-h-8 overflow-hidden gap-2 text-xs mt-0 text-slate-500 font-light flex">
          <div className="text-md h-1 w-20 mt-3 rounded-full bg-slate-300  cursor-pointer mb-0 pb-0"></div>
          <div className="text-md h-1 w-28 mt-3 rounded-full bg-slate-300  cursor-pointer mb-0 pb-0"></div>
        </div>
      </div>
      <div className="flex mt-2 rounded-lg bg-zinc-50 p-1 flex justify-center">
        <div
          className="pr-2 border border-l-0 border-t-0 border-b-0
        border-r-1 border-dashed border-slate-300 flex flex-col items-center"
        >
          <span className="text-xs text-slate-400">Board:</span>
          <div className="pl-2 text-sm pr-2 bg-sky-100 text-sky-600  rounded-full">
            {/* {board} */}
          </div>
        </div>
        <div
          className="pl-2 pr-2 border border-l-0 border-t-0 border-b-0
        border-r-1 border-dashed border-slate-300 flex flex-col items-center"
        >
          <span className="flex items-center text-xs text-slate-400">
            Parents Rating:
            <span className="pl-1 text-xs  text-yellow-500">
              {/* {parentRating} */}
            </span>
          </span>
        </div>

        <div
          className="pl-2 pr-2 border border-l-0 border-t-0 border-b-0
        border-r-0 border-dashed border-slate-300 flex flex-col items-center"
        >
          <span className="text-xs text-slate-400">School Type:</span>
          <Chip className="bg-pink-100 text-red-500 ">
            {/* {getSchoolTypeString(schoolType as any)} */}
          </Chip>
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-1">
        <div className="text-md h-1 w-full mt-3 rounded-full bg-slate-200  cursor-pointer mb-0 pb-0"></div>
        <div className="text-md h-1 w-full mt-3 rounded-full bg-slate-200  cursor-pointer mb-0 pb-0"></div>
        <div className="text-md h-1 w-full mt-3 rounded-full bg-slate-200  cursor-pointer mb-0 pb-0"></div>
        <div className="text-md h-1 w-full mt-3 rounded-full bg-slate-200  cursor-pointer mb-0 pb-0"></div>
        <div className="text-md h-1 w-full mt-3 rounded-full bg-slate-200  cursor-pointer mb-0 pb-0"></div>
        <div className="text-md h-1 w-20 mt-3 rounded-full bg-slate-200  cursor-pointer mb-0 pb-0"></div>
      </div>

      <Button
        disabled
        className="bg-slate-100 h-6 w-40 pt-4 pb-4 mt-2"
      ></Button>
    </div>
  );
};

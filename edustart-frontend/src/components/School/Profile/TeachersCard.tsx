import React from "react";
import Image from "next/image";
import Chip from "@/components/common/Chip";

const TeachersCard = ({
  name,
  subjects,
  highestQualification,
  image,
  about,
}) => {
  return (
    <div
      className="rounded-lg bg-white border border-slate-100 p-2
    w-40 flex flex-col items-center"
    >
      {image && (
        <Image
          src={image}
          height={80}
          width={80}
          style={{ objectFit: "cover" }}
          className="rounded-full h-12 w-12 shadow"
          alt="teacher"
        />
      )}
      <div className="flex flex-col gap-1">
        <div className="h-6 overflow-hidden">
          <p className="text-sm text-slate-400 text-center p-1">{name}</p>
        </div>
        <div
          style={{ fontSize: 10 }}
          className="bg-sky-400 rounded-full text-center text-xs text-white"
        >
          {highestQualification}
        </div>
        <p className="text-xs text-slate-400 font-light">Subject: {subjects}</p>
        <p className="text-xs text-slate-400 font-light"> {about}</p>
      </div>
    </div>
  );
};

export default TeachersCard;

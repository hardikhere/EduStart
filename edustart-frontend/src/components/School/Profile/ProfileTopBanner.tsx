import React from "react";
import Image from "next/image";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

const ProfileTopBanner = ({ imageUrls }) => {
  const router = useRouter();

  const handleBack = () => router.back();
  return (
    <div className="relative">
      <Image
        src={imageUrls[0]}
        draggable={false}
        alt="image"
        height={100}
        style={{ objectFit: "cover" }}
        className="w-full h-60 blur-xs brightness-75"
        width={800}
      />
      <div
        onClick={handleBack}
        className="top-2 left-4 shadow absolute bg-slate-100 h-8 w-8 rounded-full
        flex justify-center items-center cursor-pointer"
      >
        <ArrowLeftIcon className="h-4" />
      </div>
    </div>
  );
};

export default ProfileTopBanner;

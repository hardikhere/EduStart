import React from "react";
import Image from "next/image";

const ProfileImageGallery = ({ imageUrls = [] }) => {
  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-col gap-2 max-h-96 w-96">
      <div
        className="bg-white rounded-lg p-4 flex flex-col gap-1 flex-wrap 
       mr-2 shadow"
      >
        <h1 className="text-sky-800 text-xl font-light">School Images</h1>

        <div className="flex gap-1 flex-wrap">
          {imageUrls.map((img) => {
            return (
              <Image
                alt="school image"
                key={img}
                src={img}
                width={120}
                height={80}
                style={{ objectFit: "cover" }}
                className="rounded-lg h-28 w-28 border 
                cursor-pointer border-slate-200"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProfileImageGallery;

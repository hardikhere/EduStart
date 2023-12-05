import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/components/common";
import SimpleImageSlider from "react-simple-image-slider";

const ProfileImageGallery = ({ imageUrls = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOnImageClick = (index: number) => {
    setCurrentImage(index);
    setModalOpen(true);
  };
  if (imageUrls.length === 0) {
    return null;
  }

  return (
    <>
      <div className="flex flex-col gap-2 max-h-96 w-96">
        <div
          className="bg-white rounded-lg p-4 flex flex-col gap-1 flex-wrap 
       mr-2 shadow"
        >
          <h1 className="text-sky-800 text-xl font-light">School Images</h1>

          <div className="flex gap-1 flex-wrap">
            {imageUrls.map((img, index) => {
              return (
                <Image
                  alt="school image"
                  onClick={() => handleOnImageClick(index)}
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

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <SimpleImageSlider
          width={400}
          height={204}
          startIndex={currentImage}
          images={imageUrls.map((url) => ({ url }))}
          showBullets={false}
          showNavs={imageUrls.length > 1 ? true : false}
        />
      </Modal>
    </>
  );
};

export default ProfileImageGallery;

import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/app/components/common";
import SimpleImageSlider from "react-simple-image-slider";

const FeedsCard: React.FC<IFeed> = ({
  title,
  imageUrls = [
    "https://static.toiimg.com/thumb/msid-95263609,width-1280,height-720,resizemode-4/95263609.jpg",
  ],
}) => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const openModal = () => setShouldShowModal(true);
  const closeModal = () => setShouldShowModal(false);
  return (
    <>
      <div
        onClick={openModal}
        className="p-2 w-72 h-80 bg-white 
        rounded-lg shadow  flex justify-center items-center"
      >
        <div
          className="w-64 overflow-hidden rounded-lg h-72 border-2 
          border-dashed flex flex-col items-center p-4"
        >
          <Image
            src={
              "https://static.toiimg.com/thumb/msid-95263609,width-1280,height-720,resizemode-4/95263609.jpg"
            }
            alt="School image"
            width={"200"}
            height={"200"}
            className="h-36 w-80 rounded-xl"
          />
          <div
            className="mt-2 font-semibold hover:underline 
          leading-none mb-2
          cursor-pointer"
          >
            7 of 10 new schools in India private, says Unesco report
          </div>
          <p className="text-slate-500 text-xs font-light">
            NEW DELHI: In the past 30 years South Asia has experienced rapid
            education expansion, outpacing the rest of the world. While it is
            India which is driving these regional averages, of every 10 new
            schools established here in the past ...
          </p>
        </div>
      </div>

      <Modal
        containerClassName="w-3/4 h-3/4 overflow-auto"
        isOpen={shouldShowModal}
        onClose={closeModal}
      >
        <p className="p-0 text-sky-700 hover:underline cursor-pointer">
          Tagore Public School
        </p>
        <h1 className="pt-2 pb-2 font-semibold text-xl pt-4 pb-4">
          Conducted fist offline test after covid
        </h1>
        <p className="text-slate-500">Saturday, 7th Dec 2023</p>
        <div className="w-100 flex flex-col justify-center items-center">
          <div className="pb-4">
            <SimpleImageSlider
              width={400}
              height={204}
              images={imageUrls.map((url) => ({ url }))}
              showBullets={false}
              showNavs={imageUrls.length > 1 ? true : false}
            />
          </div>
          <p className="text-slate-500 text-lg font-light">
            NEW DELHI: In the past 30 years South Asia has experienced rapid
            education expansion, outpacing the rest of the world. While it is
            India which is driving these regional averages, of every 10 new
            schools established here in the past ... NEW DELHI: In the past 30
            years South Asia has experienced rapid education expansion,
            outpacing the rest of the world. While it is India which is driving
            these regional averages, of every 10 new schools established here in
            the past ... NEW DELHI: In the past 30 years South Asia has
            experienced rapid education expansion, outpacing the rest of the
            world. While it is India which is driving these regional averages,
            of every 10 new schools established here in the past ... NEW DELHI:
            In the past 30 years South Asia has experienced rapid education
            expansion, outpacing the rest of the world. While it is India which
            is driving these regional averages, of every 10 new schools
            established here in the past ... NEW DELHI: In the past 30 years
            South Asia has experienced rapid education expansion, outpacing the
            rest of the world. While it is India which is driving these regional
            averages, of every 10 new schools established here in the past ...
            NEW DELHI: In the past 30 years South Asia has experienced rapid
            education expansion, outpacing the rest of the world. While it is
            India which is driving these regional averages, of every 10 new
            schools established here in the past ... NEW DELHI: In the past 30
            years South Asia has experienced rapid education expansion,
            outpacing the rest of the world. While it is India which is driving
            these regional averages, of every 10 new schools established here in
            the past ... NEW DELHI: In the past 30 years South Asia has
            experienced rapid education expansion, outpacing the rest of the
            world. While it is India which is driving these regional averages,
            of every 10 new schools established here in the past ...
          </p>
        </div>
      </Modal>
    </>
  );
};

export default FeedsCard;

import Button from "@/app/components/common/Button";
import React, { useState } from "react";
import locationIcon from "@/app/assets/location.svg";
import { Modal } from "@/app/components/common";
import Image from "next/image";

const SelectCity: React.FC<{
  onSelect: (city: string) => void;
  city: string;
}> = ({ onSelect, city = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
        className="bg-slate-200 relative  pl-6 pr-6 rounded-none
        text-slate-600 border rounded-bl-md rounded-tl-md "
      >
        <Image src={locationIcon} alt="Location icon" />
        <div>{city.length === 0 ? "Location" : city}</div>
      </Button>
      {isOpen && (
        <Modal
          containerClassName="p-6"
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <h2 className="mb-4">Select City</h2>
          <div className="flex gap-4 flex-wrap">
            {allCities.map(({ name, image }) => {
              return (
                <div
                  key={name}
                  className="overflow-hidden relative cursor-pointer
                    h-20 w-40 rounded-md p-4 bg-slate-300
                    transition-all duration-300 hover:pt-8"
                  onClick={() => {
                    onSelect(name);
                    setIsOpen(false);
                  }}
                >
                  <Image
                    src={image}
                    alt={name}
                    objectFit="cover"
                    className="absolute inset-0 z-1"
                    width={200}
                    height={100}
                  />
                  <div className="absolute bg-black opacity-40 inset-0 z-1"></div>
                  <div className="text-slate-100 absolute city-name z-2">
                    {name}
                  </div>
                </div>
              );
            })}
          </div>
        </Modal>
      )}
    </>
  );
};

export default SelectCity;

const allCities = [
  {
    name: "Jaipur",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg/536px-East_facade_Hawa_Mahal_Jaipur_from_ground_level_%28July_2022%29_-_img_01.jpg",
  },
  {
    name: "Gurgoan",
    image:
      "https://www.hindustantimes.com/ht-img/img/2023/06/28/550x309/The-plan-for-Girigram-Global-City-Project--a-mixed_1687971078310.jpg",
  },
  {
    name: "Bangalore",
    image:
      "https://thumbs.dreamstime.com/b/evening-view-urban-landscape-bangalore-city-india-evening-view-urban-landscape-bangalore-city-223153046.jpg",
  },
  {
    name: "Mumbai",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2pYO5TdV8zh72GDQ1osJ3C6XWeDYaJrpRTA&usqp=CAU",
  },
];

import SearchIcon from "@/app/components/Icons/SearchIcon";
import { useState } from "react";
import bookIcon from "@/app/assets/bookIcon.svg";
import Image from "next/image";
import Button from "@/app/components/common/Button";
import SelectCity from "@/app/components/Home/SearchFormHome/SelectCity";

function SearchFormHome() {
  const [cardDetails, setcardDetails] = useState({
    board: "CBSE",
  });

  return (
    <div className=" relative transition-all duration-300 animate-skewup p-6 w-full bg-white shadow-2xl rounded-2xl flex wrap flex-col w-80">
      <h1 className="mt-0 mb-4 text-xl text-sky-800">
        Find best schools in your city
      </h1>
      <div className="flex overflow-hidden h-10 w-full border border-slate-200 rounded-lg">
        <SelectCity onCitySelect={() => {}} />
        <Button
          className="bg-slate-200 text-slate-600  border-radius rounded-none
                pl-6 pr-6
                border border-r-0 border-l-1 border-t-0 border-b-0 border-slate-500 "
        >
          <Image src={bookIcon} alt="Location icon" />
          <div> Board</div>
        </Button>
        <Button
          className="bg-slate-200 text-slate-600  border-radius rounded-none
                pl-6 pr-6
                border border-r-0 border-l-1 border-t-0 border-b-0 border-slate-500 "
        >
          <Image src={bookIcon} alt="Location icon" />
          <div>Type</div>
        </Button>
        <Button className="   pl-6 pr-6 bg-black rounded-none">
          <div>Search</div>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default SearchFormHome;

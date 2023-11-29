import SearchIcon from "@/app/components/Icons/SearchIcon";
import { useState } from "react";
import locationIcon from "@/app/assets/location.svg";
import bookIcon from "@/app/assets/bookIcon.svg";
import Image from "next/image";
import Button from "@/app/components/common/Button";

function SearchFormHome() {
  const [cardDetails, setcardDetails] = useState({
    board: "CBSE",
  });

  return (
    <div className="p-6 w-full bg-white shadow-2xl rounded-2xl">
      <h1 className="mt-4 mb-4">Find best school for your child</h1>
      <div className="flex overflow-hidden h-10 w-full border border-slate-200 rounded-lg">
        <Button className="bg-slate-200 rounded-none text-slate-600 border">
          <Image src={locationIcon} alt="Location icon" />
          <div> Select location</div>
        </Button>
        <Button
          className="bg-slate-200 text-slate-600  border-radius rounded-none
                border border-r-0 border-l-1 border-t-0 border-b-0 border-slate-500 "
        >
          <Image src={bookIcon} alt="Location icon" />
          <div> Board</div>
        </Button>
        <Button className="bg-black rounded-none">
          <div>Search</div>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default SearchFormHome;

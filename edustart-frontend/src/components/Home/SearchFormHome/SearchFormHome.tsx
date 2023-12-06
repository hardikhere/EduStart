import SearchIcon from "@/components/Icons/SearchIcon";
import { useState } from "react";
import bookIcon from "@/assets/bookIcon.svg";
import schoolIcon from "@/assets/school.svg";

import Image from "next/image";
import Button from "@/components/common/Button";
import SelectCity from "@/components/Home/SearchFormHome/SelectCity";
import Select from "@/components/common/Select";
import { useRouter } from "next/router";
import { removeEmptyValues } from "@/utils/common";
import Spinner from "@/components/common/Spinner";

function SearchFormHome() {
  const router = useRouter();
  const [cardDetails, setCardDetails] = useState({
    board: "CBSE",
    query: "",
    schoolType: "",
  });

  const handleSearchClick = () => {
    const urlsp = new URLSearchParams(cardDetails);
    removeEmptyValues(urlsp);
    router.push(`/search?${urlsp.toString()}`);
  };

  return (
    <div className=" relative transition-all duration-300 animate-skewup p-6 w-full bg-white shadow-2xl rounded-2xl flex wrap flex-col w-80">
      <h1 className="mt-0 mb-4 text-xl text-sky-800">
        Find best schools in your city
      </h1>
      <div className="flex  h-10 w-full border border-slate-200 rounded-lg">
        <SelectCity
          city={cardDetails.query}
          onSelect={(address) => {
            setCardDetails({ ...cardDetails, query: address.toLowerCase() });
          }}
        />

        <Select
          onSelect={(option) =>
            setCardDetails({ ...cardDetails, board: option })
          }
          options={[
            { label: "CBSE", value: "CBSE" },
            { label: "RBSE", value: "RBSE" },
            { label: "ICSE", value: "ICSE" },
          ]}
          customButton={
            <Button
              className="bg-slate-200 text-slate-600  border-radius rounded-none
                pl-6 pr-6 h-full
                border border-r-0 border-l-1 border-t-0 border-b-0 border-slate-500 "
            >
              <Image src={bookIcon} alt="Location icon" />
              <div> Board {cardDetails.board}</div>
            </Button>
          }
        />

        <Select
          onSelect={(option) =>
            setCardDetails({ ...cardDetails, schoolType: option })
          }
          options={[
            { label: "Day", value: "DAY" },
            { label: "Pre", value: "PRE_SCHOOL" },
            { label: "Boarding", value: "BOARDING" },
          ]}
          customButton={
            <Button
              className="bg-slate-200 w-32 text-slate-600  border-radius rounded-none
                pl-6 pr-6 h-full
                border border-r-0 border-l-1 border-t-0 border-b-0 border-slate-500 "
            >
              <Image src={schoolIcon} alt="Location icon" />
              <div>
                {cardDetails.schoolType.length
                  ? cardDetails.schoolType
                  : "Type"}
              </div>
            </Button>
          }
        />

        <Button
          onClick={handleSearchClick}
          className=" pl-6 pr-6 bg-black rounded-none rounded-br-md rounded-tr-md"
        >
          <div>Search</div>
          <SearchIcon />
        </Button>
      </div>
    </div>
  );
}

export default SearchFormHome;

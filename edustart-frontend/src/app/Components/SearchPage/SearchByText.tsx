import SearchIcon from "@/app/components/Icons/SearchIcon";
import React, { useState } from "react";

const SearchByText = () => {
  const [Query, setQuery] = useState("");
  const performSearch = () => {
    if (Query.length === 0) return;
    setQuery("");
    // history.push(`/search?query=${Query}`);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      performSearch();
    }
  };
  return (
    <div className="relative text-gray-600">
      <input
        type="search"
        name="search"
        placeholder="Search..."
        className="bg-white border border-stone-300 
        focus:border-2 focus:border-sky-600
         h-10 px-5 pr-10 rounded-full text-lg focus:outline-none"
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchByText;

import SearchIcon from "@/app/components/Icons/SearchIcon";
import React, { ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

const SearchByText = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const performSearch = () => {
    if (query.length === 0) return;
    setQuery("");
    router.push(`/search?query=${query}`);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event?.target.value);
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
        value={query}
        onChange={handleChange}
        onKeyDown={handleKeyPress}
      />
      <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <SearchIcon />
      </button>
    </div>
  );
};

export default SearchByText;

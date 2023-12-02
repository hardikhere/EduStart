import {
  availableFilters,
  initialFilterState,
} from "@/app/components/SearchPage/utils";
import useFilters from "@/hooks/useFilters";
import { useRouter } from "next/router";
import React, { useState } from "react";
import queryString from "querystring";
import { parseUrl } from "next/dist/shared/lib/router/utils/parse-url";

const filtersArray = Object.entries(availableFilters);

const SearchFilter = () => {
  const { applyFilter } = useFilters(availableFilters);
  const router = useRouter();
  console.log(
    "🚀 ~ file: SearchFilter.tsx:14 ~ SearchFilter ~ router:",
    router.asPath
  );
  const [searchFilterState, setSearchFilterState] =
    useState(initialFilterState);

  return (
    <div
      className="bg-white rounded-xl border border-slate-200
      p-4 w-60"
    >
      <h5 className="text-slate-400">Customize Search:</h5>
      {filtersArray.map(([key, value], index) => {
        return (
          <div
            className={`mt-2 mb-2 pb-4
            ${
              index + 1 < filtersArray.length &&
              "border-dashed border-b-2 border-slate-100 border border-t-0 border-r-0 border-l-0 "
            }
          `}
            key={key}
          >
            <h6>{value.label}</h6>
            <div className="flex flex-wrap gap-2">
              {value.options.map(({ label, value, urlValue = null }) => {
                const { search: urlString } = parseUrl(router.asPath) ?? "";
                console.log(
                  "🚀 ~ file: SearchFilter.tsx:44 ~ {value.options.map ~ urlString:",
                  urlString
                );
                return (
                  <div
                    key={label}
                    className={`
                    flex items-center  justify-center
                    transition-all duration-300 
                    pl-4 pr-4 pt-2 pb-2 bg-sky-100 text-xs text-slate-500 
                    rounded-full w-auto cursor-pointer
                  ${
                    urlString?.includes(encodeURIComponent(urlValue ?? value))
                      ? "bg-sky-800 text-white"
                      : ""
                  }
                  `}
                    onClick={() => {
                      applyFilter(key, urlValue ?? value);
                    }}
                  >
                    {label}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchFilter;

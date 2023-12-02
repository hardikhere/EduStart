import { SearchFilter } from "@/app/components/SearchPage";
import useFilters from "@/hooks/useFilters";
import useSchoolsListing from "@/hooks/useSchoolsListing";
import React from "react";

const SearchListing = ({ query }) => {
  const { applyFilter, appliedFilters } = useFilters(query);
  const { data } = useSchoolsListing(appliedFilters);
  console.log("🚀 ~ file: SearchListing.tsx:9 ~ SearchListing ~ data:", data);

  return (
    <div className="p-4">
      <SearchFilter query={query} applyFilter={applyFilter} />
    </div>
  );
};

export default SearchListing;

export async function getServerSideProps(context: any) {
  const { query } = context;
  return {
    props: {
      query,
    },
  };
}

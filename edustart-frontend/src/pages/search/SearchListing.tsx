import { SearchFilter } from "@/components/SearchPage";
import useFilters from "@/hooks/useFilters";
import useSchoolsListing from "@/hooks/useSchoolsListing";
import React from "react";
import Image from "next/image";
import SchoolMiniCard from "@/components/School/SchoolMiniCard";

const SearchListing = ({ query }) => {
  const { applyFilter, appliedFilters } = useFilters(query);
  const { data, isLoading, isFetching } = useSchoolsListing(appliedFilters);
  const shouldShowLoading = isLoading || isFetching;
  const {
    data: { data: schools = [] },
  } = data ?? { data: { data: {} } };
  console.log(
    "🚀 ~ file: SearchListing.tsx:11 ~ SearchListing ~ schools:",
    schools
  );
  return (
    <div className="p-4 flex flex-wrap gap-10">
      <SearchFilter query={query} applyFilter={applyFilter} />
      {shouldShowLoading && <div>Loading..</div>}
      {!shouldShowLoading &&
        data &&
        schools?.map((props: any) => {
          return <SchoolMiniCard key={props.schoolName} {...props} />;
        })}
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

import { SearchFilter } from "@/components/SearchPage";
import useFilters from "@/hooks/useFilters";
import useSchoolsListing from "@/hooks/useSchoolsListing";
import React from "react";
import Image from "next/image";
import SchoolMiniCard, {
  SchoolMiniCardSkeleton,
} from "@/components/School/SchoolMiniCard";

const SearchListing = ({ query }) => {
  const { applyFilter, appliedFilters } = useFilters(query);
  const { data, isLoading, isFetching } = useSchoolsListing(appliedFilters);
  const shouldShowLoading = isLoading || isFetching;
  const {
    data: { data: schools = [] },
  } = data ?? { data: { data: {} } };

  return (
    <div className="relative p-4 flex flex-wrap gap-10">
      <div className="fixed top-24 z-20">
        <SearchFilter query={query} applyFilter={applyFilter} />
      </div>
      <div className="flex flex-wrap  gap-3 ml-64 w-full">
        {shouldShowLoading && (
          <>
            <SchoolMiniCardSkeleton />
            <SchoolMiniCardSkeleton /> <SchoolMiniCardSkeleton />
          </>
        )}
        {!shouldShowLoading &&
          data &&
          schools?.map((props: any) => {
            return <SchoolMiniCard key={props.schoolName} {...props} />;
          })}
      </div>
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

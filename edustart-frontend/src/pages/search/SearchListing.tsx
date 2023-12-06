import { SearchFilter } from "@/components/SearchPage";
import useFilters from "@/hooks/useFilters";
import useSchoolsListing from "@/hooks/useSchoolsListing";
import React from "react";
import SchoolMiniCard, {
  SchoolMiniCardSkeleton,
} from "@/components/School/SchoolMiniCard";
import Image from "next/image";
import noResults from "@/assets/noresults.svg";

const SearchListing = () => {
  const { applyFilter, appliedFilters } = useFilters();
  const { data, isLoading, isFetching } = useSchoolsListing();
  const shouldShowLoading = isLoading || isFetching;
  const {
    data: { data: schools = [] },
  } = data ?? { data: { data: {} } };

  return (
    <div className="relative p-4 flex flex-wrap gap-10">
      <div className="fixed top-24 z-20">
        <SearchFilter applyFilter={applyFilter} />
      </div>

      <div>
        {!isLoading && appliedFilters.query && (
          <h2 className="font-light ml-64">
            Search Results for:
            <span className="text-sky-700">
              &quot;{appliedFilters.query}&quot;
            </span>
          </h2>
        )}

        {!isLoading && schools.length === 0 && (
          <div className=" ml-64 h-72  flex-col flex w-full items-center justify-center">
            <Image src={noResults} alt="noresults" className="h-40" />
            <h3>No Results Found </h3>
            <h4 className="font-light text-slate-600">
              Try changing filters or search query
            </h4>
          </div>
        )}

        <div className="flex  flex-wrap w-10/12 gap-3 ml-64 w-full">
          {shouldShowLoading && (
            <>
              <SchoolMiniCardSkeleton />
              <SchoolMiniCardSkeleton />
              <SchoolMiniCardSkeleton />
            </>
          )}

          {!shouldShowLoading &&
            data &&
            schools?.map((props: any) => {
              return <SchoolMiniCard key={props.schoolName} {...props} />;
            })}
        </div>
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

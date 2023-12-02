import { useRouter } from "next/router";
import querystring from "querystring";
import { useEffect, useState } from "react";

const useFilters = (initialValues: Record<string, string>) => {
  const router = useRouter();
  const [appliedFilters, setAppliedFilters] = useState({ ...initialValues });

  const appendObjectToURL = (object: Record<string, string>) => {
    const currentPath = router.asPath.split("?")[0]; // Get the current path without query params
    const updatedQueryParams = { ...object }; // Merge with new object
    const updatedQueryString = querystring.stringify(updatedQueryParams);
    const newURL = `${currentPath}?${updatedQueryString}`;
    // Navigate to the updated URL
    router.push(newURL);
  };

  const applyFilter = ({ filterName, urlValue, filterValue }: any) => {
    const currentQueryParams = router.query;
    // filter already there
    if (currentQueryParams[filterName]) {
      // check if already in value
      if (currentQueryParams[filterName]?.includes(urlValue)) {
        // remove the filter
        const existingValues = currentQueryParams[filterName]?.split(",") ?? [];
        const filtered = existingValues.filter(
          (filterName: string) => filterName !== urlValue
        );
        const newFilterString = filtered.join(",");
        const newFilters = { ...appliedFilters, [filterName]: newFilterString };
        if (newFilterString.length === 0) {
          delete newFilters[filterName];
        }
        setAppliedFilters(newFilters);
      } else {
        // append the filter in or condition
        setAppliedFilters({
          ...appliedFilters,
          [filterName]: appliedFilters[filterName].concat(`,${urlValue}`),
        });
      }
    } else {
      // new Filter to be applied
      setAppliedFilters({ ...appliedFilters, [filterName]: urlValue });
    }
  };

  useEffect(() => {
    if (Object.values(appliedFilters).length > 0)
      appendObjectToURL(appliedFilters);
  }, [appliedFilters]);

  return { applyFilter, appliedFilters };
};

export default useFilters;

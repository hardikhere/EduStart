import { useRouter } from "next/router";
import querystring from "querystring";
import { useEffect, useState } from "react";

const useFilters = (filters) => {
  const router = useRouter();
  const [appliedFilters, setAppliedFilters] = useState({});

  const appendObjectToURL = (object: Record<string, string>) => {
    const currentPath = router.asPath.split("?")[0]; // Get the current path without query params
    const currentQueryParams = router.query; // Get current query params
    const updatedQueryParams = { ...currentQueryParams, ...object }; // Merge with new object

    const updatedQueryString = querystring.stringify(updatedQueryParams);
    const newURL = `${currentPath}?${updatedQueryString}`;

    // Navigate to the updated URL
    router.push(newURL);
  };

  const applyFilter = (keyName: string, value: string) => {
    const currentQueryParams = router.query;
    // filter already there
    if (currentQueryParams[keyName]) {
      // check if already in value
      if (currentQueryParams[keyName]?.includes(value)) {
        // remove the filter
      } else {
        // append the filter in or condition
        setAppliedFilters({
          ...appliedFilters,
          [keyName]: appliedFilters[keyName].concat(`,${value}`),
        });
      }
    } else {
      // new Filter to be applied
      setAppliedFilters({ ...appliedFilters, [keyName]: value });
    }
  };

  useEffect(() => {
    appendObjectToURL(appliedFilters);
  }, [appliedFilters]);

  return { applyFilter };
};

export default useFilters;

import axiosInstance from "@/utils/axiosInstance";
import { APIS } from "@/utils/endpoints";
import { useMemo } from "react";
import { useQuery } from "react-query";

const useSchoolsListing = (filters = {}) => {
  const searchString = useMemo(() => {
    const urlsp = new URLSearchParams(filters);
    return urlsp.toString();
  }, [filters]);

  const resp = useQuery(
    ["listing", searchString],
    () => axiosInstance.get(APIS._search + `?${searchString}`),
    {
      refetchOnWindowFocus: false,
    }
  );
  return resp;
};

export default useSchoolsListing;

import axiosInstance from "@/utils/axiosInstance";
import { APIS } from "@/utils/endpoints";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

const useSchoolsListing = (filters = {}) => {
  const searchString = useMemo(() => {
    const urlsp = new URLSearchParams(filters);
    return urlsp.toString();
  }, [filters]);

  const resp = useQuery({
    queryKey: ["listing", searchString],
    refetchOnWindowFocus: false,
    queryFn: () => axiosInstance.get(APIS._search + `?${searchString}`),
  });
  return resp;
};

export default useSchoolsListing;

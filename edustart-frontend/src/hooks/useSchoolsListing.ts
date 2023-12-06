import axiosInstance from "@/utils/axiosInstance";
import { APIS } from "@/utils/endpoints";
import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useSchoolsListing = () => {
  const router = useRouter();
  const searchString = useMemo(() => {
    const urlsp = new URLSearchParams(router.query);
    return urlsp.toString();
  }, [router.query]);

  const resp = useQuery({
    queryKey: ["listing", searchString],
    refetchOnWindowFocus: false,
    queryFn: () => axiosInstance.get(APIS._search + `?${searchString}`),
  });
  return resp;
};

export default useSchoolsListing;

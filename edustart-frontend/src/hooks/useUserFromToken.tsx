import { getTokenFromLS } from "@/utils/common";
import { APIS } from "@/utils/endpoints";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useUserByToken = () => {
  const resp = useQuery({
    queryKey: ["user"],
    retry: false,
    refetchOnWindowFocus: false,
    queryFn: () => {
      return axios.get(APIS._getUserByToken, {
        headers: { Authorization: `Bearer ${getTokenFromLS()}` },
      });
    },
  });
  return resp;
};

export default useUserByToken;

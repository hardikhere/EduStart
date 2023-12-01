import { getTokenFromLS } from "@/app/utils/common";
import { APIS } from "@/app/utils/endpoints";
import axios, { AxiosResponse } from "axios";
import { useQuery } from "react-query";

const useUserByToken = () => {
  const resp = useQuery<AxiosResponse<any, any>, unknown, void>(
    ["user"],
    () => {
      return axios.get(APIS._getUserByToken, {
        headers: { Authorization: `Bearer ${getTokenFromLS()}` },
      });
    },
    { retry: false }
  );
  return resp;
};

export default useUserByToken;

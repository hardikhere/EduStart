import { APIS } from "@/app/utils/endpoints";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";

const useLogin = () => {
  const resp = useMutation<
    AxiosResponse<any, any>,
    unknown,
    { email: string; password: string },
    unknown
  >(["login"], async (data) => {
    return await axios.post(APIS._loginUser, data);
  });
  return resp;
};

export default useLogin;

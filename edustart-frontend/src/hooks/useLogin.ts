import { APIS } from "@/utils/endpoints";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

const useLogin = () => {
  const resp = useMutation<
    AxiosResponse<any, any>,
    unknown,
    { email: string; password: string },
    unknown
  >({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      return await axios.post(APIS._loginUser, data);
    },
  });
  return resp;
};

export default useLogin;

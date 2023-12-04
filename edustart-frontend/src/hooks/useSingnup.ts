import { APIS } from "@/utils/endpoints";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "@tanstack/react-query";

const useSignup = () => {
  const resp = useMutation<
    AxiosResponse<any, any>,
    unknown,
    { email: string; password: string },
    ISignupResponse
  >({
    mutationKey: ["login"],
    mutationFn: async (data) => {
      return await axios.post(APIS._signupUser, data);
    },
  });
  return resp;
};

export default useSignup;

interface ISignupResponse {
  data: {
    user: {
      isVerified: boolean;
      _id: string;
      email: string;
      createdAt: string;
      updatedAt: string;
    };
    token: string;
  };
  message: string;
  success: boolean;
  error: boolean;
}

import { APIS } from "@/app/utils/endpoints";
import axios, { AxiosResponse } from "axios";
import { useMutation } from "react-query";

const useSignup = () => {
  const resp = useMutation<
    AxiosResponse<any, any>,
    unknown,
    { email: string; password: string },
    ISignupResponse
  >(["login"], (data) => {
    return axios.post(APIS._signupUser, data);
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

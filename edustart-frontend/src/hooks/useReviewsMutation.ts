import { useUserDetails } from "@/context/UserContext";
import axiosInstance from "@/utils/axiosInstance";
import { APIS } from "@/utils/endpoints";
import { useMutation } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { useRouter } from "next/router";

const useReviewsMutation = () => {
  const { user } = useUserDetails();
  console.log(
    "🚀 ~ file: useReviewsMutation.ts:9 ~ useReviewsMutation ~ user:",
    user
  );
  const { query } = useRouter();
  const mutation = useMutation<
    AxiosResponse<any, any>,
    unknown,
    { review: Object },
    void
  >({
    mutationKey: ["reviews"],
    mutationFn: (data) => {
      return axiosInstance.post(
        APIS._addReview(user?._id, query.schoolId),
        data
      );
    },
  });
  return mutation;
};

export default useReviewsMutation;

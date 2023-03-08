import { useMutation } from "@tanstack/react-query";
import { add_new_post } from "../apis/posts";

const usePostMutation = () => {
  return useMutation({
    mutationFn: add_new_post,
    onError: (error: any) => {
      console.log({ error });
    },
  });
};

export default usePostMutation;

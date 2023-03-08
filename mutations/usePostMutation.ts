import { useMutation, useQueryClient } from "@tanstack/react-query";
import { add_new_post } from "../apis/posts";

const usePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: add_new_post,
    onError: (error: any) => {
      console.log({ error });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["get-all-posts"]);
    },
  });
};

export default usePostMutation;

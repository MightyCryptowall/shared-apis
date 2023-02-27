import { useQuery } from "@tanstack/react-query";
import { get_all_posts } from "../apis/posts";

const useGetAllPostQuery= () => {
  // console.log("remount primary timeline")
  return useQuery({
    queryKey: ["get-all-posts"],
    queryFn: get_all_posts,
    onError: (error:any) => {
      console.log({error})
    },
    retry: 1,
    staleTime: 1000 * 60 * 3,
    networkMode: "offlineFirst",
    refetchOnMount: false,
  });
}
 
export default useGetAllPostQuery;
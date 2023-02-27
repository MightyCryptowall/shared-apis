import { baseURL } from "../lib/baseURL";

export interface PostResObj{
  id: number;
  name: string;
}

export const get_all_posts = async () => {
  try {
    const response = await baseURL.get("/posts?sort[0]=id:desc");
    if (response.status == 200) {
      return [...response.data?.data?.map((item:any) => ({...item, ...item.attributes}))] as PostResObj[];
    }
    console.log({ response });
  } catch (error) {
    throw {
      error
    };
  }
}
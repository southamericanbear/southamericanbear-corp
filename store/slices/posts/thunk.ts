import { fetchWithoutToken } from "../../../api/apiFetch";
import { getPosts, startAndFinishGettingPosts } from "./postSlice";

export const getAllPosts = () => {
  return async (dispatch: any) => {
    dispatch(startAndFinishGettingPosts);
    const res = await fetchWithoutToken("/posts", null);
    const { ok, posts } = await res.json();
    if (ok) {
      dispatch(getPosts(posts));
      dispatch(startAndFinishGettingPosts);
    } else {
      dispatch(startAndFinishGettingPosts);
    }
  };
};

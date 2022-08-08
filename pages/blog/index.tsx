import { FC } from "react";
import { fetchWithoutToken } from "../../api/apiFetch";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getPosts } from "../../store/slices/posts/postSlice";

export const getStaticProps = async () => {
  // by now we are going to use this  this method to get
  // the data from the server here but in the future will be better
  // to implemenmt rkt query

  try {
    const res = await fetchWithoutToken("/posts", null);
    const { ok, posts } = await res.json();
    if (ok) {
      return {
        props: {
          posts,
        },
      };
    }
  } catch (error) {
    console.log(error);
  }
};

const HomePage: FC = (props: any) => {
  const dispatch = useAppDispatch();
  const { posts } = useAppSelector((state) => state.posts);
  dispatch(getPosts(props.posts));

  if (!posts.length) return <>Loading...</>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {posts.map((post: any) => (
        <span key={post.uid}>{post.title}</span>
      ))}
    </div>
  );
};

export default HomePage;

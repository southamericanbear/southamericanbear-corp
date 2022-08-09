import Link from "next/link";
import React, { FC } from "react";
import { fetchWithoutToken } from "../../api/apiFetch";
import DynamicHeadTag from "../../components/dynamicHeadTag";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { getPosts } from "../../store/slices/posts/postSlice";
import { SimplifyPost, IPosts } from "../../types/posts";

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

const HomePage: FC<IPosts> = ({ posts }) => {
  const dispatch = useAppDispatch();
  dispatch(getPosts(posts));

  return (
    <>
      <DynamicHeadTag title="Blog" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {posts &&
          posts.map((post: SimplifyPost) => (
            <Link key={post.uid} href={`/blog/posts/post/${post.uid}`}>
              <a>{post.title}</a>
            </Link>
          ))}
      </div>
    </>
  );
};

export default HomePage;

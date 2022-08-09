import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React, { FC } from "react";
import { fetchWithoutToken } from "../../../../api/apiFetch";
import DynamicHeadTag from "../../../../components/dynamicHeadTag";
import PostLayout from "../../../../components/layouts/PostLayout";
import { Post } from "../../../../types/posts";

type Props = {
  post: Post[];
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths = async () => {
  const res = await fetchWithoutToken("/posts", null);
  const { ok, posts } = await res.json();
  if (ok) {
    return {
      paths: posts.map((post: any) => ({ params: { id: post.uid } })),
      fallback: false,
    };
  }
};

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  const params = context.params!; // ! is a non-null assertion
  const res = await fetchWithoutToken(`/posts/${params.id}`, null);
  const { post } = await res.json();

  return {
    props: {
      post,
    },
  };
};

const Post: FC<Post> = ({ post }) => {
  const { title, post: content } = post;

  return (
    <PostLayout>
      <DynamicHeadTag title={title} />
      <h1 style={{ color: "black" }}>{title}</h1>
      <div
        style={{ color: "black" }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </PostLayout>
  );
};

export default Post;

import { GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { fetchWithoutToken } from "../../../../api/apiFetch";
import DynamicHeadTag from "../../../../components/dynamicHeadTag";
import PostLayout from "../../../../components/layouts/PostLayout";

type Props = {
  post: any;
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

const Post = ({ post }: any) => {
  return (
    <PostLayout>
      <DynamicHeadTag title={post.title} />
      <h1 style={{ color: "black" }}>{post.title}</h1>
      <div
        style={{ color: "black" }}
        dangerouslySetInnerHTML={{ __html: post.post }}
      />
    </PostLayout>
  );
};

export default Post;

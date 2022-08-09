import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import DynamicHeadTag from "../components/dynamicHeadTag";

const Home: NextPage = () => {
  return (
    <>
      <DynamicHeadTag title="Home" />
      <h1>
        go to the
        <Link href="/blog/blog-dashboard">
          <a>dashboard</a>
        </Link>
      </h1>
    </>
  );
};

export default Home;

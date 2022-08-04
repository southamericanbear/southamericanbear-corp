import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>South American Bear | Home</title>
        <link rel="icon" href="/images/bear.png" />
      </Head>
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

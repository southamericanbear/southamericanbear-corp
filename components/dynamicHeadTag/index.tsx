import Head from "next/head";
import React, { FC } from "react";

type Props = {
  title: string;
};

const DynamicHeadTag: FC<Props> = ({ title }) => {
  return (
    <Head>
      <title>South American Bear | {title}</title>
    </Head>
  );
};

export default DynamicHeadTag;

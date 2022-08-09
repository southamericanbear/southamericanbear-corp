import Head from "next/head";
import React from "react";
import DynamicHeadTag from "../components/dynamicHeadTag";

const Custom404 = () => {
  return (
    <div>
      <DynamicHeadTag title="404, Page not found" />
      404 - page not found
    </div>
  );
};

export default Custom404;

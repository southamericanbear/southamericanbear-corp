import React from "react";
import DynamicHeadTag from "../../../components/dynamicHeadTag";
import { useAppSelector } from "../../../hooks/reduxHooks";

const BlogDashboard = () => {
  const { user } = useAppSelector((state) => state);

  return (
    <>
      <DynamicHeadTag title="Blog Dashboard" />
      <div>welcome back {user.name}</div>
    </>
  );
};

// BlogDashboard.getInitialProps = async (props: any) => {
//   console.info("##### Congratulations! You are authorized! ######", props);
//   return {};
// };

export default BlogDashboard;

import React from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";

const BlogDashboard = () => {
  const { user } = useAppSelector((state) => state);

  return <div>welcome back {user.name}</div>;
};

// BlogDashboard.getInitialProps = async (props: any) => {
//   console.info("##### Congratulations! You are authorized! ######", props);
//   return {};
// };

export default BlogDashboard;

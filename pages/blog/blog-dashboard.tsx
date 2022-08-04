import React from "react";
import { useAppSelector } from "../../hooks/reduxHooks";

const BlogDashboard = () => {
  const { user } = useAppSelector((state) => state);

  return <div>welcome back {user.name}</div>;
};

export default BlogDashboard;

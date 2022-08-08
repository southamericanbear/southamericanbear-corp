import React, { FC, PropsWithChildren } from "react";

const PostLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        background: "white",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        borderRadius: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default PostLayout;

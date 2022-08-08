import React from "react";
import Router from "next/router";
import { useAppSelector } from "../../../hooks/reduxHooks";

const login = "/blog/login"; // Define your login route address.

const checkUserAuthentication = (user: any) => {
  return { auth: user ? true : false }; // change null to { isAdmin: true } for test it.
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (WrappedComponent: any) => {
  const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;
  const user = sessionStorage.getItem("user");

  hocComponent.getInitialProps = async (context: any) => {
    const userAuth = await checkUserAuthentication(user);

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

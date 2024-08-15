import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface AuthProtectedProps {
  children: ReactNode;
}

const AuthProtected: React.FC<AuthProtectedProps> = ({ children }) => {
  console.log("auth User", localStorage.getItem("authUser"));
  if (!localStorage.getItem("authUser")) {
    return <Navigate to={{ pathname: "/login" }} />;
  }

  return <React.Fragment>{children}</React.Fragment>;
};

export default AuthProtected;

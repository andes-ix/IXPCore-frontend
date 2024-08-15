import React from "react";
import LoginLayout from "./LoginLayout";
import PasswordRecover from "./PasswordRecover";

const LoginPasswordRecover = () => {
  document.title = "Sign In | Tailwick - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <LoginLayout>
        <PasswordRecover />
      </LoginLayout>
    </React.Fragment>
  );
};

export default LoginPasswordRecover;

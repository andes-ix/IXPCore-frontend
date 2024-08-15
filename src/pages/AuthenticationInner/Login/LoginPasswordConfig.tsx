import React from "react";
import LoginLayout from "./LoginLayout";
import PasswordConfig from "./PasswordConfig";

const LoginPasswordConfig = () => {
  document.title = "Sign In | Tailwick - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <LoginLayout>
        <PasswordConfig />
      </LoginLayout>
    </React.Fragment>
  );
};

export default LoginPasswordConfig;

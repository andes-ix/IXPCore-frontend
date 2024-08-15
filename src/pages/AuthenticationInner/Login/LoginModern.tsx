import React from "react";
import LoginLayout from "./LoginLayout";
import SingInForm from "./SingInForm";
import withRouter from "Common/withRouter";

const LoginModern = (props: any) => {
  document.title = "Sign In | Tailwick - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <LoginLayout>
        <SingInForm />
      </LoginLayout>
    </React.Fragment>
  );
};

export default withRouter(LoginModern);

"use client";

import PasswordConfiguration from "@components/Login/PasswordConfiguration";
import RequestEmailResetPassword from "@components/Login/PasswordConfiguration/RequestEmail";
import { useSearchParams } from "next/navigation";

const ChangePassword = () => {
  const email = useSearchParams().get("email");
  const code = useSearchParams().get("code");

  return (
    <>
      {(!email || !code) && <RequestEmailResetPassword />}

      {email && code && <PasswordConfiguration email={email} />}
    </>
  );
};

export default ChangePassword;

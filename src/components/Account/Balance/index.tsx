"use client";

import useWindowSize from "@hooks/useWindowSize";
import AccountBalanceDesktop from "./Desktop";
import AccountBalanceMobile from "./Mobile";

const AccountBalance = () => {
  const { width } = useWindowSize();

  return (
    <>
      {width >= 1020 && <AccountBalanceDesktop />}
      {width < 1020 && <AccountBalanceMobile />}
    </>
  );
};

export default AccountBalance;

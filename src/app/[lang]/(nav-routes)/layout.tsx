"use client"

import DashboardHeader from "@components/Header";
import DashboardNavbar from "@components/Navbar";
import styles from "./layout.module.scss";
import useSession from "src/hooks/useSession";

interface IProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: IProps) => {
  useSession()

  return (
    <div className={styles.layoutContainer}>
      <DashboardNavbar />
      <div className={styles.pageContainer}>
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;

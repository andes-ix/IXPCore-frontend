import styles from "./page.module.scss";
import DashboardDesktop from "@components/Dashboard/Desktop";
import DashboardMobile from "@components/Dashboard/Mobile";

const Dashboard = () => {
  return (
    <>
      <div className={styles.desktopContainer}>
        <DashboardDesktop />
      </div>
      <div className={styles.mobileContainer}>
        <DashboardMobile />
      </div>
    </>
  );
};

export default Dashboard;

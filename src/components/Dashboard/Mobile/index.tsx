import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import BalanceElement from "../Elements/Balance";
import ContactInfoCard from "../Elements/ContactInfoCard";
import TotalUsersElement from "../Elements/TotalUsers";
import WelcomeElement from "../Elements/Welcome";
import LatestChargesElement from "../Elements/LatestCharges";
import EnterpriseNameElement from "../Elements/EnterpriseName";
import NextPayments from "../Elements/NextPayments";

const DashboardMobile = () => {
  const t = useTranslations("Dashboard.Elements");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.entrepriseNameContainer}>
        <EnterpriseNameElement />
      </div>

      <WelcomeElement />

      <BalanceElement />

      <TotalUsersElement />

      <NextPayments />

      <ContactInfoCard
        title={t("Profile.title")}
        blueText={"Juan Hernández"}
        email="Example@pit.net"
        number="(0) 053 555 555"
      />

      <LatestChargesElement />
    </main>
  );
};

export default DashboardMobile;

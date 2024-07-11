import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import ContactInfoCard from "../Elements/ContactInfoCard";
import WelcomeElement from "../Elements/Welcome";
import TotalUsersElement from "../Elements/TotalUsers";
import BalanceElement from "../Elements/Balance";
import NextPayments from "../Elements/NextPayments";
import LatestChargesElement from "../Elements/LatestCharges";

const DashboardDesktop = () => {
  const t = useTranslations("Dashboard.Elements");

  return (
    <main className={styles.mainContainer}>
      <section className={styles.upperSection}>
        <div>
          <WelcomeElement />
        </div>

        <div>
          <BalanceElement />
        </div>

        <div>
          <ContactInfoCard
            title={t("Billing.title")}
            blueText={t("Billing.contactInfo")}
            email="Example@pit.net"
            number="(0) 053 555 555"
          />
        </div>

        <div>
          <ContactInfoCard
            title="NOC"
            blueText={t("NOC.contactInfo")}
            email="Example@pit.net"
            number="(0) 053 555 555"
          />
        </div>

        <div>
          <TotalUsersElement />
        </div>
      </section>

      <section className={styles.bottomContainer}>
        <NextPayments />

        <div>
          <ContactInfoCard
            title={t("Profile.title")}
            blueText={"Juan Hernández"}
            email="Example@pit.net"
            number="(0) 053 555 555"
          />

          <LatestChargesElement />
        </div>
      </section>
    </main>
  );
};

export default DashboardDesktop;

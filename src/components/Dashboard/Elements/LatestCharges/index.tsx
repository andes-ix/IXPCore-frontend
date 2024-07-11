import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const LatestChargesElement = () => {
  const t = useTranslations("Dashboard.Elements.LatestCharges");

  return (
    <section className={styles.sectionContainer}>
      <h2>{t("title")}</h2>

      <div>
        <h3>{t("billingNumber")}</h3>
        <div>
          <p>F 001-00001753</p>
        </div>
      </div>

      <div>
        <h3>{t("amount")}</h3>
        <div>
          <p>$ 3.127,00</p>
        </div>
      </div>

      <div>
        <h3>{t("dateOfIssue")}</h3>
        <div>
          <p>10/03/2024</p>
        </div>
      </div>
    </section>
  );
};

export default LatestChargesElement;

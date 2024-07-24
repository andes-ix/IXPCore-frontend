import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";

const AccountBalanceMobile = () => {
  const t = useTranslations("Account.Balance");

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.titleContainer}>
        <div>
          <h3>Balance</h3>

          <h2>
            S/. 3127,00 <span>/ {t("month")}</span>
          </h2>

          <p>{t("conversionType")}</p>
        </div>

        <button>
          <Image
            src={"/img/_reusable/download.svg"}
            alt="Download"
            width={18}
            height={18}
          />
        </button>
      </article>

      <article className={styles.progressBarContainer}>
        <div>
          <div style={{ width: "30%" }}>30%</div>
          <div style={{ width: "60%" }}>60%</div>
          <div style={{ width: "10%" }}>10%</div>
        </div>

        <p>{t("breakdown")}</p>
      </article>

      <article className={styles.infoContainer}>
        <div>
          <p>{t("pendingDeduction")}</p>
          <h4>S/. 1127,00</h4>
        </div>

        <div>
          <p>{t("totalDebt")}</p>
          <h4>S/. 53127,00</h4>
        </div>

        <div>
          <p>{t("dueDate")}</p>
          <h4>05 de Abril 2024</h4>
        </div>
      </article>
    </section>
  );
};

export default AccountBalanceMobile;

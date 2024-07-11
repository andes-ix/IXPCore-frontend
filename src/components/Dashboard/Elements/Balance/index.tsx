import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "src/navigation";
import styles from "./styles.module.scss";

const BalanceElement = () => {
  const t = useTranslations("Dashboard.Elements.Balance");

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.balanceImage}>
        <Image
          src={"/img/dashboard/balance.svg"}
          width={20}
          height={20}
          alt="Balance"
        />
      </article>

      <article className={styles.balanceContainer}>
        <h4>Balance</h4>

        <h3>S/. 3127,00</h3>

        <h5>{t("conversionType")}</h5>
      </article>

      <article className={styles.viewBilling}>
        <p>{t("viewBilling")}</p>

        <Link href={"#"}>{t("goAccountStatus")}</Link>
      </article>
    </section>
  );
};

export default BalanceElement;

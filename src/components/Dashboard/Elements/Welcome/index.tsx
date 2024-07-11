import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";

const WelcomeElement = () => {
  const t = useTranslations("Dashboard.Elements.Welcome");

  return (
    <section className={styles.sectionContainer}>
      <h2 className={styles.date}>08 de Abril 2024</h2>

      <h1>{t("title")} Salvador!</h1>

      <h3 className={styles.subtitle}>
        {t.rich("subtitle", {
          span: (children) => <span>{children}</span>,
        })}
      </h3>

      <article className={styles.billingStatus}>
        <Image
          src={"/img/_reusable/alert-red.svg"}
          alt="Alert"
          width={16}
          height={16}
        />

        <div>
          <h4>
            {t.rich("pendingStatus", {
              span: (children) => <span>{children}</span>,
            })}
          </h4>

          <button>{t("viewDetails")}</button>
        </div>
      </article>
    </section>
  );
};

export default WelcomeElement;

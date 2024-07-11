import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";

const Notification = () => {
  const t = useTranslations("Dashboard.Elements.NextPayments.Notification");

  return (
    <article className={styles.articleContainer}>
      <div className={styles.iconContainer}>
        <Image
          src={"/img/_reusable/alert-red.svg"}
          alt="Alert"
          width={16}
          height={16}
        />
      </div>

      <div className={styles.contentContainer}>
        <h2>{t("title")}</h2>

        <p>{t("alert")}</p>

        <strong>15 días</strong>

        <h6>{t("info")}</h6>
      </div>
    </article>
  );
};

export default Notification;

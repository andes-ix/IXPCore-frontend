import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const EnterpriseNameElement = () => {
  const t = useTranslations("Header");

  return (
    <button className={styles.buttonContainer}>
      {t("enterprise")}

      <span>Fiber digital</span>

      <Image
        src={"/img/_reusable/chevron-right-blue.svg"}
        alt="Chevron"
        width={7.28}
        height={12}
      />
    </button>
  );
};

export default EnterpriseNameElement;

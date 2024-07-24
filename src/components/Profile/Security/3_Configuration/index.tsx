import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { TsecurityScreen } from "..";
import Image from "next/image";

interface IProps {
  setSecurityScreen: React.Dispatch<React.SetStateAction<TsecurityScreen>>;
}

const SecurityConfiguration = ({ setSecurityScreen }: IProps) => {
  const t = useTranslations("Profile.Security.Configuration");

  const handleSubmit = () => {
    setSecurityScreen("4_insertCode");
  };

  return (
    <section className={styles.sectionContainer}>
      <h5>{t("title")}</h5>

      <ol>
        <li>{t("li1")}</li>
        <li>{t("li2")}</li>
        <li>{t("li3")}</li>
      </ol>

      <article className={styles.qrContainer}>
        <p>{t("scanQr")}</p>

        <Image
          src={"/img/profile/qr-example.png"}
          alt="Copy"
          width={170}
          height={170}
        />
      </article>

      <p>{t("useSecretCode")}</p>

      <article className={styles.codeContainer}>
        <p>BXUCQWJNB5LU2EF3</p>

        <button>
          <Image
            src={"/img/profile/copy.svg"}
            alt="Copy"
            width={15}
            height={15}
          />
        </button>
      </article>

      <button onClick={handleSubmit}>{t("buttonTitle")}</button>
    </section>
  );
};

export default SecurityConfiguration;

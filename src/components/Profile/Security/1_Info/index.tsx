import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { TsecurityScreen } from "..";

interface IProps {
  setSecurityScreen: React.Dispatch<React.SetStateAction<TsecurityScreen>>;
}

const SecurityInfo = ({ setSecurityScreen }: IProps) => {
  const t = useTranslations("Profile.Security.Info");

  return (
    <section className={styles.sectionContainer}>
      <article>
        <div>1</div>

        <p>{t("bullet1")}</p>
      </article>

      <article>
        <div>2</div>

        <p>{t("bullet2")}</p>
      </article>

      <button onClick={() => setSecurityScreen("2_validateEmail")}>
        {t("buttonTitle")}
      </button>
    </section>
  );
};

export default SecurityInfo;

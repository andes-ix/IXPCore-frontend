import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { TsecurityScreen } from "..";
import { FormEvent } from "@constants/customTypes";

interface IProps {
  setSecurityScreen: React.Dispatch<React.SetStateAction<TsecurityScreen>>;
}

const SecurityValidateEmail = ({ setSecurityScreen }: IProps) => {
  const t = useTranslations("Profile.Security.ValidateEmail");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSecurityScreen("3_configuration");
  };

  return (
    <section className={styles.sectionContainer}>
      <h5>{t("title")}</h5>

      <h6>{t("subtitle")}</h6>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={t("placeholder")} />

        <button>{t("buttonTitle")}</button>
      </form>

      <p>{t("spamAlert")}</p>
    </section>
  );
};

export default SecurityValidateEmail;

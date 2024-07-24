import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { TsecurityScreen } from "..";
import { FormEvent } from "@constants/customTypes";

interface IProps {
  setSecurityScreen: React.Dispatch<React.SetStateAction<TsecurityScreen>>;
}

const SecurityInsertCode = ({ setSecurityScreen }: IProps) => {
  const t = useTranslations("Profile.Security.InsertCode");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    setSecurityScreen("5_activated");
  };

  return (
    <section className={styles.sectionContainer}>
      <h5>{t("title")}</h5>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder={t("placeholder")} />

        <button>{t("buttonTitle")}</button>
      </form>
    </section>
  );
};

export default SecurityInsertCode;

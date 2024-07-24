import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { TsecurityScreen } from "..";

interface IProps {
  setSecurityScreen: React.Dispatch<React.SetStateAction<TsecurityScreen>>;
}

const SecurityActivated = ({ setSecurityScreen }: IProps) => {
  const t = useTranslations("Profile.Security.Activated");

  const handleDeactivate = () => {
    setSecurityScreen("1_info");
  };

  return (
    <section className={styles.sectionContainer}>
      <p>{t("info")}</p>

      <button onClick={handleDeactivate}>{t("buttonTitle")}</button>
    </section>
  );
};

export default SecurityActivated;

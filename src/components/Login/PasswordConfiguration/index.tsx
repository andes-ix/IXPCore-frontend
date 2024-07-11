import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const LoginPasswordConfiguration = () => {
  const t = useTranslations("Login.PasswordConfiguration");
  const passwordRequirements = t("passwordRequirements").split("|");

  return (
    <section className={styles.sectionContainer}>
      <Image src={"/img/logo.webp"} alt="Logo de PIT" width={80} height={94} />

      <h1>{t("title")}</h1>

      <h2>{t("subtitle")}</h2>

      <form action="">
        <article>
          <label htmlFor="password">{t("password")}</label>
          <input type="password" placeholder="**************" />
        </article>

        <article>
          <label htmlFor="password">{t("confirmPassword")}</label>
          <input type="text" placeholder="**************" />
        </article>

        <article className={styles.passwordRequirements}>
          <h3>{t("passwordRequirementsTitle")}</h3>

          <ul>
            {passwordRequirements.map((el: string) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </article>

        <button>{t("buttonTitle")}</button>
      </form>
    </section>
  );
};

export default LoginPasswordConfiguration;

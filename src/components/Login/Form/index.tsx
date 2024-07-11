import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import Chevron from "@img/login/Chevron";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  const t = useTranslations("Login");

  return (
    <section className={styles.sectionContainer}>
      <article>
        <Image
          src={"/img/logo.webp"}
          alt="Logo de PIT"
          width={80}
          height={94}
        />

        <h1>{t("title")}</h1>

        <h2>
          {t("subtitle")} <span>PCP</span>
        </h2>

        <Link href="#">
          <Chevron />
          {t("terms")}
        </Link>
      </article>

      <form>
        <div>
          <label htmlFor="email">{t("email")}</label>
          <input type="text" name="email" placeholder={t("email")} />
        </div>

        <div>
          <div className={styles.passwordTitleContainer}>
            <label htmlFor="password">{t("password")}</label>
            <button type="button">{t("forgotPassword")}</button>
          </div>
          <input type="password" name="password" placeholder={t("password")} />
        </div>

        <button>{t("buttonTitle")}</button>
      </form>
    </section>
  );
};

export default LoginForm;

"use client"

import Image from "next/image";
import styles from "./styles.module.scss";
import Chevron from "@img/login/Chevron";
import { useTranslations } from "next-intl";
import useSession from "@hooks/useSession";

const Login2FA = () => {
  const t = useTranslations("Login.2FA");

  useSession();

  return (
    <section className={styles.sectionContainer}>
      <Image src={"/img/logo.webp"} alt="Logo de PIT" width={80} height={94} />

      <button>
        <Chevron style={{ transform: "rotate(180deg)" }} />
        {t("goBack")}
      </button>

      <h1>{t("title")}</h1>

      <form action="">
        <article className={styles.codeInputContainer}>
          <label htmlFor="2fa">{t("label")}</label>
          <input type="text" name="2fa" placeholder="******" />
        </article>

        <article className={styles.rememberDeviceContainer}>
          <input type="checkbox" name="rememberDevice" />
          <label htmlFor="rememberDevice">{t("rememberDevice")}</label>
        </article>

        <button>{t("buttonTitle")}</button>
      </form>
    </section>
  );
};

export default Login2FA;

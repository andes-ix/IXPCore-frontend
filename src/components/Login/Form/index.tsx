"use client";

import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import Chevron from "@img/login/Chevron";
import Image from "next/image";
import { useState } from "react";
import { FormEvent } from "@constants/customTypes";
import { useUserStore } from "@store/user";
import useSession from "src/hooks/useSession";
import { Link, useRouter } from "src/navigation";
import { login } from "@services/apiMethods";
import { toast, Toaster } from "sonner";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUserStore((state) => state);
  const router = useRouter();

  useSession();

  const t = useTranslations("Login");

  const handleChangeEmail = (value: string) => {
    const NO_WHITESPACES = /^[^\s]*$/;

    if (error) {
      setError("");
    }

    if (!NO_WHITESPACES.test(value)) return;

    setEmail(value);
  };

  const handleChangePassword = (value: string) => {
    setPassword(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!password || !email) return;

    const VALIDATE_EMAIL_FORMAT =
      /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!VALIDATE_EMAIL_FORMAT.test(email)) {
      return setError("Ingresa un email válido");
    }

    const response = await login({ email, password });

    if (response.error) {
      return toast.error(response.error);
    }

    setUser(response);

    localStorage.setItem("user", JSON.stringify(response));

    router.replace("/dashboard");
  };

  return (
    <section className={styles.sectionContainer}>
      <Toaster position="top-center" richColors />
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

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">{t("email")}</label>

          <input
            type="text"
            name="email"
            placeholder={t("email")}
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}
        </div>

        <div>
          <div className={styles.passwordTitleContainer}>
            <label htmlFor="password">{t("password")}</label>

            <Link href={"/change-password"}>{t("forgotPassword")}</Link>
          </div>
          <input
            type="password"
            name="password"
            placeholder={t("password")}
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
          />
        </div>

        <button>{t("buttonTitle")}</button>
      </form>
    </section>
  );
};

export default LoginForm;

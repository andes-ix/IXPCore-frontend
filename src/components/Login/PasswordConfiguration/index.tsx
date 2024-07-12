"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { FormEvent, InputEvent } from "@constants/customTypes";
import { changePassword } from "@services/apiMethods";
import useSession from "@hooks/useSession";

const PasswordConfiguration = () => {
  const [inputValue, setInputValue] = useState({
    password1: "",
    password2: "",
  });
  const [eye1, setEye1] = useState("eye-closed");
  const [eye2, setEye2] = useState("eye-closed");

  useSession();

  const t = useTranslations("Login.PasswordConfiguration");
  const passwordRequirements = t("passwordRequirements").split("|");

  const handleChangeEye = (number: 1 | 2) => {
    if (number === 1) {
      if (eye1 === "eye") setEye1("eye-closed");
      if (eye1 === "eye-closed") setEye1("eye");
    }

    if (number === 2) {
      if (eye2 === "eye") setEye2("eye-closed");
      if (eye2 === "eye-closed") setEye2("eye");
    }
  };

  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target;
    const NO_WHITESPACES = /^[^\s]*$/;

    if (!NO_WHITESPACES.test(value)) return;

    if (name === "password1") {
      setInputValue({ ...inputValue, password1: value });
    }

    if (name === "password2") {
      setInputValue({ ...inputValue, password2: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (inputValue.password1 !== inputValue.password2) return;
    if (inputValue.password1.length < 8) return;
    if (inputValue.password2.length < 8) return;

    const VALIDATE_CHARS = /^(?=.*\d)(?=.*[-\/=.#$*])[a-zA-Z0-9-\/=.#$*]+$/;

    if (!VALIDATE_CHARS.test(inputValue.password1)) return;

    const response = await changePassword(inputValue);

    console.log(response);
  };

  return (
    <section className={styles.sectionContainer}>
      <Image src={"/img/logo.webp"} alt="Logo de PIT" width={80} height={94} />

      <h1>{t("title")}</h1>

      <h2>{t("subtitle")}</h2>

      <form onSubmit={handleSubmit}>
        <article>
          <label htmlFor="password1">{t("password")}</label>

          <div>
            <input
              type={eye1 === "eye" ? "text" : "password"}
              name="password1"
              placeholder="**************"
              value={inputValue.password1}
              onChange={handleChange}
            />

            <button type="button" onClick={() => handleChangeEye(1)}>
              <Image
                src={`/img/login/${eye1}.svg`}
                alt="Eye"
                width={18}
                height={18}
              />
            </button>
          </div>
        </article>

        <article>
          <label htmlFor="password2">{t("confirmPassword")}</label>

          <div>
            <input
              type={eye2 === "eye" ? "text" : "password"}
              name="password2"
              placeholder="**************"
              value={inputValue.password2}
              onChange={handleChange}
            />

            <button type="button" onClick={() => handleChangeEye(2)}>
              <Image
                src={`/img/login/${eye2}.svg`}
                alt="Eye"
                width={18}
                height={18}
              />
            </button>
          </div>
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

export default PasswordConfiguration;

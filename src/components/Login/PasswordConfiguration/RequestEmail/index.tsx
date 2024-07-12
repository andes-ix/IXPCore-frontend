import Image from "next/image";
import styles from "./styles.module.scss";
import Chevron from "@img/login/Chevron";
import { useTranslations } from "next-intl";
import { Link } from "src/navigation";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { FormEvent } from "@constants/customTypes";
import { getCodeForPasswordReset } from "@services/apiMethods";

const showSuccessToast = (email: string) => {
  const splitted = email.split("@");

  toast.success(
    <div className={styles.successAlert}>
      <div className={styles.containerImg}>
        <Image
          src={"/img/alert/success.svg"}
          alt="Success"
          width={34}
          height={34}
        />
      </div>

      <div>
        <h3>Correo electrónico enviado satisfactoriamente</h3>

        <p>
          Ha sido enviado a tu correo registrado{" "}
          <span>
            {splitted[0].substring(2)}... @{splitted[1]}
          </span>{" "}
          las indicaciones para recuperar tu contraseña.
        </p>
      </div>
    </div>,
    {
      style: {
        background: "#EAFAF7",
      },
    }
  );
};

const RequestEmailResetPassword = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const t = useTranslations("Login.PasswordConfiguration.RequestEmail");

  const handleChangeEmail = (value: string) => {
    const NO_WHITESPACES = /^[^\s]*$/;

    if (error) {
      setError("");
    }

    if (!NO_WHITESPACES.test(value)) return;

    setEmail(value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email) return;

    const VALIDATE_EMAIL_FORMAT =
      /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!VALIDATE_EMAIL_FORMAT.test(email)) {
      return setError("Ingresa un email válido");
    }

    const response = await getCodeForPasswordReset(email);

    if (response.error) {
      return toast.error(response.error);
    }

    showSuccessToast(email);
  };

  return (
    <section className={styles.sectionContainer}>
      <Toaster position="top-center" richColors closeButton />

      <Image src={"/img/logo.webp"} alt="Logo de PIT" width={80} height={94} />

      <Link href={"/login"}>
        <Chevron style={{ transform: "rotate(180deg)" }} />
        {t("goBack")}
      </Link>

      <h1>{t("title")}</h1>

      <form onSubmit={handleSubmit}>
        <article className={styles.inputContainer}>
          <label htmlFor="email">{t("label")}</label>

          <input
            type="text"
            name="email"
            placeholder={t("label")}
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
          />

          {error && <p className={styles.error}>{error}</p>}
        </article>

        <button>{t("buttonTitle")}</button>
      </form>
    </section>
  );
};

export default RequestEmailResetPassword;

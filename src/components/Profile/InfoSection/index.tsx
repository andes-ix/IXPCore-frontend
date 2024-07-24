"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { PhoneInput } from "react-international-phone";
import { useState } from "react";
import { FormEvent } from "@constants/customTypes";
import countries from "./countries.json";
import "react-international-phone/style.css";
import useWindowSize from "@hooks/useWindowSize";
import { Link } from "src/navigation";

const InfoSection = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    country: {
      text: "",
      code: "",
    },
    phone: "",
    charge: "",
    email: "",
  });

  const { width } = useWindowSize();
  const t = useTranslations("Profile.InfoSection");

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    if (name === "country") {
      return setInputValue({
        ...inputValue,
        country: {
          text: countries.find((c) => c.value === value)!.text,
          code: value,
        },
      });
    }

    if (name === "name" && value !== "") {
      const ONLY_LETTERS = /^[a-zA-Z\s]+$/;

      if (!ONLY_LETTERS.test(value)) return;
    }

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleChangePhone = (value: string) => {
    setInputValue({
      ...inputValue,
      phone: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !inputValue.name ||
      !inputValue.country.code ||
      !inputValue.charge ||
      !inputValue.email ||
      inputValue.phone.length < 5
    ) {
      return;
    }

    // const response = await addUser(inputValue);

    // if (response.error) {
    //   return toast.error(response.error);
    // }

    // setShowModalAddUser(false);
  };

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.head}>
        <button className={styles.profileImgContainer}>
          <Image
            src={"/img/header/user.svg"}
            alt="User"
            width={80}
            height={80}
            className={styles.userImg}
          />

          <div className={styles.addImageContainer}>
            <Image
              src={"/img/_reusable/add-picture.svg"}
              alt="Add picture"
              width={18}
              height={18}
            />
          </div>
        </button>

        <div>
          <h2>Salvador Bertenbreiter</h2>

          <p>
            Asegúrese de que estos datos estén actualizados, ya que se
            utilizarán para información en la facturación de sus servicios.
          </p>
        </div>
      </article>

      <form onSubmit={handleSubmit}>
        <article>
          <div>
            <label htmlFor="fullName">{t("fullName")}</label>
            <input
              type="text"
              name="fullName"
              placeholder="Salvador Bertenbreiter"
              value={inputValue.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="email">{t("email")}</label>
            <input
              type="text"
              name="email"
              placeholder="Example@pit.net"
              value={inputValue.email}
              onChange={handleChange}
            />
          </div>
        </article>

        <article>
          <div>
            <label htmlFor="country">{t("country")}</label>
            <select
              name="country"
              required
              value={inputValue.country.code}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                {t("countryPlaceholder")}
              </option>

              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.text}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className={styles.phoneLabel}>ㅤ</label>

            <PhoneInput
              defaultCountry={"pe"}
              value={inputValue.phone}
              onChange={handleChangePhone}
              className={styles.phoneInput}
              placeholder="(0) 053 555 555"
            />
          </div>
        </article>

        <article>
          <div className={styles.chargeContainer}>
            <label htmlFor="charge">{t("charge")}</label>
            <input
              type="text"
              name="charge"
              value={inputValue.charge}
              onChange={handleChange}
            />
          </div>
        </article>

        {width > 680 && (
          <div className={styles.buttonContainer}>
            <button>{t("buttonTitle")}</button>
          </div>
        )}
      </form>

      <article className={styles.changePasswordContainer}>
        {width > 680 && (
          <>
            <button>{t("changePassword")}</button>
            <p>{t("changePasswordInfo")}</p>
          </>
        )}

        {width <= 680 && (
          <div className={styles.changePasswordMobile}>
            <div>
              <div>
                <label htmlFor="password">{t("actualPassword")}</label>
                <Link href={"#"}>{t("forgotPassword")}</Link>
              </div>

              <input type="password" name="password" placeholder="******" />
            </div>

            <div>
              <label htmlFor="repeatPassword">{t("newPassword")}</label>
              <input
                type="password"
                name="repeatPassword"
                placeholder={t("newPassword")}
              />
            </div>

            <div className={styles.buttonContainer}>
              <button>{t("buttonTitle")}</button>
            </div>
          </div>
        )}
      </article>
    </section>
  );
};

export default InfoSection;

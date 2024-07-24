"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { Link } from "src/navigation";
import Chevron from "@img/login/Chevron";
import InfoSection from "./InfoSection";
import Security from "./Security";
import useWindowSize from "@hooks/useWindowSize";
import { useState } from "react";
import EnterpriseNameElement from "@components/Dashboard/Elements/EnterpriseName";

const ProfileComponent = () => {
  const [showOnlySecurity, setShowOnlySecurity] = useState(false);
  const { width } = useWindowSize();

  const t = useTranslations("Profile");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.entrepriseNameContainer}>
        <EnterpriseNameElement />
      </div>

      <section className={styles.upperSection}>
        <h1>{t("title")}</h1>

        <h2>{t("subtitle")}</h2>

        <p>{t("info")}</p>

        {width >= 1200 && (
          <Link href="#">
            <Chevron />
            {t("terms")}
          </Link>
        )}

        {width < 1200 && (
          <button
            onClick={() => setShowOnlySecurity(!showOnlySecurity)}
            className={showOnlySecurity ? styles.goBackBtn : ""}
          >
            <Chevron />
            {showOnlySecurity ? t("goBack") : t("2fa")}
          </button>
        )}

        {width < 1200 && showOnlySecurity && <Security />}

        {(width >= 1200 || (width < 1200 && !showOnlySecurity)) && (
          <InfoSection />
        )}
      </section>

      {width >= 1200 && (
        <section>
          <Security />
        </section>
      )}
    </main>
  );
};

export default ProfileComponent;

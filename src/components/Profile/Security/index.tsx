"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useState } from "react";
import SecurityInfo from "./1_Info";
import SecurityValidateEmail from "./2_ValidateEmail";
import SecurityConfiguration from "./3_Configuration";
import SecurityInsertCode from "./4_InsertCode";
import SecurityActivated from "./5_Activated";
import Image from "next/image";

export type TsecurityScreen =
  | "1_info"
  | "2_validateEmail"
  | "3_configuration"
  | "4_insertCode"
  | "5_activated";

const Security = () => {
  const [securityScreen, setSecurityScreen] =
    useState<TsecurityScreen>("1_info");

  const t = useTranslations("Profile.Security");

  return (
    <>
      <div className={styles.titleContainer}>
        <div>
          <Image
            src={"/img/profile/security.svg"}
            alt="Security"
            width={20}
            height={22}
          />
        </div>

        <h2>{t("title")}</h2>
      </div>

      <div className={styles.subtitleContainer}>
        <div>
          <h3 className={styles.subtitle}>{t("subtitle")}</h3>

          <h4 className={styles.caption}>{t("caption")}</h4>
        </div>

        {securityScreen === "5_activated" && <p>{t("activated")}</p>}
      </div>

      {securityScreen === "1_info" && (
        <SecurityInfo setSecurityScreen={setSecurityScreen} />
      )}

      {securityScreen === "2_validateEmail" && (
        <SecurityValidateEmail setSecurityScreen={setSecurityScreen} />
      )}

      {securityScreen === "3_configuration" && (
        <SecurityConfiguration setSecurityScreen={setSecurityScreen} />
      )}

      {securityScreen === "4_insertCode" && (
        <SecurityInsertCode setSecurityScreen={setSecurityScreen} />
      )}

      {securityScreen === "5_activated" && (
        <SecurityActivated setSecurityScreen={setSecurityScreen} />
      )}
    </>
  );
};

export default Security;

"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { Link, usePathname } from "src/navigation";
import { useTranslations } from "next-intl";
import { useUtilStore } from "@store/util";
import { useEffect } from "react";

const DashboardNavbar = () => {
  const { isOpenNavbar, closeNavbar } = useUtilStore();
  const t = useTranslations("Navbar");
  const pathname = usePathname();

  const isSelectedDashboard = pathname.includes("dashboard");
  const isSelectedServices = pathname.includes("services");
  const isSelectedAccount = pathname.includes("account");
  const isSelectedUsers = pathname.includes("users");

  useEffect(() => {
    closeNavbar();
  }, [pathname]);

  return (
    <nav
      className={`${styles.navContainer} ${isOpenNavbar ? styles.openNav : ""}`}
    >
      <Image src={"/img/logo.webp"} alt="Logo de PIT" width={72} height={84} />

      <button className={styles.chevronLeft} onClick={closeNavbar}>
        <Image
          src={"/img/_reusable/chevron-right-blue.svg"}
          alt="Chevron"
          width={7.28}
          height={12}
        />
        <Image
          src={"/img/_reusable/chevron-right-blue.svg"}
          alt="Chevron"
          width={7.28}
          height={12}
        />
      </button>

      <section>
        <Link
          href={"/dashboard"}
          className={isSelectedDashboard ? styles.selectedLink : ""}
        >
          <Image
            src={"/img/navbar/dashboard.svg"}
            alt={t("dashboard")}
            width={18}
            height={18}
          />
          {t("dashboard")}
        </Link>

        <Link
          href={"/services"}
          className={isSelectedServices ? styles.selectedLink : ""}
        >
          <Image
            src={"/img/navbar/services.svg"}
            alt={t("services")}
            width={18}
            height={18}
          />
          {t("services")}
          <div className={styles.chevronContainer}>
            <Image
              src={"/img/navbar/chevron-right.svg"}
              alt="Chevron"
              width={7.28}
              height={12}
            />
          </div>
        </Link>

        <Link
          href={"/account"}
          className={isSelectedAccount ? styles.selectedLink : ""}
        >
          <Image
            src={"/img/navbar/wallet.svg"}
            alt={t("account")}
            width={18}
            height={18}
          />
          {t("account")}
          <div className={styles.chevronContainer}>
            <Image
              src={"/img/navbar/chevron-right.svg"}
              alt="Chevron"
              width={7.28}
              height={12}
            />
          </div>
        </Link>

        {isSelectedAccount && (
          <ul>
            <li className={styles.selectedLi}>{t("accountOption1")}</li>
          </ul>
        )}

        <Link
          href={"/users"}
          className={isSelectedUsers ? styles.selectedLink : ""}
        >
          <Image
            src={"/img/navbar/users.svg"}
            alt={t("users")}
            width={18}
            height={18}
          />
          {t("users")}
          <div className={styles.chevronContainer}>
            <Image
              src={"/img/navbar/chevron-right.svg"}
              alt="Chevron"
              width={7.28}
              height={12}
            />
          </div>
        </Link>

        {isSelectedUsers && (
          <ul>
            <li className={styles.selectedLi}>{t("usersOption1")}</li>
          </ul>
        )}
      </section>
    </nav>
  );
};

export default DashboardNavbar;

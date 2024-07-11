"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

const TotalUsersElement = () => {
  const t = useTranslations("Dashboard.Elements.TotalUsers");

  const recentUsers = [
    {
      img: "/img/dashboard/user-example.png",
    },
    {
      img: "/img/dashboard/user-example.png",
    },
    {
      img: "/img/dashboard/user-example.png",
    },
    {
      img: "/img/dashboard/user-example.png",
    },
    {
      img: "/img/dashboard/user-example.png",
    },
    {
      img: "/img/dashboard/user-example.png",
    },
    {
      img: "/img/dashboard/user-example.png",
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.iconUser}>
        <Image
          src={"/img/dashboard/icon-user.svg"}
          width={16}
          height={21}
          alt="User"
        />
      </article>

      <article className={styles.infoContainer}>
        <h3>{t("title")}</h3>

        <h2>1200</h2>

        <h4>{t("recentUsers")}</h4>

        <div className={styles.recentUsersContainer}>
          {recentUsers.map((u, i) => {
            if (i >= 4) return;

            return <Image key={i} src={u.img} width={40} height={40} alt="User" />;
          })}

          {recentUsers.length > 4 && <div>+{recentUsers.length - 4}</div>}
        </div>
      </article>
    </section>
  );
};

export default TotalUsersElement;

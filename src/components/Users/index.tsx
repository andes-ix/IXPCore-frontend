import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import UserListTable from "./Table";
import EnterpriseNameElement from "@components/Dashboard/Elements/EnterpriseName";

const UsersComponent = () => {
  const t = useTranslations("Navbar");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.entrepriseNameContainer}>
        <EnterpriseNameElement />
      </div>

      <section className={styles.titleContainer}>
        <h1>{t("users")}</h1>

        <article>
          <p>{t("users")}</p>

          <Image
            src={"/img/_reusable/chevron-right-blue.svg"}
            alt="Chevron"
            width={7.28}
            height={12}
          />

          <p>{t("usersOption1")}</p>
        </article>
      </section>

      <UserListTable />
    </main>
  );
};

export default UsersComponent;

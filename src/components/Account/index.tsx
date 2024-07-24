import EnterpriseNameElement from "@components/Dashboard/Elements/EnterpriseName";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";
import AccountBalance from "./Balance";
import AccountTable from "./Table";

const AccountComponent = () => {
  const navT = useTranslations("Navbar");
  const t = useTranslations("Account");

  return (
    <main className={styles.mainContainer}>
      <div className={styles.entrepriseNameContainer}>
        <EnterpriseNameElement />
      </div>

      <section className={styles.titleContainer}>
        <h1>{navT("accountOption1")}</h1>

        <article>
          <p>{navT("account")}</p>

          <Image
            src={"/img/_reusable/chevron-right-blue.svg"}
            alt="Chevron"
            width={7.28}
            height={12}
          />

          <p>{navT("accountOption1")}</p>
        </article>

        <h2 className={styles.clientDesktop}>{t("client")} #TW1500001</h2>
      </section>

      <h2 className={styles.clientMobile}>{t("client")} #TW1500001</h2>

      <AccountBalance />
      
      <AccountTable />
    </main>
  );
};

export default AccountComponent;

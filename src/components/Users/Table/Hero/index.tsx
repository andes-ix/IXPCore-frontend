import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
interface IProps {
  setShowModalAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserListTableHero = ({ setShowModalAddUser }: IProps) => {
  const t = useTranslations("Users.UsersList.Table");

  return (
    <section className={styles.sectionContainer}>
      <h2>{t("title")}</h2>
      <h3>{t("subtitle")}</h3>

      <article className={styles.searchAndAddSection}>
        <div className={styles.searchContainer}>
          <Image
            src={"/img/_reusable/search.svg"}
            alt="Search"
            width={20}
            height={20}
          />

          <input type="text" placeholder={t("search")} />
        </div>

        <div className={styles.addUserContainer}>
          <button onClick={() => setShowModalAddUser(true)}>
            {t("addUser")}
          </button>
        </div>
      </article>
    </section>
  );
};

export default UserListTableHero;

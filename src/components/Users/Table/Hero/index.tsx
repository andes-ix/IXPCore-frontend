import Image from "next/image";
import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { InputEvent } from "@constants/customTypes";
interface IProps {
  setShowModalAddUser: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const UserListTableHero = (params: IProps) => {
  const { setShowModalAddUser, setSearchTerm } = params;
  const [inputValue, setInputValue] = useState("");

  const t = useTranslations("Users.UsersList.Table");

  const handleSearchChange = (event: InputEvent) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue, setSearchTerm]);

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

          <input
            type="text"
            placeholder={t("search")}
            value={inputValue}
            onChange={handleSearchChange}
          />
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

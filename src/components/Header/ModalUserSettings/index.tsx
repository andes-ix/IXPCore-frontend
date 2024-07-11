import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link } from "src/navigation";

const ModalUserSettings = () => {
  const t = useTranslations("Navbar.Modal");

  return (
    <section className={styles.sectionContainer}>
      <article>
        <Image src={"/img/header/user.svg"} alt="User" width={45} height={45} />

        <div>
          <h2>Juan Hernández</h2>
          <p>Supervisor</p>
        </div>
      </article>

      <Link href="#">
        <Image
          src={"/img/header/user-icon.svg"}
          alt="User"
          width={14}
          height={18}
        />
        {t("profileIfo")}
      </Link>

      <Link href="#" className={styles.logout}>
        <Image
          src={"/img/header/logout-icon.svg"}
          alt="User"
          width={14}
          height={18}
        />
        {t("logout")}
      </Link>
    </section>
  );
};

export default ModalUserSettings;

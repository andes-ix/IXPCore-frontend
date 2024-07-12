import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Link, useRouter } from "src/navigation";

const ModalUserSettings = () => {
  const t = useTranslations("Navbar.Modal");
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("user");

    router.replace("/login");
  };

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

      <button className={styles.logout} onClick={handleLogout}>
        <Image
          src={"/img/header/logout-icon.svg"}
          alt="User"
          width={14}
          height={18}
        />
        {t("logout")}
      </button>
    </section>
  );
};

export default ModalUserSettings;

import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";

interface IProps {
  setShowModalAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddUser = ({ setShowModalAddUser }: IProps) => {
  const t = useTranslations("Users.AddUser");

  return (
    <section className={styles.sectionContainer}>
      <article>
        <h2>{t("title")}</h2>

        <form>
          <section>
            <article>
              <div>
                <label htmlFor="idUser">{t("idUser")}</label>
                <input type="text" name="idUser" id="" />
              </div>

              <div>
                <label htmlFor="country">{t("country")}</label>
                <select name="country"></select>
              </div>

              <div>
                <label htmlFor="email">{t("email")}</label>
                <input type="text" name="email" placeholder="example@pit.net" />
              </div>

              <div>
                <p>{t("permissions")}</p>
                <label htmlFor="role">{t("role")}</label>
                <select name="role"></select>
              </div>
            </article>

            <article>
              <div>
                <label htmlFor="fullName">{t("fullName")}</label>
                <input type="text" name="fullName" id="" />
              </div>

              <div>
                <label>ㅤ</label>
                <input type="text" name="" id="" />
              </div>

              <div>
                <label htmlFor="charge">{t("charge")}</label>
                <input type="text" name="charge" id="" />
              </div>
            </article>
          </section>

          <div className={styles.buttonsContainer}>
            <button type="button" onClick={() => setShowModalAddUser(false)}>
              {t("cancel")}
            </button>
            <button>{t("save")}</button>
          </div>
        </form>
      </article>
    </section>
  );
};

export default ModalAddUser;

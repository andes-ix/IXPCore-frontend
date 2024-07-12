import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import countries from "../countries.json";
import roles from "../roles.json";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

interface IProps {
  handleSubmit: any;
  inputValue: any;
  handleChange: any;
  handleChangePhone: any
  setShowModalAddUser: any
}

const FormAddUserDesktop = (params: IProps) => {
  const { handleSubmit, inputValue, handleChange, handleChangePhone, setShowModalAddUser } = params;
  const t = useTranslations("Users.AddUser");

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <section>
        <article>
          <div>
            <label htmlFor="id">{t("idUser")}</label>
            <input
              type="text"
              name="id"
              required
              value={inputValue.id}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="country">{t("country")}</label>

            <select
              name="country"
              required
              value={inputValue.country.code}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                {t("countryPlaceholder")}
              </option>

              {countries.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.text}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="email">{t("email")}</label>

            <input
              type="text"
              name="email"
              placeholder="example@pit.net"
              required
              value={inputValue.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type="button">{t("permissions")}</button>

            <label htmlFor="role">{t("role")}</label>

            <select
              name="role"
              required
              value={inputValue.role}
              onChange={handleChange}
            >
              <option value="" disabled hidden>
                {t("rolePlaceholder")}
              </option>

              {roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </div>
        </article>

        <article>
          <div>
            <label htmlFor="name">{t("fullName")}</label>

            <input
              type="text"
              name="name"
              required
              value={inputValue.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>ㅤ</label>

            <PhoneInput
              defaultCountry={"ar"}
              value={inputValue.phone}
              onChange={handleChangePhone}
              className={styles.phoneInput}
              placeholder="(0) 053 555 555"
            />
          </div>

          <div>
            <label htmlFor="charge">{t("charge")}</label>
            <input
              type="text"
              name="charge"
              required
              value={inputValue.charge}
              onChange={handleChange}
            />
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
  );
};

export default FormAddUserDesktop;

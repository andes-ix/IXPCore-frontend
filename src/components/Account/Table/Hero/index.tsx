import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface IProps {
  dataType: "General" | "Bill" | "Payments";
  setDataType: React.Dispatch<
    React.SetStateAction<"General" | "Bill" | "Payments">
  >;
}

const AccountTableHero = ({ dataType, setDataType }: IProps) => {
  const t = useTranslations("Account.Table");

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.titleContainer}>
        <div>
          <h2>{t("title")}</h2>
          <h3>{t("subtitle")}</h3>
        </div>

        <button>
          <Image
            src={"/img/_reusable/download.svg"}
            alt="Download"
            width={18}
            height={18}
          />
          {t("download")}
        </button>
      </article>

      <article className={styles.filterContainer}>
        <div>
          <input type="text" placeholder="13 Mar, 2024 to 21 Mar, 2024" />
          <button>
            <Image
              src={"/img/_reusable/filter.svg"}
              alt="Filter"
              width={18}
              height={18}
            />
          </button>
        </div>

        <div>
          <button
            onClick={() => setDataType("General")}
            className={dataType === "General" ? styles.activeBtn : ""}
          >
            {t("generalButton")}
          </button>
          <button
            onClick={() => setDataType("Bill")}
            className={dataType === "Bill" ? styles.activeBtn : ""}
          >
            {t("billsButton")}
          </button>
          <button
            onClick={() => setDataType("Payments")}
            className={dataType === "Payments" ? styles.activeBtn : ""}
          >
            {t("paymentsButton")}
          </button>
        </div>
      </article>
    </section>
  );
};

export default AccountTableHero;

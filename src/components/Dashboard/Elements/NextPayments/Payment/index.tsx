import styles from "./styles.module.scss";

interface IProps {
  payment: {
    date: Date;
    enterprise: string;
    service: string;
  };
  locale: "es" | "en";
}

interface IGetMonth {
  es: { [key: number]: string };
  en: { [key: number]: string };
}
const Payment = ({ payment, locale }: IProps) => {

  const getMonth: IGetMonth = {
    es: {
      0: "Ene",
      1: "Feb",
      2: "Mar",
      3: "Abr",
      4: "May",
      5: "Jun",
      6: "Jul",
      7: "Ago",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dic",
    },
    en: {
      0: "Jan",
      1: "Feb",
      2: "Mar",
      3: "Apr",
      4: "May",
      5: "June",
      6: "July",
      7: "Aug",
      8: "Sep",
      9: "Oct",
      10: "Nov",
      11: "Dec",
    },
  };

  return (
    <article className={styles.articleContainer}>
      <div className={styles.dateContainer}>
        <h4>{payment.date.getDate()}</h4>

        <p>{getMonth[locale][payment.date.getMonth() as number]}</p>
      </div>

      <div className={styles.serviceContainer}>
        <p>{payment.service}</p>
        <h4>{payment.enterprise}</h4>
      </div>
    </article>
  );
};

export default Payment;

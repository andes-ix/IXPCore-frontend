import CustomCalendar from "./Calendar";
import styles from "./styles.module.scss";
import Payment from "./Payment";
import Notification from "./Notification";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const NextPayments = () => {
  const t = useTranslations("Dashboard.Elements.NextPayments");
  const locale = (usePathname().split("/")[1] || "es") as "en" | "es";

  const nextPayments = [
    {
      date: new Date("2024/07/3"),
      enterprise: "Finanzas PIT",
      service: "[SERV-0010] Puerta a Conexión 10Gbps - Pago mensual",
    },
    {
      date: new Date("2024/08/14"),
      enterprise: "Finanzas PIT",
      service: "[SERV-0010] Puerta a Conexión 10Gbps - Pago mensual",
    },
    {
      date: new Date("2024/09/28"),
      enterprise: "Finanzas PIT",
      service: "[SERV-0010] Puerta a Conexión 10Gbps - Pago mensual",
    },
    {
      date: new Date("2024/10/31"),
      enterprise: "Finanzas PIT",
      service: "[SERV-0010] Puerta a Conexión 10Gbps - Pago mensual",
    },
  ];

  return (
    <section className={styles.sectionContainer}>
      <article className={styles.flexContainer}>
        <div className={styles.titleAndCalendarContainer}>
          <h2>{t("title")}</h2>

          <CustomCalendar
            locale={locale}
            nextDates={nextPayments.map((p) => p.date)}
          />
        </div>

        <div className={styles.paymentsContainer}>
          {nextPayments.map((p, i) => {
            return <Payment key={i} payment={p} locale={locale} />;
          })}
        </div>
      </article>

      <Notification />
    </section>
  );
};

export default NextPayments;

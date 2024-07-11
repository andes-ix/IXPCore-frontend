"use client";

import Calendar from "react-calendar";
import "./Calendar.css";

interface IProps {
  locale: "es" | "en";
  nextDates: Date[];
}

const CustomCalendar = ({ locale, nextDates }: IProps) => {
  const tileContent = ({ date, view }: { date: Date; view: string }) => {
    const isSameDay = (date1: Date, date2: Date) => {
      return (
        date1.getFullYear() === date2.getFullYear() &&
        date1.getMonth() === date2.getMonth() &&
        date1.getDate() === date2.getDate()
      );
    };

    if (view === "month") {
      const isMarked = nextDates.some((markedDate) =>
        isSameDay(markedDate, date)
      );

      return isMarked ? (
        <div className="marked-day">{date.getDate()}</div>
      ) : null;
    }
  };

  return (
    <>
      <Calendar
        // onChange={setValue}
        // value={value}
        locale={locale}
        minDetail="month"
        maxDetail="month"
        tileContent={tileContent}
      />
    </>
  );
};

export default CustomCalendar;

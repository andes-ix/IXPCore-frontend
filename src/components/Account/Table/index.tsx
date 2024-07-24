"use client";

import styles from "./styles.module.scss";
import AccountTableHero from "./Hero";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import GlobalTableFooter from "@components/Table/Footer";

import bills from "./bills.json";
import general from "./general.json";
import payments from "./payments.json";

const AccountTable = () => {
  const [dataType, setDataType] = useState<"General" | "Bill" | "Payments">(
    "General"
  );
  const [data, setData] = useState<any>(bills);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (dataType === "General") {
      setData(general);
      setCurrentPage(1);
    }
    if (dataType === "Bill") {
      setData(bills);
      setCurrentPage(1);
    }
    if (dataType === "Payments") {
      setData(payments);
      setCurrentPage(1);
    }
  }, [dataType]);

  const dataPerPage = 10;
  const indexOfLastElement = currentPage * dataPerPage;
  const indexOfFirstElement = indexOfLastElement - dataPerPage;

  const currentData = data.slice(indexOfFirstElement, indexOfLastElement);
  const totalPages = Math.ceil(data.length / dataPerPage);

  const t = useTranslations(`Account.Table.${dataType}`);

  const getStatusClassName: any = {
    Pendiente: styles.pending,
    Pagado: styles.paid,
    Revertido: styles.reverted,
    Parcial: styles.uncompleted,
    "Sin asociar": styles.pending,
    Asociado: styles.paid,
  };

  return (
    <div>
      <AccountTableHero setDataType={setDataType} dataType={dataType} />

      <section className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>{t("column1")}</th>
              <th>{t("column2")}</th>
              <th>{t("column3")}</th>
              <th>{t("column4")}</th>
              <th>{t("column5")}</th>
              {dataType !== "Payments" && <th>{t("column6")}</th>}
            </tr>
          </thead>

          <tbody>
            {currentData.map((el: any, i: number) => {
              return (
                <tr
                  className={`
                    ${i % 2 === 0 ? styles.evenRow : styles.oddRow} 
                    ${dataType === "General" && !el.payment && styles.redRow}
                  `}
                  key={i}
                >
                  {dataType === "General" && (
                    <>
                      <td className={styles.movementNumber}>{el.number}</td>
                      <td>{el.date}</td>
                      <td>{el.description}</td>
                      <td>{el.charge}</td>
                      <td>{el.payment}</td>
                      <td className={!el.payment ? styles.redBalance : ""}>
                        {el.balance}
                      </td>
                    </>
                  )}

                  {dataType === "Bill" && (
                    <>
                      <td className={styles.movementNumber}>{el.number}</td>
                      <td>{el.emission}</td>
                      <td>{el.description}</td>
                      <td>{el.dueDate}</td>
                      <td>{el.total}</td>
                      <td>
                        <div
                          className={`${styles.status} ${
                            getStatusClassName[el.status]
                          }`}
                        >
                          <div />
                          {el.status}
                        </div>
                      </td>
                    </>
                  )}

                  {dataType === "Payments" && (
                    <>
                      <td className={styles.movementNumber}>{el.number}</td>
                      <td>{el.date}</td>
                      <td>{el.bank}</td>
                      <td>{el.total}</td>
                      <td>
                        {" "}
                        <div
                          className={`${styles.status} ${
                            getStatusClassName[el.status]
                          }`}
                        >
                          <div />
                          {el.status}
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <GlobalTableFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default AccountTable;

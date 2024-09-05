import React, { useState } from "react";

import { Text } from "Common/Components/Text/textComponent";

import { ToastContainer } from "react-toastify";
import { Title } from "Common/Components/Title/titleComponent";
import { BLUE10, GREY150 } from "Common/constants/colors";

import Flatpickr from "react-flatpickr";
import GeneralTableComponent from "./GeneralTableComponent";
import InvoiceTableComponent from "./InvoiceTableComponent";
import PaymentTableComponent from "./paymentTableComponent";
import { tableOptionEnum } from "Common/constants/tableOption.enum";

const ListCount = () => {
  const [showInvoiceTable, setShowInvoiceTable] = useState<boolean>(false);
  const [showPaymentTable, setShowPaymentTable] = useState<boolean>(false);
  const [showGeneralTable, setShowGeneralTable] = useState<boolean>(true);

  const handleShowOptionTable = (optionTable: string) => {
    switch (optionTable) {
      case tableOptionEnum.GENERAL:
        setShowGeneralTable(true);
        setShowInvoiceTable(false);
        setShowPaymentTable(false);
        break;
      case tableOptionEnum.INVOICE:
        setShowGeneralTable(false);
        setShowInvoiceTable(true);
        setShowPaymentTable(false);
        break;
      case tableOptionEnum.PAYMENT:
        setShowGeneralTable(false);
        setShowInvoiceTable(false);
        setShowPaymentTable(true);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div className="p-4">
        <ul className="flex flex-wrap items-center gap-2 mb-3 text-sm font-normal justify-end pt-4 ">
          <li className=" relative before:content-['\ea54'] before:font-remix before:ltr:-right-1 before:rtl:-left-1 before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:rtl:rotate-180 before:text-[#168EEA] dark:before:text-zink-200">
            <a href="#!" className="text-slate-500 dark:text-zink-200">
              <Text size={"medium"} text={"Cuenta"} color={BLUE10}></Text>
            </a>
          </li>
          <li className="text-slate-700 dark:text-zink-100">
            <Text
              size={"medium"}
              text={"Estado de cuenta"}
              color={BLUE10}
            ></Text>
          </li>
        </ul>
        <Title
          size={"medium"}
          text={"Estado de cuenta"}
          bold={"normal"}
          color={GREY150}
        />
        <Title
          size={"normal"}
          text={"Cliente #TW1500001"}
          bold={"bold"}
          color={BLUE10}
          className="pb-6"
        />

        <div className="card ">
          <div className="card-body">
            <div className="grid grid-cols-1 gap-5 2xl:grid-cols-12">
              <div className="2xl:col-span-5 pt-4">
                <Title
                  size={"normal-xl"}
                  text={"Balance"}
                  bold={"normal"}
                  color={GREY150}
                />
                <h5
                  className="mb-1"
                  style={{
                    color: "#51626E",
                    fontSize: "22px",
                  }}
                >
                  S/. 3127,00
                  <small className="font-normal text-slate-500 dark:text-zink-200">
                    / mes
                  </small>
                </h5>
                <p
                  className="text-slate-500 dark:text-zink-200"
                  style={{
                    color: "#51626E",
                    fontSize: "12px",
                    fontWeight: "200",
                  }}
                >
                  Valor presentado en base (Sol)
                </p>
              </div>
              <div className="2xl:col-span-5 2xl:col-start-8">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">
                          Detracción pendiente
                        </td>
                        <td
                          className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}
                        >
                          S/. 1127,00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">
                          Total deuda
                        </td>
                        <td
                          className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}
                        >
                          S/. 53127,00
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">
                          Fecha de vencimiento
                        </td>
                        <td
                          className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}
                        >
                          05 de Abril 2024
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Title
          size={"normal-xl"}
          text={"Últimos movimientos"}
          bold={"normal"}
          color={GREY150}
        />
        <div className="pt-2 pb-1">
          <p className={`text-[#8A8F9C] text-base `}>
            Visualiza el detalle de tus facturas y pagos
          </p>
        </div>

        <ToastContainer closeButton={false} limit={1} />
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="" id="usersTable">
              <div className="!py-3.5 card-body">
                <form action="#!">
                  <div className="flex justify-between">
                    <div
                      className="relative pb-5"
                      style={{
                        width: "21%",
                      }}
                    >
                      <Flatpickr
                        options={{
                          mode: "range",
                          dateFormat: "d M, Y",
                        }}
                        placeholder="Select Date"
                        className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                      />
                    </div>

                    <div className="flex gap-3 h-10">
                      <button
                        type="button"
                        className={`${
                          showGeneralTable
                            ? "text-blue-500  bg-white"
                            : "text-blue-500"
                        } btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
                        onClick={() => {
                          handleShowOptionTable(tableOptionEnum.GENERAL);
                        }}
                      >
                        <span className="align-middle">General</span>
                      </button>
                      <button
                        type="button"
                        className={`${
                          showInvoiceTable
                            ? "text-blue-500  bg-white"
                            : "text-blue-500"
                        } btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
                        onClick={() => {
                          handleShowOptionTable(tableOptionEnum.INVOICE);
                        }}
                      >
                        <span className="align-middle">Facturas</span>
                      </button>
                      <button
                        type="button"
                        className={`${
                          showPaymentTable
                            ? "text-blue-500  bg-white"
                            : "text-blue-500"
                        } btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
                        onClick={() => {
                          handleShowOptionTable(tableOptionEnum.PAYMENT);
                        }}
                      >
                        <span className="align-middle">Pagos</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {showGeneralTable && <GeneralTableComponent />}
            {showInvoiceTable && <InvoiceTableComponent />}
            {showPaymentTable && <PaymentTableComponent />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListCount;

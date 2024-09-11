import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import Flatpickr from "react-flatpickr";
import { Text } from "Common/Components/Text/textComponent";
import { ToastContainer } from "react-toastify";
import { Title } from "Common/Components/Title/titleComponent";
import { BLUE10, GREY10, GREY150 } from "Common/constants/colors";
import GeneralTableComponent from "./GeneralTableComponent";
import InvoiceTableComponent from "./InvoiceTableComponent";
import PaymentTableComponent from "./paymentTableComponent";
import { tableOptionEnum } from "Common/constants/tableOption.enum";
import { Download, Filter, X } from "lucide-react";
import CustomDropDownComponent from "Common/Components/CustomDropDown/customDropDownComponent";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";

import { getBalanceDetail as onGetBalanceDetail } from "slices/thunk";

const ListCount = () => {
  const dispatch = useDispatch<any>();
  const datePickerRef = useRef<Flatpickr | null>(null);
  const [showInvoiceTable, setShowInvoiceTable] = useState<boolean>(false);
  const [showPaymentTable, setShowPaymentTable] = useState<boolean>(false);
  const [showGeneralTable, setShowGeneralTable] = useState<boolean>(true);
  const [daysSelecteds, setDaysSelecteds] = useState<string[] | undefined>(
    undefined
  );
  const [balanceDetail, SetBalanceDetail] = useState<any>();

  const selectDataList = createSelector(
    (state: any) => state.GeneralBalances,
    (data) => ({
      balanceDetailData: data.balanceDetail,
    })
  );

  const { balanceDetailData } = useSelector(selectDataList);

  // Get Data
  useEffect(() => {
    dispatch(onGetBalanceDetail());
  }, [dispatch]);

  useEffect(() => {
    SetBalanceDetail(balanceDetailData);
  }, [balanceDetailData]);

  const handleDateChange = (dates: string[]) => {
    if (dates.length === 2) {
      setDaysSelecteds([dates[0], dates[1]]);
    } else {
      setDaysSelecteds([]);
    }
  };

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

  const [lastMonthIsSelect, setLastMonthIsSelect] = useState(false);
  const [presentMonthIsSelect, setPresentMonthIsSelect] = useState(false);

  const handleCheckboxLastMonthChange = (e: any) => {
    e.preventDefault();
    const dataMoment = moment().subtract(1, "months");
    const firtDateLastMonth = dataMoment.startOf("month").toDate();
    const lastDayLastMonth = dataMoment.endOf("month").toDate();
    setDaysSelecteds([String(firtDateLastMonth), String(lastDayLastMonth)]);
    setPresentMonthIsSelect(false);
    setLastMonthIsSelect(!lastMonthIsSelect);
  };

  const handleCheckboxPresentMonthChange = (e: any) => {
    e.preventDefault();
    const dataMoment = moment();
    const firtDatePresentMonth = dataMoment.startOf("month").toDate();
    const lastDayPresentMonth = dataMoment.endOf("month").toDate();
    setDaysSelecteds([
      String(firtDatePresentMonth),
      String(lastDayPresentMonth),
    ]);

    setLastMonthIsSelect(false);
    setPresentMonthIsSelect(!presentMonthIsSelect);
  };

  const clearDates = () => {
    setDaysSelecteds(undefined); // Limpiamos el estado
    if (datePickerRef.current) {
      datePickerRef.current.flatpickr.clear(); // Limpiamos el input visualmente
    }
    setLastMonthIsSelect(false);
    setPresentMonthIsSelect(false);
  };

  return (
    <React.Fragment>
      <div className="pl-1 pr-10 pb-4 pt-4">
        <ul className="flex flex-wrap items-center gap-2 mb-3 text-sm font-normal justify-end pt-4 pr-2">
          <li className="relative before:content-['\ea54'] before:font-remix before:ltr:-right-1 before:rtl:-left-1 before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:rtl:rotate-180 before:text-[#168EEA] dark:before:text-zink-200">
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
        <div className="pl-5">
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
        </div>

        <div className="card ml-5 mr-2">
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
                  style={{ color: "#51626E", fontSize: "22px" }}
                >
                  S/. {Number(balanceDetail?.saldo_total).toFixed(2) || 0}
                  <small className="font-normal text-slate-500 dark:text-zink-200">
                    {" "}
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
                  Valor presentado en base ({balanceDetail?.currency})
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
                          S/.{" "}
                          {Number(balanceDetail?.detraccion_total).toFixed(2) ||
                            0}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">
                          Total deuda
                        </td>
                        <td
                          className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}
                        >
                          S/.{" "}
                          {Number(balanceDetail?.deuda_total).toFixed(2) || 0}
                        </td>
                      </tr>
                      <tr>
                        <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">
                          Fecha de vencimiento
                        </td>
                        <td
                          className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}
                        >
                          {balanceDetail?.first_date}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between pl-5 pt-5">
          <div className="leading-5">
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
          </div>
          <span className="cursor-pointer flex gap-2 pr-10">
            <Download className="" size={20} color={BLUE10} />
            <Text
              className=""
              size={"medium"}
              text={"Descargar información"}
              bold={"bold"}
              color={BLUE10}
            />
          </span>
        </div>
        <ToastContainer closeButton={false} limit={1} />
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="" id="usersTable">
              <div className="!py-3.5 card-body">
                <form action="#!">
                  <div className="flex justify-between pl-5 pr-10">
                    <div
                      className="relative pb-5 flex gap-1 pt-2"
                      style={{ width: "21%" }}
                    >
                      <div className="relative w-full">
                        <Flatpickr
                          options={{
                            mode: "range",
                            dateFormat: "d/m/Y",
                          }}
                          ref={datePickerRef}
                          value={daysSelecteds || []}
                          onChange={(dates: Date[]) => {
                            handleDateChange(
                              dates.map((date) => date.toISOString())
                            );
                          }}
                          placeholder="Select Date"
                          className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 w-full"
                        />

                        {daysSelecteds && daysSelecteds.length > 0 && (
                          <button
                            onClick={clearDates}
                            className="absolute right-1 top-[19px] transform -translate-y-1/2"
                            title="Clear dates"
                          >
                            <X size={15} />
                          </button>
                        )}
                      </div>

                      <CustomDropDownComponent
                        trigger={
                          <span
                            onClick={(e) => {
                              e.preventDefault();
                            }}
                            className={`bg-[${BLUE10}] cursor-pointer w-12 h-9 flex items-center justify-center rounded-md`}
                          >
                            <Filter color="white" size={15} />
                          </span>
                        }
                        triggerClassName="inline-block p-0 transition-all duration-200 ease-linear bg-topbar rounded-full text-topbar-item dropdown-toggle btn hover:bg-topbar-item-bg-hover hover:text-topbar-item-hover group-data-[topbar=dark]:text-topbar-item-dark group-data-[topbar=dark]:bg-topbar-dark group-data-[topbar=dark]:hover:bg-topbar-item-bg-hover-dark group-data-[topbar=dark]:hover:text-topbar-item-hover-dark group-data-[topbar=brand]:bg-topbar-brand group-data-[topbar=brand]:hover:bg-topbar-item-bg-hover-brand group-data-[topbar=brand]:hover:text-topbar-item-hover-brand group-data-[topbar=dark]:dark:bg-zink-700 group-data-[topbar=dark]:dark:hover:bg-zink-600 group-data-[topbar=brand]:text-topbar-item-brand group-data-[topbar=dark]:dark:hover:text-zink-50 group-data-[topbar=dark]:dark:text-zink-200"
                        body={
                          <div className="rounded-md h-24 ">
                            <Text
                              text={"Filtros predeterminados"}
                              color={GREY150}
                              bold={"bold"}
                              size={"medium-sm"}
                            />
                            <div className="flex flex-col gap-3 pt-5 pb-4">
                              <div className="flex items-center gap-2">
                                <input
                                  id="checkboxDefault22"
                                  className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-[#1BD699] checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500 checked:disabled:bg-green-400 checked:disabled:border-green-400"
                                  type="checkbox"
                                  value=""
                                  checked={presentMonthIsSelect}
                                  onChange={handleCheckboxPresentMonthChange}
                                />
                                <Text
                                  size={"medium-sm"}
                                  color={GREY10}
                                  text={"Mes actual"}
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <input
                                  id="checkboxDefault22"
                                  className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-[#1BD699] checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500 checked:disabled:bg-green-400 checked:disabled:border-green-400"
                                  type="checkbox"
                                  value=""
                                  checked={lastMonthIsSelect}
                                  onChange={handleCheckboxLastMonthChange}
                                />
                                <Text
                                  size={"medium-sm"}
                                  color={GREY10}
                                  text={"Mes anterior"}
                                />
                              </div>
                            </div>
                          </div>
                        }
                        bodyClassName="absolute z-50 p-4 ltr:text-left rtl:text-right bg-white rounded-md shadow-md dropdown-menu min-w-[12rem] dark:bg-zink-600"
                      />
                    </div>

                    <div className="flex gap-3 h-10">
                      <button
                        type="button"
                        className={`${
                          showGeneralTable
                            ? "btn text-white bg-blue-600"
                            : "btn text-blue-500"
                        } border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
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
                            ? "btn text-white bg-blue-600"
                            : "btn text-blue-500"
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
                            ? "btn text-white bg-blue-600"
                            : "btn text-blue-500"
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
            {showGeneralTable && (
              <GeneralTableComponent daysSelecteds={daysSelecteds} />
            )}
            {showInvoiceTable && (
              <InvoiceTableComponent daysSelecteds={daysSelecteds} />
            )}
            {showPaymentTable && (
              <PaymentTableComponent daysSelecteds={daysSelecteds} />
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListCount;

import React, { useEffect, useMemo, useState } from "react";
import CustomTableContainer from "Common/Components/CustomTableContainer/CustomTableContainer";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import {
  getBalanceDataTableStruct as onGetDataTableStruct,
  getBalanceDataTableView as onGeDataTableView,
} from "slices/thunk";
import { transformToColumns } from "Common/utils";
import { tableOptionEnum } from "Common/constants/tableOption.enum";
import DrawerInvoiceComponent from "./DrawerInvoiceComponent";
import DrawerPaymentComponent from "./DrawerPaymentComponent";
interface IDataTableView {
  size: number;
  data: any[];
}

interface GeneralTableComponentProps {
  daysSelecteds?: string[];
  setTablePositionPage: any;
}

const GeneralTableComponent: React.FC<GeneralTableComponentProps> = (
  props: React.PropsWithChildren<GeneralTableComponentProps>
) => {
  const { daysSelecteds, setTablePositionPage } = props;
  const dispatch = useDispatch<any>();

  const selectDataList = createSelector(
    (state: any) => state.GeneralBalances,
    (data) => ({
      dataTableView: data.balanceDataView,
      dataTableStruct: data.balanceDataStruct,
    })
  );

  const { dataTableView, dataTableStruct } = useSelector(selectDataList);

  const [dataTableStructToList, setDataTableStruct] = useState({});
  const [dataTableViewToList, setDataTableView] = useState<IDataTableView>();
  const [dataTablePage, setDataTablePage] = useState<number>(0);

  const [globalFilter, setGlobalFilter] = useState("");
  // Modal state
  const [isInvoiceDrawerOpen, setIsInvoiceDrawerOpen] = useState(false);
  const [isPaymentDrawerOpen, setIsPaymentDrawerOpen] = useState(false);

  const [itemDetail, setItemDetail] = useState<Object>({});

  const handleInvoiceDrawerOpen = () => {
    setIsInvoiceDrawerOpen(!isInvoiceDrawerOpen);
  };

  const handlePaymentDrawerOpen = () => {
    setIsPaymentDrawerOpen(!isPaymentDrawerOpen);
  };

  // Get Data
  useEffect(() => {
    dispatch(onGetDataTableStruct());
    dispatch(onGeDataTableView({ page: dataTablePage, daysSelecteds }));
  }, [dispatch, daysSelecteds, dataTablePage]);

  useEffect(() => {
    setDataTableStruct(dataTableStruct);
    setDataTableView(dataTableView);
  }, [dataTableView, dataTableStruct]);

  const onNextPage = () => {
    const tablePosition = dataTablePage + 1;
    setTablePositionPage(tablePosition);
    setDataTablePage(tablePosition);
    dispatch(onGeDataTableView({ page: dataTablePage, daysSelecteds }));
  };

  const onPreviousPage = () => {
    if (dataTablePage > 0) {
      const tablePosition = dataTablePage - 1;
      setTablePositionPage(tablePosition);
      setDataTablePage(tablePosition);
      dispatch(onGeDataTableView({ page: dataTablePage, daysSelecteds }));
    }
  };

  const columns = useMemo(
    () =>
      transformToColumns(
        dataTableStructToList,
        tableOptionEnum.GENERAL,
        "number",
        async (event: React.MouseEvent<HTMLAnchorElement>, cellValue: any) => {
          event.preventDefault();
          const item = dataTableViewToList?.data?.find(
            (data) => String(data?.id) === String(cellValue)
          );
          if (item && item?.detail_modal) {
            setItemDetail(item?.detail_modal);
            if (item?.TYPE === "PAYMENT") setIsPaymentDrawerOpen(true);
            if (item?.TYPE === "INVOICE") setIsInvoiceDrawerOpen(true);
          }
        }
      ),
    [dataTableStructToList, dataTableViewToList]
  );

  return (
    <React.Fragment>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="" id="paymentsTable">
              <div className="card-body ">
                {dataTableViewToList?.data && (
                  <CustomTableContainer
                    isPagination={true}
                    columns={columns || []}
                    data={dataTableViewToList?.data || []}
                    customPageSize={10}
                    pagePosition={dataTablePage}
                    size={dataTableViewToList?.size}
                    onNextPage={onNextPage}
                    onPreviousPage={onPreviousPage}
                    isGlobalFilter={true}
                    globalFilter={globalFilter} // Pasa el valor del filtro global
                    onGlobalFilterChange={setGlobalFilter}
                    divclassName="overflow-x-auto"
                    tableclassName="w-full table-custom border-spacing-y-1 whitespace-nowrap"
                    theadclassName="text-left relative rounded-md bg-slate-100 dark:bg-zink-600 after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600"
                    thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold bg-[#F1F5F9] text-[#8A8F9C]"
                    tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5"
                    trclassName={`bg-[white] even:bg-[#F7FAFC] text-[#172B4D]`}
                    PaginationClassName="flex flex-col items-center mt-8 md:flex-row"
                  />
                )}
              </div>
            </div>
          </div>
          <DrawerInvoiceComponent
            handleDrawerOpen={handleInvoiceDrawerOpen}
            isDrawerOpen={isInvoiceDrawerOpen}
            itemDetail={itemDetail}
          />
          <DrawerPaymentComponent
            handleDrawerOpen={handlePaymentDrawerOpen}
            isDrawerOpen={isPaymentDrawerOpen}
            itemDetail={itemDetail}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GeneralTableComponent;

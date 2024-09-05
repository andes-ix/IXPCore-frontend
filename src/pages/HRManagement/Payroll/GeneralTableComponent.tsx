import React, { useEffect, useMemo, useState } from "react";
import CustomTableContainer from "Common/Components/CustomTableContainer/CustomTableContainer";
import { Search } from "lucide-react";

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
interface IDataTableView {
  size: number;
  data: any[];
}

const GeneralTableComponent = () => {
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Get Data
  useEffect(() => {
    dispatch(onGetDataTableStruct());
    dispatch(onGeDataTableView(dataTablePage));
  }, [dispatch]);

  useEffect(() => {
    setDataTableStruct(dataTableStruct);
    setDataTableView(dataTableView);
  }, [dataTableView, dataTableStruct]);

  const onNextPage = () => {
    const tablePosition = dataTablePage + 1;
    setDataTablePage(tablePosition);
    dispatch(onGeDataTableView(tablePosition));
  };

  const onPreviousPage = () => {
    if (dataTablePage > 0) {
      const tablePosition = dataTablePage - 1;
      setDataTablePage(tablePosition);
      dispatch(onGeDataTableView(tablePosition));
    }
  };

  const handleLinkClick = async (cellValue: any) => {
    setIsDrawerOpen(true);
  };

  const columns = useMemo(
    () =>
      transformToColumns(
        dataTableStructToList,
        tableOptionEnum.GENERAL,
        handleLinkClick
      ),
    [dataTableStructToList]
  );

  return (
    <React.Fragment>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="" id="paymentsTable">
              <div className="card-body ">
                {dataTableViewToList?.data &&
                dataTableViewToList?.data?.length > 0 ? (
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
                    tableclassName="w-full border-separate table-custom border-spacing-y-1 whitespace-nowrap"
                    theadclassName="text-left relative rounded-md bg-slate-100 dark:bg-zink-600 after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600"
                    thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold bg-[#F1F5F9] text-[#8A8F9C]"
                    tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5"
                    trclassName={`bg-[white] even:bg-[#F7FAFC]`} // Agrega esta clase para alternar los colores de las filas
                    PaginationClassName="flex flex-col items-center mt-8 md:flex-row"
                  />
                ) : (
                  <div className="noresult">
                    <div className="py-6 text-center">
                      <Search className="size-6 mx-auto text-sky-500 fill-sky-100 dark:sky-500/20" />
                      <h5 className="mt-2 mb-1">Sorry! No Result Found</h5>
                      <p className="mb-0 text-slate-500 dark:text-zink-200">
                        We've searched more than 199+ users We did not find any
                        users for you search.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <DrawerInvoiceComponent
            handleDrawerOpen={handleDrawerOpen}
            isDrawerOpen={isDrawerOpen}
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default GeneralTableComponent;

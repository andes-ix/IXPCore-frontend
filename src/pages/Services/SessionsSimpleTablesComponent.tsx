import React, { useEffect, useMemo, useState } from "react";
import CustomTableContainer from "Common/Components/CustomTableContainer/CustomTableContainer";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import {
  getServiceDataTableStruct as onGetDataTableStruct,
  getServiceDataTableView as onGeDataTableView,
} from "slices/thunk";
import { transformToColumns } from "Common/utils";
import { tableOptionEnum } from "Common/constants/tableOption.enum";
import { Search } from "lucide-react";
import { Text } from "Common/Components/Text/textComponent";
import { GREY100 } from "Common/constants/colors";

interface IDataTableView {
  size: number;
  data: any[];
}

const SessionSimpleTablesComponent = () => {
  const dispatch = useDispatch<any>();

  const selectDataList = createSelector(
    (state: any) => state.Services,
    (data) => ({
      dataTableView: data.serviceDataView,
      dataTableStruct: data.serviceDataStruct,
    })
  );

  const { dataTableView, dataTableStruct } = useSelector(selectDataList);

  const [dataTableStructToList, setDataTableStruct] = useState({});
  const [dataTableViewToList, setDataTableView] = useState<IDataTableView>();
  const [dataTablePage, setDataTablePage] = useState<number>(0);

  const [globalFilter, setGlobalFilter] = useState("");

  const filterSearchData = (e: any) => {
    setGlobalFilter(e.target.value);
  };
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
        "type_service_display",
        handleLinkClick
      ),
    [dataTableStructToList]
  );

  return (
    <React.Fragment>
      <div className="pr-4  pb-4">
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="pt-10" id="paymentsTable">
              <div className="card-body  ">
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
                    tableclassName="w-full table-custom border-separate border-spacing-y-1 whitespace-nowrap"
                    theadclassName="text-left relative rounded-md bg-slate-100 dark:bg-zink-600 after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600"
                    thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold bg-[#F8FAFE] text-[#8A8F9C]"
                    tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5"
                    trclassName={`bg-[#F1F5F9] even:bg-[none]`}
                    PaginationClassName="flex flex-col items-center mt-8 md:flex-row"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SessionSimpleTablesComponent;

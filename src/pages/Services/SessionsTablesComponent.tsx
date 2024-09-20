import React, { useEffect, useMemo, useState } from "react";
import CustomTableContainer from "Common/Components/CustomTableContainer/CustomTableContainer";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import {
  getSessionBGPDataTableStruct as onGetDataTableStruct,
  getSessionBGPIPV4DataTableView as onGetSessionBGPIPV4DataTableView,
  getSessionBGPIPV6DataTableView as onGetSessionBGPIPV6DataTableView,
} from "slices/thunk";
import { transformToColumns } from "Common/utils";
import { tableOptionEnum } from "Common/constants/tableOption.enum";
import { Text } from "Common/Components/Text/textComponent";
import { GREY100 } from "Common/constants/colors";

interface IDataTableView {
  size: number;
  data: any[];
}

interface SessionTablesProps {
  serviceType: string;
}

const SessionTablesComponent: React.FC<SessionTablesProps> = (
  props: React.PropsWithChildren<SessionTablesProps>
) => {
  const { serviceType } = props;
  const dispatch = useDispatch<any>();

  const selectDataList = createSelector(
    (state: any) => state.SessionBGP,
    (data) => ({
      dataTableViewIVP4: data.sessionBGPIPV4DataView,
      dataTableViewIVP6: data.sessionBGPIPV6DataView,
      dataTableStruct: data.sessionBGPDataStruct,
    })
  );

  const { dataTableViewIVP4, dataTableViewIVP6, dataTableStruct } =
    useSelector(selectDataList);

  const [dataTableStructToList, setDataTableStruct] = useState({});
  const [dataTableViewIPV4ToList, setDataTableViewIPV4] =
    useState<IDataTableView>();
  const [dataTableViewIPV6ToList, setDataTableViewIPV6] =
    useState<IDataTableView>();
  const [dataTablePage, setDataTablePage] = useState<number>(0);

  const [globalFilter, setGlobalFilter] = useState("");

  // Modal state
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Get Data
  useEffect(() => {
    dispatch(onGetDataTableStruct());
    dispatch(
      onGetSessionBGPIPV4DataTableView({
        page: dataTablePage,
        service: serviceType,
      })
    );
    dispatch(
      onGetSessionBGPIPV6DataTableView({
        page: dataTablePage,
        service: serviceType,
      })
    );
  }, [dispatch]);

  useEffect(() => {
    setDataTableStruct(dataTableStruct);
    setDataTableViewIPV4(dataTableViewIVP4);
    setDataTableViewIPV6(dataTableViewIVP6);
  }, [dataTableViewIVP4, dataTableViewIVP6, dataTableStruct]);

  const onNextPageIPV4 = () => {
    const tablePosition = dataTablePage + 1;
    setDataTablePage(tablePosition);
    dispatch(
      onGetSessionBGPIPV4DataTableView({
        page: tablePosition,
        service: serviceType,
      })
    );
  };

  const onPreviousPageIPV4 = () => {
    if (dataTablePage > 0) {
      const tablePosition = dataTablePage - 1;
      setDataTablePage(tablePosition);
      dispatch(
        onGetSessionBGPIPV4DataTableView({
          page: tablePosition,
          service: serviceType,
        })
      );
    }
  };

  const onNextPageIPV6 = () => {
    const tablePosition = dataTablePage + 1;
    setDataTablePage(tablePosition);
    dispatch(
      onGetSessionBGPIPV6DataTableView({
        page: tablePosition,
        service: serviceType,
      })
    );
  };

  const onPreviousPageIPV6 = () => {
    if (dataTablePage > 0) {
      const tablePosition = dataTablePage - 1;
      setDataTablePage(tablePosition);
      dispatch(
        onGetSessionBGPIPV6DataTableView({
          page: tablePosition,
          service: serviceType,
        })
      );
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
        "prefix_received",
        handleLinkClick
      ),
    [dataTableStructToList]
  );

  return (
    <React.Fragment>
      <div className="pr-4 pt-4 pb-4">
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="pt-10" id="paymentsTable">
              <Text text={"IPv4"} color={GREY100} size={"big"} />
              <div className="card-body pt-5 ">
                {dataTableViewIPV4ToList?.data && (
                  <CustomTableContainer
                    isPagination={true}
                    columns={columns || []}
                    data={dataTableViewIPV4ToList?.data || []}
                    customPageSize={10}
                    pagePosition={dataTablePage}
                    size={dataTableViewIPV4ToList?.size}
                    onNextPage={onNextPageIPV4}
                    onPreviousPage={onPreviousPageIPV4}
                    isGlobalFilter={true}
                    globalFilter={globalFilter} // Pasa el valor del filtro global
                    onGlobalFilterChange={setGlobalFilter}
                    divclassName="overflow-x-auto"
                    tableclassName="w-full table-custom border-separate border-spacing-y-1 whitespace-nowrap"
                    theadclassName="text-left relative rounded-md bg-slate-100 dark:bg-zink-600 after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600"
                    thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold bg-[#F8FAFE] text-[#8A8F9C]"
                    tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5"
                    trclassName={`bg-[white] even:bg-[#F7FAFC] text-center text-[#8A8F9C]`}
                    PaginationClassName="flex flex-col items-center mt-8 md:flex-row"
                  />
                )}
              </div>
            </div>
            <div className="pt-10" id="paymentsTable">
              <Text text={"IPv6"} color={GREY100} size={"big"} />
              <div className="card-body pt-5 ">
                {dataTableViewIPV6ToList?.data && (
                  <CustomTableContainer
                    isPagination={true}
                    columns={columns || []}
                    data={dataTableViewIPV6ToList?.data || []}
                    customPageSize={10}
                    pagePosition={dataTablePage}
                    size={dataTableViewIPV6ToList?.size}
                    onNextPage={onNextPageIPV6}
                    onPreviousPage={onPreviousPageIPV6}
                    isGlobalFilter={true}
                    globalFilter={globalFilter} // Pasa el valor del filtro global
                    onGlobalFilterChange={setGlobalFilter}
                    divclassName="overflow-x-auto"
                    tableclassName="w-full table-custom border-spacing-y-1 whitespace-nowrap"
                    theadclassName="text-left relative rounded-md bg-slate-100 dark:bg-zink-600 after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600"
                    thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold bg-[#F8FAFE] "
                    tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5"
                    trclassName={`bg-[white] even:bg-[#F7FAFC] text-center text-[#8A8F9C]`}
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

export default SessionTablesComponent;

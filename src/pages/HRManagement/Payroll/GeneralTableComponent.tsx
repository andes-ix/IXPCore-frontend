import React, { useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";
import CustomTableContainer from "Common/Components/CustomTableContainer/CustomTableContainer";
import { Search } from "lucide-react";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import {
  getUserList as onGetUserList,
  getGroupsList as onGetGroupList,
  getUserDataTableStruct as onGetUserDataTableStruct,
  getUserDataTableView as onGetUserDataTableView,
} from "slices/thunk";
interface IDataTableView {
  size: number;
  data: any[];
}

const GeneralTableComponent = () => {
  const dispatch = useDispatch<any>();

  const selectDataList = createSelector(
    (state: any) => state.Users,
    (data) => ({
      dataTableView: data.userDataView,
      dataTableStruct: data.userDataStruct,
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

  // Get Data
  useEffect(() => {
    dispatch(onGetUserList());
    dispatch(onGetGroupList());
    dispatch(onGetUserDataTableStruct());
    dispatch(onGetUserDataTableView(dataTablePage));
  }, [dispatch]);

  useEffect(() => {
    setDataTableStruct(dataTableStruct);
    setDataTableView(dataTableView);
  }, [dataTableView, dataTableStruct]);

  const onNextPage = () => {
    const tablePosition = dataTablePage + 1;
    setDataTablePage(tablePosition);
    console.log(tablePosition);
    dispatch(onGetUserDataTableView(tablePosition));
  };

  const onPreviousPage = () => {
    if (dataTablePage > 0) {
      const tablePosition = dataTablePage - 1;
      setDataTablePage(tablePosition);
      dispatch(onGetUserDataTableView(tablePosition));
    }
  };
  //

  const columns = useMemo(
    () => [
      {
        header: "ID usuario",
        accessorKey: "ID",
        enableColumnFilter: false,
        cell: (cell: any) => (
          <Link
            to="#!"
            className={`transition-all duration-150 ease-linear text-[#172B4D] hover:text-[#172B4D] user-id`}
          >
            {cell.getValue()}
          </Link>
        ),
      },
      {
        header: "Nombre completo",
        accessorKey: "first_name",
        enableColumnFilter: false,
        cell: (cell: any) => (
          <div className="flex items-center gap-2">
            <div className="grow">
              <h6 className="mb-1">
                <Link to="#!" className="name">
                  {cell.getValue()}
                </Link>
              </h6>
            </div>
          </div>
        ),
      },
      {
        header: "Teléfono",
        accessorKey: "phone",
        enableColumnFilter: false,
      },
      {
        header: "Correo electrónico",
        accessorKey: "email",
        enableColumnFilter: false,
      },

      {
        header: "Cargo",
        accessorKey: "job_position",
        enableColumnFilter: false,
      },

      {
        header: "Rol",
        accessorKey: "groups",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="p-4">
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="" id="paymentsTable">
              <div className="card-body ">
                {dataTableViewToList?.data &&
                dataTableViewToList?.data.length > 0 ? (
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
        </div>
      </div>
    </React.Fragment>
  );
};

export default GeneralTableComponent;

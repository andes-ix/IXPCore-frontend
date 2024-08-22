import React, { useCallback, useEffect, useMemo, useState } from "react";
import BreadCrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import TableContainer from "Common/TableContainer";
import Flatpickr from "react-flatpickr";
import moment from "moment";
import { Text } from "Common/Components/Text/textComponent";

// Icons
import {
  Search,
  Eye,
  Trash2,
  Plus,
  MoreHorizontal,
  FileEdit,
  ImagePlus,
} from "lucide-react";
import Modal from "Common/Components/Modal";
import DeleteModal from "Common/DeleteModal";

// Images
import dummyImg from "assets/images/users/user-dummy-img.jpg";

// react-redux
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";

import {
  getUserList as onGetUserList,
  addUserList as onAddUserList,
  updateUserList as onUpdateUserList,
  deleteUserList as onDeleteUserList,
} from "slices/thunk";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";
import { Title } from "Common/Components/Title/titleComponent";
import { BLUE10, GREY100, GREY150 } from "Common/constants/colors";

const ListView = () => {
  const dispatch = useDispatch<any>();

  const selectDataList = createSelector(
    (state: any) => state.Users,
    (user) => ({
      userList: user.userList,
    })
  );

  const { userList } = useSelector(selectDataList);
  const [user, setUser] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Get Data
  useEffect(() => {
    dispatch(onGetUserList());
  }, [dispatch]);

  useEffect(() => {
    setUser(userList);
  }, [userList]);

  // Delete Modal
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const deleteToggle = () => setDeleteModal(!deleteModal);

  // Delete Data
  const onClickDelete = (cell: any) => {
    setDeleteModal(true);
    if (cell.id) {
      setEventData(cell);
    }
  };

  const handleDelete = () => {
    if (eventData) {
      dispatch(onDeleteUserList(eventData.id));
      setDeleteModal(false);
    }
  };
  //

  // Update Data
  const handleUpdateDataClick = (ele: any) => {
    setEventData({ ...ele });
    setIsEdit(true);
    setShow(true);
  };

  // validation
  const validation: any = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      img: (eventData && eventData.img) || "",
      userId: (eventData && eventData.userId) || "",
      name: (eventData && eventData.name) || "",
      designation: (eventData && eventData.designation) || "",
      location: (eventData && eventData.location) || "",
      email: (eventData && eventData.email) || "",
      phoneNumber: (eventData && eventData.phoneNumber) || "",
      joiningDate: (eventData && eventData.joiningDate) || "",
      status: (eventData && eventData.status) || "",
    },
    validationSchema: Yup.object({
      img: Yup.string().required("Please Add Image"),
      name: Yup.string().required("Please Enter Name"),
      designation: Yup.string().required("Please Enter Designation"),
      location: Yup.string().required("Please Enter Location"),
      email: Yup.string().required("Please Enter Email"),
      phoneNumber: Yup.string().required("Please Enter Phone Number"),
      joiningDate: Yup.string().required("Please Enter Joining Date"),
      status: Yup.string().required("Please Enter Status"),
    }),

    onSubmit: (values) => {
      if (isEdit) {
        const updateUser = {
          id: eventData ? eventData.id : 0,
          ...values,
        };
        // update user
        dispatch(onUpdateUserList(updateUser));
      } else {
        const newUser = {
          ...values,
          id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
          userId:
            "#TW15000" +
            (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
        };
        // save new user
        dispatch(onAddUserList(newUser));
      }
      toggle();
    },
  });

  // Image
  const [selectedImage, setSelectedImage] = useState<any>();
  const handleImageChange = (event: any) => {
    const fileInput = event.target;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        validation.setFieldValue("img", e.target.result);
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  //
  const toggle = useCallback(() => {
    if (show) {
      setShow(false);
      setEventData("");
      setIsEdit(false);
      setSelectedImage("");
    } else {
      setShow(true);
      setEventData("");
      setSelectedImage("");
      validation.resetForm();
    }
  }, [show, validation]);

  // Search Data
  const filterSearchData = (e: any) => {
    const search = e.target.value;
    const keysToSearch = ["name", "designation", "location", "email", "status"];
    filterDataBySearch(userList, search, keysToSearch, setUser);
  };

  // columns
  //   const Status = ({ item }: any) => {
  //     switch (item) {
  //       case "Verified":
  //         return (
  //           <span className="px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent inline-flex items-center status">
  //             <CheckCircle className="size-3 mr-1.5" />
  //             {item}
  //           </span>
  //         );
  //       case "Waiting":
  //         return (
  //           <span className="px-2.5 py-0.5 inline-flex items-center text-xs font-medium rounded border bg-slate-100 border-transparent text-slate-500 dark:bg-slate-500/20 dark:text-zink-200 dark:border-transparent status">
  //             <Loader className="size-3 mr-1.5" />
  //             {item}
  //           </span>
  //         );
  //       case "Rejected":
  //         return (
  //           <span className="px-2.5 py-0.5 inline-flex items-center text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent status">
  //             <X className="size-3 mr-1.5" />
  //             {item}
  //           </span>
  //         );
  //       default:
  //         return (
  //           <span className="px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent inline-flex items-center status">
  //             <CheckCircle className="size-3 mr-1.5" />
  //             {item}
  //           </span>
  //         );
  //     }
  //   };

  const columns = useMemo(
    () => [
    
      {
        header: "ID usuario",
        accessorKey: "userId",
        enableColumnFilter: false,
        cell: (cell: any) => (
          <Link
            to="#!"
            className="transition-all duration-150 ease-linear text-custom-500 hover:text-custom-600 user-id"
          >
            {cell.getValue()}
          </Link>
        ),
      },
      {
        header: "Nombre completo",
        accessorKey: "name",
        enableColumnFilter: false,
        cell: (cell: any) => (
          <div className="flex items-center gap-2">
            {/* <div className="flex items-center justify-center size-10 font-medium rounded-full shrink-0 bg-slate-200 text-slate-800 dark:text-zink-50 dark:bg-zink-600">
              {cell.row.original.img ? (
                <img
                  src={cell.row.original.img}
                  alt=""
                  className="h-10 rounded-full"
                />
              ) : (
                cell
                  .getValue()
                  .split(" ")
                  .map((word: any) => word.charAt(0))
                  .join("")
              )}
            </div> */}
            <div className="grow">
              <h6 className="mb-1">
                <Link to="#!" className="name">
                  {cell.getValue()}
                </Link>
              </h6>
              {/* <p className="text-slate-500 dark:text-zink-200">
                {cell.row.original.designation}
              </p> */}
            </div>
          </div>
        ),
      },
      {
        header: "Teléfono",
        accessorKey: "phoneNumber",
        enableColumnFilter: false,
      },
      {
        header: "Correo electrónico",
        accessorKey: "email",
        enableColumnFilter: false,
      },
    
      {
        header: "Cargo",
        accessorKey: "joiningDate",
        enableColumnFilter: false,
      },
      {
        header: "Rol",
        accessorKey: "joiningDate",
        enableColumnFilter: false,
      },
      //   {
      //     header: "Status",
      //     accessorKey: "status",
      //     enableColumnFilter: false,
      //     enableSorting: true,
      //     cell: (cell: any) => <Status item={cell.getValue()} />,
      //   },
      {
        header: "Operación",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Dropdown className="relative">
            <Dropdown.Trigger
              className="flex items-center justify-center size-[30px] p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
              id="usersAction1"
            >
              <MoreHorizontal className="size-3" />
            </Dropdown.Trigger>
            <Dropdown.Content
              placement="right-end"
              className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md min-w-[10rem] dark:bg-zink-600"
              aria-labelledby="usersAction1"
            >
              <li>
                <Link
                  data-modal-target="addUserModal"
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  to="#!"
                  onClick={() => {
                    const data = cell.row.original;
                    handleUpdateDataClick(data);
                  }}
                >
                  <span className="align-middle">Editar</span>
                </Link>
              </li>
              <li>
                <Link
                  className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                  to="#!"
                  onClick={() => {
                    const orderData = cell.row.original;
                    onClickDelete(orderData);
                  }}
                >
                  <span className="align-middle">Deshabilitar</span>
                </Link>
              </li>
            </Dropdown.Content>
          </Dropdown>
        ),
      },
    ],
    []
  );

  //   const options = [
  //     { value: "Select Status", label: "Select Status" },
  //     { value: "Verified", label: "Verified" },
  //     { value: "Waiting", label: "Waiting" },
  //     { value: "Rejected", label: "Rejected" },
  //     { value: "Hidden", label: "Hidden" },
  //   ];

  const handleChange = (selectedOption: any) => {
    if (
      selectedOption.value === "Select Status" ||
      selectedOption.value === "Hidden"
    ) {
      setUser(userList);
    } else {
      const filteredUsers = userList.filter(
        (data: any) => data.status === selectedOption.value
      );
      setUser(filteredUsers);
    }
  };

  return (
    <React.Fragment>
      <div className="p-4">
      <ul className="flex flex-wrap items-center gap-2 mb-3 text-sm font-normal justify-end pt-4 ">
                            <li className=" relative before:content-['\ea54'] before:font-remix before:ltr:-right-1 before:rtl:-left-1 before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:rtl:rotate-180 before:text-slate-500 dark:before:text-zink-200">
                                <a href="#!" className="text-slate-500 dark:text-zink-200">Usuarios</a>
                            </li>
                            <li className="text-slate-700 dark:text-zink-100">
                                Listado de usuarios
                            </li>
                        </ul>
        <Title 
              size={"big-sm"} 
              text={"Listado de usuarios"} 
              bold={"normal"} 
              color={GREY150} 
            />
            <div className="pt-2 pb-1">
              <p className={`text-[#8A8F9C] text-base `}>
              Listado de usuarios habilitados dentro del sistema.
              </p>
              </div>

        <ToastContainer closeButton={false} limit={1} />
        <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-12">
          <div className="xl:col-span-12">
            <div className="" id="usersTable">
              <div className="!py-3.5 card-body">
                <form action="#!">
                  <div className="flex justify-between">
                    <div className="relative pb-5">
                      <input
                        type="text"
                        className=" w-80 ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        placeholder="Buscar usuario"
                        autoComplete="off"
                        onChange={(e) => filterSearchData(e)}
                      />
                      <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600" />
                    </div>
      
                      <div className="flex gap-2 xl:justify-end">
                        <div className="shrink-0">
                          <button
                            type="button"
                            className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                            onClick={toggle}
                          >
                            <span className="align-middle">Agregar usuario</span>
                          </button>
                        </div>
                      </div>
                    
                  </div>
                </form>
              </div>
              {/* tabla con datos de los usuarios */}
              <div className="card-body ">
                {user && user.length > 0 ? (
                  <TableContainer
                    isPagination={true}
                    columns={columns || []}
                    data={user || []}
                    customPageSize={10}
                    divclassName=" overflow-x-auto"
                    tableclassName="w-full border-separate table-custom border-spacing-y-1 whitespace-nowrap"
                    theadclassName="text-left relative rounded-md bg-slate-100 dark:bg-zink-600 after:absolute ltr:after:border-l-2 rtl:after:border-r-2 ltr:after:left-0 rtl:after:right-0 after:top-0 after:bottom-0 after:border-transparent [&.active]:after:border-custom-500 [&.active]:bg-slate-100 dark:[&.active]:bg-zink-600"
                    thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold"
                    tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 bg-[white]"
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

        {/* User Modal  */}
        <Modal
          show={show}
          onHide={toggle}
          id="defaultModal"
          modal-center="true"
          className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
          dialogClassName="w-screen md:w-[37rem] bg-white shadow rounded-md dark:bg-zink-600"
        >
          <Modal.Header
            className="flex items-center justify-between p-4 border-b dark:border-zink-300/20 "
            closeButtonClass="transition-all duration-200 ease-linear text-slate-400 hover:text-red-500"
          >
            <Modal.Title className={`text-24 text-[${GREY100}]`}>
              {!!isEdit ? "Editar usuario" : "Agregar usuario"}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="max-h-[calc(theme('height.screen')_-_180px)] p-4 overflow-y-auto">
            <form
              action="#!"
              onSubmit={(e) => {
                e.preventDefault();
                validation.handleSubmit();
                return false;
              }}
            >
              <div className="mb-5">
                
                {validation.touched.img && validation.errors.img ? (
                  <p className="text-red-400">{validation.errors.img}</p>
                ) : null}
              </div>
              <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">

              <div className="mb-4">
                <label
                  htmlFor="ID usuario"
                  className="inline-block mb-2 text-base font-medium "
                >
                  ID usuario
                </label>
                <input
                  type="text"
                  id="userId"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  disabled
                  value={validation.values.userId || "#TW1500004"}
                />
              </div>
                
              <div className="mb-5">
                <label
                  htmlFor="designationInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="designationInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Juan Hernandez"
                  name="designation"
                  onChange={validation.handleChange}
                  value={validation.values.designation || ""}
                />
                {validation.touched.designation &&
                validation.errors.designation ? (
                  <p className="text-red-400">
                    {validation.errors.designation}
                  </p>
                ) : null}
              </div>
              </div>

              <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
              <div className="mb-5">
                <label
                  htmlFor="statusSelect"
                  className="inline-block mb-2 text-base font-medium"
                >
                 Pais
                </label>
              
                            <select className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200">
                                <option defaultValue="true">Seleccionar pais</option>
                                <option value="1">Peru</option>
                                <option value="2">Colombia</option>
                                <option value="3">Panama</option>
                            </select>
                      
                {validation.touched.status && validation.errors.status ? (
                  <p className="text-red-400">{validation.errors.status}</p>
                ) : null}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="phoneNumberInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumberInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="12345 67890"
                  name="phoneNumber"
                  onChange={validation.handleChange}
                  value={validation.values.phoneNumber || ""}
                />
                {validation.touched.phoneNumber &&
                validation.errors.phoneNumber ? (
                  <p className="text-red-400">
                    {validation.errors.phoneNumber}
                  </p>
                ) : null}
              </div>

              </div>
              <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-2">
              <div className="mb-5">
                <label
                  htmlFor="emailInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Correo electronico
                </label>
                <input
                  type="email"
                  id="emailInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Example@pit.net"
                  name="email"
                  onChange={validation.handleChange}
                  value={validation.values.email || ""}
                />
                {validation.touched.email && validation.errors.email ? (
                  <p className="text-red-400">{validation.errors.email}</p>
                ) : null}
              </div>
              <div className="mb-5">
                <label
                  htmlFor="emailInput"
                  className="inline-block mb-2 text-base font-medium"
                >
                  Cargo
                </label>
                <input
                  type="email"
                  id="emailInput"
                  className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                  placeholder="Gerente general"
                  name="email"
                  onChange={validation.handleChange}
                  value={validation.values.email || ""}
                />
                {validation.touched.email && validation.errors.email ? (
                  <p className="text-red-400">{validation.errors.email}</p>
                ) : null}
              </div>
              </div>

              <div className="pt-3" style={{
                width:"48%",
              }}>

                    <Text 
                    color={BLUE10} 
                    size={"medium"} 
                    bold="semi-bold"
                    className="" 
                    text="Permisos y accesos" 
                    ></Text> 
                      <div className="mb-3 pt-2">
                <label
                  htmlFor="statusSelect"
                  className="inline-block mb-2 text-base font-medium"
                >
                 Rol
                </label>
                <select className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200">
                                <option defaultValue="true">Seleccionar rol</option>
                                <option value="1">Finanzas</option>
                                <option value="2">Soporte</option>
                            </select>
                {validation.touched.status && validation.errors.status ? (
                  <p className="text-red-400">{validation.errors.status}</p>
                ) : null}
              </div>
                    </div>

          
              <div className="flex justify-end gap-2 mt-4">
                <button
                  type="reset"
                  data-modal-close="addDocuments"
                  className="text-red-500 transition-all duration-200 ease-linear bg-white border-white btn hover:text-red-600 focus:text-red-600 active:text-red-600 dark:bg-zink-500 dark:border-zink-500"
                  onClick={toggle}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="text-white transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                >
                  {!!isEdit ? "Guardar" : "Guardar"}
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </React.Fragment>
  );
};

export default ListView;

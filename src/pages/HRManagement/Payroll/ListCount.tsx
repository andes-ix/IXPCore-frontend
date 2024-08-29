import React, { useCallback, useEffect, useMemo, useState } from "react";

import { Link } from "react-router-dom";
import { Dropdown } from "Common/Components/Dropdown";
import TableContainer from "Common/TableContainer";
import { Text } from "Common/Components/Text/textComponent";
import countries from "Common/constants/countries.json";
import Tab from "Common/Components/Tab/Tab";
import { Nav } from "Common/Components/Tab/Nav";

// Icons
import { Search, MoreHorizontal } from "lucide-react";
import Modal from "Common/Components/Modal";

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
  getGroupsList as onGetGroupList,
} from "slices/thunk";
import { ToastContainer } from "react-toastify";
import filterDataBySearch from "Common/filterDataBySearch";
import { Title } from "Common/Components/Title/titleComponent";
import { BLUE10, GREY100, GREY150, RED100 } from "Common/constants/colors";
import { PhoneInput } from "react-international-phone";

import { AlertTypeEnum } from "Common/constants/alertType.enum";
import { useAlert } from "Common/Components/Alert/AlertProvider";
import { apiClientWithAuth } from "services/apiService";
import Flatpickr from "react-flatpickr";

const ListCount = () => {
  const { showAlert } = useAlert();
  const dispatch = useDispatch<any>();

  const selectDataList = createSelector(
    (state: any) => state.Users,
    (user) => ({
      userList: user.userList,
    })
  );

  const selectGroupList = createSelector(
    (state: any) => state.Groups,
    (group) => ({
      groupList: group.groupList,
    })
  );

  const { userList } = useSelector(selectDataList);
  const { groupList } = useSelector(selectGroupList);
  const [user, setUser] = useState<any>([]);
  const [groups, setGroups] = useState<any>([]);
  const [eventData, setEventData] = useState<any>();

  const [show, setShow] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);

  // Get Data
  useEffect(() => {
    dispatch(onGetUserList());
    dispatch(onGetGroupList());
  }, [dispatch]);

  useEffect(() => {
    setUser(userList);
    setGroups(groupList);
  }, [userList, groupList]);

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
    setEventData({ ...ele, rol: ele?.groups?.find((ele: unknown) => ele) });
    setIsEdit(true);
    setShow(true);
  };

  // validation
  const validation: any = useFormik({
    enableReinitialize: true,

    initialValues: {
      ID: (eventData && eventData.ID) || "",
      first_name: (eventData && eventData.first_name) || "",
      email: (eventData && eventData.email) || "",
      phone: (eventData && eventData.phone) || "",
      job_position: (eventData && eventData.job_position) || "",
      country: (eventData && eventData.country) || "",
      rol: (eventData && eventData.rol) || "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Please Enter first_name"),
      email: Yup.string().email().required("Please Enter Email"),
    }),

    onSubmit: async (values) => {
      try {
        if (isEdit) {
          const updateUser = {
            id: eventData ? eventData.id : 0,
            groups: values.rol
              ? [Number(values.rol)]
              : eventData?.rol
              ? [Number(eventData.rol)]
              : [],
            ...values,
          };

          const {
            email,
            first_name,
            phone,
            country,
            job_position,
            ID,
            groups,
          } = updateUser;
          const { data } = await apiClientWithAuth.patch(`/v1/user/${ID}/`, {
            email,
            first_name,
            phone,
            country,
            job_position,
            groups,
          });
          if (data) {
            showAlert(
              AlertTypeEnum.SUCCESS,
              <Title
                color={GREY100}
                bold={"bold"}
                size={"normal-bg"}
                text="Usuario actualizado satisfactoriamente"
              ></Title>,
              <Text color={"#008446"} text={""}></Text>
            );
            dispatch(onGetGroupList());
            dispatch(onGetUserList());
          }
        } else {
          // dispatch(onAddUserList(newUser));
          const { email, first_name, phone, country, job_position } = values;
          const { data } = await apiClientWithAuth.post(`/v1/user/`, {
            email,
            first_name,
            last_name: "",
            password: "12345678",
            phone,
            country,
            job_position,
          });
          if (data) {
            showAlert(
              AlertTypeEnum.SUCCESS,
              <Title
                color={GREY100}
                bold={"bold"}
                size={"normal-bg"}
                text="Usuario creado satisfactoriamente"
              ></Title>,
              <Text color={"#008446"} text={""}></Text>
            );
            dispatch(onGetGroupList());
            dispatch(onGetUserList());
          }
        }
        toggle();
      } catch (error) {
        showAlert(
          AlertTypeEnum.ERROR,
          <Title
            color={GREY100}
            bold={"bold"}
            size={"normal-bg"}
            text="Ha ocurrido un problema inesperado o de conexión"
          ></Title>,
          <Text
            color={RED100}
            text={
              "Por favor, verifica tu conexión a internet e inténtalo nuevamente. Si el problema persiste, contacta a nuestro soporte técnico."
            }
          ></Text>
        );
      }
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
        cell: (cell: any) => {
          const groupIds = cell.getValue();
          const groupNames = groupIds?.map((groupId: number) => {
            const group = groups?.find(
              (g: any) => String(g.ID) === String(groupId)
            );
            return group ? group.name : groupId;
          });
          return <span>{groupNames.join(", ")}</span>;
        },
      },
      {
        header: "Operación",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Dropdown className="relative">
            <Dropdown.Trigger
              className="flex items-center justify-center size-[30px] p-0 text-white  btn bg-[#168EEA] hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-600 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
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
    [groups]
  );

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
                            <h5 className="mb-1" style={{
                              color:"#51626E",
                              fontSize:"22px",
                            }}>S/. 3127,00<small className="font-normal text-slate-500 dark:text-zink-200">/ mes</small></h5>
                            <p className="text-slate-500 dark:text-zink-200" style={{
                              color:"#51626E",
                              fontSize:"12px",
                              fontWeight:"200",
                            }}>Valor presentado en base (Sol)</p>
                        </div>
                        <div className="2xl:col-span-5 2xl:col-start-8">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <tbody>
                                        <tr >
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">Detracción pendiente</td>
                                            <td className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}>S/. 1127,00</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">Total deuda</td>
                                            <td className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}>S/. 53127,00</td>
                                        </tr>
                                        <tr >
                                            <td className="px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-semibold">Fecha de vencimiento</td>
                                            <td className={`px-3.5 first:pl-0 last:pr-0 py-2 border-y border-transparent font-bold text-[${BLUE10}]`}>05 de Abril 2024</td>
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
                    <div className="relative pb-5" style={{
                      width:"21%",
                    }}>
                            <Flatpickr
                                options={{
                                    mode: "range",
                                    dateFormat: "d M, Y",
                                }}
                                placeholder="Select Date"
                                className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                            />

                    </div>

                    <div className="flex gap-2 xl:justify-end">
                    <div>
                        <Tab.Container defaultActiveKey="homePill">
                            <Nav className="flex flex-wrap w-full text-sm font-medium text-center nav-tabs">
                                <Nav.Item eventKey="homePill" className="group">
                                    <a href="#!" data-tab-toggle data-target="homePill" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">General</a>
                                </Nav.Item>
                                <Nav.Item eventKey="profilePill" className="group">
                                    <a href="#!" data-tab-toggle data-target="profilePill" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Facturas</a>
                                </Nav.Item>
                                <Nav.Item eventKey="settingPill" className="group">
                                    <a href="#!" data-tab-toggle data-target="settingPill" className="inline-block px-4 py-2 text-base transition-all duration-300 ease-linear rounded-md text-slate-500 dark:text-zink-200 border border-transparent group-[.active]:bg-custom-500 group-[.active]:text-white hover:text-custom-500 active:text-custom-500 dark:hover:text-custom-500 dark:active:text-custom-500 dark:group-[.active]:hover:text-white -mb-[1px]">Pagos</a>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content className="mt-5 tab-content">
                                <Tab.Pane eventKey="homePill" id="homePill">
                                    <p className="mb-0">gola</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="profilePill" id="profilePill">
                                    <p className="mb-0">hola </p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="settingPill" id="settingPill">
                                    <p className="mb-0">dfdf </p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
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
                    value={validation.values.ID || "#TW1500004"}
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
                    id="first_name"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Juan Hernandez"
                    name="first_name"
                    onChange={validation.handleChange}
                    value={validation.values.first_name || ""}
                  />
                  {validation.touched.first_name &&
                  validation.errors.first_name ? (
                    <p className="text-red-400">
                      {validation.errors.first_name}
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

                  <select
                    className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    name="country"
                    required
                    onChange={validation.handleChange}
                    value={validation.values.country || ""}
                  >
                    {validation.values.country ? (
                      <option value={validation.values.country}>
                        {countries.find(
                          (country) =>
                            country.text === validation.values.country
                        )?.text || "País"}
                      </option>
                    ) : (
                      <option value="" disabled hidden>
                        País
                      </option>
                    )}

                    {/* Mapeo de todas las opciones */}
                    {countries
                      .filter((c) => c.text !== validation.values.country) // Filtramos para no duplicar la opción seleccionada
                      .map((c) => (
                        <option key={c.value} value={c.text}>
                          {c.text}
                        </option>
                      ))}
                  </select>

                  {validation.touched.status && validation.errors.status ? (
                    <p className="text-red-400">{validation.errors.status}</p>
                  ) : null}
                </div>

                <div className="mb-5  pt-7">
                  <PhoneInput
                    name="phone"
                    defaultCountry={"pe"}
                    placeholder="(0) 053 555 555"
                    value={validation.values.phone}
                    onChange={(phoneValue) =>
                      validation.setFieldValue("phone", phoneValue)
                    }
                    onBlur={() => validation.setFieldTouched("phone")} // Marca el campo como tocado al perder el foco
                    countrySelectorStyleProps={{
                      buttonStyle: {
                        width: 50,
                        backgroundColor: "#EAEEF3",
                      },
                    }}
                    inputStyle={{
                      width: 300,
                    }}
                    style={{
                      width: 270,
                    }}
                  />
                  {validation.touched.phone && validation.errors.phone ? (
                    <p className="text-red-400">{validation.errors.phone}</p>
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
                    type="text"
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
                    htmlFor="job_positionInput"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Cargo
                  </label>
                  <input
                    type="text"
                    id="job_positionInput"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Gerente general"
                    name="job_position"
                    onChange={validation.handleChange}
                    value={validation.values.job_position || ""}
                  />
                  {validation.touched.job_position &&
                  validation.errors.job_position ? (
                    <p className="text-red-400">
                      {validation.errors.job_position}
                    </p>
                  ) : null}
                </div>
              </div>

              <div
                className="pt-3"
                style={{
                  width: "48%",
                }}
              >
                <Text
                  color={BLUE10}
                  size={"medium"}
                  bold="semi-bold"
                  className=""
                  text="Permisos y accesos"
                ></Text>
                <div className="mb-3 pt-2">
                  <label
                    htmlFor="rolInput"
                    className="inline-block mb-2 text-base font-medium"
                  >
                    Rol
                  </label>
                  <select
                    className="form-select border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    name="rol"
                    id="rolInput"
                    onChange={validation.handleChange}
                    value={validation.values.rol || ""}
                  >
                    <option defaultValue="true">Seleccionar rol</option>
                    {!validation.values.rol ? (
                      <option value="" disabled hidden>
                        Rol
                      </option>
                    ) : null}

                    {groups
                      // Filtramos para no duplicar la opción seleccionada
                      .map((c: any) => (
                        <option key={c.ID} value={c.ID}>
                          {c.name}
                        </option>
                      ))}
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

export default ListCount
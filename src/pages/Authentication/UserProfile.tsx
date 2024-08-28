import React, { useState, useEffect } from "react";

// Formik Validation
import * as Yup from "yup";
import { useFormik as useFormic, useFormik } from "formik";
import styles from "./phone.module.css";

//redux
import { useSelector, useDispatch } from "react-redux";
import { PhoneInput } from "react-international-phone";

import userProfile from "assets/images/users/user-profile.png";

import "react-international-phone/style.css";

import { createSelector } from "reselect";
import countries from "./countries.json";
import withRouter from "Common/withRouter";
import { editProfile } from "slices/thunk";
import { Text } from "Common/Components/Text/textComponent";
import { Title } from "Common/Components/Title/titleComponent";
import {
  BLUE10,
  GREY100,
  GREY150,
  GREY20,
  RED100,
} from "Common/constants/colors";
import { ChevronRight, ImagePlus, LockKeyhole } from "lucide-react";
import { capitalizeFirstLetter } from "Common/utils";
import { AlertTypeEnum } from "Common/constants/alertType.enum";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert";
import { apiClientWithAuth } from "services";
import { TwoStepsComponent } from "pages/AuthenticationInner/TwoSteps/TwoStepComponent";

interface IAuthUser {
  ID?: Number;
  email?: String;
  first_name?: String;
  last_name?: String;
  phone?: String;
  country?: String;
  jobPosition?: String;
}
const UserProfile = () => {
  //meta title

  document.title = "Profile | Skote - React Admin & Dashboard Template";

  const dispatch = useDispatch<any>();
  const [authUser, setAuthUser] = useState<any>();
  const [showAlert, SetShowAlerts] = useState<boolean>(false);

  const [msgAlert, SetMsgAlert] = useState<JSX.Element | string>("");
  const [titleAlert, SetTitleAlert] = useState<JSX.Element | string>("");
  const [alertType, SetAlertType] = useState<AlertTypeEnum>(
    AlertTypeEnum.SUCCESS
  );

  const handleShowAlert = () => {
    SetShowAlerts(!showAlert);
  };

  const selectProperties = createSelector(
    (state: any) => state.Profile,
    (profile) => ({
      user: profile.user,
      error: profile.error,
      success: profile.success,
    })
  );

  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 640);
  useEffect(() => {
    const userDetail = JSON.parse(
      (localStorage.getItem("authUser") as string) || ""
    );
    const user: IAuthUser = {
      first_name: userDetail?.first_name,
      email: userDetail.email,
      country: userDetail?.country,
      phone: userDetail?.phone,
      jobPosition: userDetail?.job_position,
      ID: userDetail?.ID,
    };
    setAuthUser(user);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1000);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const submitValue = async (values: any) => {
    try {
      const {
        email,
        name: first_name,
        phone,
        country,
        jobPosition: job_position,
        ID,
      } = values;
      const { data } = await apiClientWithAuth.patch(`/v1/user/${ID}/`, {
        email,
        first_name,
        phone,
        country,
        job_position,
      });

      if (data) {
        localStorage.setItem("authUser", JSON.stringify(data));
        SetShowAlerts(true);
        SetTitleAlert(
          <Title
            color={GREY100}
            bold={"bold"}
            size={"normal-bg"}
            text="Información de perfil actualizada satisfactoriamente"
          ></Title>
        );
        SetMsgAlert("");
        const user: IAuthUser = {
          first_name: data?.first_name,
          email: data.email,
          country: data?.country,
          phone: data?.phone,
          jobPosition: data?.job_position,
          ID: data?.ID,
        };
        setAuthUser(user);
      }
      return true;
    } catch (error) {
      SetAlertType(AlertTypeEnum.ERROR);
      SetShowAlerts(true);
      SetTitleAlert(
        <Title
          color={GREY100}
          bold={"bold"}
          size={"normal-bg"}
          text="Ha ocurrido un problema inesperado o de conexión"
        ></Title>
      );
      SetMsgAlert(
        <Text
          color={RED100}
          text={
            "Por favor, verifica tu conexión a internet e inténtalo nuevamente. Si el problema persiste, contacta a nuestro soporte técnico."
          }
        ></Text>
      );
      return false;
    }
  };

  const validation = useFormik({
    enableReinitialize: true, // Permite re-inicializar los valores iniciales cuando `user` cambie
    initialValues: {
      email: authUser?.email || "",
      name: authUser?.first_name || "",
      phone: authUser?.phone || "",
      country: authUser?.country || "",
      jobPosition: authUser?.jobPosition || "",
      ID: authUser?.ID,
    },
    validationSchema: Yup.object({
      email: Yup.string(),
      name: Yup.string(),
      phone: Yup.string(),
      country: Yup.string(),
      jobPosition: Yup.string(),
    }),
    onSubmit: async (values) => {
      await submitValue(values);
    },
  });
  return (
    <React.Fragment>
      <CustomAlert
        type={alertType}
        show={showAlert}
        handleShowAlert={handleShowAlert}
        title={titleAlert}
        msg={msgAlert}
      />
      <div
        className={`${
          isSmallScreen ? "flex flex-col" : "flex"
        } pl-5 pt-11 gap-3 justify-between p container-fluid group-data-[content=boxed]:max-w-boxed mx-auto`}
      >
        <div className={isSmallScreen ? "flex flex-col" : "flex"}>
          <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-1">
            <Title
              size={"large"}
              text={"Información del perfil"}
              bold={"semi-bold"}
              color={GREY150}
            />
            <Text
              size={"medium"}
              className="pt-4"
              color={GREY150}
              bold={"semi-bold"}
              text={"Revise y actualice los detalles de su cuenta"}
            />
            <Text
              size={"medium-sm"}
              className="pt-2 w-[75%]"
              color={GREY100}
              text={`Asegúrese de que estos datos estén actualizados, ya que se
            utilizarán para información en la facturación de sus servicios.`}
            />
            <div className="flex gap-0 pt-2 pb-3">
              <a href="#">
                <Text
                  className="pt-2 pb-2"
                  size={"medium-sm"}
                  color={BLUE10}
                  text="Términos y Condiciones de uso"
                ></Text>
              </a>
            </div>
            <div className="card xl:w-10/12">
              <div>
                <div className="flex h-[100px] pl-10 gap-3 items-center">
                  <div className="relative flex-wrap items-center gap-4">
                    <img
                      src={"/img/avatar-default.svg"}
                      alt=""
                      className="w-[60px] h-[60px] bg-blue-600 rounded-full img-thumbnail"
                    />
                  </div>
                  <div className="text-slate-500 w-[60%] p-4 dark:text-zink-200">
                    <Title
                      bold="bold"
                      text={capitalizeFirstLetter(authUser?.first_name)}
                    />
                    <Text
                      text={`Asegúrese de que estos datos estén actualizados, ya que se utilizarán para información en la facturación de sus servicios.`}
                    />
                  </div>
                </div>
                <form
                  onSubmit={(event: any) => {
                    event.preventDefault();
                    validation.handleSubmit();
                    return false;
                  }}
                >
                  <div
                    className={`card-body shadow-sm flex flex-col items-center bg-[${GREY20}]`}
                  >
                    <div className="mb-3 flex flex-col md:flex-row justify-between items-center w-[90%]">
                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex justify-between">
                          <label
                            htmlFor="name"
                            className="inline-block mb-2 text-base font-medium"
                          >
                            <Text
                              className="pt-2"
                              size={"medium-sm"}
                              color={GREY150}
                              text="Nombre completo"
                              bold={"semi-bold"}
                            />
                          </label>
                        </div>

                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-input sm:w-50 md:w-50 lg:w-60 xl:w-70 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 mb-2"
                          placeholder="Salvador Bertenbreiter"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation?.values?.name}
                        />
                      </div>
                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex justify-between">
                          <label
                            htmlFor="email"
                            className="inline-block mb-2 text-base font-medium"
                          >
                            <Text
                              className="pt-2"
                              size={"medium-sm"}
                              color={GREY150}
                              text="Correo electrónico"
                              bold={"semi-bold"}
                            />
                          </label>
                        </div>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          className="form-input sm:w-50 md:w-50 lg:w-60 xl:w-60 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 mb-2"
                          placeholder="Example@pit.net"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation?.values?.email}
                        />
                      </div>
                    </div>
                    <div className="mb-3 flex flex-col md:flex-row justify-between items-center w-[90%]">
                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex justify-between">
                          <label
                            htmlFor="name"
                            className="inline-block mb-2 text-base font-medium"
                          ></label>
                        </div>

                        <div className="flex flex-col w-full sm:w-auto">
                          <div className="flex justify-between">
                            <label
                              htmlFor="name"
                              className="inline-block mb-2 text-base font-medium"
                            >
                              <Text
                                className="pt-2"
                                size={"medium-sm"}
                                color={GREY150}
                                text="Pais"
                                bold={"semi-bold"}
                              />
                            </label>
                          </div>

                          <input
                            type="text"
                            id="country"
                            name="country"
                            disabled={true}
                            className="form-input sm:w-50 md:w-50 lg:w-60 xl:w-70 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200 mb-2"
                            placeholder="Pais"
                            value={validation?.values?.country}
                          />
                        </div>
                      </div>
                      <div className="flex flex-col pt-10">
                        <PhoneInput
                          name="phone"
                          defaultCountry={"pe"}
                          placeholder="(0) 053 555 555"
                          value={validation.values.phone}
                          onChange={(phoneValue) =>
                            validation.setFieldValue("phone", phoneValue)
                          } // Actualiza el valor de 'phone' en Formik
                          onBlur={() => validation.setFieldTouched("phone")} // Marca el campo como tocado al perder el foco
                          countrySelectorStyleProps={{
                            buttonStyle: {
                              width: 50,
                              backgroundColor: "#EAEEF3",
                            },
                          }}
                          inputStyle={{
                            width: 240,
                          }}
                          style={{
                            width: 240,
                          }}
                        />
                        {validation.touched.phone && validation.errors.phone ? (
                          <div className="text-red-500 text-sm">
                            {/* {validation.errors.phone} */}
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="mb-3 pt-3 flex flex-col md:flex-row justify-between items-center w-[90%]">
                      <div className="flex flex-col w-full sm:w-auto">
                        <div className="flex justify-between">
                          <label
                            htmlFor="jobPosition"
                            className="inline-block mb-2 text-base font-medium"
                          >
                            <Text
                              className="pt-2"
                              size={"medium-sm"}
                              color={GREY150}
                              text="Cargo"
                              bold={"semi-bold"}
                            />
                          </label>
                        </div>

                        <input
                          type="text"
                          id="jobPosition"
                          name="jobPosition"
                          className="form-input sm:w-40 md:w-50 lg:w-60 xl:w-60 border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                          placeholder="Gerente general"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation?.values?.jobPosition}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-end w-[90%]">
                      <div className="flex flex-col  w-full sm:w-auto">
                        <button
                          type="submit"
                          className=" text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 mb-5"
                        >
                          <span className="align-middle">Actualizar</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div
                  className={`border-t w-[100%] bg-[${GREY20}] border-slate-200 card-body dark:border-zink-500`}
                >
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      console.log("le diste click");
                    }}
                  >
                    <Text
                      color={BLUE10}
                      size={"normal"}
                      className="pt-4"
                      text="Autogestión de contraseña: Cambio de contraseña"
                    ></Text>
                  </span>
                  <Text
                    color={GREY150}
                    size={"normal"}
                    className="pt-1 pb-5"
                    text="Realiza el cambio de tu contraseña de acceso, de manera fácil y rápida."
                  ></Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[45%] md:w-[100%] flex flex-col pl-10 pr-10 ">
          <TwoStepsComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(UserProfile);

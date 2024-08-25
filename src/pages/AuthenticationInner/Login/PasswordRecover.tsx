import React, { useEffect, useState } from "react";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { BLUE10, GREY100, GREY150, RED100 } from "Common/constants/colors";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { apiClient } from "services";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert";
import { AlertTypeEnum } from "Common/constants/alertType.enum";
import { formatEmail } from "Common/utils";

const PasswordRecover = () => {
  const navigate = useNavigate();
  const [showAlert, SetShowAlerts] = useState<boolean>(false);
  const [msgAlert, SetMsgAlert] = useState<JSX.Element | string>("");
  const [titleAlert, SetTitleAlert] = useState<JSX.Element | string>("");
  const [alertType, SetAlertType] = useState<AlertTypeEnum>(
    AlertTypeEnum.SUCCESS
  );

  const handleShowAlert = () => {
    SetShowAlerts(!showAlert);
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Por favor, introduce un correo electrónico válido")
      .required("Por favor, introduce tu correo electrónico"),
  });

  const handleSubmit = async (email: string) => {
    try {
      await apiClient.post("/v2/password_reset/generate_code_password/", {
        email: email,
      });

      return true;
    } catch (error) {
      const { response } = error as any;
      SetShowAlerts(true);
      SetAlertType(AlertTypeEnum.ERROR);
      if (response?.status === 400) {
        SetTitleAlert(
          <Title
            color={GREY100}
            bold={"bold"}
            size={"normal-bg"}
            text="Correo electrónico incorrecto"
          ></Title>
        );
        SetMsgAlert(
          <p className={`text-[#DC363C] text-base `} style={{ fontSize: 12 }}>
            Por favor, verifica tus datos e inténtalo nuevamente.
          </p>
        );
      } else {
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
      }

      return false; // Indica que la solicitud falló
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      formikHelpers.setSubmitting(false);
      const success = await handleSubmit(values.email);

      if (success) {
        SetShowAlerts(true);
        SetAlertType(AlertTypeEnum.SUCCESS);
        SetTitleAlert(
          <Title
            color={GREY100}
            bold={"bold"}
            size={"normal-bg"}
            text="Correo electrónico enviado satisfactoriamente"
          ></Title>
        );
        SetMsgAlert(
          <p className={`text-[#99D2BA] text-base `} style={{ fontSize: 12 }}>
            Ha sido enviado a tu correo registrado{" "}
            <span className="text-[#008446] font-bold">
              {formatEmail(values.email)}
            </span>{" "}
            las indicaciones para recuperar tu contraseña.
          </p>
        );

        formik.resetForm();

        const timer = setTimeout(() => {
          handleShowAlert();
          navigate("/login"); // Cambia "/ruta-deseada" por la ruta a la que deseas redirigir
        }, 5000);

        return () => clearTimeout(timer); // Limpiar el temporizador cuando el componente se desmonte o el `show` cambie
      }
    },
  });

  const handleGoBack = () => {
    navigate("/auth-login-modern");
  };

  return (
    <div className="flex flex-col w-full h-9/10 pt-10">
      <CustomAlert
        type={alertType}
        show={showAlert}
        handleShowAlert={handleShowAlert}
        title={titleAlert}
        msg={msgAlert}
      />
      <div className="rounded">
        <div className="bg-white pt-10 pr-10 rounded-t-lg">
          <div className="pl-10">
            <img src={"/img/logo.webp"} alt="Mundo" width={80} height={94} />
          </div>
          <div>
            <span
              onClick={handleGoBack}
              className="flex gap-0 pl-8 pt-2 cursor-pointer hover:underline"
            >
              <ChevronLeft className="pt-2" color={BLUE10} />{" "}
              <Text
                className="pt-2"
                size={"medium-sm"}
                color={BLUE10}
                text="Regresar"
              />
            </span>
          </div>

          <div className="pt-2 pl-10 pr-10">
            <Title
              bold={"bold"}
              size={"medium-sm"}
              text="Ingrese su correo electrónico registrado en la aplicación"
              color={GREY100}
            />
          </div>
        </div>

        <div className="bg-white pb-10 rounded-b-lg">
          <div className="lg:w-[24rem] mx-auto">
            <form
              onSubmit={(event: any) => {
                event.preventDefault();
                formik.handleSubmit();
                return false;
              }}
              id="signInForm1"
            >
              <div className="mb-3 pt-4">
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

                <div className="relative">
                  <input
                    type="text"
                    id="email"
                    className="form-input w-full border-slate-200 focus:outline-none focus:border-custom-500"
                    placeholder="Correo electrónico"
                    {...formik.getFieldProps("email")}
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div id="email-error" className="mt-1 text-sm text-red-500">
                      {formik.errors.email}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="pt-12">
                <button
                  type="submit"
                  className="w-full text-white btn bg-custom-500 border-custom-500 hover:bg-custom-600"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecover;

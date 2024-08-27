import React, { useEffect, useState } from "react";
import { Copy, LockKeyhole } from "lucide-react";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { BLUE10, GREY100, GREY150, RED100 } from "Common/constants/colors";
import { apiClient, apiClientWithAuth } from "services";
import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getTwoStepStatus as onGetTwoStepStatus } from "slices/thunk";
import { getSecretFromOtpUrl } from "Common/utils/getOtpSecret";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useAlert } from "Common/Components/Alert/AlertProvider";
import { AlertTypeEnum } from "Common/constants/alertType.enum";

export const TwoStepsComponent = () => {
  const { showAlert } = useAlert();
  const [twoStepStatus, SetTwoStepStatus] = useState<Boolean>(false);
  const [showSendCode, SetShowSendCode] = useState<Boolean>(false);
  const [qr, SetQr] = useState<any>(null);
  const [otpCode, SetOtpCode] = useState<string>("");
  const dispatch = useDispatch<any>();

  const selectDataTwoStep = createSelector(
    (state: any) => state.TwoStep,
    (twoStep) => ({
      twoStepStatusData: twoStep.twoStep,
    })
  );

  const { twoStepStatusData } = useSelector(selectDataTwoStep);

  useEffect(() => {
    dispatch(onGetTwoStepStatus());
  }, [dispatch]);

  useEffect(() => {
    SetTwoStepStatus(twoStepStatusData?.success);
  }, [twoStepStatusData]);

  const validationSchema = Yup.object({
    code: Yup.string().required("Por favor, introduce el codigo"),
  });

  const handleSubmitCode = async (code: string) => {
    try {
      const { data } = await apiClientWithAuth.post(
        `/v1/users/verify-authenticator/?code=${code}`
      );
      if (data && data.success) {
        dispatch(onGetTwoStepStatus());
        showAlert(
          AlertTypeEnum.SUCCESS,
          <Title
            color={GREY100}
            bold={"bold"}
            size={"normal-bg"}
            text="2FA activado satisfactoriamente"
          ></Title>,
          <Text color={"#008446"} text={""}></Text>
        );
      } else {
        showAlert(
          AlertTypeEnum.ERROR,
          <Title
            color={GREY100}
            bold={"bold"}
            size={"normal-bg"}
            text="Codigo ingresado incorrecto"
          ></Title>,
          <Text color={RED100} text={"Intentelo nuevamente"}></Text>
        );
      }

      return data;
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
  };

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      formikHelpers.setSubmitting(false);
      const success = await handleSubmitCode(values.code);

      if (success) {
        formik.resetForm();
      }
    },
  });
  const handleDeactiveAuth = async () => {
    try {
      const { data } = await apiClientWithAuth.post(
        `/v1/users/deactivate-authenticator/`
      );
      SetQr(null);
      SetOtpCode("");
      SetShowSendCode(false);
      dispatch(onGetTwoStepStatus());
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
  };
  const handleSubmitEmail = async () => {
    try {
      const { data } = await apiClientWithAuth.post(
        `v1/users/generate-authenticator/`
      );
      if (data) {
        console.log(data?.qr_base64.trim());
        SetQr(data?.qr_base64);
        SetOtpCode(getSecretFromOtpUrl(data?.otp_code) || "");
      }
    } catch (error) {
      console.error("Error al generar el QR", error);
    }
  };

  const handleSubmitShowSendCode = () => {
    SetShowSendCode(!showSendCode);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(otpCode);
    alert("Código copiado al portapapeles"); // Puedes cambiar o eliminar esto si prefieres
  };

  return (
    <React.Fragment>
      <div className="flex gap-4 ">
        <div className="flex items-center rounded-md h-8 w-8 justify-center bg-white">
          <LockKeyhole color={BLUE10} height={15} width={15} />
        </div>
        <Title size={"big"} color={GREY150} text={"Seguridad"} />
      </div>
      <div className="flex ">
        <div>
          <Text
            className="pt-5"
            size={"medium"}
            color={GREY150}
            bold={"semi-bold"}
            text={"Verificación en dos pasos"}
          />
          <Text
            color={GREY100}
            className="pt-1"
            text={"Protege tu cuenta con la verificación en dos pasos"}
          />
        </div>
        {twoStepStatus && (
          <div className="  bg-[#33E692] text-white flex items-center justify-center w-28  rounded-full ml-10 h-10 mt-5">
            <Text text={"Activado"}></Text>
          </div>
        )}
      </div>

      {twoStepStatus && (
        <div>
          <Text
            className="w-96 pt-10 pb-10"
            color={GREY150}
            text={
              "Usa los códigos generados por tu aplicación de autenticación para iniciar sesión cada vez que ingreses en un dispositivo no asociado a tu cuenta de usuario."
            }
          ></Text>
          <button
            type="button"
            onClick={handleDeactiveAuth}
            className="text-white  bg-red-500 border-red-500 btn hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-red-600 focus:border-red-600 focus:ring focus:ring-red-100 active:text-white active:bg-red-600 active:border-red-600 active:ring active:ring-red-100 dark:ring-custom-400/20"
          >
            Desactivar
          </button>
        </div>
      )}

      {qr && !showSendCode && !twoStepStatus && (
        <div className="">
          <Text
            size={"medium-sm"}
            className="pt-4"
            color={GREY150}
            text={"Configura una aplicación de autenticación"}
            bold={"semi-bold"}
          />
          <Text
            size={"medium-sm"}
            className="pt-3"
            color={GREY150}
            text={
              "1. Instala la aplicación de Google authenticator en tu dispositivo móvil."
            }
          />
          <Text
            size={"medium-sm"}
            className="pt-3"
            color={GREY150}
            text={
              "2. Agrega tu cuenta a la aplicación de autenticación a través de la opción para añadir una cuenta nueva."
            }
          />
          <Text
            size={"medium-sm"}
            className="pt-3"
            color={GREY150}
            text={
              "3. Usa Portal de Pago PIT como nombre de la cuenta y escribe esta clave secreta."
            }
          />
          <div className="pt-5 w-[100%] flex flex-col items-center justify-center">
            <Text
              text={"Escanea el codigo QR"}
              size={"medium"}
              bold="bold"
              color={GREY150}
            />
            <img
              className="rounded-lg pt-3"
              width={200}
              height={200}
              src={`${qr}`}
              alt="QR Code"
            />
          </div>

          <Text
            size={"medium-sm"}
            className="pt-3 w-96"
            color={GREY150}
            text="ó use el código secreto para crear su registro en la aplicación de Google Authenticator"
          />

          <div className="pt-5">
            <div className="relative">
              <button
                onClick={copyToClipboard}
                className="absolute size-4 ltr:right-3 rtl:left-3 top-2 text-slate-500 dark:text-zink-200"
                aria-label="Copy to clipboard"
              >
                <Copy className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100" />
              </button>
              <input
                onClick={copyToClipboard}
                type="text"
                className="ltr:pr-10 rtl:pl-10 form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                value={otpCode}
                readOnly
              />
            </div>
          </div>
        </div>
      )}
      {showSendCode && !twoStepStatus && (
        <div className="">
          <Text
            size={"medium-sm"}
            className="pt-4"
            color={GREY150}
            text={
              "Introduce el código de verificación de 6 dígitos generado por la aplicación de autenticación. "
            }
            bold={"semi-bold"}
          />
          <div className="pt-5 rounded-b-lg">
            <div className="lg:w-[24rem]">
              <form
                onSubmit={(event: any) => {
                  event.preventDefault();
                  formik.handleSubmit();
                  return false;
                }}
                id="signInForm1"
              >
                <div className="mb-3 pt-4">
                  <input
                    type="text"
                    id="code"
                    className="form-input w-full border-slate-200 focus:outline-none focus:border-custom-500"
                    placeholder="Introduce el código de 6 digitos"
                    {...formik.getFieldProps("code")}
                  />
                  {formik.touched.code && formik.errors.code ? (
                    <div id="code-error" className="mt-1 text-sm text-red-500">
                      {formik.errors.code}
                    </div>
                  ) : null}
                </div>
                <div className="flex pt-10 w-full sm:w-auto">
                  <button
                    type="submit"
                    className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 mb-5"
                  >
                    <span className="align-middle">{" Verificar "}</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {!qr && !twoStepStatus && (
        <div>
          {" "}
          <div className="flex gap-4 pt-6">
            <div className="bg-[#CDDC01] h-9 w-9 rounded-full flex items-center justify-center">
              <Text size={"big"} color="white" text="1"></Text>
            </div>
            <div>
              <Text
                color={GREY100}
                text={
                  "La verificación en dos pasos es un nivel añadido de seguridad, "
                }
              />
              <Text
                color={GREY100}
                text={
                  "ya que solicita un código cada vez que inicias sesión en un dispositivo nuevo."
                }
              />
            </div>
          </div>
          <div className="flex gap-4 pt-6">
            <div className="bg-[#CDDC01] h-9 w-9 rounded-full flex items-center justify-center">
              <Text size={"big"} color="white" text="2"></Text>
            </div>
            <div>
              <Text
                color={GREY100}
                text={
                  "Tu aplicación de autenticación nos permite añadir un nivel de verificación "
                }
              />
              <Text color={GREY100} text={"extra para proteger tu cuenta."} />
            </div>
          </div>
        </div>
      )}
      {!showSendCode && !twoStepStatus && (
        <div className="flex pt-10 w-full sm:w-auto">
          <button
            onClick={!qr ? handleSubmitEmail : handleSubmitShowSendCode}
            type="button"
            className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 mb-5"
          >
            <span className="align-middle">
              {" "}
              {!qr ? "Configurar" : "Continuar"}
            </span>
          </button>
        </div>
      )}
    </React.Fragment>
  );
};

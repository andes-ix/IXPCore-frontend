import React, { useEffect, useState } from "react";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { GREY10, GREY100, GREY150, RED100 } from "Common/constants/colors";
import { Eye, EyeOff, Check } from "lucide-react";
import { apiClient, apiClientWithAuth } from "services";
import { AlertTypeEnum } from "Common/constants/alertType.enum";

import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";

import { useAlert } from "Common/Components/Alert/AlertProvider";
import { getTwoStepStatus as onGetTwoStepStatus } from "slices/thunk";

interface PasswordConfigProps {
  email?: string;
  handleSubmitSuccessfull?: any;
}
const PasswordConfig = ({
  email,
  handleSubmitSuccessfull,
}: PasswordConfigProps) => {
  const { showAlert } = useAlert();
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [twoStepStatus, SetTwoStepStatus] = useState<Boolean>(false);
  const [isCodeValidation, SetIsCodeValidation] = useState<Boolean>(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setCorfimPasswordVisible] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitConfirmDisabled, setIsSubmitConfirmDisabled] = useState(true);
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

  // Validations state
  const [validations, setValidations] = useState({
    hasMinLength: false,
    hasNumberAndSpecialChar: false,
    hasAllowedSpecialChar: false,
  });

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setCorfimPasswordVisible(!confirmPasswordVisible);
  };

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
  };

  const handleCode = (e: any) => {
    const value = e.target.value;
    setCode(value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    const value = e.target.value;
    setConfirmPassword(value);
    confirmPasswordValidation(value);
  };

  const confirmPasswordValidation = (confirmPassword: string) => {
    setIsSubmitConfirmDisabled(!(String(password) === String(confirmPassword)));
  };

  const validatePassword = (password: string) => {
    const hasMinLength = password.length >= 8;
    const hasNumberAndSpecialChar = /(?=.*\d)(?=.*[\W_])/.test(password);
    const hasAllowedSpecialChar = /[-/=.$#*]/.test(password);

    setValidations({
      hasMinLength,
      hasNumberAndSpecialChar,
      hasAllowedSpecialChar,
    });

    setIsSubmitDisabled(
      !(
        hasMinLength &&
        hasNumberAndSpecialChar &&
        hasAllowedSpecialChar &&
        String(password) === String(confirmPassword)
      )
    );
  };

  const validateSubmit = () => {
    let isValid = true;
    if (String(password) !== String(confirmPassword)) {
      isValid = false;
      showAlert(
        AlertTypeEnum.ERROR,
        <Title
          color={GREY100}
          bold={"bold"}
          size={"normal-bg"}
          text="Las contraseñas no coinciden"
        ></Title>,
        <p className={`text-[#DC363C] text-base `} style={{ fontSize: 12 }}>
          Verifique que los datos ingresados coincidan
        </p>
      );
    }
    return isValid;
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (validateSubmit()) {
      try {
        const data = await apiClient.post(
          "/v2/password_reset/change_password/",
          {
            email: email,
            password1: password,
            password2: confirmPassword,
          }
        );

        if (data) {
          showAlert(
            AlertTypeEnum.SUCCESS,
            <Title
              color={GREY100}
              bold={"bold"}
              size={"normal-bg"}
              text="Configuración de contraseña exitosa"
            ></Title>,
            <Text
              color={"#008446"}
              text={"Su contraseña fue configurada exitosamente"}
            ></Text>
          );
          SetIsCodeValidation(false);
          setPassword("");
          setConfirmPassword("");
          if (handleSubmitSuccessfull) {
            handleSubmitSuccessfull(true);
          }
        }

        return true;
      } catch (error) {
        const { response } = error as any;

        if (response?.status === 400) {
          showAlert(
            AlertTypeEnum.ERROR,
            <Title
              color={GREY100}
              bold={"bold"}
              size={"normal-bg"}
              text="Correo electrónico incorrecto"
            ></Title>,
            <p className={`text-[#DC363C] text-base `} style={{ fontSize: 12 }}>
              Por favor, verifica tus datos e inténtalo nuevamente.
            </p>
          );
        } else {
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

        return false;
      }
    }
  };

  const circleValidation = (text: string, validation: boolean) => {
    return (
      <div
        className={` w-2 h-2 rounded-lg ${
          text.length === 0
            ? "bg-[#CFD2D9]"
            : validation
            ? "bg-[#48BC7E]"
            : "bg-[#FB516D]"
        } flex items-center justify-center`}
      >
        {validation && text.length > 0 ? (
          <Check color="#FFFFFF" height={6} width={6} />
        ) : null}
      </div>
    );
  };

  const handleSubmitCode = async () => {
    try {
      const { data } = await apiClientWithAuth.post(
        `/v1/users/verify-authenticator/?code=${code}`
      );
      if (data && data.success) {
        dispatch(onGetTwoStepStatus());
        SetIsCodeValidation(data.success);
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

  return (
    <React.Fragment>
      <div className="flex flex-col w-[100%] h-[90%] pt-2 ">
        {!twoStepStatus || isCodeValidation ? (
          <div className="rounded">
            <div className="bg-white pl-10 pr-10 rounded-t-lg">
              <Title
                bold={"semi-bold"}
                size={"medium"}
                color={GREY100}
                className="pt-6 font-public font-semibold "
                text="Configuración de contraseña"
              />
              <div className="pt-2 pb-3">
                <Text
                  size={"medium-sm"}
                  text="Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a configurar."
                  color={GREY10}
                />
              </div>
            </div>

            <div className="bg-white pb-10 rounded-b-lg">
              <div className="lg:w-[24rem] mx-auto">
                <form onSubmit={handleSubmit} id="signInForm1">
                  <div className="mb-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="password1"
                        className="inline-block mb-2 text-base font-medium"
                      >
                        <Text
                          className="pt-2"
                          size={"medium-sm"}
                          color={GREY150}
                          text="Contraseña"
                          bold={"semi-bold"}
                        />
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="password1"
                        value={password}
                        onChange={handlePasswordChange}
                        className="form-input w-full border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        placeholder="Contraseña"
                      />
                      <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="password2"
                        className="inline-block mb-2 text-base font-medium"
                      >
                        <Text
                          className="pt-2"
                          size={"medium-sm"}
                          color={GREY150}
                          text="Confirmar contraseña"
                          bold={"semi-bold"}
                        />
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type={confirmPasswordVisible ? "text" : "password"}
                        id="password2"
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        className={`form-input w-full ${
                          confirmPassword && password !== confirmPassword
                            ? "border-red-500 focus:border-red-500"
                            : "border-slate-200 dark:border-zink-500 focus:border-custom-500"
                        } focus:outline-none disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200`}
                        placeholder="Confirmar contraseña"
                      />
                      <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={toggleConfirmPasswordVisibility}
                      >
                        {confirmPasswordVisible ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <Text
                      size={"medium-sm"}
                      text="Tu clave de acceso debe cumplir con estos requisitos:"
                      bold={"bold"}
                      color={GREY150}
                    />
                    <ul className="flex flex-col gap-1 pt-2">
                      <li>
                        <div className="flex gap-1 items-center">
                          <div>
                            {circleValidation(
                              password,
                              validations.hasMinLength
                            )}
                          </div>

                          <Text
                            color={GREY150}
                            className={`font-public `}
                            text="Tener 8 caracteres"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1 items-center ">
                          <div className="h-6">
                            {circleValidation(
                              password,
                              validations.hasNumberAndSpecialChar
                            )}
                          </div>

                          <Text
                            color={GREY150}
                            className={`font-public `}
                            text="Ser alfanumérica con al menos 1 carácter numérico y un único carácter especial"
                          />
                        </div>
                      </li>
                      <li>
                        <div className="flex gap-1 items-center">
                          {circleValidation(
                            password,
                            validations.hasAllowedSpecialChar
                          )}
                          <Text
                            className={`font-public `}
                            color={GREY150}
                            text="Tener uno de estos caracteres especiales - / = . $ # *"
                          />
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-end gap-2 mt-4 pt-4">
                    <button
                      type="button"
                      onClick={handleSubmitSuccessfull}
                      className="bg-white text-custom-500 btn hover:text-custom-500 hover:bg-custom-100 focus:text-custom-500 focus:bg-custom-100 active:text-custom-500 active:bg-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500/10 dark:focus:bg-custom-500/10 dark:active:bg-custom-500/10"
                    >
                      Cancelar
                    </button>

                    <button
                      type="submit"
                      className={` text-white ${
                        isSubmitDisabled && isSubmitConfirmDisabled
                          ? " btn bg-[#9EC3E4] border-[#9EC3E4]  cursor-not-allowed"
                          : "   transition-all duration-200 ease-linear btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                      }`}
                    >
                      {"Guardar"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded">
            <div className="bg-white pl-10 pr-10 rounded-t-lg">
              <Title
                bold={"semi-bold"}
                size={"medium"}
                color={GREY100}
                className="pt-6 font-public font-semibold "
                text="Autenticación de usuario"
              />
              <div className="pt-2 pb-3">
                <Text
                  size={"medium-sm"}
                  text="Ingrese el código de su aplicación de autenticación"
                  color={GREY10}
                />
              </div>
            </div>

            <div className="bg-white pb-10 rounded-b-lg">
              <div className="lg:w-[24rem] mx-auto">
                <form onSubmit={handleSubmit} id="signInForm1">
                  <div className="mb-3">
                    <div className="flex justify-between">
                      <label
                        htmlFor="password1"
                        className="inline-block mb-2 text-base font-medium"
                      >
                        <Text
                          className="pt-2"
                          size={"medium-sm"}
                          color={GREY150}
                          text="Codigo"
                          bold={"semi-bold"}
                        />
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type={passwordVisible ? "text" : "password"}
                        id="code"
                        value={code}
                        onChange={handleCode}
                        className="form-input w-full border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                        placeholder="Code"
                      />
                      <div
                        className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        {passwordVisible ? (
                          <EyeOff className="h-5 w-5 text-gray-500" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-500" />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="mt-10">
                    <button
                      type="button"
                      onClick={handleSubmitCode}
                      className={`w-full text-white btn ${
                        !code
                          ? "bg-[#9EC3E4] border-[#9EC3E4] cursor-not-allowed"
                          : "bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                      }`}
                      disabled={code ? false : true}
                    >
                      Guardar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default PasswordConfig;

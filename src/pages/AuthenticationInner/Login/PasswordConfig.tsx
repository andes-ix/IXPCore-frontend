import React, { useState } from "react";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { GREY10, GREY100, GREY150, RED100 } from "Common/constants/colors";
import { Eye, EyeOff, Check } from "lucide-react";
import Modal from "Common/Components/Modal";
import { useNavigate } from "react-router-dom";
import { apiClient } from "services";
import { AlertTypeEnum } from "Common/constants/alertType.enum";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert";

interface PasswordConfigProps {
  email?: string;
}
const PasswordConfig = ({ email }: PasswordConfigProps) => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setCorfimPasswordVisible] = useState(false);
  const [extraLargeModal, setExtraLargeModal] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [isSubmitConfirmDisabled, setIsSubmitConfirmDisabled] = useState(true);
  const [showAlert, SetShowAlerts] = useState<boolean>(false);
  const [msgAlert, SetMsgAlert] = useState<JSX.Element | string>("");
  const [titleAlert, SetTitleAlert] = useState<JSX.Element | string>("");
  const [alertType, SetAlertType] = useState<AlertTypeEnum>(
    AlertTypeEnum.SUCCESS
  );
  const handleShowAlert = (event: any) => {
    SetShowAlerts(!showAlert);
    return;
  };

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

  const extraLargeToggle = () => setExtraLargeModal(!extraLargeModal);

  const handlePasswordChange = (e: any) => {
    const value = e.target.value;
    setPassword(value);
    validatePassword(value);
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

  const handleShowAlertTime = () => {
    SetShowAlerts(!showAlert);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (String(password) === String(confirmPassword)) {
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
            <Text
              color={"#008446"}
              text={
                "Ingresa al sistema con tus credenciales de acceso para empezar a disfrutar los beneficios de nuestro PCP."
              }
            ></Text>
          );
          const timer = setTimeout(() => {
            handleShowAlertTime();
            navigate("/login"); // Cambia "/ruta-deseada" por la ruta a la que deseas redirigir
          }, 5000);
        }
        // navigate("/login");

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
    } else {
      SetShowAlerts(true);
      SetAlertType(AlertTypeEnum.ERROR);

      SetTitleAlert(
        <Title
          color={GREY100}
          bold={"bold"}
          size={"normal-bg"}
          text="Las contraseñas no coinciden"
        ></Title>
      );
      SetMsgAlert(
        <p className={`text-[#DC363C] text-base `} style={{ fontSize: 12 }}>
          Verifique que los datos ingresados coincidan
        </p>
      );
    }
  };

  const handleAcceptTermsAndConditions = (event: any) => {
    event.preventDefault();
    extraLargeToggle();
    navigate("/dashboard");
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

  return (
    <React.Fragment>
      <CustomAlert
        type={alertType}
        show={showAlert}
        handleShowAlert={handleShowAlert}
        title={titleAlert}
        msg={msgAlert}
      />
      <div className="flex flex-col w-[100%] h-[90%] pt-10 ">
        <div className="rounded">
          <div className="bg-white pt-10 pl-10 pr-10 rounded-t-lg">
            <div>
              <img src={"/img/logo.webp"} alt="PIT" width={80} height={94} />
            </div>
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
                          {circleValidation(password, validations.hasMinLength)}
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

                <div className="mt-10">
                  <button
                    type="submit"
                    className={`w-full text-white btn ${
                      isSubmitDisabled && isSubmitConfirmDisabled
                        ? "bg-[#9EC3E4] border-[#9EC3E4] cursor-not-allowed"
                        : "bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                    }`}
                    disabled={isSubmitDisabled && isSubmitConfirmDisabled}
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        show={extraLargeModal}
        onHide={extraLargeToggle}
        id="extraLargeModal"
        modal-center="true"
        className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4"
        dialogClassName="w-screen lg:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full"
      >
        <Modal.Body>
          <Title
            size={"medium"}
            text="Términos y condiciones de uso PIT PERU S.A.C"
            className=" pl-10 pt-10 pr-10 pb-5"
          />
          <div className="max-h-[calc(theme('height.screen')_-_250px)] p-10 overflow-y-auto">
            <Text text="PIT PERU S.A.C, identificada con número de RUC 20605039546, domiciliada en Cal. Mártir José Olaya 129, Distrito de Miraflores, provincia de Lima, es una persona jurídica de derecho privado, dedicada a (…)1 . Pone a disposición de sus clientes incluyendo a los usuarios de la página web www.(...).pe el presente términos y condiciones." />
            <Text text="PIT PERU S.A.C, identificada con número de RUC 20605039546, domiciliada en Cal. Mártir José Olaya 129, Distrito de Miraflores, provincia de Lima, es una persona jurídica de derecho privado, dedicada a (…)1 . Pone a disposición de sus clientes incluyendo a los usuarios de la página web www.(...).pe el presente términos y condiciones." />
            {/* Más texto aquí */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className="flex flex-col pt-10 pb-10 pl-10 gap-1">
            <div className="flex gap-1">
              <div className="flex items-center gap-2">
                <input
                  id="checkboxDefault22"
                  className="size-4 border rounded-sm appearance-none cursor-pointer bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-[#1BD699] checked:border-green-500 dark:checked:bg-green-500 dark:checked:border-green-500 checked:disabled:bg-green-400 checked:disabled:border-green-400"
                  type="checkbox"
                  value=""
                />
                <label htmlFor="checkboxDefault22" className="align-middle">
                  <Text text="Acepto el presente TERMINOS Y CONDICIONES DE PIT PERÚ”" />
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-3 pr-8">
              <button
                onClick={extraLargeToggle}
                type="button"
                className="bg-white text-custom-500 btn hover:text-custom-500 hover:bg-custom-100 focus:text-custom-500 focus:bg-custom-100 active:text-custom-500 active:bg-custom-100 dark:bg-zink-700 dark:hover:bg-custom-500/10 dark:focus:bg-custom-500/10 dark:active:bg-custom-500/10"
              >
                Cancelar
              </button>
              <button
                onClick={handleAcceptTermsAndConditions}
                type="button"
                className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
                Aceptar
              </button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default PasswordConfig;

import React, { useState } from "react";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { GREY10, GREY100, GREY150 } from "Common/constants/colors";
import { Eye, EyeOff } from "lucide-react";
import Modal from "Common/Components/Modal";
import { useNavigate } from "react-router-dom";

const PasswordConfig = () => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setCorfimPasswordVisible] = useState(false);
  const [extraLargeModal, setExtraLargeModal] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setCorfimPasswordVisible(!confirmPasswordVisible);
  };

  const extraLargeToggle = () => setExtraLargeModal(!extraLargeModal);

  const requirementsList = [
    "- Tener 8 caracteres",
    "- Ser alfanumérica con al menos 1 carácter numérico y un único carácter especial ",
    "- Tener uno de estos caracteres especiales - / = . $ # * ",
    "- Evita colocar información personal",
  ];

  const handleSubmit = (event: any) => {
    event.preventDefault();

    extraLargeToggle();
  };

  const handleAcceptTermsAndConditions = (event: any) => {
    event.preventDefault();
    extraLargeToggle();
    navigate("/dashboard");
  };

  return (
    <React.Fragment>
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
                      className="form-input w-full border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
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
                  <ul>
                    {requirementsList.map((requirement, index) => (
                      <li key={index}>
                        <Text
                          className="font-public"
                          color={GREY150}
                          text={requirement}
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                  >
                    Guardar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

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

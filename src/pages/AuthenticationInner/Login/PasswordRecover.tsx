import React from "react";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { BLUE10, GREY100, GREY150 } from "Common/constants/colors";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PasswordRecover = () => {
  const navigate = useNavigate();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    navigate("/auth-password-config");
  };

  const handleGoBack = (event: any) => {
    event.preventDefault();
    navigate("/auth-login-modern");
  };

  return (
    <React.Fragment>
      <div className="flex flex-col w-[100%] h-[90%] pt-10 ">
        <div className="rounded">
          <div className="bg-white pt-10  pr-10 rounded-t-lg">
            <div className="pl-10">
              <img src={"/img/logo.webp"} alt="PIT" width={80} height={94} />
            </div>
            <div className="">
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
                ></Text>
              </span>
            </div>

            <div className="pt-2 pl-10 pr-10">
              <Title
                bold={"semi-bold"}
                size={"medium-sm"}
                text="Ingrese su correo electrónico registrado en la aplicación"
                color={GREY100}
              />
            </div>
          </div>

          <div className="bg-white pb-10 rounded-b-lg">
            <div className="lg:w-[24rem] mx-auto">
              <form onSubmit={handleSubmit} id="signInForm1">
                <div className="mb-3 pt-4">
                  <div className="flex justify-between">
                    <label
                      htmlFor="password2"
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
                      id="password2"
                      className="form-input w-full border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                      placeholder="Correo electrónico"
                    />
                  </div>
                </div>

                <div className="pt-12">
                  <button
                    type="submit"
                    className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                  >
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PasswordRecover;

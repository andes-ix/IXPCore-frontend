import React from "react";
import { ChevronRight } from "lucide-react";
import { useFormik as useFormic } from "formik";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { useNavigate } from "react-router-dom";
import { BLUE10, GREY100, GREY150 } from "Common/constants/colors";
import withRouter from "Common/withRouter";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import * as Yup from "yup";
import { loginUser } from "slices/thunk";

const SingInForm = (props: any) => {
  const navigate = useNavigate();
  const handleSubmitRecoveryPassword = (event: any) => {
    event.preventDefault();
    navigate("/auth-password-recover");
  };

  const dispatch = useDispatch<any>();

  const selectLogin = createSelector(
    (state: any) => state.Register,
    (state: any) => state.Login,
    (register, login) => ({
      user: register.user,
      success: login.success,
      error: login.error,
    })
  );

  const { user, success, error } = useSelector(selectLogin);

  const validation: any = useFormic({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: user.email || "",
      password: user.password || "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your email"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values: any) => {
      dispatch(loginUser(values, props.router.navigate));
    },
  });

  return (
    <React.Fragment>
      <div className="flex flex-col w-[90%] h-[90%] pt-10 ">
        <div className="rounded">
          <div className="bg-white pt-10 pl-10 pr-10 rounded-t-lg">
            <div>
              {" "}
              <img src={"/img/logo.webp"} alt="PIT" width={80} height={94} />
            </div>
            <Title
              bold={"semi-bold"}
              size={"big"}
              color={GREY100}
              className="pt-5 font-public"
              text="¡Hola!"
            ></Title>
            <div className="pt-2">
              <p className={`text-[#8A8F9C] text-base `}>
                Ingresa tu correo electrónico y contraseña e inicia sesión para
                disfrutar de los beneficios de nuestro
                <span className={`text-[#168EEA] text-sm font-semibold `}>
                  <a href="#"> PCP</a>
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-0 bg-white pl-8">
            <ChevronRight className="pt-2" color={BLUE10} />{" "}
            <Text
              className="pt-2 pb-10"
              size={"medium-sm"}
              color={BLUE10}
              text="Términos y Condiciones de uso"
            ></Text>
          </div>
          <div className="bg-[#F5F6F7] pb-10 rounded-b-lg">
            <div className="lg:w-[20rem] mx-auto ">
              <form
                action="/"
                className=""
                id="signInForm1"
                onSubmit={(event: any) => {
                  event.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <div className="mb-3">
                  <label
                    htmlFor="username"
                    className="inline-block mb-2 text-base font-medium pt-5"
                  >
                    <Text
                      className="pt-2"
                      size={"medium-sm"}
                      color={GREY150}
                      text="Correo electrónico"
                      bold={"semi-bold"}
                    ></Text>
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Correo electronico"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.email || ""}
                  />
                  {validation.touched.password && validation.errors.password ? (
                    <div
                      id="password-error"
                      className="mt-1 text-sm text-red-500"
                    >
                      {validation.errors.password}
                    </div>
                  ) : null}
                  {validation.touched.email && validation.errors.email ? (
                    <div id="email-error" className="mt-1 text-sm text-red-500">
                      {validation.errors.email}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <div className="flex justify-between">
                    <label
                      htmlFor="password"
                      className="inline-block mb-2 text-base font-medium"
                    >
                      <Text
                        className="pt-2"
                        size={"medium-sm"}
                        color={GREY150}
                        text="Contraseña"
                        bold={"semi-bold"}
                      ></Text>
                    </label>
                    <span
                      onClick={handleSubmitRecoveryPassword}
                      className="text-blue-500 cursor-pointer hover:underline"
                    >
                      <Text
                        size={"normal"}
                        color={BLUE10}
                        text="Recuperar contraseña?"
                        bold={"semi-bold"}
                      ></Text>
                    </span>
                  </div>

                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Contraseña"
                    onChange={validation.handleChange}
                    onBlur={validation.handleBlur}
                    value={validation.values.password || ""}
                  />
                  <div
                    id="password-error"
                    className="hidden mt-1 text-sm text-red-500"
                  >
                    Password must be at least 8 characters long and contain both
                    letters and numbers.
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    type="submit"
                    className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                  >
                    Iniciar sesion
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

export default withRouter(SingInForm);

import React from "react";
import ModernImage from "../ModernImage";
import { Link } from "react-router-dom";

const LoginModern = () => {
  document.title = "Sign In | Tailwick - React Admin & Dashboard Template";

  React.useEffect(() => {
    const bodyElement = document.body;
    bodyElement.classList.add("font-public");
    return () => {
      bodyElement.classList.remove("font-public");
    };
  }, []);

  return (
    <React.Fragment>
      <div className="relative flex justify-end w-full h-screen overflow-hidden bg-[#F1F5F9]">
        {/* Contenedor de la imagen con posición relativa */}
        <div className=" w-full h-full ">
          <ModernImage />

          {/* Contenedor superpuesto */}
          <div className="absolute top-20 left-10 flex justify-end w-full h-full">
            {/* Contenedor del formulario */}
            <div className="max-h-[50%] px-10 py-14 flex items-center justify-center m-10 bg-white rounded shadow-lg">
              <div className="lg:w-[25rem] w-full">
                <form action="/" className="mt-10" id="signInForm1">
                  <div
                    className="hidden p-3 mb-3 text-base text-green-500 border border-green-200 rounded-md bg-green-50"
                    id="successAlert"
                  >
                    You have <b>successfully</b> signed in.
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="username"
                      className="inline-block mb-2 text-base font-medium"
                    >
                      UserName/ Email ID
                    </label>
                    <input
                      type="text"
                      id="username"
                      className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                      placeholder="Enter username or email"
                    />
                    <div
                      id="username-error"
                      className="hidden mt-1 text-sm text-red-500"
                    >
                      Please enter a valid email address.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="inline-block mb-2 text-base font-medium"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password1"
                      className="form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                      placeholder="Enter password"
                    />
                    <div
                      id="password-error"
                      className="hidden mt-1 text-sm text-red-500"
                    >
                      Password must be at least 8 characters long and contain
                      both letters and numbers.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <input
                      id="emailCheckRememberMe"
                      className="size-4 border rounded-sm appearance-none bg-slate-100 border-slate-200 dark:bg-zink-600 dark:border-zink-500 checked:bg-custom-500 checked:border-custom-500 dark:checked:bg-custom-500 dark:checked:border-custom-500 checked:disabled:bg-custom-400 checked:disabled:border-custom-400"
                      type="checkbox"
                    />
                    <label
                      htmlFor="emailCheckRememberMe"
                      className="inline-block text-base font-medium align-middle cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <div className="mt-10">
                    <button
                      type="submit"
                      className="w-full text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="flex justify-between gap-2 text-base font-medium text-slate-500 dark:text-zink-200 mt-7">
                  <Link
                    to="/authentication/register-modern"
                    className="text-custom-500 hover:text-custom-600 dark:text-custom-500 dark:hover:text-custom-400"
                  >
                    Create an Account
                  </Link>
                  <Link
                    to="/authentication/reset-password-modern"
                    className="text-custom-500 hover:text-custom-600 dark:text-custom-500 dark:hover:text-custom-400"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginModern;

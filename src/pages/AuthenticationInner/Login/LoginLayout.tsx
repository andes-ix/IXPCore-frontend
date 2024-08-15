import React from "react";
import ModernImage from "../ModernImageOriginal";

interface IProps {
  children: React.ReactNode;
}
const LoginLayout = ({ children }: IProps) => {
  document.title = "Sign In | Tailwick - React Admin & Dashboard Template";

  return (
    <React.Fragment>
      <div className="relative flex flex-col w-full overflow-hidden xl:flex-row to-custom-800 bg-[#F1F5F9] ">
        <ModernImage />
        <div className="grow-[0.85]"></div>
        <div className="min-h-[calc(100vh_-_theme('spacing.4')_*_2)] mx-3 lg:w-[34rem] shrink-0 px-10 py-14 flex items-center justify-center m-4  z-10 relative dark:bg-zink-700 dark:Title-zink-100 md:mx-auto xl:mx-4">
          {children}
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginLayout;

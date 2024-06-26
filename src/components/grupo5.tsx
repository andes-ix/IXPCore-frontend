import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type Grupo5Type = {
  className?: string;
};

const Grupo5: FunctionComponent<Grupo5Type> = memo(({ className = "" }) => {
  const navigate = useNavigate();

  const onRecuperarContraseaTextClick = useCallback(() => {
    navigate("/login-2");
  }, [navigate]);

  return (
    <div
      className={`absolute w-[calc(100%_-_61px)] top-[calc(50%_+_22.5px)] right-[22px] left-[39px] h-[172px] text-left text-xs text-dimgray-100 font-open-sans ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] font-semibold">
        Email address
      </div>
      <div className="absolute w-full top-[calc(50%_-_59px)] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white h-12" />
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white h-12" />
      <div className="absolute top-[calc(50%_-_44px)] left-[14px] text-sm text-darkgray-100">
        Email
      </div>
      <div className="absolute bottom-[14px] left-[14px] text-sm text-darkgray-100">
        Password
      </div>
      <div
        className="absolute top-[calc(50%_+_10px)] right-[7px] font-semibold text-cornflowerblue cursor-pointer"
        onClick={onRecuperarContraseaTextClick}
      >
        Recuperar contraseña?
      </div>
      <div className="absolute top-[calc(50%_+_11px)] left-[0px] font-semibold">
        Password
      </div>
    </div>
  );
});

export default Grupo5;

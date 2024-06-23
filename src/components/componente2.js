import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type Componente2Type = {
  className?: string;
};

const Componente2: FunctionComponent<Componente2Type> = memo(
  ({ className = "" }) => {
    const navigate = useNavigate();

    const onDashboardTextClick = useCallback(() => {
      navigate("/dashboard");
    }, [navigate]);

    return (
      <div
        className={`absolute top-[144px] left-[23px] w-[227.3px] h-[322.7px] text-left text-base text-lightslategray-100 font-open-sans ${className}`}
      >
        <div
          className="absolute top-[calc(50%_-_106.65px)] left-[calc(50%_-_60.65px)] cursor-pointer"
          onClick={onDashboardTextClick}
        >
          Dashboard
        </div>
        <div className="absolute top-[calc(50%_+_24.35px)] left-[calc(50%_-_60.65px)]">
          Cuenta
        </div>
        <div className="absolute top-[calc(50%_-_38.65px)] left-[calc(50%_-_60.65px)]">
          Servicios
        </div>
        <div className="absolute top-[calc(50%_+_95.35px)] left-[calc(50%_-_60.65px)]">
          Usuarios
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_-_60.65px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[calc(50%_+_84.35px)] left-[calc(50%_-_60.65px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[0px] left-[0px] text-lg font-semibold text-white">
          Menu
        </div>
        <img
          className="absolute top-[calc(50%_+_101.65px)] right-[0px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <img
          className="absolute top-[calc(50%_+_30.65px)] right-[0px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <img
          className="absolute top-[calc(50%_-_32.35px)] right-[0px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <div className="absolute top-[calc(50%_-_104.35px)] left-[13px] w-[18px] h-[18px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
        </div>
        <img
          className="absolute top-[calc(50%_+_27.65px)] left-[13px] w-[21px] h-5"
          alt=""
          src="/wallet.svg"
        />
        <div className="absolute top-[calc(50%_+_94.65px)] left-[11px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-lightslategray-100">
          <img
            className="absolute w-[calc(100%_-_4px)] right-[2px] bottom-[-1px] left-[2px] max-w-full overflow-hidden h-2"
            alt=""
            src="/trazado-24991.svg"
          />
          <img
            className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_5px)] rounded-[50%] w-2.5 h-2.5"
            alt=""
            src="/elipse-3661.svg"
          />
        </div>
        <img
          className="absolute bottom-[5.7px] left-[19px] w-1 h-1 opacity-[0]"
          alt=""
          src="/oval1.svg"
        />
        <img
          className="absolute top-[calc(50%_+_33.65px)] left-[19px] w-1 h-1 opacity-[0]"
          alt=""
          src="/oval1.svg"
        />
        <img
          className="absolute top-[calc(50%_-_37.26px)] right-[196.3px] w-[19px] h-[19.2px]"
          alt=""
          src="/trazado-30234.svg"
        />
      </div>
    );
  }
);

export default Componente2;

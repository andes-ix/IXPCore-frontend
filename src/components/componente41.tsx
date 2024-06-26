import { FunctionComponent, memo } from "react";

export type Componente4Type = {
  className?: string;
};

const Componente4: FunctionComponent<Componente4Type> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`absolute top-[144px] left-[17.17px] w-[261.9px] h-[322.7px] text-left text-base text-lightslategray-100 font-open-sans ${className}`}
      >
        <img
          className="absolute w-full top-[41px] right-[0px] left-[0px] max-w-full overflow-hidden h-[49.7px]"
          alt=""
          src="/rectangle1.svg"
        />
        <div className="absolute top-[calc(50%_-_106.65px)] left-[calc(50%_-_72.12px)] text-steelblue-100">
          Dashboard
        </div>
        <div className="absolute top-[calc(50%_+_24.35px)] left-[calc(50%_-_72.12px)]">
          Cuenta
        </div>
        <div className="absolute top-[calc(50%_-_38.65px)] left-[calc(50%_-_72.12px)]">
          Servicios
        </div>
        <div className="absolute top-[calc(50%_+_95.35px)] left-[calc(50%_-_72.12px)]">
          Usuarios
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_-_72.12px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[calc(50%_+_84.35px)] left-[calc(50%_-_72.12px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[0px] left-[5.83px] text-lg font-semibold text-white">
          Menu
        </div>
        <img
          className="absolute top-[calc(50%_+_101.65px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <img
          className="absolute top-[calc(50%_+_30.65px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <img
          className="absolute top-[calc(50%_-_32.35px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <div className="absolute top-[calc(50%_-_104.35px)] left-[18.83px] w-[18px] h-[18px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-steelblue-100" />
          <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-steelblue-100" />
          <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-steelblue-100" />
          <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-steelblue-100" />
        </div>
        <img
          className="absolute top-[calc(50%_+_27.65px)] left-[18.83px] w-[21px] h-5"
          alt=""
          src="/wallet.svg"
        />
        <div className="absolute top-[calc(50%_+_94.65px)] left-[16.83px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-lightslategray-100">
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
          className="absolute bottom-[5.7px] left-[24.83px] w-1 h-1 opacity-[0]"
          alt=""
          src="/oval1.svg"
        />
        <img
          className="absolute top-[calc(50%_+_33.65px)] left-[24.83px] w-1 h-1 opacity-[0]"
          alt=""
          src="/oval1.svg"
        />
        <img
          className="absolute top-[calc(50%_-_37.26px)] right-[225.07px] w-[19px] h-[19.2px]"
          alt=""
          src="/trazado-30234.svg"
        />
      </div>
    );
  }
);

export default Componente4;

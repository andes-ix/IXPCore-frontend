import { FunctionComponent, memo } from "react";

export type Grupo2Type = {
  className?: string;
};

const Grupo2: FunctionComponent<Grupo2Type> = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute h-[calc(100%_-_42px)] w-full top-[42px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0] text-left text-sm text-lightslategray-100 font-open-sans ${className}`}
    >
      <b className="absolute top-[calc(50%_-_142.7px)] left-[calc(50%_-_109px)] leading-[22px] inline-block text-dimgray-100 w-[171px] h-5">
        Opciones de descarga
      </b>
      <b className="absolute top-[calc(50%_-_112.7px)] left-[calc(50%_-_109px)] leading-[22px] inline-block text-cornflowerblue w-[163px] h-5">
        Información de interes
      </b>
      <b className="absolute top-[calc(50%_+_36.3px)] left-[calc(50%_-_109px)] leading-[22px] inline-block text-cornflowerblue w-[171px] h-5">
        Formato de preferencia
      </b>
      <div className="absolute top-[calc(50%_-_79.5px)] left-[calc(50%_-_81px)]">
        General
      </div>
      <div className="absolute top-[calc(50%_+_69.5px)] left-[calc(50%_-_81px)]">
        PDF
      </div>
      <div className="absolute top-[calc(50%_-_6.5px)] left-[calc(50%_-_81px)]">
        Pagos
      </div>
      <div className="absolute bottom-[184.5px] left-[calc(50%_-_81px)] font-semibold text-steelblue-100">
        Facturas
      </div>
      <div className="absolute bottom-[35.5px] left-[calc(50%_-_81px)] font-semibold text-steelblue-100">
        Excel
      </div>
      <div className="absolute top-[calc(50%_-_79.7px)] left-[calc(50%_-_109px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-400" />
      <div className="absolute top-[calc(50%_+_69.3px)] left-[calc(50%_-_109px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-400" />
      <div className="absolute top-[calc(50%_-_6.7px)] left-[calc(50%_-_109px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-400" />
      <div className="absolute top-[calc(50%_-_42.7px)] left-[calc(50%_-_109px)] shadow-[-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff] rounded-8xs bg-mediumseagreen w-5 h-5">
        <img
          className="absolute top-[calc(50%_-_3.61px)] right-[5.17px] w-[9.7px] h-[7.2px]"
          alt=""
          src="/trazado-29739.svg"
        />
      </div>
      <div className="absolute top-[calc(50%_+_106.3px)] left-[calc(50%_-_109px)] shadow-[-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff] rounded-8xs bg-mediumseagreen w-5 h-5">
        <img
          className="absolute top-[calc(50%_-_3.61px)] right-[5.17px] w-[9.7px] h-[7.2px]"
          alt=""
          src="/trazado-29739.svg"
        />
      </div>
    </div>
  );
});

export default Grupo2;

import { FunctionComponent, memo } from "react";
import Componente from "./componente";
import Componente3 from "./componente3";

export type Grupo1Type = {
  className?: string;
};

const Grupo1: FunctionComponent<Grupo1Type> = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute top-[-2px] right-[0px] w-[1621px] h-[297.7px] text-left text-sm text-cornflowerblue font-open-sans ${className}`}
    >
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.03)] bg-white h-[100px]" />
      <img
        className="absolute top-[28px] right-[255px] w-[45px] h-[45px]"
        alt=""
        src="/componente-22--7.svg"
      />
      <img
        className="absolute top-[28px] right-[185px] w-[45px] h-[45px]"
        alt=""
        src="/componente-22--8.svg"
      />
      <div className="absolute top-[43px] left-[35px]">
        <span>{`Empresa: `}</span>
        <b>Fiber digital</b>
      </div>
      <img
        className="absolute top-[50.36px] left-[193.64px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright4.svg"
      />
      <Componente />
      <Componente3 />
    </div>
  );
});

export default Grupo1;

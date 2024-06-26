import { FunctionComponent, memo } from "react";

export type Grupo8Type = {
  className?: string;
};

const Grupo8: FunctionComponent<Grupo8Type> = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1550px] left-[78px] w-[261px] h-[279px] text-left text-sm text-dimgray-200 font-open-sans ${className}`}
    >
      <div className="absolute top-[0px] right-[-1px] font-light">
        <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
        <p className="m-0">10Gbps - Pago mensual</p>
      </div>
      <div className="absolute top-[calc(50%_-_63.5px)] right-[-1px] font-light">
        <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
        <p className="m-0">10Gbps - Pago mensual</p>
      </div>
      <div className="absolute top-[calc(50%_+_11.5px)] right-[-1px] font-light">
        <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
        <p className="m-0">10Gbps - Pago mensual</p>
      </div>
      <div className="absolute right-[-1px] bottom-[18px] font-light">
        <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
        <p className="m-0">10Gbps - Pago mensual</p>
      </div>
      <b className="absolute top-[39px] left-[calc(50%_-_69.5px)] text-xs">
        Finanzas PIT
      </b>
      <b className="absolute top-[calc(50%_-_24.5px)] left-[calc(50%_-_69.5px)] text-xs">
        Finanzas PIT
      </b>
      <b className="absolute top-[calc(50%_+_50.5px)] left-[calc(50%_-_69.5px)] text-xs">
        Finanzas PIT
      </b>
      <b className="absolute bottom-[0px] left-[calc(50%_-_69.5px)] text-xs">
        Finanzas PIT
      </b>
      <img
        className="absolute top-[2px] left-[0px] w-12 h-[47px]"
        alt=""
        src="/group10.svg"
      />
      <img
        className="absolute top-[calc(50%_-_60.5px)] left-[0px] w-12 h-12"
        alt=""
        src="/group11.svg"
      />
      <img
        className="absolute top-[calc(50%_+_11.5px)] left-[0px] w-12 h-12"
        alt=""
        src="/group12.svg"
      />
      <img
        className="absolute bottom-[6px] left-[0px] w-12 h-12"
        alt=""
        src="/group13.svg"
      />
    </div>
  );
});

export default Grupo8;

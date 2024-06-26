import { FunctionComponent, memo } from "react";

export type DetalleDePagoType = {
  className?: string;
};

const DetalleDePago: FunctionComponent<DetalleDePagoType> = memo(
  ({ className = "" }) => {
    return (
      <div
        className={`relative bg-gray-300 w-[430px] h-[929px] max-w-full max-h-full overflow-auto text-left text-sm text-lightslategray-100 font-open-sans ${className}`}
      >
        <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-8xs bg-white box-border w-[430px] h-[809px] border-[0.5px] border-solid border-dimgray-300" />
        <img
          className="absolute top-[33px] right-[26px] w-3.5 h-3.5"
          alt=""
          src="/ic-clear-24px.svg"
        />
        <div className="absolute top-[25px] left-[20px] text-lg text-dimgray-100">
          <span>{`Detalle de pago `}</span>
          <b className="text-cornflowerblue">F 001-00001753</b>
        </div>
        <div className="absolute top-[109.66px] left-[24.08px] w-[334px] h-[224.1px] text-xs text-darkgray-200">
          <b className="absolute top-[calc(50%_+_44.45px)] left-[2.08px] text-sm text-dimgray-100">
            Servicios asociados
          </b>
          <div className="absolute bottom-[23.97px] left-[2.08px]">
            [SERV-0010] Puerta a Conexión 10Gbps - Pago mensual
          </div>
          <div className="absolute bottom-[-0.03px] left-[2.04px]">
            [SERV-0020] Crossconexión
          </div>
          <div className="absolute top-[calc(50%_-_85.05px)] left-[0%] text-royalblue">
            Fiber digital sociedad comercial de responsabilidad limitada
          </div>
          <b className="absolute top-[0px] left-[0.08px] text-sm text-dimgray-100">
            Datos del cliente
          </b>
          <div className="absolute top-[calc(50%_-_60.42px)] left-[0.08px] text-dimgray-200">
            <span className="font-semibold">RUC 20604630488</span>
            <span className="text-darkgray-200" />
          </div>
          <div className="absolute top-[calc(50%_-_35.05px)] left-[0.08px] font-semibold text-dimgray-200">
            Dirección
          </div>
          <div className="absolute top-[calc(50%_-_15.05px)] left-[2.04px]">
            <p className="m-0">
              MZA,L18 Lote 25,C,H,Mariscal Cáceres (Intercesión
            </p>
            <p className="m-0">Av., central y Av. Muro)</p>
          </div>
        </div>
        <div className="absolute top-[430.37px] left-[24px] text-base leading-[22px] text-dimgray-200">
          <span>{`Fecha `}</span>
          <b className="text-cornflowerblue">10/03/2024</b>
        </div>
        <b className="absolute top-[485px] left-[26.08px] text-lg">Importe</b>
        <b className="absolute top-[468.37px] left-[26.08px] text-cornflowerblue">
          S/ 357,00 PEN
        </b>
        <b className="absolute top-[396.37px] left-[24px] text-dimgray-100">
          Información general del pago
        </b>
        <b className="absolute top-[536.79px] left-[24px] text-lg">Diario</b>
        <b className="absolute top-[484.79px] left-[204px] text-lg">Moneda</b>
        <b className="absolute top-[520.16px] left-[24px] text-cornflowerblue">
          Banco de la nación
        </b>
        <b className="absolute top-[468.16px] left-[204px] text-cornflowerblue">
          Soles
        </b>
        <b className="absolute top-[575.87px] left-[24.08px]">Memo</b>
        <div className="absolute top-[602.5px] left-[24.08px] text-xs text-darkgray-200">
          E001 0000000110 FIBER LINE S.A.C
        </div>
        <b className="absolute top-[639.52px] left-[24.08px]">
          Cuenta bancaria de la empresa
        </b>
        <div className="absolute top-[666.16px] left-[24.08px] text-xs text-darkgray-200">
          00-074-173713
        </div>
        <div className="absolute top-[690.16px] left-[24.08px] text-xs text-darkgray-200">
          Banco de la nacion
        </div>
        <b className="absolute top-[725.16px] left-[24.08px]">Método de pago</b>
        <div className="absolute bottom-[160.21px] left-[24.08px] text-xs text-darkgray-200">
          Manual
        </div>
        <div className="absolute top-[396px] right-[30px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[54px] h-12">
          <img
            className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-5 h-5"
            alt=""
            src="/download1.svg"
          />
        </div>
      </div>
    );
  }
);

export default DetalleDePago;

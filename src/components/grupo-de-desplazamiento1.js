import { FunctionComponent, memo } from "react";

export type GrupoDeDesplazamiento1Type = {
  className?: string;
};

const GrupoDeDesplazamiento1: FunctionComponent<GrupoDeDesplazamiento1Type> =
  memo(({ className = "" }) => {
    return (
      <div
        className={`absolute w-full top-[calc(50%_+_141.64px)] right-[0px] left-[0px] h-[195px] overflow-auto mix-blend-normal text-left text-base text-darkslategray font-open-sans ${className}`}
      >
        <div className="absolute h-full w-[calc(100%_+_481px)] top-[0px] right-[-481px] bottom-[0px] left-[0px]">
          <div className="absolute w-full top-[calc(50%_-_42.5px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-aliceblue-300 h-[55px]" />
          <b className="absolute top-[14px] left-[calc(50%_-_123.91px)] leading-[13px] text-lightslategray-100">
            Cantidad
          </b>
          <b className="absolute top-[14px] left-[calc(50%_+_11.97px)] leading-[13px] text-lightslategray-100">
            Precio unitario
          </b>
          <b className="absolute top-[14px] left-[calc(50%_+_181.68px)] leading-[13px] text-lightslategray-100">
            Impuestos
          </b>
          <b className="absolute top-[14px] right-[64.99px] leading-[13px] text-lightslategray-100">
            Importe
          </b>
          <b className="absolute top-[15px] left-[43px] leading-[13px] text-lightslategray-100">
            Descripción
          </b>
          <div className="absolute top-[calc(50%_-_25.5px)] left-[44px] text-sm text-lightslategray-100">
            <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
            <p className="m-0">10Gbps - Pago mensual</p>
          </div>
          <div className="absolute top-[calc(50%_-_19.5px)] left-[calc(50%_+_185.42px)]">
            IGV 18%
          </div>
          <div className="absolute top-[calc(50%_-_19.5px)] right-[54.47px]">
            $ 2.000,00
          </div>
          <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_118.48px)]">
            1
          </div>
          <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_+_19.13px)]">{`2.000,00 `}</div>
          <div className="absolute bottom-[26px] left-[44px] text-sm text-lightslategray-100">
            [SERV-0020] Crossconexión
          </div>
          <div className="absolute bottom-[26px] left-[calc(50%_+_185.42px)]">
            IGV 18%
          </div>
          <div className="absolute right-[67.47px] bottom-[26px]">$ 650,00</div>
          <div className="absolute bottom-[23px] left-[calc(50%_-_118.48px)]">
            1
          </div>
          <div className="absolute bottom-[23px] left-[calc(50%_+_21.14px)]">
            650,00
          </div>
        </div>
      </div>
    );
  });

export default GrupoDeDesplazamiento1;

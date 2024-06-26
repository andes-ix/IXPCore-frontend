import { FunctionComponent, memo } from "react";
import Componente1 from "./componente1";

export type GrupoDeDesplazamientoType = {
  className?: string;
};

const GrupoDeDesplazamiento: FunctionComponent<GrupoDeDesplazamientoType> =
  memo(({ className = "" }) => {
    return (
      <div
        className={`absolute bottom-[168px] left-[19px] w-[377px] h-[756px] overflow-auto mix-blend-normal text-left text-base text-darkslategray font-open-sans ${className}`}
      >
        <div className="absolute h-full w-[calc(100%_+_1102px)] top-[0px] right-[-1102px] bottom-[0px] left-[0px]">
          <div className="absolute w-full top-[55px] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_43px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_+_98px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full right-[0px] bottom-[70px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_253px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[calc(50%_+_28px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[calc(50%_+_168px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_183px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_113px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-aliceblue-300 h-[55px]" />
          <b className="absolute top-[15px] left-[calc(50%_-_503.66px)] leading-[13px] text-lightslategray-100">
            Nombre completo
          </b>
          <b className="absolute top-[15px] left-[calc(50%_+_402.04px)] leading-[13px] text-lightslategray-100">
            Rol
          </b>
          <b className="absolute top-[15px] right-[124.46px] leading-[13px] text-lightslategray-100">
            Operación
          </b>
          <b className="absolute top-[15px] left-[calc(50%_-_260.84px)] leading-[13px] text-lightslategray-100">
            Teléfono
          </b>
          <b className="absolute top-[15px] left-[calc(50%_-_36.96px)] leading-[13px] text-lightslategray-100">
            Correo electrónico
          </b>
          <b className="absolute top-[15px] left-[calc(50%_+_185.04px)] leading-[13px] text-lightslategray-100">
            Cargo
          </b>
          <b className="absolute top-[16px] left-[43.84px] leading-[13px] text-lightslategray-100">
            ID usuario
          </b>
          <div className="absolute top-[79px] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_-_18px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_124px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute bottom-[95px] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[82px] left-[calc(50%_-_501.83px)] text-sm text-royalblue">
            Carlos Carpio
          </b>
          <b className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_501.38px)] text-sm text-royalblue">
            Antonio Tineo
          </b>
          <b className="absolute top-[calc(50%_+_125px)] left-[calc(50%_-_501.38px)] text-sm text-royalblue">
            Antonio Tineo
          </b>
          <b className="absolute bottom-[94px] left-[calc(50%_-_501.38px)] text-sm text-royalblue">
            Antonio Tineo
          </b>
          <div className="absolute top-[80px] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[80px] left-[calc(50%_+_184.56px)]">
            Gerente general
          </div>
          <div className="absolute top-[80px] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_125px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_125px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_125px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute bottom-[93px] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute bottom-[93px] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute bottom-[93px] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[82px] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_125px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute bottom-[91px] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_-_227px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_55px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_194px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute bottom-[25px] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_501.25px)] text-sm text-royalblue">
            Juan Hernandez
          </b>
          <b className="absolute top-[calc(50%_+_55px)] left-[calc(50%_-_502.28px)] text-sm text-royalblue">
            Carlos Lopez
          </b>
          <b className="absolute top-[calc(50%_+_195px)] left-[calc(50%_-_502.28px)] text-sm text-royalblue">
            Carlos Lopez
          </b>
          <b className="absolute bottom-[24px] left-[calc(50%_-_502.28px)] text-sm text-royalblue">
            Carlos Lopez
          </b>
          <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_+_184.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_53px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_189px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_189px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_189px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute bottom-[25px] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute bottom-[25px] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute bottom-[25px] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_55px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_192px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute bottom-[21px] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_-_156px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[calc(50%_-_155px)] left-[calc(50%_-_502.39px)] text-sm text-royalblue">
            Carla Angola
          </b>
          <div className="absolute top-[calc(50%_-_155px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_155px)] left-[calc(50%_+_184.56px)]">
            Administradora
          </div>
          <div className="absolute top-[calc(50%_-_155px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_155px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_-_86px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[calc(50%_-_86px)] left-[calc(50%_-_504.12px)] text-sm text-royalblue">
            Luis Arcia
          </b>
          <div className="absolute top-[calc(50%_-_88px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_88px)] left-[calc(50%_+_184.56px)]">
            Ventas
          </div>
          <div className="absolute top-[calc(50%_-_88px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_86px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <img
            className="absolute top-[calc(50%_-_231.13px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_-_161.13px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_-_92.13px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_-_22.13px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_47.87px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_118.87px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_186.87px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute right-[152.16px] bottom-[95.13px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute right-[152.16px] bottom-[24.13px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <Componente1 propTop="81.87px" />
        </div>
      </div>
    );
  });

export default GrupoDeDesplazamiento;

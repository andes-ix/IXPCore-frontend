import { FunctionComponent, useState, useCallback } from "react";
import UsuariosGestinDeUsuarios2 from "../components/UsuariosGestinDeUsuarios2";
import PortalPopup from "../components/portal-popup";
import Componente5 from "../components/componente5";
import Componente3 from "../components/componente3";
import GrupoDeDesplazamiento from "../components/grupo-de-desplazamiento";

const UsuariosGestinDeUsuarios3: FunctionComponent = () => {
  const [isUsuariosGestinDeUsuariosOpen, setUsuariosGestinDeUsuariosOpen] =
    useState(false);

  const openUsuariosGestinDeUsuarios = useCallback(() => {
    setUsuariosGestinDeUsuariosOpen(true);
  }, []);

  const closeUsuariosGestinDeUsuarios = useCallback(() => {
    setUsuariosGestinDeUsuariosOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-aliceblue-300 w-full h-[1471px] text-left text-base text-cornflowerblue font-open-sans">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.03)] bg-white w-[430px] h-[100px]" />
        <img
          className="absolute top-[28px] left-[203px] w-[45px] h-[45px]"
          alt=""
          src="/componente-22--7.svg"
        />
        <img
          className="absolute top-[28px] left-[273px] w-[45px] h-[45px]"
          alt=""
          src="/componente-22--8.svg"
        />
        <div className="absolute top-[126px] left-[25px] leading-[22px]">
          <span>{`Empresa: `}</span>
          <span className="font-semibold">Perú IX</span>
        </div>
        <img
          className="absolute top-[135.36px] left-[163.64px] w-3 h-[7.3px]"
          alt=""
          src="/chevronright4.svg"
        />
        <Componente5 />
        <img
          className="absolute top-[35px] left-[19px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/imagen-151@2x.png"
        />
        <Componente3 propRight="unset" propLeft="132px" />
        <div className="absolute top-[177px] left-[25px] text-5xl text-dimgray-200">
          Listado de usuarios
        </div>
        <b className="absolute top-[213px] left-[26px] text-lg">
          Cliente #TW1500001
        </b>
        <div className="absolute bottom-[56.01px] left-[19px] w-[376.5px] h-[1141.2px] text-sm text-dimgray-100">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle15.svg"
          />
          <div className="absolute top-[33.87px] left-[16px] text-xl text-dimgray-200">{`Lorem ipsum dolor sit `}</div>
          <div className="absolute w-[calc(100%_-_72.5px)] top-[70.87px] left-[16px] text-xs leading-[22px] inline-block h-[39px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu finibus eros, quis sodales velit. `}</div>
          <div className="absolute w-[calc(100%_-_147.5px)] bottom-[52.2px] left-[74.25px] leading-[22px] inline-block h-8">
            Mostrando 10 de 200 resultados
          </div>
          <img
            className="absolute bottom-[20.1px] left-[40px] w-[280px] h-[32.1px]"
            alt=""
            src="/next1.svg"
          />
          <div className="absolute w-[calc(100%_-_31.5px)] top-[120.21px] right-[15.5px] left-[16px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
          <div className="absolute top-[133.21px] left-[calc(50%_-_125.25px)] text-lightslategray-200">
            Buscar usuario
          </div>
          <img
            className="absolute top-[133.89px] left-[30.69px] w-[20.3px] h-[20.3px]"
            alt=""
            src="/searchline-11.svg"
          />
        </div>
        <div className="absolute top-[461px] left-[36px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[171px] h-12 text-white">
          <div
            className="absolute top-[calc(50%_-_11px)] left-[24px] font-semibold cursor-pointer"
            onClick={openUsuariosGestinDeUsuarios}
          >
            Agregar usuario
          </div>
        </div>
        <GrupoDeDesplazamiento />
      </div>
      {isUsuariosGestinDeUsuariosOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUsuariosGestinDeUsuarios}
        >
          <UsuariosGestinDeUsuarios2 onClose={closeUsuariosGestinDeUsuarios} />
        </PortalPopup>
      )}
    </>
  );
};

export default UsuariosGestinDeUsuarios3;

import { useState, useCallback } from "react";
import SolicitudDeCdigoSiElUs1 from "./SolicitudDeCdigoSiElUs1";
import PortalPopup from "./PortalPopup";
import PropTypes from "prop-types";

const SolicitudDeCdigoSiElUs2 = ({ className = "" }) => {
  const [isSolicitudDeCdigoSiElUsOpen, setSolicitudDeCdigoSiElUsOpen] =
    useState(false);

  const openSolicitudDeCdigoSiElUs = useCallback(() => {
    setSolicitudDeCdigoSiElUsOpen(true);
  }, []);

  const closeSolicitudDeCdigoSiElUs = useCallback(() => {
    setSolicitudDeCdigoSiElUsOpen(false);
  }, []);

  return (
    <>
      <div
        className={`relative bg-gray-500 w-[1920px] h-[1074px] max-w-full max-h-full overflow-auto text-left text-sm text-dimgray-200 font-open-sans ${className}`}
      >
        <div className="absolute top-[343px] left-[703px] rounded-3xs bg-white w-[514px] h-[375px]">
          <div className="absolute top-[calc(50%_-_61.5px)] left-[40px] font-semibold">
            Ingrese el código de su aplicación de autenticación
          </div>
          <div className="absolute top-[calc(50%_-_29.5px)] left-[40px] font-semibold text-dimgray-100">
            Codigo
          </div>
          <div className="absolute w-[calc(100%_-_92px)] top-[calc(50%_-_0.5px)] right-[52px] left-[40px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
          <div className="absolute w-[calc(100%_-_92px)] right-[52px] bottom-[53px] left-[40px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-steelblue-100 h-12" />
          <div
            className="absolute top-[calc(50%_+_98.5px)] left-[calc(50%_-_38px)] text-base font-semibold text-white cursor-pointer"
            onClick={openSolicitudDeCdigoSiElUs}
          >
            Enviar
          </div>
          <div className="absolute top-[calc(50%_+_14.5px)] left-[54px] text-darkgray-100">
            ******
          </div>
          <img
            className="absolute w-full top-[calc(50%_-_94px)] right-[0.5px] left-[-0.5px] max-w-full overflow-hidden h-0.5"
            alt=""
            src="/lnea-50.svg"
          />
          <div className="absolute top-[37px] left-[40px] text-5xl">
            Autenticación de usuario
          </div>
        </div>
      </div>
      {isSolicitudDeCdigoSiElUsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSolicitudDeCdigoSiElUs}
        >
          <SolicitudDeCdigoSiElUs1 onClose={closeSolicitudDeCdigoSiElUs} />
        </PortalPopup>
      )}
    </>
  );
};

SolicitudDeCdigoSiElUs2.propTypes = {
  className: PropTypes.string,
};

export default SolicitudDeCdigoSiElUs2;

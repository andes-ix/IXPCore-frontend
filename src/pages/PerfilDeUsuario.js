import { FunctionComponent, useState, useCallback } from "react";
import SolicitudDeCdigoSiElUs from "../components/SolicitudDeCdigoSiElUs";
import PortalPopup from "../components/portal-popup";
import SolicitudDeCdigoSiElUs2 from "../components/SolicitudDeCdigoSiElUs2";
import Grupo1 from "../components/grupo1";
import Componente2 from "../components/componente2";

const PerfilDeUsuario: FunctionComponent = () => {
  const [isSolicitudDeCdigoSiElUsOpen, setSolicitudDeCdigoSiElUsOpen] =
    useState(false);
  const [isSolicitudDeCdigoSiElUs1Open, setSolicitudDeCdigoSiElUs1Open] =
    useState(false);

  const openSolicitudDeCdigoSiElUs = useCallback(() => {
    setSolicitudDeCdigoSiElUsOpen(true);
  }, []);

  const closeSolicitudDeCdigoSiElUs = useCallback(() => {
    setSolicitudDeCdigoSiElUsOpen(false);
  }, []);

  const openSolicitudDeCdigoSiElUs1 = useCallback(() => {
    setSolicitudDeCdigoSiElUs1Open(true);
  }, []);

  const closeSolicitudDeCdigoSiElUs1 = useCallback(() => {
    setSolicitudDeCdigoSiElUs1Open(false);
  }, []);

  return (
    <>
      <div className="relative bg-aliceblue-200 w-full h-[1151px] text-left text-sm text-gray-200 font-open-sans">
        <div className="absolute top-[144px] left-[332px] text-[40px] text-dimgray-200">
          Información de perfil
        </div>
        <div className="absolute top-[144px] left-[1268px] text-9xl text-dimgray-200">
          Seguridad
        </div>
        <div className="absolute top-[219px] left-[332px] text-lg">
          Revise y actualice los detalles de su cuenta
        </div>
        <div className="absolute top-[207px] left-[1212px] text-xl font-semibold text-dimgray-200">
          Verificación en dos pasos
        </div>
        <div className="absolute top-[254px] left-[332px] leading-[22px] text-dimgray-100">
          <p className="m-0">{`Asegúrese de que estos datos estén actualizados, ya que se utilizarán para información en la `}</p>
          <p className="m-0">facturación de sus servicios</p>
        </div>
        <div className="absolute top-[241px] left-[1212px] text-dimgray-100">
          Protege tu cuenta con la verificación en dos pasos
        </div>
        <div className="absolute top-[283px] right-[147px] leading-[22px] text-dimgray-100">
          <p className="m-0">
            La verificación en dos pasos es un nivel añadido de seguridad,
          </p>
          <p className="m-0">
            ya que solicita un código cada vez que inicias sesión en un
            dispositivo nuevo.
          </p>
        </div>
        <div className="absolute top-[370px] right-[169px] leading-[22px] text-dimgray-100">
          <p className="m-0">
            Tu aplicación de autenticación nos permite añadir un nivel de
            verificación
          </p>
          <p className="m-0">extra para proteger tu cuenta.</p>
        </div>
        <div className="absolute top-[325px] left-[346px] text-cornflowerblue">
          Términos y Condiciones de uso
        </div>
        <img
          className="absolute top-[328px] left-[332px] w-[7.3px] h-3"
          alt=""
          src="/chevronright3.svg"
        />
        <div className="absolute top-[376px] left-[332px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.1)] rounded bg-white w-[712px] h-[585px]" />
        <div className="absolute top-[413px] left-[480px] text-lg font-semibold">
          Salvador Bertenbreiter
        </div>
        <div className="absolute bottom-[84px] left-[332px] rounded-t-none rounded-b bg-whitesmoke-400 w-[712px] h-[546px]" />
        <div className="absolute top-[553px] left-[372px] font-semibold">
          Nombre completo
        </div>
        <div className="absolute top-[749px] left-[372px] font-semibold">
          Cargo
        </div>
        <div className="absolute top-[582px] left-[372px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[290px] h-12" />
        <div className="absolute top-[778px] left-[372px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[290px] h-12" />
        <div className="absolute top-[859px] left-[846px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[136px] h-12 text-base text-white">
          <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_38px)] font-semibold">
            Actualizar
          </div>
        </div>
        <div className="absolute top-[454px] left-[1212px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-36 h-12 text-base text-white">
          <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_42px)] font-semibold">
            Configurar
          </div>
        </div>
        <div className="absolute top-[679px] left-[372px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-aliceblue-400 w-[290px] h-12" />
        <div className="absolute top-[597px] left-[386px] text-lightslategray-200">
          Salvador Bertenbreiter
        </div>
        <div className="absolute top-[793px] left-[386px] text-lightslategray-200">
          Gerente general
        </div>
        <div className="absolute top-[694px] left-[386px] text-lightslategray-200">
          Peru
        </div>
        <div className="absolute top-[650px] left-[372px] font-semibold">
          Pais
        </div>
        <div className="absolute top-[582px] left-[692px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[290px] h-12" />
        <div className="absolute top-[597px] left-[706px] text-lightslategray-200">
          Example@pit.net
        </div>
        <div className="absolute top-[553px] left-[692px] font-semibold">
          Correo electronico
        </div>
        <div className="absolute top-[447px] left-[480px] leading-[21px] text-dimgray-100">
          <p className="m-0">{`Asegúrese de que estos datos estén actualizados, ya que se utilizarán `}</p>
          <p className="m-0">
            para información en la facturación de sus servicios.
          </p>
        </div>
        <div className="absolute top-[679px] left-[692px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[290px] h-12" />
        <div className="absolute top-[679px] left-[692px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-aliceblue-400 w-[83px] h-12 opacity-[0.4]" />
        <div className="absolute top-[694px] left-[736px] text-lightslategray-200">
          +66
        </div>
        <img
          className="absolute top-[697px] left-[706px] w-5 h-[13.4px] object-cover"
          alt=""
          src="/imagen-7@2x.png"
        />
        <div className="absolute top-[678px] left-[774px] box-border w-0.5 h-[49px] border-r-[1px] border-solid border-aliceblue-500" />
        <div className="absolute top-[694px] left-[789px] text-lightslategray-200 opacity-[0.4]">
          (0) 053 555 555
        </div>
        <img
          className="absolute top-[700.36px] left-[633.64px] w-3 h-[7.3px]"
          alt=""
          src="/chevronright2.svg"
        />
        <div className="absolute top-[678px] left-[619px] box-border w-0.5 h-[49px] border-r-[1px] border-solid border-aliceblue-500" />
        <img
          className="absolute bottom-[202.5px] left-[331.5px] w-[712px] h-[3px]"
          alt=""
          src="/lnea-49.svg"
        />
        <img
          className="absolute top-[411px] left-[372px] w-20 h-20 object-cover"
          alt=""
          src="/grupo-2@2x.png"
        />
        <img
          className="absolute top-[462px] left-[420px] w-[38px] h-[38px] object-cover"
          alt=""
          src="/enmascarar-grupo-3@2x.png"
        />
        <div className="absolute top-[147px] left-[1212px] rounded-10xs bg-white w-[35px] h-[35px]" />
        <div className="absolute top-[286px] left-[1212px] rounded-31xl bg-yellow w-[35px] h-[35px]" />
        <div className="absolute top-[373px] left-[1212px] rounded-31xl bg-yellow w-[35px] h-[35px]" />
        <img
          className="absolute top-[0px] left-[0px] w-[299px] h-[1462px]"
          alt=""
          src="/rectangle2.svg"
        />
        <div className="absolute top-[0px] left-[298px] bg-gainsboro w-px h-[1080px]" />
        <Grupo1 />
        <div className="absolute top-[290px] left-[1224px] text-xl font-semibold text-white">
          1
        </div>
        <div className="absolute top-[377px] left-[1224px] text-xl font-semibold text-white">
          2
        </div>
        <img
          className="absolute top-[153.43px] left-[1219.61px] w-[19.8px] h-[22.1px]"
          alt=""
          src="/lockstarline.svg"
        />
        <div
          className="absolute bottom-[156px] left-[372px] font-semibold text-cornflowerblue cursor-pointer"
          onClick={openSolicitudDeCdigoSiElUs}
        >
          Autogestión de contraseña: Cambio de contraseña
        </div>
        <div
          className="absolute bottom-[125px] left-[372px] text-dimgray-100 cursor-pointer"
          onClick={openSolicitudDeCdigoSiElUs1}
        >
          Realiza el cambio de tu contraseña de acceso, de manera fácil y
          rápida.
        </div>
        <img
          className="absolute top-[25px] left-[17px] w-[72px] h-[84px] object-cover"
          alt=""
          src="/logo-pit1@2x.png"
        />
        <Componente2 />
      </div>
      {isSolicitudDeCdigoSiElUsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSolicitudDeCdigoSiElUs}
        >
          <SolicitudDeCdigoSiElUs onClose={closeSolicitudDeCdigoSiElUs} />
        </PortalPopup>
      )}
      {isSolicitudDeCdigoSiElUs1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSolicitudDeCdigoSiElUs1}
        >
          <SolicitudDeCdigoSiElUs2 onClose={closeSolicitudDeCdigoSiElUs1} />
        </PortalPopup>
      )}
    </>
  );
};

export default PerfilDeUsuario;

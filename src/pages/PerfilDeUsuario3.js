import { useState, useCallback } from "react";
import SolicitudDeCdigoSiElUs2 from "../components/SolicitudDeCdigoSiElUs2";
import PortalPopup from "../components/PortalPopup";
import SolicitudDeCdigoSiElUs from "../components/SolicitudDeCdigoSiElUs";
import { useNavigate } from "react-router-dom";

const PerfilDeUsuario3 = () => {
  const [isSolicitudDeCdigoSiElUsOpen, setSolicitudDeCdigoSiElUsOpen] =
    useState(false);
  const [isSolicitudDeCdigoSiElUs1Open, setSolicitudDeCdigoSiElUs1Open] =
    useState(false);
  const navigate = useNavigate();

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

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

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
          src="/chevronright1.svg"
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
          src="/imagen-4@2x.png"
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
          src="/lnea-491.svg"
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
          src="/rectangle22.svg"
        />
        <div className="absolute top-[0px] left-[298px] bg-gainsboro w-px h-[1080px]" />
        <div className="absolute top-[-2px] right-[0px] w-[1621px] h-[297.7px] text-cornflowerblue">
          <div className="absolute w-full top-[0px] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.03)] bg-white h-[100px]" />
          <img
            className="absolute top-[28px] right-[255px] w-[45px] h-[45px]"
            alt=""
            src="/componente-22--2.svg"
          />
          <img
            className="absolute top-[28px] right-[185px] w-[45px] h-[45px]"
            alt=""
            src="/componente-22--3.svg"
          />
          <div className="absolute top-[43px] left-[35px]">
            <span>{`Empresa: `}</span>
            <b>Fiber digital</b>
          </div>
          <img
            className="absolute top-[50.36px] left-[193.64px] w-3 h-[7.3px]"
            alt=""
            src="/chevronright.svg"
          />
          <div className="absolute h-[calc(100%_-_24px)] top-[24px] right-[101px] bottom-[0px] w-[302px] text-dimgray-200">
            <img
              className="absolute top-[0px] right-[3px] w-12 h-12 object-cover"
              alt=""
              src="/grupo-37691@2x.png"
            />
            <div className="absolute h-[calc(100%_-_59.7px)] w-full top-[59.7px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0]">
              <div className="absolute top-[28.3px] left-[calc(50%_-_64.5px)] text-base font-semibold">
                Juan Hernandez
              </div>
              <div className="absolute top-[calc(50%_-_56.7px)] left-[calc(50%_-_63.5px)] leading-[22px] font-light text-dimgray-100 inline-block w-[75px] h-5">
                Supervisor
              </div>
              <div className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_91px)] text-lightslategray-100">
                Información de perfil
              </div>
              <div className="absolute bottom-[30px] left-[calc(50%_-_91px)] font-semibold text-steelblue-100">
                Cerrar sesión
              </div>
              <div className="absolute w-[calc(100%_+_1px)] top-[calc(50%_+_38.8px)] right-[0px] left-[-1px] box-border h-0.5 border-t-[1px] border-solid border-whitesmoke-600" />
              <img
                className="absolute top-[22.3px] left-[26px] w-12 h-12 object-cover"
                alt=""
                src="/grupo-37691@2x.png"
              />
              <img
                className="absolute top-[calc(50%_-_7.7px)] left-[29px] w-4 h-5"
                alt=""
                src="/user.svg"
              />
              <img
                className="absolute bottom-[27.7px] left-[27px] w-5 h-5"
                alt=""
                src="/logout.svg"
              />
            </div>
          </div>
          <div className="absolute top-[27px] right-[227px] w-36 h-[151.7px] text-steelblue-100">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute h-[calc(100%_-_106.7px)] w-[calc(100%_-_99px)] top-[0px] right-[99px] bottom-[106.7px] left-[0px] rounded-sm bg-aliceblue-100 opacity-[0]" />
              <img
                className="absolute h-[calc(100%_-_119.7px)] w-[calc(100%_-_112px)] top-[7px] right-[105px] bottom-[112.7px] left-[7px] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
                alt=""
                src="/rectngulo-17@2x.png"
              />
              <div className="absolute h-[calc(100%_-_51.7px)] w-[calc(100%_-_7px)] top-[51.7px] right-[0px] bottom-[0px] left-[7px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0]" />
              <div className="absolute top-[calc(50%_-_2.85px)] left-[calc(50%_-_14.5px)] opacity-[0]">
                Ingles
              </div>
              <div className="absolute top-[calc(50%_+_37.85px)] left-[calc(50%_-_16px)] text-lightslategray-100 opacity-[0]">
                Español
              </div>
              <img
                className="absolute top-[calc(50%_-_2.85px)] left-[23px] rounded-[50%] w-5 h-5 opacity-[0]"
                alt=""
                src="/elipse-369.svg"
              />
              <img
                className="absolute top-[calc(50%_+_37.15px)] left-[23px] rounded-[50%] w-5 h-5 opacity-[0]"
                alt=""
                src="/elipse-369.svg"
              />
            </div>
          </div>
        </div>
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
          src="/logo-pit@2x.png"
        />
        <div className="absolute top-[144px] left-[23px] w-[227.3px] h-[322.7px] text-base text-lightslategray-100">
          <div
            className="absolute top-[calc(50%_-_106.65px)] left-[calc(50%_-_60.65px)] cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="absolute top-[calc(50%_+_24.35px)] left-[calc(50%_-_60.65px)]">
            Cuenta
          </div>
          <div className="absolute top-[calc(50%_-_38.65px)] left-[calc(50%_-_60.65px)]">
            Servicios
          </div>
          <div className="absolute top-[calc(50%_+_95.35px)] left-[calc(50%_-_60.65px)]">
            Usuarios
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_-_60.65px)] text-sm text-white opacity-[0]">
            Listado de usuarios
          </div>
          <div className="absolute top-[calc(50%_+_84.35px)] left-[calc(50%_-_60.65px)] text-sm text-white opacity-[0]">
            Listado de usuarios
          </div>
          <div className="absolute top-[0px] left-[0px] text-lg font-semibold text-white">
            Menu
          </div>
          <img
            className="absolute top-[calc(50%_+_101.65px)] right-[0px] w-[7.3px] h-3"
            alt=""
            src="/chevronright5.svg"
          />
          <img
            className="absolute top-[calc(50%_+_30.65px)] right-[0px] w-[7.3px] h-3"
            alt=""
            src="/chevronright5.svg"
          />
          <img
            className="absolute top-[calc(50%_-_32.35px)] right-[0px] w-[7.3px] h-3"
            alt=""
            src="/chevronright5.svg"
          />
          <div className="absolute top-[calc(50%_-_104.35px)] left-[13px] w-[18px] h-[18px]">
            <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
            <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
            <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
            <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
          </div>
          <img
            className="absolute top-[calc(50%_+_27.65px)] left-[13px] w-[21px] h-5"
            alt=""
            src="/wallet.svg"
          />
          <div className="absolute top-[calc(50%_+_94.65px)] left-[11px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-lightslategray-100">
            <img
              className="absolute w-[calc(100%_-_4px)] right-[2px] bottom-[-1px] left-[2px] max-w-full overflow-hidden h-2"
              alt=""
              src="/trazado-2499.svg"
            />
            <img
              className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_5px)] rounded-[50%] w-2.5 h-2.5"
              alt=""
              src="/elipse-366.svg"
            />
          </div>
          <img
            className="absolute bottom-[5.7px] left-[19px] w-1 h-1 opacity-[0]"
            alt=""
            src="/oval4.svg"
          />
          <img
            className="absolute top-[calc(50%_+_33.65px)] left-[19px] w-1 h-1 opacity-[0]"
            alt=""
            src="/oval4.svg"
          />
          <img
            className="absolute top-[calc(50%_-_37.26px)] right-[196.3px] w-[19px] h-[19.2px]"
            alt=""
            src="/trazado-30234.svg"
          />
        </div>
      </div>
      {isSolicitudDeCdigoSiElUsOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSolicitudDeCdigoSiElUs}
        >
          <SolicitudDeCdigoSiElUs2 onClose={closeSolicitudDeCdigoSiElUs} />
        </PortalPopup>
      )}
      {isSolicitudDeCdigoSiElUs1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeSolicitudDeCdigoSiElUs1}
        >
          <SolicitudDeCdigoSiElUs onClose={closeSolicitudDeCdigoSiElUs1} />
        </PortalPopup>
      )}
    </>
  );
};

export default PerfilDeUsuario3;

import { useState, useCallback } from "react";
import UsuariosGestinDeUsuarios3 from "../components/UsuariosGestinDeUsuarios3";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const UsuariosGestinDeUsuarios2 = () => {
  const [isUsuariosGestinDeUsuariosOpen, setUsuariosGestinDeUsuariosOpen] =
    useState(false);
  const navigate = useNavigate();

  const openUsuariosGestinDeUsuarios = useCallback(() => {
    setUsuariosGestinDeUsuariosOpen(true);
  }, []);

  const closeUsuariosGestinDeUsuarios = useCallback(() => {
    setUsuariosGestinDeUsuariosOpen(false);
  }, []);

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-aliceblue-200 w-full h-[1313px] text-left text-base text-cornflowerblue font-open-sans">
        <div className="absolute top-[193.83px] right-[109px] w-[1479px] h-[1077.2px] text-darkslategray">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle17.svg"
          />
          <div className="absolute w-full top-[calc(50%_-_281.43px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_1.43px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_+_139.57px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_+_279.57px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_211.43px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[calc(50%_+_69.57px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[calc(50%_+_209.57px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full right-[0px] bottom-[119.03px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_141.43px)] right-[0px] left-[0px] bg-white h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_71.43px)] right-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
          <div className="absolute w-full top-[calc(50%_-_336.43px)] right-[0px] left-[0px] bg-aliceblue-300 h-[55px]" />
          <div className="absolute top-[119.17px] left-[33px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[380px] h-12 border-[1px] border-solid border-whitesmoke-500" />
          <div className="absolute top-[132.17px] left-[80px] text-sm text-lightslategray-200">
            Buscar usuario
          </div>
          <div className="absolute top-[36.87px] left-[33px] text-5xl text-dimgray-200">
            Listado de usuarios
          </div>
          <div className="absolute top-[78.87px] left-[33px] text-sm leading-[22px] text-dimgray-100 inline-block w-[348.8px] h-8">
            Listado de usuarios habilitados dentro del sistema.
          </div>
          <img
            className="absolute top-[132.86px] left-[47.69px] w-[20.3px] h-[20.3px]"
            alt=""
            src="/searchline-11.svg"
          />
          <b className="absolute top-[calc(50%_-_321.43px)] left-[calc(50%_-_503.66px)] leading-[13px] text-lightslategray-100">
            Nombre completo
          </b>
          <b className="absolute top-[calc(50%_-_321.43px)] left-[calc(50%_+_402.04px)] leading-[13px] text-lightslategray-100">
            Rol
          </b>
          <b className="absolute top-[calc(50%_-_321.43px)] right-[124.46px] leading-[13px] text-lightslategray-100">
            Operación
          </b>
          <b className="absolute top-[calc(50%_-_321.43px)] left-[calc(50%_-_260.84px)] leading-[13px] text-lightslategray-100">
            Teléfono
          </b>
          <b className="absolute top-[calc(50%_-_321.43px)] left-[calc(50%_-_36.96px)] leading-[13px] text-lightslategray-100">
            Correo electrónico
          </b>
          <b className="absolute top-[calc(50%_-_321.43px)] left-[calc(50%_+_185.04px)] leading-[13px] text-lightslategray-100">
            Cargo
          </b>
          <b className="absolute top-[calc(50%_-_320.43px)] left-[43.84px] leading-[13px] text-lightslategray-100">
            ID usuario
          </b>
          <div className="absolute top-[calc(50%_-_257.43px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_23.57px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_165.57px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_305.57px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[calc(50%_-_254.43px)] left-[calc(50%_-_501.83px)] text-sm text-royalblue">
            Carlos Carpio
          </b>
          <b className="absolute top-[calc(50%_+_27.57px)] left-[calc(50%_-_501.38px)] text-sm text-royalblue">
            Antonio Tineo
          </b>
          <b className="absolute top-[calc(50%_+_166.57px)] left-[calc(50%_-_501.38px)] text-sm text-royalblue">
            Antonio Tineo
          </b>
          <b className="absolute top-[calc(50%_+_306.57px)] left-[calc(50%_-_501.38px)] text-sm text-royalblue">
            Antonio Tineo
          </b>
          <div className="absolute top-[calc(50%_-_256.43px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_256.43px)] left-[calc(50%_+_184.56px)]">
            Gerente general
          </div>
          <div className="absolute top-[calc(50%_-_256.43px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_26.57px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_26.57px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_26.57px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_166.57px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_166.57px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_166.57px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_304.57px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_304.57px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_304.57px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_254.43px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_27.57px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_166.57px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_306.57px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_-_185.43px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_96.57px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute top-[calc(50%_+_235.57px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <div className="absolute bottom-[144.03px] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[calc(50%_-_185.43px)] left-[calc(50%_-_501.25px)] text-sm text-royalblue">
            Juan Hernandez
          </b>
          <b className="absolute top-[calc(50%_+_96.57px)] left-[calc(50%_-_502.28px)] text-sm text-royalblue">
            Carlos Lopez
          </b>
          <b className="absolute top-[calc(50%_+_236.57px)] left-[calc(50%_-_502.28px)] text-sm text-royalblue">
            Carlos Lopez
          </b>
          <b className="absolute bottom-[143.03px] left-[calc(50%_-_502.28px)] text-sm text-royalblue">
            Carlos Lopez
          </b>
          <div className="absolute top-[calc(50%_-_186.43px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_186.43px)] left-[calc(50%_+_184.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_186.43px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_94.57px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_94.57px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_94.57px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_+_230.57px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_+_230.57px)] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute top-[calc(50%_+_230.57px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute bottom-[144.03px] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute bottom-[144.03px] left-[calc(50%_+_184.56px)]">
            Atención al cliente
          </div>
          <div className="absolute bottom-[144.03px] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_185.43px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_96.57px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_+_233.57px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute bottom-[140.03px] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_-_114.43px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[calc(50%_-_113.43px)] left-[calc(50%_-_502.39px)] text-sm text-royalblue">
            Carla Angola
          </b>
          <div className="absolute top-[calc(50%_-_113.43px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_113.43px)] left-[calc(50%_+_184.56px)]">
            Administradora
          </div>
          <div className="absolute top-[calc(50%_-_113.43px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_113.43px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <div className="absolute top-[calc(50%_-_44.43px)] left-[44.84px] text-sm">
            #TW1500001
          </div>
          <b className="absolute top-[calc(50%_-_44.43px)] left-[calc(50%_-_504.12px)] text-sm text-royalblue">
            Luis Arcia
          </b>
          <div className="absolute top-[calc(50%_-_46.43px)] left-[calc(50%_-_37.44px)]">
            Example@gmaillc.om
          </div>
          <div className="absolute top-[calc(50%_-_46.43px)] left-[calc(50%_+_184.56px)]">
            Ventas
          </div>
          <div className="absolute top-[calc(50%_-_46.43px)] left-[calc(50%_+_401.56px)]">
            Finanzas
          </div>
          <div className="absolute top-[calc(50%_-_44.43px)] left-[calc(50%_-_260.84px)]">
            +56 5875 25475
          </div>
          <img
            className="absolute top-[calc(50%_-_189.56px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_-_119.56px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_-_50.56px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_19.44px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_89.44px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_160.44px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_228.44px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute top-[calc(50%_+_299.44px)] right-[152.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className="absolute right-[152.16px] bottom-[143.16px] w-[25px] h-[25px]"
            alt=""
            src="/componente-2--2.svg"
          />
          <div className="absolute bottom-[33.33px] left-[44px] text-sm leading-[22px] text-dimgray-100 inline-block w-[229px] h-8">
            Mostrando 10 de 200 resultados
          </div>
          <img
            className="absolute right-[114px] bottom-[40.1px] w-[280px] h-[32.1px]"
            alt=""
            src="/next1.svg"
          />
          <div className="absolute top-[111.17px] right-[111px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[171px] h-12 text-white">
            <div
              className="absolute top-[calc(50%_-_11px)] left-[24px] font-semibold cursor-pointer"
              onClick={openUsuariosGestinDeUsuarios}
            >
              Agregar usuario
            </div>
          </div>
          <div className="absolute top-[calc(50%_-_254.56px)] right-[152.16px] w-[189.5px] h-[167px] text-sm text-lightslategray-100">
            <div className="absolute h-[calc(100%_-_36.1px)] w-full top-[36.13px] right-[0px] bottom-[-0.03px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0]">
              <div className="absolute top-[calc(50%_-_44.88px)] left-[calc(50%_-_40.25px)]">
                Visualizar
              </div>
              <div className="absolute bottom-[54.33px] left-[calc(50%_-_40.25px)]">
                Editar
              </div>
              <div className="absolute bottom-[15.33px] left-[calc(50%_-_40.25px)]">
                Deshabilitar
              </div>
              <div className="absolute top-[calc(50%_-_44.58px)] left-[20.5px] rounded-8xs bg-mediumslateblue w-5 h-5" />
              <div className="absolute bottom-[53.03px] left-[20.5px] rounded-8xs bg-mediumslateblue w-5 h-5" />
              <div className="absolute bottom-[14.03px] left-[20.5px] rounded-8xs bg-mediumslateblue w-5 h-5" />
            </div>
            <div className="absolute top-[calc(50%_-_83.5px)] left-[164.5px] rounded-10xs bg-cornflowerblue w-[25px] h-[25px]" />
            <img
              className="absolute top-[calc(50%_-_78px)] left-[calc(50%_+_75.25px)] w-3.5 h-3.5"
              alt=""
              src="/frame.svg"
            />
          </div>
        </div>
        <div className="absolute top-[130px] left-[332px] text-9xl text-dimgray-200">
          Usuarios
        </div>
        <div className="absolute top-[140px] right-[109px] w-[217px] h-[19px] text-sm">
          <div className="absolute top-[0px] left-[0px]">Usarios</div>
          <div className="absolute top-[0px] right-[-1px]">
            Listado de usuarios
          </div>
          <img
            className="absolute bottom-[2px] left-[calc(50%_-_42.5px)] w-[7.3px] h-3"
            alt=""
            src="/chevronright1.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[299px] h-[1462px]"
          alt=""
          src="/rectangle22.svg"
        />
        <div className="absolute top-[-2px] right-[0px] w-[1621px] h-[297.7px] text-sm">
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
              <div
                className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_91px)] text-lightslategray-100 cursor-pointer"
                onClick={onInformacinDePerfilClick}
              >
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
        </div>
        <img
          className="absolute top-[25px] left-[17px] w-[72px] h-[84px] object-cover"
          alt=""
          src="/logo-pit@2x.png"
        />
        <div className="absolute top-[144px] left-[17.17px] w-[261.9px] h-[341.7px] text-lightslategray-100">
          <img
            className="absolute w-full top-[246px] right-[0px] left-[0px] max-w-full overflow-hidden h-[49.7px]"
            alt=""
            src="/rectangle11.svg"
          />
          <div
            className="absolute top-[calc(50%_-_116.15px)] left-[calc(50%_-_72.12px)] cursor-pointer"
            onClick={onDashboardTextClick}
          >
            Dashboard
          </div>
          <div className="absolute top-[calc(50%_+_18.85px)] left-[calc(50%_-_72.12px)]">
            Cuenta
          </div>
          <div className="absolute top-[calc(50%_+_89.85px)] left-[calc(50%_-_72.12px)] text-steelblue-100">
            Usuarios
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_-_72.12px)] text-sm text-cornflowerblue">
            Listado de usuarios
          </div>
          <div className="absolute top-[calc(50%_+_28.85px)] left-[calc(50%_-_72.12px)] text-sm text-white opacity-[0]">
            Listado de usuarios
          </div>
          <div className="absolute top-[0px] left-[5.83px] text-lg font-semibold text-white">
            Menu
          </div>
          <img
            className="absolute top-[calc(50%_+_98.51px)] right-[26.43px] w-3 h-[7.3px]"
            alt=""
            src="/chevronright8.svg"
          />
          <img
            className="absolute top-[calc(50%_+_25.15px)] right-[28.77px] w-[7.3px] h-3"
            alt=""
            src="/chevronright5.svg"
          />
          <div className="absolute top-[calc(50%_-_113.85px)] left-[18.83px] w-[18px] h-[18px]">
            <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
            <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
            <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
            <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
          </div>
          <img
            className="absolute top-[calc(50%_+_22.15px)] left-[18.83px] w-[21px] h-5"
            alt=""
            src="/wallet.svg"
          />
          <div className="absolute top-[calc(50%_+_89.15px)] left-[16.83px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-steelblue-100">
            <img
              className="absolute w-[calc(100%_-_4px)] right-[2px] bottom-[-1px] left-[2px] max-w-full overflow-hidden h-2"
              alt=""
              src="/trazado-24991.svg"
            />
            <img
              className="absolute top-[calc(50%_-_6px)] left-[calc(50%_-_5px)] rounded-[50%] w-2.5 h-2.5"
              alt=""
              src="/elipse-3661.svg"
            />
          </div>
          <img
            className="absolute bottom-[5.7px] left-[24.83px] w-1 h-1"
            alt=""
            src="/oval5.svg"
          />
          <img
            className="absolute top-[calc(50%_+_24.15px)] left-[24.83px] w-1 h-1 opacity-[0]"
            alt=""
            src="/oval4.svg"
          />
          <div className="absolute top-[calc(50%_-_48.15px)] left-[calc(50%_-_72.12px)]">
            Servicios
          </div>
          <img
            className="absolute top-[calc(50%_-_41.85px)] right-[28.77px] w-[7.3px] h-3"
            alt=""
            src="/chevronright5.svg"
          />
          <img
            className="absolute top-[calc(50%_-_46.76px)] right-[225.07px] w-[19px] h-[19.2px]"
            alt=""
            src="/trazado-30234.svg"
          />
        </div>
      </div>
      {isUsuariosGestinDeUsuariosOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUsuariosGestinDeUsuarios}
        >
          <UsuariosGestinDeUsuarios3 onClose={closeUsuariosGestinDeUsuarios} />
        </PortalPopup>
      )}
    </>
  );
};

export default UsuariosGestinDeUsuarios2;

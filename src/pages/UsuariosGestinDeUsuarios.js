import { useState, useCallback } from "react";
import UsuariosGestinDeUsuarios1 from "../components/UsuariosGestinDeUsuarios1";
import PortalPopup from "../components/PortalPopup";

const UsuariosGestinDeUsuarios = () => {
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
          src="/componente-22--2.svg"
        />
        <img
          className="absolute top-[28px] left-[273px] w-[45px] h-[45px]"
          alt=""
          src="/componente-22--3.svg"
        />
        <div className="absolute top-[126px] left-[25px] leading-[22px]">
          <span>{`Empresa: `}</span>
          <span className="font-semibold">Perú IX</span>
        </div>
        <img
          className="absolute top-[135.36px] left-[163.64px] w-3 h-[7.3px]"
          alt=""
          src="/chevronright.svg"
        />
        <div className="absolute top-[24px] right-[28px] w-[302px] h-[273.7px] text-sm text-dimgray-200">
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
        <img
          className="absolute top-[35px] left-[19px] w-[30px] h-[30px] object-cover"
          alt=""
          src="/imagen-151@2x.png"
        />
        <div className="absolute top-[27px] left-[132px] w-36 h-[151.7px] text-sm text-steelblue-100">
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
            src="/rectangle.svg"
          />
          <div className="absolute top-[33.87px] left-[16px] text-xl text-dimgray-200">{`Lorem ipsum dolor sit `}</div>
          <div className="absolute w-[calc(100%_-_72.5px)] top-[70.87px] left-[16px] text-xs leading-[22px] inline-block h-[39px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu finibus eros, quis sodales velit. `}</div>
          <div className="absolute w-[calc(100%_-_147.5px)] bottom-[52.2px] left-[74.25px] leading-[22px] inline-block h-8">
            Mostrando 10 de 200 resultados
          </div>
          <img
            className="absolute bottom-[20.1px] left-[40px] w-[280px] h-[32.1px]"
            alt=""
            src="/next.svg"
          />
          <div className="absolute w-[calc(100%_-_31.5px)] top-[120.21px] right-[15.5px] left-[16px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
          <div className="absolute top-[133.21px] left-[calc(50%_-_125.25px)] text-lightslategray-200">
            Buscar usuario
          </div>
          <img
            className="absolute top-[133.89px] left-[30.69px] w-[20.3px] h-[20.3px]"
            alt=""
            src="/searchline-1.svg"
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
        <div className="absolute bottom-[168px] left-[19px] w-[377px] h-[756px] overflow-auto mix-blend-normal text-darkslategray">
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
            <div className="absolute top-[81.87px] right-[152.16px] w-[189.5px] h-[167px] text-sm text-lightslategray-100">
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
        </div>
      </div>
      {isUsuariosGestinDeUsuariosOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUsuariosGestinDeUsuarios}
        >
          <UsuariosGestinDeUsuarios1 onClose={closeUsuariosGestinDeUsuarios} />
        </PortalPopup>
      )}
    </>
  );
};

export default UsuariosGestinDeUsuarios;

import { useState, useCallback } from "react";
import CuentaEstadoDeCuentaDet from "../components/CuentaEstadoDeCuentaDet";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import Grupo3 from "../components/Grupo3";

const Dashboard = () => {
  const [isCuentaEstadoDeCuentaDetOpen, setCuentaEstadoDeCuentaDetOpen] =
    useState(false);
  const navigate = useNavigate();

  const openCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(true);
  }, []);

  const closeCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(false);
  }, []);

  const onIrAEstadoClick = useCallback(() => {
    navigate("/cuenta");
  }, [navigate]);

  return (
    <>
      <div className="relative bg-aliceblue-300 w-full h-[1080px] text-left text-sm text-dimgray-200 font-open-sans">
        <div className="absolute bottom-[141px] left-[332px] rounded-3xs bg-white w-[1057px] h-[399px]" />
        <div className="absolute bottom-[141px] left-[1048px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[341px] h-[399px]" />
        <img
          className="absolute top-[130px] right-[109px] w-[260px] h-[378px]"
          alt=""
          src="/trazado-29741.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[299px] h-[1462px]"
          alt=""
          src="/rectangle2.svg"
        />
        <div className="absolute top-[0px] left-[298px] bg-gainsboro w-px h-[1080px]" />
        <img
          className="absolute top-[12px] left-[-6px] w-[169px] h-[118px] object-cover"
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
        <div className="absolute top-[144px] left-[17.17px] w-[261.9px] h-[322.7px] text-base text-white">
          <img
            className="absolute w-full top-[41px] right-[0px] left-[0px] max-w-full overflow-hidden h-[49.7px]"
            alt=""
            src="/rectangle.svg"
          />
          <div className="absolute top-[calc(50%_-_106.65px)] left-[calc(50%_-_72.12px)] text-steelblue">
            Dashboard
          </div>
          <div className="absolute top-[calc(50%_-_35.65px)] left-[calc(50%_-_72.12px)] text-lightslategray-100">
            Cuenta
          </div>
          <div className="absolute top-[calc(50%_+_35.35px)] left-[calc(50%_-_72.12px)] text-lightslategray-100">
            Usuarios
          </div>
          <div className="absolute bottom-[0px] left-[calc(50%_-_72.12px)] text-sm opacity-[0]">
            Listado de usuarios
          </div>
          <div className="absolute top-[calc(50%_+_24.35px)] left-[calc(50%_-_72.12px)] text-sm opacity-[0]">
            Listado de usuarios
          </div>
          <div className="absolute top-[0px] left-[5.83px] text-lg font-semibold">
            Menu
          </div>
          <img
            className="absolute top-[calc(50%_+_41.65px)] right-[28.77px] w-[7.3px] h-3"
            alt=""
            src="/chevronright2.svg"
          />
          <img
            className="absolute top-[calc(50%_-_29.35px)] right-[28.77px] w-[7.3px] h-3"
            alt=""
            src="/chevronright2.svg"
          />
          <div className="absolute top-[calc(50%_-_104.35px)] left-[18.83px] w-[18px] h-[18px]">
            <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-steelblue" />
            <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-steelblue" />
            <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-steelblue" />
            <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-steelblue" />
          </div>
          <img
            className="absolute top-[calc(50%_-_32.35px)] left-[18.83px] w-[21px] h-5"
            alt=""
            src="/wallet.svg"
          />
          <div className="absolute top-[calc(50%_+_34.65px)] left-[16.83px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-lightslategray-100">
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
            className="absolute bottom-[5.7px] left-[24.83px] w-1 h-1 opacity-[0]"
            alt=""
            src="/oval1.svg"
          />
          <img
            className="absolute top-[calc(50%_+_33.65px)] left-[24.83px] w-1 h-1 opacity-[0]"
            alt=""
            src="/oval1.svg"
          />
        </div>
        <div className="absolute top-[238px] left-[332px] text-[33px] text-dimgray-100">
          ¡Bienvenido Salvador!
        </div>
        <div className="absolute top-[202px] left-[332px] text-5xl font-medium text-cornflowerblue">
          08 de Abril 2024
        </div>
        <div className="absolute top-[289px] left-[332px] text-base leading-[22px] text-gray-100">
          <p className="m-0">{`Consulta tu estado de cuenta y detalle de tus `}</p>
          <p className="m-0">
            <span>{`servicios facturados fácilmente desde nuestro `}</span>
            <b className="font-open-sans text-cornflowerblue">PCP</b>
          </p>
        </div>
        <img
          className="absolute top-[130px] right-[109px] w-[260px] h-[378px] opacity-[0.05]"
          alt=""
          src="/enmascarar-grupo-34.svg"
        />
        <div className="absolute top-[409px] right-[178px] text-white">
          Agregados recientemente
        </div>
        <img
          className="absolute top-[435px] right-[281px] rounded-[50%] w-[58px] h-[58px] object-cover"
          alt=""
          src="/elipse-462@2x.png"
        />
        <img
          className="absolute top-[435px] right-[253px] w-[58px] h-[58px] object-cover"
          alt=""
          src="/grupo-1675@2x.png"
        />
        <img
          className="absolute top-[435px] right-[226px] w-[58px] h-[58px] object-cover"
          alt=""
          src="/grupo-1674@2x.png"
        />
        <img
          className="absolute top-[435px] right-[198px] w-[58px] h-[58px] object-cover"
          alt=""
          src="/grupo-1676@2x.png"
        />
        <div className="absolute top-[435px] right-[189px] w-10 h-10 text-[13px] text-cornflowerblue font-avenir">
          <img
            className="absolute h-[calc(100%_+_18px)] w-[calc(100%_+_18px)] top-[0px] right-[-18px] bottom-[-18px] left-[0px] rounded-[50%] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/elipse-470.svg"
          />
          <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_8px)] font-extrabold">
            +3
          </div>
        </div>
        <div className="absolute top-[164px] right-[294px] rounded-3xs bg-darkslateblue-100 w-[50px] h-[50px]" />
        <div className="absolute top-[130px] left-[787px] rounded-3xs bg-white w-[338px] h-[378px]" />
        <div className="absolute top-[289px] left-[818px] font-light">
          Valor presentado en base (Sol)
        </div>
        <div className="absolute top-[596px] left-[804px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <div className="absolute top-[672px] left-[804px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <div className="absolute top-[747px] left-[804px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <div className="absolute top-[819px] left-[804px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <b className="absolute top-[635px] left-[804px] text-xs">
          Finanzas PIT
        </b>
        <div className="absolute top-[353px] left-[352px]">
          <span>{`Dispone de una factura `}</span>
          <b className="text-crimson-100">pendiente</b>
        </div>
        <b className="absolute top-[711px] left-[804px] text-xs">
          Finanzas PIT
        </b>
        <b className="absolute top-[786px] left-[804px] text-xs">
          Finanzas PIT
        </b>
        <b className="absolute top-[858px] left-[804px] text-xs">
          Finanzas PIT
        </b>
        <div className="absolute top-[227px] left-[818px] text-3xl">
          Balance
        </div>
        <div className="absolute top-[574px] left-[364px] text-3xl">
          Próximos pagos
        </div>
        <div className="absolute top-[340px] right-[210px] text-3xl text-white">
          Total usuarios
        </div>
        <div className="absolute top-[253px] left-[818px] text-7xl font-semibold">
          S/. 3127,00
        </div>
        <div className="absolute top-[804px] left-[1087px] text-9xl font-semibold text-cornflowerblue">
          15 días
        </div>
        <div className="absolute top-[366px] right-[287px] text-7xl font-semibold text-white">
          1200
        </div>
        <div className="absolute top-[164px] left-[818px] rounded-3xs bg-whitesmoke-500 w-[50px] h-[50px]" />
        <img
          className="absolute top-[598px] left-[743px] w-12 h-[47px]"
          alt=""
          src="/group10.svg"
        />
        <img
          className="absolute top-[675px] left-[743px] w-12 h-12"
          alt=""
          src="/group11.svg"
        />
        <img
          className="absolute top-[747px] left-[743px] w-12 h-12"
          alt=""
          src="/group12.svg"
        />
        <img
          className="absolute top-[821px] left-[743px] w-12 h-12"
          alt=""
          src="/group13.svg"
        />
        <img
          className="absolute top-[678.48px] left-[356px] w-[329.1px] h-[186.5px]"
          alt=""
          src="/group.svg"
        />
        <img
          className="absolute top-[640.31px] left-[466.46px] w-[123.7px] h-[12.1px]"
          alt=""
          src="/november2023.svg"
        />
        <img
          className="absolute top-[540px] right-[109px] w-[392px] h-48"
          alt=""
          src="/rectangle10.svg"
        />
        <img
          className="absolute top-[129.5px] left-[1141.5px] w-[393px] h-[179px]"
          alt=""
          src="/rectangle11.svg"
        />
        <img
          className="absolute top-[329.79px] left-[1141.5px] w-[393px] h-[178.7px]"
          alt=""
          src="/rectangle13.svg"
        />
        <img
          className="absolute top-[572px] right-[145px] w-12 h-12"
          alt=""
          src="/rectangle24.svg"
        />
        <img
          className="absolute top-[162px] left-[1450px] w-12 h-12"
          alt=""
          src="/rectangle25.svg"
        />
        <img
          className="absolute right-[109px] bottom-[146px] w-[392px] h-48"
          alt=""
          src="/rectangle14.svg"
        />
        <div className="absolute top-[562px] left-[1442px] text-xl">
          Perfil de usuario
        </div>
        <div className="absolute top-[152px] left-[1165px] text-xl">NOC</div>
        <div className="absolute top-[352px] left-[1165px] text-xl">
          Facturación
        </div>
        <div className="absolute top-[766px] left-[1442px] text-xl">
          Últimos cargos
        </div>
        <b className="absolute top-[596px] left-[1443px] text-cornflowerblue">
          Juan Hernandez
        </b>
        <b className="absolute top-[186px] left-[1166px] text-cornflowerblue">
          Información de contácto
        </b>
        <b className="absolute top-[386px] left-[1166px] text-cornflowerblue">
          Información de contácto
        </b>
        <b className="absolute top-[810px] left-[1443px]">Factura N°</b>
        <div className="absolute top-[810px] right-[177px] text-cornflowerblue">
          F 001-00001753
        </div>
        <b className="absolute top-[845px] left-[1443px]">Monto</b>
        <b className="absolute bottom-[180px] left-[1443px]">Emisión</b>
        <div className="absolute top-[845px] right-[213px] text-cornflowerblue">
          $ 3.127,00
        </div>
        <div className="absolute right-[205px] bottom-[180px] text-cornflowerblue">
          10/03/2024
        </div>
        <div className="absolute top-[626px] left-[1443px]">
          Example@pit.net
        </div>
        <div className="absolute top-[216px] left-[1166px]">
          Example@pit.net
        </div>
        <div className="absolute top-[416px] left-[1166px]">
          Example@pit.net
        </div>
        <div className="absolute top-[656px] left-[1443px]">
          (0) 053 555 555
        </div>
        <div className="absolute top-[246px] left-[1166px]">
          (0) 053 555 555
        </div>
        <div className="absolute top-[446px] left-[1166px]">
          (0) 053 555 555
        </div>
        <b className="absolute top-[714px] left-[1089px] text-xl text-dimgray-100">
          Notificación
        </b>
        <div className="absolute top-[754px] left-[1089px] text-base leading-[22px] text-gray-100">
          <p className="m-0">{`Tu factura tiene un `}</p>
          <p className="m-0">vencimiento de</p>
        </div>
        <b className="absolute top-[850px] left-[1089px] text-gray-100">
          Evita cortes en tus servicios
        </b>
        <img
          className="absolute top-[356.24px] left-[332px] w-[12.9px] h-[12.5px]"
          alt=""
          src="/trazado-29744.svg"
        />
        <b
          className="absolute top-[373px] left-[352px] text-xs text-cornflowerblue cursor-pointer"
          onClick={openCuentaEstadoDeCuentaDet}
        >
          Ver detalle
        </b>
        <b
          className="absolute top-[390px] left-[818px] text-xs text-cornflowerblue cursor-pointer"
          onClick={onIrAEstadoClick}
        >
          Ir a estado de cuenta
        </b>
        <img
          className="absolute top-[179px] right-[311px] w-4 h-[21px]"
          alt=""
          src="/trazado-29746.svg"
        />
        <Grupo3 />
        <img
          className="absolute top-[180px] left-[833px] w-5 h-[18px]"
          alt=""
          src="/trazado-29747.svg"
        />
        <div className="absolute top-[333px] left-[818px] text-base leading-[24px] text-gray-100">
          <p className="m-0">{`Visualiza el desglose de tus `}</p>
          <p className="m-0">pagos y facturas.</p>
        </div>
        <div className="absolute top-[573px] left-[1089px] rounded-3xs bg-white w-[50px] h-[50px]" />
        <img
          className="absolute top-[588.7px] left-[1105px] w-[18.7px] h-[18px]"
          alt=""
          src="/trazado-29748.svg"
        />
      </div>
      {isCuentaEstadoDeCuentaDetOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCuentaEstadoDeCuentaDet}
        >
          <CuentaEstadoDeCuentaDet onClose={closeCuentaEstadoDeCuentaDet} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard2 = () => {
  const navigate = useNavigate();

  const onIrAEstadoClick = useCallback(() => {
    navigate("/cuenta");
  }, [navigate]);

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-300 w-full h-[1080px] text-left text-sm text-dimgray-200 font-open-sans">
      <div className="absolute bottom-[141px] left-[332px] rounded-3xs bg-white w-[1057px] h-[399px]" />
      <div className="absolute bottom-[141px] left-[1048px] rounded-tl-none rounded-tr-3xs rounded-br-3xs rounded-bl-none bg-whitesmoke-200 w-[341px] h-[399px]" />
      <img
        className="absolute top-[130px] right-[109px] w-[260px] h-[378px]"
        alt=""
        src="/trazado-297411.svg"
      />
      <img
        className="absolute top-[0px] left-[0px] w-[299px] h-[1462px]"
        alt=""
        src="/rectangle22.svg"
      />
      <div className="absolute top-[0px] left-[298px] bg-gainsboro w-px h-[1080px]" />
      <div className="absolute top-[144px] left-[17.17px] w-[261.9px] h-[322.7px] text-base text-lightslategray-100">
        <img
          className="absolute w-full top-[41px] right-[0px] left-[0px] max-w-full overflow-hidden h-[49.7px]"
          alt=""
          src="/rectangle11.svg"
        />
        <div className="absolute top-[calc(50%_-_106.65px)] left-[calc(50%_-_72.12px)] text-steelblue-100">
          Dashboard
        </div>
        <div className="absolute top-[calc(50%_+_24.35px)] left-[calc(50%_-_72.12px)]">
          Cuenta
        </div>
        <div className="absolute top-[calc(50%_-_38.65px)] left-[calc(50%_-_72.12px)]">
          Servicios
        </div>
        <div className="absolute top-[calc(50%_+_95.35px)] left-[calc(50%_-_72.12px)]">
          Usuarios
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_-_72.12px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[calc(50%_+_84.35px)] left-[calc(50%_-_72.12px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[0px] left-[5.83px] text-lg font-semibold text-white">
          Menu
        </div>
        <img
          className="absolute top-[calc(50%_+_101.65px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright5.svg"
        />
        <img
          className="absolute top-[calc(50%_+_30.65px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright5.svg"
        />
        <img
          className="absolute top-[calc(50%_-_32.35px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright5.svg"
        />
        <div className="absolute top-[calc(50%_-_104.35px)] left-[18.83px] w-[18px] h-[18px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-steelblue-100" />
          <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-steelblue-100" />
          <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-steelblue-100" />
          <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-steelblue-100" />
        </div>
        <img
          className="absolute top-[calc(50%_+_27.65px)] left-[18.83px] w-[21px] h-5"
          alt=""
          src="/wallet.svg"
        />
        <div className="absolute top-[calc(50%_+_94.65px)] left-[16.83px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-lightslategray-100">
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
          className="absolute bottom-[5.7px] left-[24.83px] w-1 h-1 opacity-[0]"
          alt=""
          src="/oval4.svg"
        />
        <img
          className="absolute top-[calc(50%_+_33.65px)] left-[24.83px] w-1 h-1 opacity-[0]"
          alt=""
          src="/oval4.svg"
        />
        <img
          className="absolute top-[calc(50%_-_37.26px)] right-[225.07px] w-[19px] h-[19.2px]"
          alt=""
          src="/trazado-30234.svg"
        />
      </div>
      <div className="absolute top-[239px] left-[332px] text-[33px] text-dimgray-100">
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
        src="/enmascarar-grupo-341.svg"
      />
      <div className="absolute top-[409px] right-[170px] text-white">
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
      <div className="absolute top-[435px] right-[189px] w-10 h-10 text-smi text-cornflowerblue font-avenir">
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
      <b className="absolute top-[635px] left-[804px] text-xs">Finanzas PIT</b>
      <div className="absolute top-[353px] left-[352px]">
        <span>{`Dispone de una factura `}</span>
        <b className="text-crimson-100">pendiente</b>
      </div>
      <b className="absolute top-[711px] left-[804px] text-xs">Finanzas PIT</b>
      <b className="absolute top-[786px] left-[804px] text-xs">Finanzas PIT</b>
      <b className="absolute top-[858px] left-[804px] text-xs">Finanzas PIT</b>
      <div className="absolute top-[227px] left-[818px] text-3xl">Balance</div>
      <div className="absolute top-[574px] left-[364px] text-3xl">
        Próximos pagos
      </div>
      <div className="absolute top-[340px] right-[198px] text-3xl text-white">
        Total usuarios
      </div>
      <div className="absolute top-[253px] left-[818px] text-7xl font-semibold">
        S/. 3127,00
      </div>
      <div className="absolute top-[804px] left-[1087px] text-9xl font-semibold text-cornflowerblue">
        15 días
      </div>
      <div className="absolute top-[366px] right-[284px] text-7xl font-semibold text-white">
        1200
      </div>
      <div className="absolute top-[164px] left-[818px] rounded-3xs bg-whitesmoke-600 w-[50px] h-[50px]" />
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
        src="/rectangle13.svg"
      />
      <img
        className="absolute top-[129.5px] left-[1141.5px] w-[393px] h-[179px]"
        alt=""
        src="/rectangle14.svg"
      />
      <img
        className="absolute top-[329.79px] left-[1141.5px] w-[393px] h-[178.7px]"
        alt=""
        src="/rectangle15.svg"
      />
      <img
        className="absolute top-[572px] right-[145px] w-12 h-12"
        alt=""
        src="/rectangle21.svg"
      />
      <img
        className="absolute top-[162px] left-[1450px] w-12 h-12"
        alt=""
        src="/rectangle23.svg"
      />
      <img
        className="absolute right-[109px] bottom-[146px] w-[392px] h-48"
        alt=""
        src="/rectangle16.svg"
      />
      <div className="absolute top-[563px] left-[1442px] text-xl">
        Perfil de usuario
      </div>
      <div className="absolute top-[153px] left-[1165px] text-xl">NOC</div>
      <div className="absolute top-[353px] left-[1165px] text-xl">
        Facturación
      </div>
      <div className="absolute top-[767px] left-[1442px] text-xl">
        Últimos cargos
      </div>
      <b className="absolute top-[596px] left-[1442px] text-cornflowerblue">
        Juan Hernandez
      </b>
      <b className="absolute top-[186px] left-[1166px] text-cornflowerblue">
        Información de contácto
      </b>
      <b className="absolute top-[386px] left-[1166px] text-cornflowerblue">
        Información de contácto
      </b>
      <b className="absolute top-[810px] left-[1443px]">Factura N°</b>
      <div className="absolute top-[810px] right-[173px] text-cornflowerblue">
        F 001-00001753
      </div>
      <b className="absolute top-[845px] left-[1443px]">Monto</b>
      <b className="absolute bottom-[180px] left-[1443px]">Emisión</b>
      <div className="absolute top-[845px] right-[209px] text-cornflowerblue">
        $ 3.127,00
      </div>
      <div className="absolute right-[202px] bottom-[180px] text-cornflowerblue">
        10/03/2024
      </div>
      <div className="absolute top-[626px] left-[1443px]">Example@pit.net</div>
      <div className="absolute top-[216px] left-[1166px]">Example@pit.net</div>
      <div className="absolute top-[416px] left-[1166px]">Example@pit.net</div>
      <div className="absolute top-[656px] left-[1443px]">(0) 053 555 555</div>
      <div className="absolute top-[246px] left-[1166px]">(0) 053 555 555</div>
      <div className="absolute top-[446px] left-[1166px]">(0) 053 555 555</div>
      <b className="absolute top-[715px] left-[1089px] text-xl text-dimgray-100">
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
      <b className="absolute top-[373px] left-[352px] text-xs text-cornflowerblue">
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
      <div className="absolute top-[-2px] right-[0px] w-[1621px] h-[297.7px] text-base text-cornflowerblue">
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
        <div className="absolute top-[41px] left-[35px] leading-[22px]">
          <span>{`Empresa: `}</span>
          <span className="font-semibold">Fiber d</span>
        </div>
        <img
          className="absolute top-[49.36px] left-[210.64px] w-3 h-[7.3px]"
          alt=""
          src="/chevronright.svg"
        />
        <div className="absolute top-[27px] right-[227px] w-36 h-[151.7px] text-sm text-steelblue-100">
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
        <section className="absolute h-[calc(100%_-_24px)] top-[24px] right-[101px] bottom-[0px] w-[302px] text-left text-sm text-dimgray-200 font-open-sans">
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
        </section>
      </div>
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
      <img
        className="absolute top-[25px] left-[17px] w-[72px] h-[84px] object-cover"
        alt=""
        src="/logo-pit@2x.png"
      />
    </div>
  );
};

export default Dashboard2;

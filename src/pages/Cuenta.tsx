import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Componente from "../components/componente";
import Grupo3 from "../components/grupo3";
import Componente4 from "../components/componente4";
import Grupo2 from "../components/grupo2";

const Cuenta: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  const onDashboardTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-200 w-full h-[1650px] text-left text-base text-dimgray-200 font-open-sans">
      <img
        className="absolute top-[243px] right-[110px] w-[1479px] h-[174.8px]"
        alt=""
        src="/rectangle21.svg"
      />
      <div className="absolute top-[351px] left-[1110px] font-semibold">
        Fecha de vencimiento
      </div>
      <b className="absolute top-[351px] left-[1410px] text-cornflowerblue">
        05 de Abril 2024
      </b>
      <div className="absolute top-[274px] left-[1110px] font-semibold">
        Detracción pendiente
      </div>
      <b className="absolute top-[274px] left-[1410px] text-cornflowerblue">
        S/. 1127,00
      </b>
      <div className="absolute top-[314px] left-[1110px] font-semibold">
        Total deuda
      </div>
      <b className="absolute top-[314px] left-[1410px] text-cornflowerblue">
        S/. 53127,00
      </b>
      <div className="absolute top-[140px] right-[110px] w-[204px] h-[19px] text-sm text-cornflowerblue">
        <div className="absolute top-[0px] left-[0px]">Cuenta</div>
        <div className="absolute top-[0px] right-[-1px]">Estado de cuenta</div>
        <img
          className="absolute bottom-[2px] left-[calc(50%_-_34px)] w-[7.3px] h-3"
          alt=""
          src="/chevronright3.svg"
        />
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[299px] h-[1650px]"
        alt=""
        src="/rectangle22.svg"
      />
      <div className="absolute top-[0px] left-[298px] bg-gainsboro w-px h-[1080px]" />
      <div className="absolute top-[-2px] right-[0px] w-[1621px] h-[297.7px] text-sm text-cornflowerblue">
        <div className="absolute w-full top-[0px] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.03)] bg-white h-[100px]" />
        <img
          className="absolute top-[28px] right-[255px] w-[45px] h-[45px]"
          alt=""
          src="/componente-22--7.svg"
        />
        <img
          className="absolute top-[28px] right-[185px] w-[45px] h-[45px]"
          alt=""
          src="/componente-22--8.svg"
        />
        <div className="absolute top-[43px] left-[35px]">
          <span>{`Empresa: `}</span>
          <b>Fiber digital</b>
        </div>
        <img
          className="absolute top-[50.36px] left-[193.64px] w-3 h-[7.3px]"
          alt=""
          src="/chevronright4.svg"
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
        <Componente onInformacinDePerfilClick={onInformacinDePerfilClick} />
      </div>
      <div className="absolute top-[136px] left-[331px] text-9xl">
        Estado de cuenta
      </div>
      <div className="absolute top-[330px] left-[555px] text-sm font-light">
        / Mes
      </div>
      <div className="absolute top-[354px] left-[364px] text-sm font-light">
        Valor presentado en base (Sol)
      </div>
      <b className="absolute top-[181px] left-[331px] text-3xl text-cornflowerblue">
        Cliente #TW1500001
      </b>
      <div className="absolute top-[274px] left-[364px] text-3xl">Balance</div>
      <div className="absolute top-[309px] left-[364px] text-[35px] font-semibold">
        S/. 3127,00
      </div>
      <img
        className="absolute right-[110px] bottom-[119.97px] w-[1479px] h-[1077.2px]"
        alt=""
        src="/rectangle.svg"
      />
      <div className="absolute top-[481.69px] left-[364px] text-5xl">
        Últimos movimientos
      </div>
      <div className="absolute top-[562.69px] left-[364px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[290px] h-12 text-sm text-lightslategray-200 border-[1px] border-solid border-whitesmoke-500">
        <div className="absolute top-[calc(50%_-_9px)] left-[14px]">
          13 Mar, 2024 to 21 Mar, 2024
        </div>
      </div>
      <div className="absolute top-[523.69px] left-[364px] text-sm leading-[22px] text-dimgray-100 inline-block w-[313px] h-8">
        Visualiza el detalle de tus facturas y pagos
      </div>
      <div className="absolute right-[-2873.5px] bottom-[246.17px] w-[4462.5px] h-[844px] text-darkslategray">
        <div className="absolute h-[calc(100%_-_88px)] w-full top-[88px] right-[0px] bottom-[0px] left-[0px]">
          <Grupo3 />
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] w-[1433px] opacity-[0]">
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
            <b className="absolute top-[14px] left-[calc(50%_-_458.68px)] leading-[13px] text-lightslategray-100">
              Fecha
            </b>
            <b className="absolute top-[14px] left-[calc(50%_-_220.68px)] leading-[13px] text-lightslategray-100">
              Banco
            </b>
            <b className="absolute top-[14px] left-[calc(50%_+_220.2px)] leading-[13px] text-lightslategray-100">
              Total
            </b>
            <b className="absolute top-[14px] right-[159.3px] leading-[13px] text-lightslategray-100">
              Status
            </b>
            <b className="absolute top-[15px] left-[43px] leading-[13px] text-lightslategray-100">
              Numero
            </b>
            <b className="absolute top-[78px] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <b className="absolute top-[calc(50%_-_19px)] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <b className="absolute top-[calc(50%_+_123px)] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <b className="absolute bottom-[96px] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <div className="absolute top-[78px] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[calc(50%_+_123px)] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute bottom-[93px] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[81px] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[81px] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <div className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <div className="absolute bottom-[92px] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute bottom-[92px] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <b className="absolute top-[calc(50%_-_228px)] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <b className="absolute top-[calc(50%_+_54px)] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <b className="absolute top-[calc(50%_+_193px)] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <b className="absolute bottom-[26px] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <div className="absolute top-[calc(50%_-_231px)] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[calc(50%_+_185px)] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute bottom-[31px] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <div className="absolute top-[calc(50%_+_191px)] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[calc(50%_+_191px)] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <div className="absolute bottom-[25px] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute bottom-[25px] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <b className="absolute top-[calc(50%_-_157px)] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <div className="absolute top-[calc(50%_-_157px)] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[calc(50%_-_156px)] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[calc(50%_-_156px)] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <b className="absolute top-[calc(50%_-_87px)] left-[44px] text-sm text-cornflowerblue">
              00076
            </b>
            <div className="absolute top-[calc(50%_-_89px)] left-[calc(50%_+_219.72px)]">
              3127,00
            </div>
            <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_458.68px)]">
              2013-08-11
            </div>
            <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_220.68px)]">
              Banco de la Nación - Soles
            </div>
            <div className="absolute top-[calc(50%_-_230.5px)] right-[115px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_+_54.5px)] right-[115px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_-_88.5px)] right-[115px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_+_196.5px)] right-[115px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_-_160.5px)] right-[115px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_+_124.5px)] right-[115px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute top-[calc(50%_-_18.5px)] right-[115px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute right-[115px] bottom-[86.5px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
            <div className="absolute right-[115px] bottom-[26.5px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
              <img
                className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/rectangle7.svg"
              />
              <div className="absolute top-[2px] right-[9.08px]">Asociado</div>
              <img
                className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                alt=""
                src="/oval5.svg"
              />
            </div>
          </div>
          <div className="absolute top-[74px] right-[104.83px] w-[108.2px] h-[25px] text-sm text-crimson-200">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle8.svg"
            />
            <div className="absolute top-[2px] right-[9.98px]">Sin asociar</div>
            <img
              className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
              alt=""
              src="/oval2.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_1152.25px)] w-[347px] h-12 text-cornflowerblue">
          <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[109px] border-[1px] border-solid border-cornflowerblue">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_29.5px)]">
              General
            </div>
          </div>
          <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_54.5px)] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue box-border w-[109px] text-white border-[1px] border-solid border-cornflowerblue">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_31.5px)]">
              Facturas
            </div>
          </div>
          <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[109px] border-[1px] border-solid border-cornflowerblue">
            <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_23.5px)]">
              Pagos
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-[158.31px] left-[371px] text-sm leading-[22px] text-dimgray-100 inline-block w-[229px] h-8">
        Mostrando 10 de 200 resultados
      </div>
      <img
        className="absolute right-[228px] bottom-[165.07px] w-[280px] h-[32.1px]"
        alt=""
        src="/next1.svg"
      />
      <Componente4 />
      <div className="absolute top-[484px] right-[129px] w-64 h-[364px] text-cornflowerblue">
        <div className="absolute top-[0px] left-[4px] w-[213px] h-[22px]">
          <img
            className="absolute top-[0px] left-[0px] w-5 h-5"
            alt=""
            src="/download.svg"
          />
          <b className="absolute top-[0px] left-[31px]">
            Descargar información
          </b>
        </div>
        <Grupo2 />
      </div>
      <img
        className="absolute top-[25px] left-[17px] w-[72px] h-[84px] object-cover"
        alt=""
        src="/logo-pit1@2x.png"
      />
      <div className="absolute top-[144px] left-[17.17px] w-[261.9px] h-[334.7px] text-lightslategray-100">
        <img
          className="absolute w-full top-[182px] right-[0px] left-[0px] max-w-full overflow-hidden h-[49.7px]"
          alt=""
          src="/rectangle1.svg"
        />
        <div
          className="absolute top-[calc(50%_-_112.65px)] left-[calc(50%_-_72.12px)] cursor-pointer"
          onClick={onDashboardTextClick}
        >
          Dashboard
        </div>
        <div className="absolute top-[calc(50%_+_28.35px)] left-[calc(50%_-_72.12px)] text-steelblue-100">
          Cuenta
        </div>
        <div className="absolute top-[calc(50%_+_145.35px)] left-[calc(50%_-_72.12px)]">
          Usuarios
        </div>
        <div className="absolute bottom-[12px] left-[calc(50%_-_72.12px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[calc(50%_+_87.35px)] left-[calc(50%_-_72.12px)] text-sm text-cornflowerblue">
          Estado de cuenta
        </div>
        <div className="absolute top-[0px] left-[5.83px] text-lg font-semibold text-white">
          Menu
        </div>
        <img
          className="absolute top-[calc(50%_+_151.65px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <img
          className="absolute top-[calc(50%_+_36.01px)] right-[26.43px] w-3 h-[7.3px]"
          alt=""
          src="/chevronright5.svg"
        />
        <div className="absolute top-[calc(50%_-_110.35px)] left-[18.83px] w-[18px] h-[18px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
        </div>
        <img
          className="absolute top-[calc(50%_+_30.65px)] left-[18.83px] w-[21px] h-5"
          alt=""
          src="/wallet1.svg"
        />
        <div className="absolute top-[calc(50%_+_144.65px)] left-[16.83px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-lightslategray-100">
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
          className="absolute bottom-[17.7px] left-[24.83px] w-1 h-1 opacity-[0]"
          alt=""
          src="/oval1.svg"
        />
        <img
          className="absolute top-[calc(50%_+_96.65px)] left-[24.83px] w-1 h-1"
          alt=""
          src="/oval.svg"
        />
        <div className="absolute top-[calc(50%_-_44.65px)] left-[calc(50%_-_72.12px)]">
          Servicios
        </div>
        <img
          className="absolute top-[calc(50%_-_38.35px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright6.svg"
        />
        <img
          className="absolute top-[calc(50%_-_43.26px)] right-[225.07px] w-[19px] h-[19.2px]"
          alt=""
          src="/trazado-30234.svg"
        />
      </div>
    </div>
  );
};

export default Cuenta;

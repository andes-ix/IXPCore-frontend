import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Grupo from "../components/Grupo";
import Grupo2 from "../components/Grupo2";
import Grupo1 from "../components/Grupo1";

const Cuenta = () => {
  const navigate = useNavigate();

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-200 w-full h-[1650px] text-left text-sm text-dimgray-200 font-open-sans">
      <img
        className="absolute top-[243px] right-[110px] w-[1479px] h-[223.7px]"
        alt=""
        src="/rectangle21.svg"
      />
      <div className="absolute top-[384px] left-[1110px] text-base font-semibold">
        Fecha de vencimiento
      </div>
      <b className="absolute top-[384px] left-[1410px] text-base text-cornflowerblue">
        05 de Abril 2024
      </b>
      <div className="absolute top-[307px] left-[1110px] text-base font-semibold">
        Detracción pendiente
      </div>
      <b className="absolute top-[307px] left-[1410px] text-base text-cornflowerblue">
        S/. 1127,00
      </b>
      <div className="absolute top-[347px] left-[1110px] text-base font-semibold">
        Total abonado
      </div>
      <b className="absolute top-[347px] left-[1410px] text-base text-cornflowerblue">
        S/. 53127,00
      </b>
      <div className="absolute top-[140px] right-[116px] w-[198px] h-[19px] text-cornflowerblue">
        <div className="absolute top-[0px] left-[0px]">Cuenta</div>
        <div className="absolute top-[0px] right-[-1px]">Estado de cuenta</div>
        <img
          className="absolute bottom-[2px] left-[calc(50%_-_31px)] w-[7.3px] h-3"
          alt=""
          src="/chevronright.svg"
        />
      </div>
      <img
        className="absolute top-[0px] left-[0px] w-[299px] h-[1650px]"
        alt=""
        src="/rectangle22.svg"
      />
      <div className="absolute top-[0px] left-[298px] bg-gainsboro w-px h-[1080px]" />
      <img
        className="absolute top-[12px] left-[-6px] w-[169px] h-[118px] object-cover"
        alt=""
        src="/logoplaceholder3removebgpreview@2x.png"
      />
      <div className="absolute top-[144px] left-[17.17px] w-[261.9px] h-[322.7px] text-base text-lightslategray-100">
        <img
          className="absolute w-full top-[113px] right-[0px] left-[0px] max-w-full overflow-hidden h-[49.7px]"
          alt=""
          src="/rectangle.svg"
        />
        <div className="absolute top-[calc(50%_-_106.65px)] left-[calc(50%_-_72.12px)]">
          Dashboard
        </div>
        <div className="absolute top-[calc(50%_-_35.65px)] left-[calc(50%_-_72.12px)] text-steelblue">
          Cuenta
        </div>
        <div className="absolute top-[calc(50%_+_82.35px)] left-[calc(50%_-_72.12px)]">
          Usuarios
        </div>
        <div className="absolute bottom-[0px] left-[calc(50%_-_72.12px)] text-sm text-white opacity-[0]">
          Listado de usuarios
        </div>
        <div className="absolute top-[calc(50%_+_24.35px)] left-[calc(50%_-_72.12px)] text-sm text-steelblue">
          Estado de cuenta
        </div>
        <div className="absolute top-[0px] left-[5.83px] text-lg font-semibold text-white">
          Menu
        </div>
        <img
          className="absolute top-[calc(50%_+_88.65px)] right-[28.77px] w-[7.3px] h-3"
          alt=""
          src="/chevronright2.svg"
        />
        <img
          className="absolute top-[calc(50%_-_26.99px)] right-[26.43px] w-3 h-[7.3px]"
          alt=""
          src="/chevronright1.svg"
        />
        <div className="absolute top-[calc(50%_-_104.35px)] left-[18.83px] w-[18px] h-[18px]">
          <div className="absolute top-[-2px] left-[-2px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute top-[-2px] right-[0px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute right-[0px] bottom-[0px] rounded-12xs box-border w-[9px] h-[11px] border-[2px] border-solid border-lightslategray-100" />
          <div className="absolute bottom-[0px] left-[-2px] rounded-12xs box-border w-[9px] h-[7px] border-[2px] border-solid border-lightslategray-100" />
        </div>
        <img
          className="absolute top-[calc(50%_-_32.35px)] left-[18.83px] w-[21px] h-5"
          alt=""
          src="/wallet1.svg"
        />
        <div className="absolute top-[calc(50%_+_81.65px)] left-[16.83px] rounded-sm box-border w-5 h-5 border-[2px] border-solid border-lightslategray-100">
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
          className="absolute top-[calc(50%_+_33.65px)] left-[24.83px] w-1 h-1"
          alt=""
          src="/oval.svg"
        />
      </div>
      <Grupo onInformacinDePerfilClick={onInformacinDePerfilClick} />
      <img
        className="absolute top-[365px] left-[351px] w-[130px] h-10"
        alt=""
        src="/rectangle3.svg"
      />
      <img
        className="absolute top-[365px] left-[481px] w-[98px] h-10"
        alt=""
        src="/rectangle3copy.svg"
      />
      <img
        className="absolute top-[365px] left-[579px] w-[372.6px] h-10"
        alt=""
        src="/rectangle3copy3.svg"
      />
      <div className="absolute top-[136px] left-[331px] text-9xl">
        Estado de cuenta
      </div>
      <div className="absolute top-[302px] left-[493px] font-light">/ Mes</div>
      <div className="absolute top-[375px] left-[398px] font-light text-white">
        18%
      </div>
      <div className="absolute top-[375px] left-[519px] font-light text-white">
        10%
      </div>
      <div className="absolute top-[375px] left-[748px] font-light text-white">
        72%
      </div>
      <div className="absolute top-[326px] left-[351px] font-light">
        Valor presentado en base (Sol)
      </div>
      <div className="absolute top-[415px] left-[351px] font-light">
        Desglose general del valor representado en el balance
      </div>
      <b className="absolute top-[181px] left-[331px] text-3xl text-cornflowerblue">
        Cliente #TW1500001
      </b>
      <div className="absolute top-[264px] left-[351px] text-3xl">Balance</div>
      <div className="absolute top-[290px] left-[351px] text-7xl font-semibold">
        S/. 3127,00
      </div>
      <div className="absolute top-[273px] right-[167px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[54px] h-12">
        <img
          className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-5 h-5"
          alt=""
          src="/download.svg"
        />
      </div>
      <img
        className="absolute right-[110px] bottom-[68.97px] w-[1479px] h-[1077.2px]"
        alt=""
        src="/rectangle1.svg"
      />
      <div className="absolute top-[532.69px] left-[364px] text-5xl">
        Últimos movimientos
      </div>
      <div className="absolute top-[613.69px] left-[364px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[290px] h-12 text-lightslategray-200 border-[1px] border-solid border-whitesmoke-400">
        <div className="absolute top-[calc(50%_-_9px)] left-[14px]">
          13 Mar, 2024 to 21 Mar, 2024
        </div>
      </div>
      <div className="absolute top-[574.69px] left-[364px] leading-[22px] text-dimgray-100 inline-block w-[313px] h-8">
        Visualiza el detalle de tus facturas y pagos
      </div>
      <div className="absolute right-[-2873.5px] bottom-[195.17px] w-[4462.5px] h-[912px] text-crimson-200">
        <div className="absolute h-[calc(100%_-_156px)] w-full top-[156px] right-[0px] bottom-[0px] left-[0px]">
          <Grupo2 />
          <Grupo1 />
          <div className="absolute top-[74px] right-[104.83px] w-[108.2px] h-[25px]">
            <img
              className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/rectangle9.svg"
            />
            <div className="absolute top-[2px] right-[13.98px]">
              Sin asociar
            </div>
            <img
              className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
              alt=""
              src="/oval2.svg"
            />
          </div>
        </div>
        <div className="absolute top-[0px] left-[calc(50%_-_1152.25px)] w-[347px] h-12 text-base text-cornflowerblue">
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
      <div className="absolute bottom-[107.31px] left-[371px] leading-[22px] text-dimgray-100 inline-block w-[229px] h-8">
        Mostrando 10 de 200 resultados
      </div>
      <img
        className="absolute right-[228px] bottom-[114.07px] w-[280px] h-[32.1px]"
        alt=""
        src="/next1.svg"
      />
      <div className="absolute top-[613.83px] left-[661px] w-[225px] h-[194.7px] text-dimgray-100">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[54px] h-12">
          <img
            className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_11px)] w-[22px] h-5"
            alt=""
            src="/filter.svg"
          />
        </div>
        <div className="absolute h-[calc(100%_-_62.7px)] w-[calc(100%_-_3px)] top-[62.7px] right-[0px] bottom-[0px] left-[3px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0]">
          <b className="absolute top-[calc(50%_-_47.7px)] left-[calc(50%_-_92px)] leading-[22px] inline-block w-[171px] h-5">
            Filtros predeterminados
          </b>
          <div className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_64px)] text-lightslategray-100">
            Mes actual
          </div>
          <div className="absolute bottom-[24.5px] left-[calc(50%_-_64px)] font-semibold text-steelblue">
            Mes anterior
          </div>
          <div className="absolute top-[calc(50%_-_14.7px)] left-[calc(50%_-_92px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Cuenta;

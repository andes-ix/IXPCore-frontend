import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Componente5 from "../components/componente5";
import Grupo8 from "../components/grupo8";
import Componente3 from "../components/componente3";

const Dashboard1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-14");
  }, [navigate]);

  const onImagen151IconClick = useCallback(() => {
    navigate("/dashboard-2");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-300 w-full h-[2400px] text-left text-sm text-dimgray-200 font-open-sans">
      <div className="absolute top-[354px] left-[25px] rounded-3xs bg-white w-[377px] h-[378px]" />
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
      <div className="absolute top-[126px] left-[25px] text-base leading-[22px] text-cornflowerblue">
        <span>{`Empresa: `}</span>
        <span className="font-semibold">Perú IX</span>
      </div>
      <img
        className="absolute top-[135.36px] left-[163.64px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright4.svg"
      />
      <Componente5 onInformacinDePerfilClick={onInformacinDePerfilClick} />
      <img
        className="absolute top-[35px] left-[19px] w-[30px] h-[30px] object-cover cursor-pointer"
        alt=""
        src="/imagen-151@2x.png"
        onClick={onImagen151IconClick}
      />
      <div className="absolute top-[221px] left-[26px] text-7xl text-dimgray-100">
        Bienvenido Salvador!
      </div>
      <div className="absolute top-[185px] left-[26px] text-3xl font-medium text-cornflowerblue">
        08 de Abril 2024
      </div>
      <div className="absolute top-[261px] left-[26px] leading-[22px] text-gray-100">
        <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing `}</p>
        <p className="m-0">{`elit. Vestibulum placerat ut magna eget malesuada. `}</p>
        <p className="m-0">{`Vivamus placerat orci ut lorem feugiat ultrices. `}</p>
      </div>
      <img
        className="absolute top-[494.36px] left-[44.41px] w-[337.8px] h-[211.6px]"
        alt=""
        src="/vector.svg"
      />
      <div className="absolute top-[502px] left-[45px] text-xs font-light">
        Valor presentado en base (Sol)
      </div>
      <div className="absolute top-[449px] left-[45px] text-xl">Balance</div>
      <div className="absolute top-[473px] left-[45px] text-3xl font-semibold">
        S/. 3127,00
      </div>
      <div className="absolute top-[384px] left-[45px] rounded-3xs bg-lightslategray-100 w-[60px] h-[60px]" />
      <img
        className="absolute top-[384px] left-[222px] w-8 h-8"
        alt=""
        src="/group3.svg"
      />
      <img
        className="absolute top-[384px] left-[262px] w-8 h-8"
        alt=""
        src="/group3copy.svg"
      />
      <img
        className="absolute top-[384px] left-[302px] w-8 h-8"
        alt=""
        src="/group3copy2.svg"
      />
      <img
        className="absolute top-[384px] right-[56px] w-8 h-8"
        alt=""
        src="/group3copy3.svg"
      />
      <img
        className="absolute top-[761px] left-[25px] w-[377px] h-[378px]"
        alt=""
        src="/trazado-297411.svg"
      />
      <img
        className="absolute top-[761px] left-[25px] w-[377px] h-[378px] opacity-[0.05]"
        alt=""
        src="/enmascarar-grupo-341.svg"
      />
      <div className="absolute top-[1040px] left-[55px] text-white">
        Agregados recientemente
      </div>
      <img
        className="absolute top-[1066px] left-[55px] rounded-[50%] w-[58px] h-[58px] object-cover"
        alt=""
        src="/elipse-462@2x.png"
      />
      <img
        className="absolute top-[1066px] left-[83px] w-[58px] h-[58px] object-cover"
        alt=""
        src="/grupo-1675@2x.png"
      />
      <img
        className="absolute top-[1066px] left-[110px] w-[58px] h-[58px] object-cover"
        alt=""
        src="/grupo-1674@2x.png"
      />
      <img
        className="absolute top-[1066px] left-[138px] w-[58px] h-[58px] object-cover"
        alt=""
        src="/grupo-1676@2x.png"
      />
      <div className="absolute top-[1066px] left-[165px] w-10 h-10 text-smi text-cornflowerblue font-avenir">
        <img
          className="absolute h-[calc(100%_+_18px)] w-[calc(100%_+_18px)] top-[0px] right-[-18px] bottom-[-18px] left-[0px] rounded-[50%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/elipse-470.svg"
        />
        <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_8px)] font-extrabold">
          +3
        </div>
      </div>
      <div className="absolute top-[791px] left-[55px] rounded-3xs bg-white w-[60px] h-[60px]" />
      <div className="absolute top-[971px] left-[50px] text-3xl text-white">
        Total usuarios
      </div>
      <div className="absolute top-[997px] left-[50px] text-7xl font-semibold text-white">
        1200
      </div>
      <div className="absolute top-[1170px] left-[25px] rounded-3xs bg-white w-[377px] h-[712px]" />
      <div className="absolute top-[1204px] left-[49px] text-3xl">
        Próximos pagos
      </div>
      <img
        className="absolute top-[1320.48px] left-[41px] w-[329.1px] h-[186.5px]"
        alt=""
        src="/group.svg"
      />
      <img
        className="absolute top-[1282.31px] left-[151.46px] w-[123.7px] h-[12.1px]"
        alt=""
        src="/november2023.svg"
      />
      <Grupo8 />
      <img
        className="absolute bottom-[303px] left-[25px] w-[377px] h-48"
        alt=""
        src="/rectangle13.svg"
      />
      <img
        className="absolute right-[64px] bottom-[415px] w-12 h-12"
        alt=""
        src="/rectangle23.svg"
      />
      <img
        className="absolute bottom-[101px] left-[25px] w-[377px] h-48"
        alt=""
        src="/rectangle14.svg"
      />
      <div className="absolute bottom-[445px] left-[48px] text-xl">
        Perfil de usuario
      </div>
      <div className="absolute bottom-[241px] left-[48px] text-xl">
        Últimos cargos
      </div>
      <b className="absolute bottom-[420px] left-[48px] text-cornflowerblue">
        Juan Hernandez
      </b>
      <b className="absolute bottom-[206px] left-[49px]">Factura N°</b>
      <div className="absolute bottom-[206px] left-[237px] text-cornflowerblue">
        F 001-00001753
      </div>
      <b className="absolute bottom-[171px] left-[49px]">Monto</b>
      <b className="absolute bottom-[135px] left-[49px]">Emisión</b>
      <div className="absolute bottom-[171px] left-[239px] text-cornflowerblue">
        $ 3.127,00
      </div>
      <div className="absolute bottom-[135px] left-[238px] text-cornflowerblue">
        10/03/2024
      </div>
      <div className="absolute bottom-[390px] left-[49px]">Example@pit.net</div>
      <div className="absolute bottom-[360px] left-[49px]">(0) 053 555 555</div>
      <Componente3 propRight="unset" propLeft="132px" />
    </div>
  );
};

export default Dashboard1;

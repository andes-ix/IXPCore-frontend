import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard1 = () => {
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
        src="/componente-22--2.svg"
      />
      <img
        className="absolute top-[28px] left-[273px] w-[45px] h-[45px]"
        alt=""
        src="/componente-22--3.svg"
      />
      <div className="absolute top-[126px] left-[25px] text-base leading-[22px] text-cornflowerblue">
        <span>{`Empresa: `}</span>
        <span className="font-semibold">Perú IX</span>
      </div>
      <img
        className="absolute top-[135.36px] left-[163.64px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright.svg"
      />
      <div className="absolute top-[24px] right-[28px] w-[302px] h-[273.7px]">
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
        src="/trazado-29741.svg"
      />
      <img
        className="absolute top-[761px] left-[25px] w-[377px] h-[378px] opacity-[0.05]"
        alt=""
        src="/enmascarar-grupo-34.svg"
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
      <div className="absolute top-[1550px] left-[78px] w-[261px] h-[279px]">
        <div className="absolute top-[0px] right-[-1px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <div className="absolute top-[calc(50%_-_63.5px)] right-[-1px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <div className="absolute top-[calc(50%_+_11.5px)] right-[-1px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <div className="absolute right-[-1px] bottom-[18px] font-light">
          <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
          <p className="m-0">10Gbps - Pago mensual</p>
        </div>
        <b className="absolute top-[39px] left-[calc(50%_-_69.5px)] text-xs">
          Finanzas PIT
        </b>
        <b className="absolute top-[calc(50%_-_24.5px)] left-[calc(50%_-_69.5px)] text-xs">
          Finanzas PIT
        </b>
        <b className="absolute top-[calc(50%_+_50.5px)] left-[calc(50%_-_69.5px)] text-xs">
          Finanzas PIT
        </b>
        <b className="absolute bottom-[0px] left-[calc(50%_-_69.5px)] text-xs">
          Finanzas PIT
        </b>
        <img
          className="absolute top-[2px] left-[0px] w-12 h-[47px]"
          alt=""
          src="/group10.svg"
        />
        <img
          className="absolute top-[calc(50%_-_60.5px)] left-[0px] w-12 h-12"
          alt=""
          src="/group11.svg"
        />
        <img
          className="absolute top-[calc(50%_+_11.5px)] left-[0px] w-12 h-12"
          alt=""
          src="/group12.svg"
        />
        <img
          className="absolute bottom-[6px] left-[0px] w-12 h-12"
          alt=""
          src="/group13.svg"
        />
      </div>
      <img
        className="absolute bottom-[303px] left-[25px] w-[377px] h-48"
        alt=""
        src="/rectangle9.svg"
      />
      <img
        className="absolute right-[64px] bottom-[415px] w-12 h-12"
        alt=""
        src="/rectangle21.svg"
      />
      <img
        className="absolute bottom-[101px] left-[25px] w-[377px] h-48"
        alt=""
        src="/rectangle10.svg"
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
      <div className="absolute top-[27px] left-[132px] w-36 h-[151.7px] text-steelblue-100">
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
  );
};

export default Dashboard1;

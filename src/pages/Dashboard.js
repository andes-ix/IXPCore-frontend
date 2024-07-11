import { useState, useCallback } from "react";
import DetalleDePago from "../components/DetalleDePago";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [isDetalleDePagoOpen, setDetalleDePagoOpen] = useState(false);
  const navigate = useNavigate();

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-14");
  }, [navigate]);

  const onImagen151IconClick = useCallback(() => {
    navigate("/usuarios-gestin-de-usuarios-2");
  }, [navigate]);

  const openDetalleDePago = useCallback(() => {
    setDetalleDePagoOpen(true);
  }, []);

  const closeDetalleDePago = useCallback(() => {
    setDetalleDePagoOpen(false);
  }, []);

  return (
    <>
      <div className="relative bg-aliceblue-300 w-full h-[1874px] text-left text-sm text-dimgray-200 font-open-sans">
        <img
          className="absolute top-[266.13px] left-[25px] w-[376.5px] h-[371.2px]"
          alt=""
          src="/rectangle2.svg"
        />
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
        <div className="absolute top-[177px] left-[25px] text-5xl">
          Estado de cuenta
        </div>
        <b className="absolute top-[213px] left-[26px] text-lg text-cornflowerblue">
          Cliente #TW1500001
        </b>
        <img
          className="absolute top-[388.13px] left-[45px] w-[55px] h-10"
          alt=""
          src="/rectangle3.svg"
        />
        <img
          className="absolute top-[388.13px] left-[100px] w-[38.2px] h-10"
          alt=""
          src="/rectangle3copy.svg"
        />
        <div className="absolute top-[325.13px] left-[176px] font-light">
          / Mes
        </div>
        <div className="absolute top-[398.13px] left-[59px] font-light text-white">
          18%
        </div>
        <div className="absolute top-[398.13px] left-[105px] font-light text-white">
          10%
        </div>
        <div className="absolute top-[351.13px] left-[45px] text-xs font-light">
          Valor presentado en base (Sol)
        </div>
        <div className="absolute top-[437.13px] left-[45px] text-xs font-light">
          Desglose general del valor representado en el balance
        </div>
        <div className="absolute top-[290.13px] left-[45px] text-xl">
          Balance
        </div>
        <div className="absolute top-[315.13px] left-[45px] text-5xl font-semibold">
          S/. 3127,00
        </div>
        <img
          className="absolute top-[388.13px] right-[46.46px] w-[245.3px] h-10"
          alt=""
          src="/rectangle3copy3.svg"
        />
        <div className="absolute top-[398.13px] left-[242px] font-light text-white">
          72%
        </div>
        <div className="absolute top-[565px] left-[45px] font-semibold">
          Fecha de vencimiento
        </div>
        <b className="absolute top-[565px] right-[63px] text-cornflowerblue">
          05 de Abril 2024
        </b>
        <div className="absolute top-[488px] left-[45px] font-semibold">
          Detracción pendiente
        </div>
        <b className="absolute top-[488px] left-[257px] text-cornflowerblue">
          S/. 1127,00
        </b>
        <div className="absolute top-[528px] left-[45px] font-semibold">
          Total abonado
        </div>
        <b className="absolute top-[528px] left-[257px] text-cornflowerblue">
          S/. 53127,00
        </b>
        <div className="absolute top-[298px] right-[46px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[54px] h-12">
          <img
            className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-5 h-5"
            alt=""
            src="/download.svg"
          />
        </div>
        <div className="absolute bottom-[69.01px] left-[19px] w-[2950px] h-[1141.2px] text-dimgray-100">
          <img
            className="absolute h-full top-[0px] bottom-[0px] left-[0px] max-h-full w-[376.5px]"
            alt=""
            src="/rectangle.svg"
          />
          <div className="absolute top-[33.87px] left-[19px] text-xl text-dimgray-200">
            Últimos movimientos
          </div>
          <div className="absolute top-[128.87px] left-[19px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[226.1px] h-12 text-lightslategray-200 border-[1px] border-solid border-whitesmoke-500">
            <div className="absolute top-[calc(50%_-_9px)] left-[14px]">
              13 Mar, 2024 to 21 Mar, 2024
            </div>
          </div>
          <div className="absolute top-[70.87px] left-[19px] text-xs leading-[22px] inline-block w-[304px] h-[39px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu finibus eros, quis sodales velit. `}</div>
          <div className="absolute w-[calc(100%_-_0.5px)] right-[0px] bottom-[107.2px] left-[0.5px] h-[837px] text-base text-darkslategray">
            <div className="absolute h-[calc(100%_-_78px)] w-full top-[78.01px] right-[0px] bottom-[-0.01px] left-[0px]">
              <div className="absolute h-[calc(100%_-_3px)] top-[0px] bottom-[3px] left-[calc(50%_+_41.75px)] w-[1433px] opacity-[0]">
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
                <b className="absolute top-[15px] left-[217.82px] leading-[13px] text-lightslategray-100">
                  Emision
                </b>
                <b className="absolute top-[14px] left-[calc(50%_+_29.32px)] leading-[13px] text-lightslategray-100">
                  Vencimiento
                </b>
                <b className="absolute top-[15px] left-[calc(50%_-_353.5px)] leading-[13px] text-lightslategray-100">
                  Descipcion
                </b>
                <b className="absolute top-[14px] left-[calc(50%_+_197.2px)] leading-[13px] text-lightslategray-100">
                  Total
                </b>
                <b className="absolute top-[14px] left-[calc(50%_+_327.2px)] leading-[13px] text-lightslategray-100">
                  Estado de pago
                </b>
                <b className="absolute top-[14px] right-[130.3px] leading-[13px] text-lightslategray-100">
                  Estado
                </b>
                <b className="absolute top-[15px] left-[43px] leading-[13px] text-lightslategray-100">
                  Numero
                </b>
                <b className="absolute top-[78px] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <b className="absolute top-[calc(50%_-_19px)] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <b className="absolute top-[calc(50%_+_123px)] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <b className="absolute bottom-[96px] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <div className="absolute top-[78px] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[78px] right-[111.78px]">
                  Publicado
                </div>
                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[calc(50%_-_15px)] right-[111.78px]">
                  Publicado
                </div>
                <div className="absolute top-[calc(50%_+_123px)] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[calc(50%_+_123px)] right-[111.78px]">
                  Publicado
                </div>
                <div className="absolute bottom-[93px] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute right-[107.78px] bottom-[93px]">{`Publicado `}</div>
                <div className="absolute top-[82px] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[81px] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[67px] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_-_29px)] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_-_170px)] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_+_112px)] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute bottom-[82px] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_-_242px)] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_+_40px)] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_-_101px)] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_+_181px)] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute bottom-[13px] left-[calc(50%_-_353.5px)]">
                  <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
                  <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
                </div>
                <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_+_125px)] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_+_124px)] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <div className="absolute bottom-[91px] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute bottom-[92px] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <b className="absolute top-[calc(50%_-_228px)] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <b className="absolute top-[calc(50%_+_54px)] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <b className="absolute top-[calc(50%_+_193px)] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <b className="absolute bottom-[26px] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <div className="absolute top-[calc(50%_-_231px)] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[calc(50%_-_231px)] right-[106.78px]">
                  Cancelado
                </div>
                <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[calc(50%_+_54px)] right-[111.78px]">
                  Publicado
                </div>
                <div className="absolute top-[calc(50%_+_185px)] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[calc(50%_+_185px)] right-[111.78px]">
                  Publicado
                </div>
                <div className="absolute bottom-[31px] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute right-[111.78px] bottom-[31px]">
                  Publicado
                </div>
                <div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_+_55px)] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_+_192px)] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_+_191px)] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <div className="absolute bottom-[24px] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute bottom-[25px] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <b className="absolute top-[calc(50%_-_157px)] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <div className="absolute top-[calc(50%_-_157px)] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[calc(50%_-_157px)] right-[106.78px]">
                  Cancelado
                </div>
                <div className="absolute top-[calc(50%_-_155px)] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_-_156px)] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <b className="absolute top-[calc(50%_-_87px)] left-[44px] text-sm text-cornflowerblue">
                  F 001-00001753
                </b>
                <div className="absolute top-[calc(50%_-_89px)] left-[calc(50%_+_196.72px)]">
                  3127,00
                </div>
                <div className="absolute top-[calc(50%_-_89px)] right-[111.78px]">
                  Publicado
                </div>
                <div className="absolute top-[calc(50%_-_86px)] left-[calc(50%_-_498.68px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_+_29.32px)]">
                  2013-08-11
                </div>
                <div className="absolute top-[78px] left-[calc(50%_+_326.97px)] w-[102.6px] h-[25px] text-sm text-crimson-200">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle1.svg"
                  />
                  <div className="absolute top-[2px] right-[8.38px]">
                    Pendiente
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_232px)] left-[calc(50%_+_326.97px)] w-[102.6px] h-[25px] text-sm text-steelblue-100">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle4.svg"
                  />
                  <div className="absolute top-[2px] right-[11.38px]">
                    Revertido
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval1.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_160px)] left-[calc(50%_+_326.97px)] w-[102.6px] h-[25px] text-sm text-steelblue-100">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle4.svg"
                  />
                  <div className="absolute top-[2px] right-[11.38px]">
                    Revertido
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval1.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_91px)] left-[calc(50%_+_326.97px)] w-[84.2px] h-[25px] text-sm text-goldenrod">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle5.svg"
                  />
                  <div className="absolute top-[2px] left-[calc(50%_-_14.88px)]">
                    Parcial
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval2.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_55px)] left-[calc(50%_+_326.97px)] w-[84.2px] h-[25px] text-sm text-goldenrod">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle5.svg"
                  />
                  <div className="absolute top-[2px] left-[calc(50%_-_14.88px)]">
                    Parcial
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval2.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_326.97px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle6.svg"
                  />
                  <div className="absolute top-[2px] right-[10.28px]">
                    Pagado
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval3.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_122px)] left-[calc(50%_+_326.97px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle6.svg"
                  />
                  <div className="absolute top-[2px] right-[10.28px]">
                    Pagado
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval3.svg"
                  />
                </div>
                <div className="absolute top-[calc(50%_+_188px)] left-[calc(50%_+_326.97px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle6.svg"
                  />
                  <div className="absolute top-[2px] right-[10.28px]">
                    Pagado
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval3.svg"
                  />
                </div>
                <div className="absolute bottom-[91px] left-[calc(50%_+_326.97px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle6.svg"
                  />
                  <div className="absolute top-[2px] right-[10.28px]">
                    Pagado
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval3.svg"
                  />
                </div>
                <div className="absolute bottom-[25px] left-[calc(50%_+_326.97px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
                  <img
                    className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/rectangle6.svg"
                  />
                  <div className="absolute top-[2px] right-[10.28px]">
                    Pagado
                  </div>
                  <img
                    className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                    alt=""
                    src="/oval3.svg"
                  />
                </div>
              </div>
              <div className="absolute h-[calc(100%_-_3px)] top-[3px] bottom-[0px] left-[0px] w-[377.1px] overflow-auto mix-blend-normal">
                <div className="absolute h-full top-[0px] right-[-1101px] bottom-[0px] w-[1478.1px]">
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
                  <b className="absolute top-[14px] left-[calc(50%_-_472.85px)] leading-[13px] text-lightslategray-100">
                    Fecha
                  </b>
                  <b className="absolute top-[14px] left-[calc(50%_-_227.08px)] leading-[13px] text-lightslategray-100">
                    Banco
                  </b>
                  <b className="absolute top-[14px] left-[calc(50%_+_227.99px)] leading-[13px] text-lightslategray-100">
                    Total
                  </b>
                  <b className="absolute top-[14px] right-[159.31px] leading-[13px] text-lightslategray-100">
                    Status
                  </b>
                  <b className="absolute top-[15px] left-[43px] leading-[13px] text-lightslategray-100">
                    Numero
                  </b>
                  <b
                    className="absolute top-[78px] left-[44px] text-sm text-cornflowerblue cursor-pointer"
                    onClick={openDetalleDePago}
                  >
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
                  <div className="absolute top-[78px] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[calc(50%_+_123px)] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute bottom-[93px] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[81px] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[81px] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <div className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[calc(50%_+_124px)] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <div className="absolute bottom-[92px] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute bottom-[92px] left-[calc(50%_-_225.17px)]">
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
                  <div className="absolute top-[calc(50%_-_231px)] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[calc(50%_+_185px)] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute bottom-[31px] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <div className="absolute top-[calc(50%_+_191px)] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[calc(50%_+_191px)] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <div className="absolute bottom-[25px] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute bottom-[25px] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <b className="absolute top-[calc(50%_-_157px)] left-[44px] text-sm text-cornflowerblue">
                    00076
                  </b>
                  <div className="absolute top-[calc(50%_-_157px)] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[calc(50%_-_156px)] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[calc(50%_-_156px)] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <b className="absolute top-[calc(50%_-_87px)] left-[44px] text-sm text-cornflowerblue">
                    00076
                  </b>
                  <div className="absolute top-[calc(50%_-_89px)] left-[calc(50%_+_227.9px)]">
                    3127,00
                  </div>
                  <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_472.62px)]">
                    2013-08-11
                  </div>
                  <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_-_225.17px)]">
                    Banco de la Nación - Soles
                  </div>
                  <div className="absolute top-[calc(50%_-_230.5px)] right-[115.01px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_+_54.5px)] right-[115.01px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_88.5px)] right-[115.01px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_+_196.5px)] right-[115.01px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_160.5px)] right-[115.01px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_+_124.5px)] right-[115.01px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute top-[calc(50%_-_18.5px)] right-[115.01px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute right-[115.01px] bottom-[86.5px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                  <div className="absolute right-[115.01px] bottom-[26.5px] w-[96.3px] h-[25px] text-sm text-lightseagreen">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/rectangle7.svg"
                    />
                    <div className="absolute top-[2px] right-[9.08px]">
                      Asociado
                    </div>
                    <img
                      className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                      alt=""
                      src="/oval3.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute top-[74px] right-[1578.33px] w-[108.2px] h-[25px] text-sm text-crimson-200">
                <img
                  className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className="absolute top-[2px] right-[9.98px]">
                  Sin asociar
                </div>
                <img
                  className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
                  alt=""
                  src="/oval.svg"
                />
              </div>
            </div>
            <div className="absolute top-[0px] left-[calc(50%_-_1445.25px)] w-[274.9px] h-12 text-cornflowerblue">
              <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[86.9px] border-[1px] border-solid border-cornflowerblue">
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_29.51px)]">
                  General
                </div>
              </div>
              <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_43.45px)] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[86.9px] border-[1px] border-solid border-cornflowerblue">
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_31.51px)]">
                  Facturas
                </div>
              </div>
              <div className="absolute h-full top-[0px] right-[0px] bottom-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue box-border w-[86.9px] text-white border-[1px] border-solid border-cornflowerblue">
                <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_23px)]">
                  Pagos
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[52.2px] left-[74.25px] leading-[22px] inline-block w-[229px] h-8">
            Mostrando 10 de 200 resultados
          </div>
          <img
            className="absolute bottom-[20.1px] left-[40px] w-[280px] h-[32.1px]"
            alt=""
            src="/next.svg"
          />
          <div className="absolute top-[129px] left-[254px] w-[225px] h-[194.7px]">
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
              <div className="absolute bottom-[24.5px] left-[calc(50%_-_64px)] font-semibold text-steelblue-100">
                Mes anterior
              </div>
              <div className="absolute top-[calc(50%_-_14.7px)] left-[calc(50%_-_92px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-300" />
            </div>
          </div>
        </div>
      </div>
      {isDetalleDePagoOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDetalleDePago}
        >
          <DetalleDePago onClose={closeDetalleDePago} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;

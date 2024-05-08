import { useState, useCallback } from "react";
import CuentaEstadoDeCuentaDet from "./CuentaEstadoDeCuentaDet";
import PortalPopup from "./PortalPopup";

const Grupo2 = () => {
  const [isCuentaEstadoDeCuentaDetOpen, setCuentaEstadoDeCuentaDetOpen] =
    useState(false);

  const openCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(true);
  }, []);

  const closeCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(false);
  }, []);

  return (
    <>
      <div className="absolute h-full top-[0px] bottom-[0px] left-[calc(50%_-_2231.25px)] w-[1480.4px] text-left text-base text-darkslategray font-open-sans">
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
        <b className="absolute top-[14px] left-[calc(50%_+_32.14px)] leading-[13px] text-lightslategray-100">
          Vencimiento
        </b>
        <b className="absolute top-[15px] left-[calc(50%_-_364.43px)] leading-[13px] text-lightslategray-100">
          Descipcion
        </b>
        <b className="absolute top-[14px] left-[calc(50%_+_204.6px)] leading-[13px] text-lightslategray-100">
          Total
        </b>
        <b className="absolute top-[14px] left-[calc(50%_+_341.16px)] leading-[13px] text-lightslategray-100">
          Estado de pago
        </b>
        <b className="absolute top-[14px] right-[134.32px] leading-[13px] text-lightslategray-100">
          Estado
        </b>
        <b className="absolute top-[15px] left-[43px] leading-[13px] text-lightslategray-100">
          Numero
        </b>
        <b
          className="absolute top-[78px] left-[44px] text-sm text-cornflowerblue cursor-pointer"
          onClick={openCuentaEstadoDeCuentaDet}
        >
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
        <div className="absolute top-[78px] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[78px] right-[114.8px]">Publicado</div>
        <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[calc(50%_-_15px)] right-[114.8px]">
          Publicado
        </div>
        <div className="absolute top-[calc(50%_+_123px)] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[calc(50%_+_123px)] right-[114.8px]">
          Publicado
        </div>
        <div className="absolute bottom-[94px] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute right-[110.8px] bottom-[94px]">{`Publicado `}</div>
        <div className="absolute top-[82px] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[81px] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <div className="absolute top-[67px] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_-_29px)] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_-_170px)] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_+_112px)] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute bottom-[84px] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_-_242px)] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_+_40px)] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_-_101px)] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_+_181px)] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute bottom-[15px] left-[calc(50%_-_361.93px)]">
          <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur `}</p>
          <p className="m-0">adipiscing elit. Cras eu finibus eros.</p>
        </div>
        <div className="absolute top-[calc(50%_-_14px)] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_-_15px)] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_+_125px)] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_+_124px)] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <div className="absolute bottom-[92px] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute bottom-[93px] left-[calc(50%_+_31.79px)]">
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
        <div className="absolute top-[calc(50%_-_231px)] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[calc(50%_-_231px)] right-[110.8px]">
          Cancelado
        </div>
        <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[calc(50%_+_54px)] right-[114.8px]">
          Publicado
        </div>
        <div className="absolute top-[calc(50%_+_185px)] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[calc(50%_+_185px)] right-[114.8px]">
          Publicado
        </div>
        <div className="absolute bottom-[32px] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute right-[114.8px] bottom-[32px]">Publicado</div>
        <div className="absolute top-[calc(50%_-_227px)] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_-_228px)] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_+_55px)] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_+_54px)] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_+_192px)] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_+_191px)] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <div className="absolute bottom-[25px] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute bottom-[26px] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <b className="absolute top-[calc(50%_-_157px)] left-[44px] text-sm text-cornflowerblue">
          F 001-00001753
        </b>
        <div className="absolute top-[calc(50%_-_157px)] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[calc(50%_-_157px)] right-[110.8px]">
          Cancelado
        </div>
        <div className="absolute top-[calc(50%_-_155px)] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_-_156px)] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <b className="absolute top-[calc(50%_-_87px)] left-[44px] text-sm text-cornflowerblue">
          F 001-00001753
        </b>
        <div className="absolute top-[calc(50%_-_89px)] left-[calc(50%_+_204.51px)]">
          3127,00
        </div>
        <div className="absolute top-[calc(50%_-_89px)] right-[114.8px]">
          Publicado
        </div>
        <div className="absolute top-[calc(50%_-_86px)] left-[calc(50%_-_514.74px)]">
          2013-08-11
        </div>
        <div className="absolute top-[calc(50%_-_87px)] left-[calc(50%_+_31.79px)]">
          2013-08-11
        </div>
        <div className="absolute top-[78px] left-[calc(50%_+_340.43px)] w-[102.6px] h-[25px] text-sm text-crimson-200">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle4.svg"
          />
          <div className="absolute top-[2px] right-[12.38px]">Pendiente</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval2.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_232px)] left-[calc(50%_+_340.43px)] w-[102.6px] h-[25px] text-sm text-steelblue">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle5.svg"
          />
          <div className="absolute top-[2px] right-[15.38px]">Revertido</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval3.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_160px)] left-[calc(50%_+_340.43px)] w-[102.6px] h-[25px] text-sm text-steelblue">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle5.svg"
          />
          <div className="absolute top-[2px] right-[15.38px]">Revertido</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval3.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_91px)] left-[calc(50%_+_339.92px)] w-[84.2px] h-[25px] text-sm text-goldenrod">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle6.svg"
          />
          <div className="absolute top-[2px] left-[calc(50%_-_14.88px)]">
            Parcial
          </div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval4.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_+_55px)] left-[calc(50%_+_339.92px)] w-[84.2px] h-[25px] text-sm text-goldenrod">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle6.svg"
          />
          <div className="absolute top-[2px] left-[calc(50%_-_14.88px)]">
            Parcial
          </div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval4.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_-_20px)] left-[calc(50%_+_340.01px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle7.svg"
          />
          <div className="absolute top-[2px] right-[13.28px]">Pagado</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval5.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_+_122px)] left-[calc(50%_+_340.01px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle7.svg"
          />
          <div className="absolute top-[2px] right-[13.28px]">Pagado</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval5.svg"
          />
        </div>
        <div className="absolute top-[calc(50%_+_188px)] left-[calc(50%_+_340.01px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle7.svg"
          />
          <div className="absolute top-[2px] right-[13.28px]">Pagado</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval5.svg"
          />
        </div>
        <div className="absolute bottom-[91px] left-[calc(50%_+_340.01px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle7.svg"
          />
          <div className="absolute top-[2px] right-[13.28px]">Pagado</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval5.svg"
          />
        </div>
        <div className="absolute bottom-[25px] left-[calc(50%_+_340.01px)] w-[87.5px] h-[25px] text-sm text-lightseagreen">
          <img
            className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/rectangle7.svg"
          />
          <div className="absolute top-[2px] right-[13.28px]">Pagado</div>
          <img
            className="absolute top-[calc(50%_-_2.67px)] left-[10px] w-1.5 h-1.5"
            alt=""
            src="/oval5.svg"
          />
        </div>
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

export default Grupo2;

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();

  const onEnviarTextClick = useCallback(() => {
    navigate("/login-3");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-300 w-full h-[930px] text-left text-sm text-cornflowerblue font-open-sans">
      <img
        className="absolute top-[0px] left-[0px] w-[430px] h-[930px]"
        alt=""
        src="/trazado-29742.svg"
      />
      <div className="absolute top-[153px] left-[0px] w-[416px] h-[567px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-white">
          <img
            className="absolute top-[11px] left-[0px] w-[199px] h-[139px] object-cover"
            alt=""
            src="/logoplaceholder3removebgpreview@2x.png"
          />
          <div className="absolute top-[calc(50%_-_146.5px)] left-[52px]">
            Regresar
          </div>
          <img
            className="absolute top-[calc(50%_-_143.14px)] left-[38px] w-[7.3px] h-3"
            alt=""
            src="/chevronright3.svg"
          />
        </div>
        <img
          className="absolute top-[182.16px] left-[calc(50%_+_135.55px)] w-4 h-4"
          alt=""
          src="/trazado-397.svg"
        />
        <img
          className="absolute top-[182.16px] left-[calc(50%_+_122.55px)] w-4 h-4"
          alt=""
          src="/trazado-3971.svg"
        />
        <div className="absolute top-[calc(50%_-_97.5px)] left-[39px] text-5xl font-semibold text-dimgray-200">
          <p className="m-0">{`Ingrese el código de su `}</p>
          <p className="m-0">aplicación de autenticación</p>
        </div>
        <div className="absolute w-[calc(100%_-_61px)] top-[calc(50%_-_8.5px)] right-[22px] left-[39px] h-[115px] text-dimgray-100">
          <div className="absolute top-[0px] left-[0px] text-xs font-semibold">
            Codigo
          </div>
          <div className="absolute w-full top-[calc(50%_-_30.5px)] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
          <div className="absolute top-[calc(50%_-_15.5px)] left-[14px] text-darkgray-100">
            **************
          </div>
          <div className="absolute h-[calc(100%_-_100px)] w-[calc(100%_-_58px)] top-[95px] left-[30px] text-steelblue-200 inline-block">
            Reconocer este dispositivo en el futuro
          </div>
          <div className="absolute top-[calc(50%_+_37.5px)] left-[calc(50%_-_177.5px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-300" />
        </div>
        <div className="absolute w-[calc(100%_-_61px)] right-[22px] bottom-[74px] left-[39px] h-12 text-white">
          <img
            className="absolute h-[calc(100%_+_18px)] w-[calc(100%_+_18px)] top-[0px] right-[-18px] bottom-[-18px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/componente-20--2.svg"
          />
          <div
            className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_22.5px)] font-semibold cursor-pointer"
            onClick={onEnviarTextClick}
          >
            Enviar
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login1;

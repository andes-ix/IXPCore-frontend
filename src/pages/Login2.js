import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login2 = () => {
  const navigate = useNavigate();

  const onRecuperarContraseaTextClick = useCallback(() => {
    navigate("/login-2");
  }, [navigate]);

  const onIniciarSesionTextClick = useCallback(() => {
    navigate("/dashboard-1");
  }, [navigate]);

  return (
    <div className="relative bg-whitesmoke-300 w-full h-[930px] text-left text-xs text-dimgray-200 font-open-sans">
      <div className="absolute top-[0px] left-[0px] bg-aliceblue-300 w-[430px] h-[930px]" />
      <div className="absolute bottom-[138px] left-[0px] w-[416px] h-[645px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-white">
          <img
            className="absolute top-[11px] left-[0px] w-[199px] h-[139px] object-cover"
            alt=""
            src="/logoplaceholder3removebgpreview@2x.png"
          />
        </div>
        <div className="absolute w-[calc(100%_-_14px)] right-[0px] bottom-[0px] left-[14px] rounded-t-none rounded-b-3xs bg-whitesmoke-400 h-[322px]" />
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
        <div className="absolute top-[calc(50%_-_196.5px)] left-[39px] text-5xl font-semibold">
          ¡Hola!
        </div>
        <div className="absolute w-[calc(100%_-_102px)] top-[calc(50%_-_147.5px)] left-[39px] leading-[22px] text-lightslategray-100 inline-block h-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu
          finibus eros, quis sodales velit. Curabitur eu elementum tellus.
        </div>
        <div className="absolute top-[calc(50%_-_74.5px)] left-[53px] text-sm text-cornflowerblue">
          Lorem ipsum dolor sit amet, consectetur
        </div>
        <img
          className="absolute top-[calc(50%_-_70.5px)] left-[39px] w-[7.3px] h-3"
          alt=""
          src="/chevronright1.svg"
        />
        <div className="absolute w-[calc(100%_-_61px)] top-[calc(50%_+_22.5px)] right-[22px] left-[39px] h-[172px] text-dimgray-100">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Email address
          </div>
          <div className="absolute w-full top-[calc(50%_-_59px)] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white h-12" />
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white h-12" />
          <div className="absolute top-[calc(50%_-_44px)] left-[14px] text-sm text-darkgray-100">
            Email
          </div>
          <div className="absolute bottom-[14px] left-[14px] text-sm text-darkgray-100">
            Password
          </div>
          <div
            className="absolute top-[calc(50%_+_10px)] right-[7px] font-semibold text-cornflowerblue cursor-pointer"
            onClick={onRecuperarContraseaTextClick}
          >
            Recuperar contraseña?
          </div>
          <div className="absolute top-[calc(50%_+_11px)] left-[0px] font-semibold">
            Password
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_61px)] right-[22px] bottom-[42px] left-[39px] h-12 text-sm text-white">
          <img
            className="absolute h-[calc(100%_+_18px)] w-[calc(100%_+_18px)] top-[0px] right-[-18px] bottom-[-18px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/trazado-2500.svg"
          />
          <div
            className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_48.5px)] font-semibold cursor-pointer"
            onClick={onIniciarSesionTextClick}
          >
            Iniciar sesion
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login2;

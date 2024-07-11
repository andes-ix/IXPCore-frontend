import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login3 = () => {
  const navigate = useNavigate();

  const onLogin1ContainerClick = useCallback(() => {
    navigate("/solicitud-de-2fa-1");
  }, [navigate]);

  const onIniciarSesionTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onTrminosYCondicionesClick = useCallback(() => {
    navigate("/solicitud-de-contrasea-posterior-a-registro-1");
  }, [navigate]);

  return (
    <div
      className="relative bg-aliceblue-300 w-full h-[1080px] cursor-pointer text-left text-sm text-dimgray-100 font-open-sans"
      onClick={onLogin1ContainerClick}
    >
      <img
        className="absolute top-[0px] left-[0px] w-[1425px] h-[1080px] object-cover"
        alt=""
        src="/portal@2x.png"
      />
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue-200 w-[1425px] h-[1080px] opacity-[0.03]" />
      <div className="absolute top-[189px] right-[258px] rounded-3xs bg-white w-[514px] h-[683px]" />
      <div className="absolute top-[341px] left-[1198px] text-5xl font-semibold text-dimgray-200">
        ¡Hola!
      </div>
      <div className="absolute top-[390px] left-[1198px] leading-[22px] inline-block w-[369px] h-[46px] text-lightslategray-100">
        <span>{`Ingresa tu correo electrónico y contraseña e inicia sesión para disfrutar de los beneficios de nuestro `}</span>
        <b className="text-cornflowerblue">PCP</b>
      </div>
      <div className="absolute top-[525px] right-[258px] rounded-t-none rounded-b-3xs bg-whitesmoke-400 w-[514px] h-[347px]" />
      <div className="absolute top-[555px] left-[1198px] font-semibold">
        Correo electrónico
      </div>
      <div className="absolute top-[584px] left-[1198px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[422px] h-12" />
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[749px] left-[1198px] w-[422px] h-12">
        <img
          className="absolute h-[calc(100%_+_18px)] w-[calc(100%_+_18px)] top-[0px] right-[-18px] bottom-[-18px] left-[0px] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/trazado-25001.svg"
        />
      </button>
      <div
        className="absolute top-[761px] left-[1355px] text-base font-semibold text-white cursor-pointer"
        onClick={onIniciarSesionTextClick}
      >
        Iniciar sesion
      </div>
      <div className="absolute top-[681px] left-[1198px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[422px] h-12" />
      <input
        className="[border:none] [outline:none] font-open-sans text-sm bg-[transparent] absolute top-[599px] left-[1212px] text-darkgray-100 text-left"
        placeholder="Correo electronico"
        type="email"
        maxLength={50}
      />
      <input
        className="[border:none] [outline:none] font-open-sans text-sm bg-[transparent] absolute top-[696px] left-[1212px] text-darkgray-100 text-left"
        placeholder="Contraseña"
        type="password"
      />
      <div className="absolute top-[653px] left-[1483px] text-xs font-semibold text-cornflowerblue">
        Recuperar contraseña?
      </div>
      <div className="absolute top-[652px] left-[1198px] font-semibold">
        Contraseña
      </div>
      <div
        className="absolute top-[466px] left-[1212px] text-cornflowerblue cursor-pointer"
        onClick={onTrminosYCondicionesClick}
      >
        Términos y Condiciones de uso
      </div>
      <img
        className="absolute top-[470px] left-[1198px] w-[7.3px] h-3"
        alt=""
        src="/chevronright6.svg"
      />
      <img
        className="absolute top-[225px] left-[1193px] w-20 h-[94px] object-cover"
        alt=""
        src="/logo-pit@2x.png"
      />
    </div>
  );
};

export default Login3;

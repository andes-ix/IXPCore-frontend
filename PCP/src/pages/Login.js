import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onIniciarSesionTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-300 w-full h-[1080px] text-left text-sm text-dimgray-100 font-open-sans">
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue-200 w-[1425px] h-[1080px]" />
      <div className="absolute top-[189px] right-[258px] rounded-3xs bg-white w-[514px] h-[683px]" />
      <div className="absolute top-[341px] left-[1198px] text-5xl font-semibold text-dimgray-200">
        ¡Hola!
      </div>
      <div className="absolute top-[390px] left-[1198px] leading-[22px] inline-block w-[369px] h-[46px] text-lightslategray-100">
        <span>{`Ingresa tu correo electrónico y contraseña e inicia sesión para disfrutar de los beneficios de nuestro `}</span>
        <b className="text-cornflowerblue">PCP</b>
      </div>
      <div className="absolute top-[525px] right-[258px] rounded-t-none rounded-b-3xs bg-whitesmoke-300 w-[514px] h-[347px]" />
      <div className="absolute top-[555px] left-[1198px] font-semibold">
        Correo electrónico
      </div>
      <div className="absolute top-[584px] left-[1198px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[422px] h-12" />
      <img
        className="absolute top-[749px] left-[1198px] w-[440px] h-[66px]"
        alt=""
        src="/componente-20--2.svg"
      />
      <div
        className="absolute top-[761px] left-[1355px] text-base font-semibold text-white cursor-pointer"
        onClick={onIniciarSesionTextClick}
      >
        Iniciar sesion
      </div>
      <div className="absolute top-[681px] left-[1198px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[422px] h-12" />
      <div className="absolute top-[599px] left-[1212px] text-darkgray-100">
        Correo electronico
      </div>
      <div className="absolute top-[696px] left-[1212px] text-darkgray-100">
        Contraseña
      </div>
      <div className="absolute top-[653px] left-[1483px] text-xs font-semibold text-cornflowerblue">
        Recuperar contraseña?
      </div>
      <div className="absolute top-[652px] left-[1198px] font-semibold">
        Contraseña
      </div>
      <div className="absolute top-[466px] left-[1212px] text-cornflowerblue">
        Términos y Condiciones de uso
      </div>
      <img
        className="absolute top-[470px] left-[1198px] w-[7.3px] h-3"
        alt=""
        src="/chevronright4.svg"
      />
      <img
        className="absolute top-[209px] left-[1154px] w-[223px] h-[156px] object-cover"
        alt=""
        src="/logoplaceholder3removebgpreview@2x.png"
      />
    </div>
  );
};

export default Login;

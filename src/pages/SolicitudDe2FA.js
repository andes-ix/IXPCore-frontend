import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const SolicitudDe2FA = () => {
  const navigate = useNavigate();

  const onGrupo8ContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-300 w-full h-[1080px] text-left text-sm text-dimgray-200 font-open-sans">
      <img
        className="absolute top-[0px] left-[-24px] w-[1450px] h-[1080px] object-cover"
        alt=""
        src="/fondo2port@2x.png"
      />
      <div className="absolute top-[0px] left-[4px] bg-darkslateblue-200 w-[1425px] h-[1080px] opacity-[0.03]" />
      <div
        className="absolute top-[236px] right-[258px] rounded-3xs bg-white w-[514px] h-[586px] cursor-pointer"
        onClick={onGrupo8ContainerClick}
      >
        <div className="absolute top-[calc(50%_-_115px)] left-[50px] text-5xl font-semibold">
          <p className="m-0">{`Ingrese el código de su `}</p>
          <p className="m-0">aplicación de autenticación</p>
        </div>
        <div className="absolute top-[calc(50%_-_20px)] left-[50px] font-semibold text-dimgray-100">
          Codigo
        </div>
        <div className="absolute w-[calc(100%_-_92px)] top-[calc(50%_+_9px)] right-[42px] left-[50px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
        <button className="cursor-pointer [border:none] p-0 bg-steelblue-100 absolute w-[calc(100%_-_92px)] right-[42px] bottom-[67px] left-[50px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md h-12" />
        <div className="absolute bottom-[81px] left-[calc(50%_-_28px)] text-base font-semibold text-white">
          Enviar
        </div>
        <input
          className="[border:none] [outline:none] font-open-sans text-sm bg-[transparent] absolute top-[calc(50%_+_24px)] left-[64px] text-darkgray-100 text-left"
          type="number"
        />
        <div className="absolute top-[calc(50%_-_144px)] left-[64px] text-cornflowerblue">
          Regresar
        </div>
        <img
          className="absolute top-[calc(50%_-_140px)] left-[50px] w-[7.3px] h-3"
          alt=""
          src="/chevronright7.svg"
        />
        <div className="absolute h-[calc(100%_-_571px)] w-[calc(100%_-_217px)] top-[379px] left-[80px] text-base text-steelblue-200 inline-block">
          Reconocer este dispositivo en el futuro
        </div>
        <input
          className="m-0 absolute top-[calc(50%_+_85px)] left-[calc(50%_-_207px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-300"
          type="checkbox"
        />
        <img
          className="absolute top-[33px] left-[45px] w-20 h-[94px] object-cover"
          alt=""
          src="/logo-pit@2x.png"
        />
      </div>
    </div>
  );
};

export default SolicitudDe2FA;

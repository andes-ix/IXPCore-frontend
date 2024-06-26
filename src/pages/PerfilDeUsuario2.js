import { FunctionComponent, useCallback } from "react";
import Componente5 from "../components/componente5";
import Componente3 from "../components/componente3";
import { useNavigate } from "react-router-dom";

const PerfilDeUsuario2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onConfigurarTextClick = useCallback(() => {
    navigate("/perfil-de-usuario-16");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-300 w-full h-[929px] text-left text-xs text-dimgray-100 font-open-sans">
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
      <Componente5 />
      <img
        className="absolute top-[35px] left-[19px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/imagen-151@2x.png"
      />
      <Componente3 propRight="unset" propLeft="132px" />
      <div className="absolute top-[177px] left-[25px] text-5xl text-dimgray-200">
        Verificación en dos pasos
      </div>
      <div className="absolute top-[226px] left-[25px] text-sm text-gray-200">
        Revise y actualice los detalles de su cuenta
      </div>
      <div className="absolute top-[259px] left-[25px] leading-[22px]">
        <p className="m-0">{`Asegúrese de que estos datos estén actualizados, ya que se `}</p>
        <p className="m-0">
          utilizarán para información en la facturación de sus servicios
        </p>
      </div>
      <div className="absolute top-[333px] left-[81px] text-5xl text-dimgray-200">
        Seguridad
      </div>
      <div className="absolute top-[396px] left-[25px] text-base font-semibold text-dimgray-200">
        Verificación en dos pasos
      </div>
      <div className="absolute top-[428px] left-[25px]">
        Protege tu cuenta con la verificación en dos pasos
      </div>
      <div className="absolute top-[470px] left-[85px] leading-[22px]">
        <p className="m-0">{`La verificación en dos pasos es un nivel añadido `}</p>
        <p className="m-0">{`de seguridad,ya que solicita un código cada vez `}</p>
        <p className="m-0">que inicias sesión en un dispositivo nuevo.</p>
      </div>
      <div className="absolute top-[557px] left-[85px] leading-[22px]">
        <p className="m-0">{`Tu aplicación de autenticación nos permite `}</p>
        <p className="m-0">añadir un nivel de verificación</p>
        <p className="m-0">extra para proteger tu cuenta.</p>
      </div>
      <div className="absolute top-[669px] left-[25px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[365px] h-12 text-base text-white">
        <div
          className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_45.5px)] font-semibold cursor-pointer"
          onClick={onConfigurarTextClick}
        >
          Configurar
        </div>
      </div>
      <div className="absolute top-[332px] left-[25px] rounded-10xs bg-white w-[35px] h-[35px]" />
      <div className="absolute top-[471px] left-[25px] rounded-31xl bg-yellow w-[35px] h-[35px]" />
      <div className="absolute top-[558px] left-[25px] rounded-31xl bg-yellow w-[35px] h-[35px]" />
      <div className="absolute top-[475px] left-[37px] text-xl font-semibold text-white">
        1
      </div>
      <div className="absolute top-[562px] left-[37px] text-xl font-semibold text-white">
        2
      </div>
      <img
        className="absolute top-[338.43px] left-[32.61px] w-[19.8px] h-[22.1px]"
        alt=""
        src="/lockstarline.svg"
      />
    </div>
  );
};

export default PerfilDeUsuario2;

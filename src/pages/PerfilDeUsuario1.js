import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const PerfilDeUsuario1 = () => {
  const navigate = useNavigate();

  const onConfigurarTextClick = useCallback(() => {
    navigate("/perfil-de-usuario-16");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-300 w-full h-[929px] text-left text-xs text-dimgray-200 font-open-sans">
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
      <div className="absolute top-[24px] right-[28px] w-[302px] h-[273.7px] text-sm">
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
          <div className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_91px)] text-lightslategray-100">
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
        className="absolute top-[35px] left-[19px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/imagen-151@2x.png"
      />
      <div className="absolute top-[27px] left-[132px] w-36 h-[151.7px] text-sm text-steelblue-100">
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
        Verificación en dos pasos
      </div>
      <div className="absolute top-[226px] left-[25px] text-sm text-gray-200">
        Revise y actualice los detalles de su cuenta
      </div>
      <div className="absolute top-[259px] left-[25px] leading-[22px] text-dimgray-100">
        <p className="m-0">{`Asegúrese de que estos datos estén actualizados, ya que se `}</p>
        <p className="m-0">
          utilizarán para información en la facturación de sus servicios
        </p>
      </div>
      <div className="absolute top-[333px] left-[81px] text-5xl">Seguridad</div>
      <div className="absolute top-[396px] left-[25px] text-base font-semibold">
        Verificación en dos pasos
      </div>
      <div className="absolute top-[428px] left-[25px] text-dimgray-100">
        Protege tu cuenta con la verificación en dos pasos
      </div>
      <div className="absolute top-[470px] left-[85px] leading-[22px] text-dimgray-100">
        <p className="m-0">{`La verificación en dos pasos es un nivel añadido `}</p>
        <p className="m-0">{`de seguridad,ya que solicita un código cada vez `}</p>
        <p className="m-0">que inicias sesión en un dispositivo nuevo.</p>
      </div>
      <div className="absolute top-[557px] left-[85px] leading-[22px] text-dimgray-100">
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

export default PerfilDeUsuario1;

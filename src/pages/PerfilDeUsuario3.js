import { FunctionComponent } from "react";
import Componente5 from "../components/componente5";
import Componente3 from "../components/componente3";

const PerfilDeUsuario3: FunctionComponent = () => {
  return (
    <div className="relative bg-aliceblue-300 w-full h-[929px] text-left text-sm text-dimgray-100 font-open-sans">
      <div className="absolute top-[549px] left-[21px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[369px] h-12" />
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
      <div className="absolute top-[226px] left-[25px] text-gray-200">
        Revise y actualice los detalles de su cuenta
      </div>
      <div className="absolute top-[259px] left-[25px] text-xs leading-[22px]">
        <p className="m-0">{`Asegúrese de que estos datos estén actualizados, ya que se `}</p>
        <p className="m-0">
          utilizarán para información en la facturación de sus servicios
        </p>
      </div>
      <div className="absolute top-[333px] left-[81px] text-5xl text-dimgray-200">
        Seguridad
      </div>
      <div className="absolute top-[639px] left-[25px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[365px] h-12 text-base text-white">
        <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_30.5px)] font-semibold">
          Enviar
        </div>
      </div>
      <div className="absolute top-[332px] left-[25px] rounded-10xs bg-white w-[35px] h-[35px]" />
      <img
        className="absolute top-[338.43px] left-[32.61px] w-[19.8px] h-[22.1px]"
        alt=""
        src="/lockstarline.svg"
      />
      <div className="absolute top-[382px] left-[21px] w-[338px] h-[141px]">
        <div className="absolute top-[0px] left-[0px] text-base font-semibold text-dimgray-200">
          Verificación en dos pasos
        </div>
        <div className="absolute top-[calc(50%_-_38.5px)] left-[0px] text-xs">
          Protege tu cuenta con la verificación en dos pasos
        </div>
        <div className="absolute top-[calc(50%_+_3.5px)] left-[0px] font-semibold">
          Te hemos enviado un código a tu correo electronico
        </div>
        <div className="absolute bottom-[0px] left-[0px] leading-[22px]">
          <p className="m-0">{`Introduce el código de verificación de 6 dígitos `}</p>
          <p className="m-0">que te hemos enviado a exam…..@gmail.com</p>
        </div>
      </div>
      <div className="absolute top-[564px] left-[35px] text-lightslategray-200">
        Codigo de 6 digitos
      </div>
      <div className="absolute top-[713px] left-[95px] text-xs leading-[22px] text-center">
        <p className="m-0">{`Si no ves el correo electrónico en tu `}</p>
        <p className="m-0">buzón, revisa la carpeta de spam.</p>
      </div>
    </div>
  );
};

export default PerfilDeUsuario3;

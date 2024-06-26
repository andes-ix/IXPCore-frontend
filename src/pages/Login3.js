import { FunctionComponent } from "react";
import Grupo7 from "../components/grupo7";

const Login3: FunctionComponent = () => {
  return (
    <div className="relative bg-whitesmoke-300 w-full h-[930px] text-left text-sm text-dimgray-100 font-open-sans">
      <img
        className="absolute top-[0px] left-[0px] w-[430px] h-[930px]"
        alt=""
        src="/trazado-29742.svg"
      />
      <div className="absolute top-[106px] left-[0px] w-[416px] h-[727px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-white text-xs">
          <img
            className="absolute top-[11px] left-[0px] w-[199px] h-[139px] object-cover"
            alt=""
            src="/logoplaceholder3removebgpreview@2x.png"
          />
          <div className="absolute w-[calc(100%_-_77px)] top-[calc(50%_+_94.5px)] left-[40px] leading-[22px] inline-block h-[133px]">
            <p className="m-0">
              <b>Tu clave de acceso debe cumplir con estos requisitos:</b>
            </p>
            <p className="m-0">- Tener 8 caracteres</p>
            <p className="m-0">{`- Ser alfanumérica con al menos 1 carácter numérico y un `}</p>
            <p className="m-0">único carácter especial</p>
            <p className="m-0">
              - Tener uno de estos caracteres especiales - / = . $ # *
            </p>
            <p className="m-0">- Evita colocar información personal</p>
          </div>
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
        <div className="absolute top-[calc(50%_-_227.5px)] left-[39px] text-5xl font-semibold text-dimgray-200">
          Configuración de contraseña
        </div>
        <Grupo7 />
        <div className="absolute w-[calc(100%_-_61px)] right-[22px] bottom-[44px] left-[39px] h-12 text-white">
          <img
            className="absolute h-[calc(100%_+_18px)] w-[calc(100%_+_18px)] top-[0px] right-[-18px] bottom-[-18px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/componente-20--2.svg"
          />
          <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_22.5px)] font-semibold">
            Enviar
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_60px)] top-[calc(50%_-_182.5px)] left-[39px] leading-[22px] inline-block h-[63px]">
          <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu finibus eros, quis sodales velit. Curabitur eu `}</span>
          <b className="text-mediumblue">Ex...…….@gmail.com</b>
        </div>
      </div>
    </div>
  );
};

export default Login3;

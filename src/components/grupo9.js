import { FunctionComponent, memo } from "react";

export type Grupo9Type = {
  className?: string;
};

const Grupo9: FunctionComponent<Grupo9Type> = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute top-[212px] left-[617px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.1)] rounded bg-white w-[687px] h-[651px] text-left text-sm text-dimgray-100 font-open-sans ${className}`}
    >
      <div className="absolute right-[46px] bottom-[46px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[136px] h-12 text-base text-white">
        <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_32px)] font-semibold">
          Guardar
        </div>
      </div>
      <img
        className="absolute w-full top-[88.5px] right-[0.5px] left-[-0.5px] max-w-full overflow-hidden h-0.5"
        alt=""
        src="/lnea-503.svg"
      />
      <div className="absolute top-[32px] left-[40px] text-5xl text-dimgray-200">
        Configuración de contraseña
      </div>
      <div className="absolute bottom-[59px] left-[calc(50%_+_50.5px)] text-base font-semibold text-cornflowerblue">
        Cancelar
      </div>
      <div className="absolute w-[calc(100%_-_122px)] top-[calc(50%_-_207.5px)] left-[40px] leading-[22px] inline-block h-6">
        Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a
        configurar.
      </div>
      <div className="absolute top-[calc(50%_-_156.5px)] left-[40px] font-semibold">
        Contraseña
      </div>
      <div className="absolute w-[calc(100%_-_86px)] top-[calc(50%_-_127.5px)] right-[46px] left-[40px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute w-[calc(100%_-_86px)] top-[calc(50%_-_30.5px)] right-[46px] left-[40px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[calc(50%_-_112.5px)] left-[54px] text-darkgray-100">
        **************
      </div>
      <div className="absolute top-[calc(50%_-_15.5px)] left-[54px] text-darkgray-100">
        **************
      </div>
      <div className="absolute top-[calc(50%_-_59.5px)] left-[40px] font-semibold">
        Confirmar contraseña
      </div>
      <img
        className="absolute top-[calc(50%_-_109.5px)] right-[72.63px] w-[16.7px] h-[15px]"
        alt=""
        src="/bpreview.svg"
      />
      <img
        className="absolute top-[calc(50%_-_15.5px)] right-[72.63px] w-[16.7px] h-[15px]"
        alt=""
        src="/bpreview.svg"
      />
      <div className="absolute top-[calc(50%_+_41.5px)] left-[40px] leading-[22px] inline-block w-[387px] h-[135px]">
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
  );
});

export default Grupo9;

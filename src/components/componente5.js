import { FunctionComponent, memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type Componente5Type = {
  className?: string;

  /** Action props */
  onInformacinDePerfilClick?: () => void;
};

const Componente5: FunctionComponent<Componente5Type> = memo(
  ({ className = "", onInformacinDePerfilClick }) => {
    const navigate = useNavigate();

    const onInformacinDePerfilClick1 = useCallback(() => {
      navigate("/perfil-de-usuario-14");
    }, [navigate]);

    return (
      <div
        className={`absolute top-[24px] right-[28px] w-[302px] h-[273.7px] text-left text-sm text-dimgray-200 font-open-sans ${className}`}
      >
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
          <div
            className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_91px)] text-lightslategray-100 cursor-pointer"
            onClick={onInformacinDePerfilClick}
          >
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
    );
  }
);

export default Componente5;

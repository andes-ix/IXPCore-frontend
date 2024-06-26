import { FunctionComponent, memo } from "react";

export type Grupo7Type = {
  className?: string;
};

const Grupo7: FunctionComponent<Grupo7Type> = memo(({ className = "" }) => {
  return (
    <div
      className={`absolute w-[calc(100%_-_61px)] top-[calc(50%_-_88.5px)] right-[22px] left-[39px] h-[167px] text-left text-xs text-dimgray-100 font-open-sans ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] font-semibold">
        Contraseña
      </div>
      <div className="absolute top-[calc(50%_+_8.5px)] left-[0px] font-semibold">
        Confirmar contraseña
      </div>
      <div className="absolute w-full top-[calc(50%_-_56.5px)] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[calc(50%_-_41.5px)] left-[14px] text-sm text-darkgray-100">
        **************
      </div>
      <div className="absolute bottom-[14px] left-[14px] text-sm text-darkgray-100">
        **************
      </div>
      <img
        className="absolute top-[calc(50%_-_41.5px)] right-[20.63px] w-[16.7px] h-[15px]"
        alt=""
        src="/bpreview.svg"
      />
      <img
        className="absolute right-[20.63px] bottom-[18px] w-[16.7px] h-[15px]"
        alt=""
        src="/bpreview.svg"
      />
    </div>
  );
});

export default Grupo7;

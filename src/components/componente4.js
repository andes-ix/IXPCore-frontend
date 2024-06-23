import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type Componente4Type = {
  className?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const Componente4: FunctionComponent<Componente4Type> = memo(
  ({ className = "", propTop, propLeft }) => {
    const componente243Style: CSSProperties = useMemo(() => {
      return {
        top: propTop,
        left: propLeft,
      };
    }, [propTop, propLeft]);

    return (
      <div
        className={`absolute top-[562.83px] left-[661px] w-[225px] h-[194.7px] text-left text-sm text-dimgray-100 font-open-sans ${className}`}
        style={componente243Style}
      >
        <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[54px] h-12">
          <img
            className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_11px)] w-[22px] h-5"
            alt=""
            src="/filter.svg"
          />
        </div>
        <div className="absolute h-[calc(100%_-_62.7px)] w-[calc(100%_-_3px)] top-[62.7px] right-[0px] bottom-[0px] left-[3px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0]">
          <b className="absolute top-[calc(50%_-_47.7px)] left-[calc(50%_-_92px)] leading-[22px] inline-block w-[171px] h-5">
            Filtros predeterminados
          </b>
          <div className="absolute top-[calc(50%_-_14.5px)] left-[calc(50%_-_64px)] text-lightslategray-100">
            Mes actual
          </div>
          <div className="absolute bottom-[24.5px] left-[calc(50%_-_64px)] font-semibold text-steelblue-100">
            Mes anterior
          </div>
          <div className="absolute top-[calc(50%_-_14.7px)] left-[calc(50%_-_92px)] [filter:drop-shadow(-1.8461538553237915px_4.307692527770996px_8px_#f1f7ff)] rounded-8xs box-border w-5 h-5 border-[1px] border-solid border-gray-400" />
        </div>
      </div>
    );
  }
);

export default Componente4;

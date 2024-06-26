import { FunctionComponent, memo, useMemo, type CSSProperties } from "react";

export type Componente3Type = {
  className?: string;

  /** Style props */
  propRight?: CSSProperties["right"];
  propLeft?: CSSProperties["left"];
};

const Componente3: FunctionComponent<Componente3Type> = memo(
  ({ className = "", propRight, propLeft }) => {
    const componente2212Style: CSSProperties = useMemo(() => {
      return {
        right: propRight,
        left: propLeft,
      };
    }, [propRight, propLeft]);

    return (
      <div
        className={`absolute top-[27px] right-[227px] w-36 h-[151.7px] text-left text-sm text-steelblue-100 font-open-sans ${className}`}
        style={componente2212Style}
      >
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
    );
  }
);

export default Componente3;

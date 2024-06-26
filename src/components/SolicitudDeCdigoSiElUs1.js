import { FunctionComponent, memo } from "react";
import Grupo9 from "./grupo9";

export type SolicitudDeCdigoSiElUs1Type = {
  className?: string;
};

const SolicitudDeCdigoSiElUs1: FunctionComponent<SolicitudDeCdigoSiElUs1Type> =
  memo(({ className = "" }) => {
    return (
      <div
        className={`relative bg-gray-500 w-[1920px] h-[1074px] max-w-full max-h-full overflow-auto ${className}`}
      >
        <Grupo9 />
      </div>
    );
  });

export default SolicitudDeCdigoSiElUs1;

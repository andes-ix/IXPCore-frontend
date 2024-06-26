import { FunctionComponent, memo } from "react";
import Grupo from "./grupo";

export type UsuariosGestinDeUsuariosType = {
  className?: string;
};

const UsuariosGestinDeUsuarios: FunctionComponent<UsuariosGestinDeUsuariosType> =
  memo(({ className = "" }) => {
    return (
      <div
        className={`relative bg-gray-500 w-[1920px] h-[1074px] max-w-full max-h-full overflow-auto ${className}`}
      >
        <Grupo />
      </div>
    );
  });

export default UsuariosGestinDeUsuarios;

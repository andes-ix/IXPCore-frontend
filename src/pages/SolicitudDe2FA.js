import { FunctionComponent } from "react";
import Grupo4 from "../components/grupo4";

const SolicitudDe2FA: FunctionComponent = () => {
  return (
    <div className="relative bg-aliceblue-300 w-full h-[1080px]">
      <img
        className="absolute top-[0px] left-[-24px] w-[1450px] h-[1080px] object-cover"
        alt=""
        src="/fondo2port@2x.png"
      />
      <div className="absolute top-[0px] left-[4px] bg-darkslateblue-200 w-[1425px] h-[1080px] opacity-[0.03]" />
      <Grupo4 />
    </div>
  );
};

export default SolicitudDe2FA;

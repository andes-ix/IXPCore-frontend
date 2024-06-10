import React from "react";
import "./style.css";

export const SolicitudDeRestablecimiento = () => {
  return (
    <div className="solicitud-de">
      <div className="solicitud-de-fa">
        <div className="overlap">
          <img className="fondo" alt="Fondo" src="/img/fondo-2port.png" />
          <div className="rectngulo" />
          <div className="grupo">
            <p className="ingrese-el-c-digo-de">
              Ingrese el código de su <br />
              aplicación de autenticación
            </p>  
            <div className="div">
              <div className="rectngulo-2" />
              <div className="text-wrapper-2">Enviar</div>
            </div>
            <div className="overlap-group-2">
              <div className="text-wrapper-3">Regresar</div>
              <img className="chevron-right" alt="Chevron right" src="/img/chevron-right.png" />
              <img
                className="logo-placeholder"
                alt="Logo placeholder"
                src="/img/logo-placeholder-3-removebg-preview.png"
              />
            </div>
            <div className="div-wrapper">
              <div className="text-wrapper-4">******</div>
            </div>
            <div className="text-wrapper-5">Codigo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

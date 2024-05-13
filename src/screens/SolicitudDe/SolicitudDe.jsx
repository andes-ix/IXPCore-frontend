import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const SolicitudDe = () => {
  return (
    <div className="solicitud-de">
      <div className="solicitud-de-fa">
        <div className="overlap-111">
          <div className="rectngulo-72" />
          <Link className="grupo-63" to="/solicitud-de-contrasena-posterior-a-registro-1">
            <p className="ingrese-el-c-digo-de">
              Ingrese el código de su <br />
              aplicación de autenticación
            </p>
            <div className="text-wrapper-330">Codigo</div>
            <div className="overlap-112">
              <div className="text-wrapper-331">******</div>
            </div>
            <div className="overlap-113">
              <div className="text-wrapper-332">Enviar</div>
            </div>
            <div className="overlap-group-31">
              <div className="text-wrapper-333">Regresar</div>
              <img className="chevron-right-24" alt="Chevron right" src="/img/chevron-right-1.png" />
              <img
                className="logo-placeholder-8"
                alt="Logo placeholder"
                src="/img/logo-placeholder-3-removebg-preview-3.png"
              />
            </div>
            <p className="search-users-by-name">Reconocer este dispositivo en el futuro</p>
            <div className="rectangle-wrapper">
              <img className="rectangle-17" alt="Rectangle" src="/img/rectangle-35.png" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

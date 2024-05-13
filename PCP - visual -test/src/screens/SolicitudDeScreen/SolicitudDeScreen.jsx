import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const SolicitudDeScreen = () => {
  return (
    <div className="solicitud-de-screen">
      <div className="solicitud-de-2">
        <div className="overlap-group-32">
          <div className="rectngulo-73" />
          <div className="rectngulo-74" />
          <div className="text-wrapper-334">Configuración de contraseña</div>
          <p className="text-wrapper-335">
            Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a configurar.
          </p>
          <div className="text-wrapper-336">Contraseña</div>
          <div className="rectngulo-75" />
          <img className="trazado-92" alt="Trazado" src="/img/trazado-2501.png" />
          <Link className="text-wrapper-337" to="/feedback-configuracion-de-contrasena-satisfactoria">
            Guardar
          </Link>
          <div className="rectngulo-76" />
          <div className="text-wrapper-338">**************</div>
          <div className="text-wrapper-339">**************</div>
          <div className="text-wrapper-340">Confirmar contraseña</div>
          <img
            className="logo-placeholder-9"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview-3.png"
          />
          <div className="b-preview" />
          <div className="b-preview-2" />
          <p className="tu-clave-de-acceso">
            <span className="text-wrapper-341">
              Tu clave de acceso debe cumplir con estos requisitos:
              <br />
            </span>
            <span className="text-wrapper-342">
              - Tener 8 caracteres
              <br />- Ser alfanumérica con al menos 1 carácter numérico y un <br />
              único carácter especial
              <br />- Tener uno de estos caracteres especiales - / = . $ # *<br />- Evita colocar información personal
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

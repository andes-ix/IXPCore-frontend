import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const SolicitudDeCdigo = () => {
  return (
    <div className="solicitud-de-cdigo">
      <div className="grupo-wrapper-2">
        <div className="grupo-13">
          <p className="text-wrapper-57">Ingrese el código de su aplicación de autenticación</p>
          <div className="text-wrapper-58">Codigo</div>
          <div className="overlap-group-8">
            <div className="text-wrapper-59">******</div>
          </div>
          <div className="overlap-16">
            <Link className="text-wrapper-60" to="/solicitud-de-codigo-si-el-usuario-tiene-el-2fa-activo-1">
              Enviar
            </Link>
          </div>
          <img className="lnea-7" alt="Lnea" src="/img/l-nea-50-2.png" />
          <div className="text-wrapper-61">Autenticación de usuario</div>
        </div>
      </div>
    </div>
  );
};

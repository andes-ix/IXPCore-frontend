import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const UsuariosGestinDe = () => {
  return (
    <div className="usuarios-gestin-de">
      <div className="grupo-wrapper-3">
        <div className="grupo-30">
          <p className="text-wrapper-160">Verificación en 2 pasos sin activar!</p>
          <div className="text-wrapper-161">Activar ahora</div>
          <p className="recuerda-realizar-la">
            <span className="text-wrapper-162">Recuerda realizar la configuración del </span>
            <span className="text-wrapper-163">2FA</span>
            <span className="text-wrapper-162">
              {" "}
              y agrega un nivel superior de
              <br />
              protección adicional a tu cuenta.
            </span>
          </p>
          <Link className="frame-copy-3" to="/dashboard">
            <div className="overlap-group-14">
              <div className="group-11">
                <img className="line-6" alt="Line" src="/img/line-6.png" />
              </div>
              <div className="group-11">
                <img className="line-6" alt="Line" src="/img/line-7.png" />
              </div>
            </div>
          </Link>
          <div className="overlap-55">
            <img className="trazado-42" alt="Trazado" src="/img/trazado-29749.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

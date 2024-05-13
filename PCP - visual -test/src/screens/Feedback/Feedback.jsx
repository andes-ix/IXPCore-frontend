import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Feedback = () => {
  return (
    <div className="feedback">
      <Link className="grupo-wrapper-5" to="/login-1">
        <div className="grupo-42">
          <div className="text-wrapper-243">Configuración de contraseña exitosa</div>
          <p className="ingresa-al-sistema">
            Ingresa al sistema con tus credenciales de acceso para empezar a <br />
            disfrutar los beneficios de nuestro PCP.
          </p>
          <div className="frame-copy-7">
            <div className="overlap-group-22">
              <div className="group-16">
                <img className="line-13" alt="Line" src="/img/line-16.png" />
              </div>
              <div className="group-16">
                <img className="line-13" alt="Line" src="/img/line-17.png" />
              </div>
            </div>
          </div>
          <div className="overlap-82">
            <img className="trazado-61" alt="Trazado" src="/img/trazado-29750-1.png" />
          </div>
        </div>
      </Link>
    </div>
  );
};

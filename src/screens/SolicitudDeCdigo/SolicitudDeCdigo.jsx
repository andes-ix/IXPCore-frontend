import React from "react";
import "./style.css";

export const SolicitudDeCdigo = () => {
  return (
    <div className="solicitud-de-cdigo">
      <div className="grupo-wrapper-2">
        <div className="grupo-7">
          <div className="grupo-8">
            <div className="text-wrapper-27">Guardar</div>
          </div>
          <img className="lnea-4" alt="Lnea" src="/img/l-nea-50.png" />
          <div className="text-wrapper-28">Configuración de contraseña</div>
          <div className="text-wrapper-29">Cancelar</div>
          <p className="text-wrapper-30">
            Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a configurar.
          </p>
          <div className="text-wrapper-31">Contraseña</div>
          <div className="overlap-9">
            <div className="text-wrapper-32">**************</div>
            <div className="b-preview" />
          </div>
          <div className="overlap-group-5">
            <div className="text-wrapper-32">**************</div>
            <div className="b-preview-2" />
          </div>
          <div className="text-wrapper-33">Confirmar contraseña</div>
          <p className="tu-clave-de-acceso">
            <span className="text-wrapper-34">
              Tu clave de acceso debe cumplir con estos requisitos:
              <br />
            </span>
            <span className="text-wrapper-35">
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

import React from "react";
import "./style.css";

export const SolicitudDe = () => {
  return (
    <div className="solicitud-de">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectngulo" />
          <div className="b-preview" />
          <div className="div" />
          <img
            className="fondo"
            alt="Fondo"
            src="https://cdn.animaapp.com/projects/665f11f92ded8993c553c57d/releases/665f121cbb31552cfe4bf499/img/fondo2port@1x.png"
          />
          <div className="rectngulo-2" />
          <div className="rectngulo-3" />
          <div className="text-wrapper">Restablecer contraseña</div>
          <div className="text-wrapper-2">Correo Electrónico</div>
          <div className="rectngulo-4" />
          <img
            className="trazado"
            alt="Trazado"
            src="https://cdn.animaapp.com/projects/665f11f92ded8993c553c57d/releases/665f121cbb31552cfe4bf499/img/trazado-2500@1x.png"
          />
          <div className="text-wrapper-3">Guardar</div>
          <div className="rectngulo-5" />
          <input className="correo-electrnico" />
          <input className="input" />
          <div className="text-wrapper-4">Contraseña</div>
          <img
            className="logo-placeholder"
            alt="Logo placeholder"
            src="https://cdn.animaapp.com/projects/665f11f92ded8993c553c57d/releases/665f121cbb31552cfe4bf499/img/logo-placeholder-3-removebg-preview-10@1x.png"
          />
          <p className="tu-clave-de-acceso">
            <span className="span">
              Tu clave de acceso debe cumplir con estos requisitos:
              <br />
            </span>
            <span className="text-wrapper-5">
              - Tener 8 caracteres
              <br />- Ser alfanumérica con al menos 1 carácter numérico y un <br />
              único carácter especial
              <br />- Tener uno de estos caracteres especiales - / = . $ # *<br />- Evita colocar información personal
            </span>
          </p>
          <div className="rectngulo-6" />
          <input className="input-2" />
          <div className="text-wrapper-6">Confirmar contraseña</div>
          <p className="p">Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a configurar.</p>
        </div>
      </div>
    </div>
  );
};
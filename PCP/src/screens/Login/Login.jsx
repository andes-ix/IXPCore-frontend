import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectngulo" />
          <div className="div" />
          <div className="text-wrapper">¡Hola!</div>
          <p className="ingresa-tu-correo">
            <span className="span">
              Ingresa tu correo electrónico y contraseña e inicia sesión para disfrutar de los beneficios de nuestro{" "}
            </span>
            <span className="text-wrapper-2">PCP</span>
          </p>
          <div className="rectngulo-2" />
          <div className="text-wrapper-3">Correo electrónico</div>
          <div className="rectngulo-3" />
          <div className="componente">
            <img className="trazado" alt="Trazado" src="/img/trazado-2501.png" />
          </div>
          <Link className="text-wrapper-4" to="/dashboard">
            Iniciar sesion
          </Link>
          <div className="rectngulo-4" />
          <div className="text-wrapper-5">Correo electronico</div>
          <div className="text-wrapper-6">Contraseña</div>
          <Link className="text-wrapper-7" to="/feedback-solicitud-de-recuperacion-de-contrasena">
            Recuperar contraseña?
          </Link>
          <div className="text-wrapper-8">Contraseña</div>
          <p className="p">Términos y Condiciones de uso</p>
          <img className="chevron-right" alt="Chevron right" src="/img/chevron-right-8.png" />
          <img
            className="logo-placeholder"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview-3.png"
          />
        </div>
      </div>
    </div>
  );
};

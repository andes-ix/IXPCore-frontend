import React, { useState } from "react";
import "./style.css";

export const Element = () => {
  const [email, setEmail] = useState("");
  const [authCode, setAuthCode] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleAuthCodeChange = (e) => setAuthCode(e.target.value);

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://portal-dev.andesix.net/v2/password_reset/verificate_code_password/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          code: authCode,
        }),
      });

      const data = await response.json();
      
      if (response.ok) {
        console.log("API Response:", data);
        if (data.success) {
          window.location.href = "/2-3recuperar-contrasena";
        } else {
          alert(`Error: ${data.message || 'Failed to verify'}`);
        }
      } else {
        console.error("Connection failed:", response.statusText);
        alert(`Error: ${data.message || 'Failed to verify'}`);
      }
    } catch (error) {
      console.error("Error:", error.message);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="element">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="portal" alt="Portal" src="/img/portal.png" />
          <div className="rectngulo" />
          <div className="div" />
          <div className="text-wrapper">Recuperar Contraseña</div>
          <p className="ingresa-tu-correo">
            Ingresa tu correo electrónico y el código de autenticación
            <br />
            recibido en tu correo electronico
          </p>
          <div className="rectngulo-2" />
          <div className="text-wrapper-2">Correo electrónico</div>
          <div className="rectngulo-3" />
          <div className="componente">
            <img className="trazado" alt="Trazado" src="/img/trazado-2501.png" />
          </div>
          <button className="text-wrapper-3" onClick={handleSubmit}>Siguiente</button>
          <div className="rectngulo-4" />
          <input
            className="correo-electronico"
            type="email"
            placeholder="Correo Electronico"
            value={email}
            onChange={handleEmailChange}
          />
          <input
            className="codigo-de"
            type="text"
            placeholder="Codigo de Autenticacion"
            value={authCode}
            onChange={handleAuthCodeChange}
          />
          <div className="text-wrapper-4">Codigo de Autenticacion</div>
          <img
            className="logo-placeholder"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview-1x-png.png"
          />
        </div>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import axios from "axios";
import "./style.css";

export const ElementScreen = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSendClick = async () => {
    try {
      const response = await axios.post(
        "https://portal-dev.andesix.net/v2/password_reset/generate_code_password/",
        { email: email }
      );
      if (response.data.success) {
        alert("Código de restablecimiento enviado a su correo electrónico.");
        window.location.href = "./1-3recuperar-contrasea";
      } else {
        alert("Hubo un problema al enviar el código de restablecimiento.");
      }
    } catch (error) {
      console.error("Error al enviar el código de restablecimiento:", error);
      alert("Hubo un error al enviar el código de restablecimiento. Por favor, inténtelo de nuevo.");
    }
  };

  return (
    <div className="element-screen">
      <div className="overlap-wrapper">
        <div className="overlap">
          <img className="fondo" alt="Fondo" src="/img/fondo-2port.png" />
          <div className="rectngulo-5" />
          <div className="grupo">
            <div className="text-wrapper-5">Ingrese su Correo Electronico</div>
            <div className="text-wrapper-6">Correo Electronico</div>
            <div className="div-wrapper">
              <input
                type="email"
                className="text-wrapper-7"
                value={email}
                onChange={handleEmailChange}
                placeholder="Correo Electronico"
              />
            </div>
            <div className="overlap-2">
              <button className="text-wrapper-8" onClick={handleSendClick}>
                Enviar
              </button>
            </div>
            <div className="overlap-group-2">
              <button className="text-wrapper-9">Regresar</button>
              <img className="chevron-right" alt="Chevron right" src="/img/chevron-right.png" />
              <img className="img" alt="Logo placeholder" src="/img/logo-placeholder-3-removebg-preview.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


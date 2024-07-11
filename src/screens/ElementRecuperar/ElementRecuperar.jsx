import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import "./style.css";

export const ElementRecuperar = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchEmailFromQueryParams = () => {
      const params = queryString.parse(window.location.search);
      if (params.email) {
        setEmail(params.email);
      }
    };

    fetchEmailFromQueryParams();
  }, []);

  const handleChangePassword = async () => {
    try {
      const response = await axios.post(
        "https://portal-dev.andesix.net/v2/password_reset/change_password/",
        {
          password1: password1,
          password2: password2,
          email: email
        }
      );
      console.log(response.data);
      if (response.data.success) {
        alert("Contraseña cambiada exitosamente.");
        window.location.href = "./Login";
      } else {
        alert(`Error: ${response.data.message}`);
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(`Error: ${error.response.data.message}`);
      } else {
        alert(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="element-recuperar">
      <div className="element-2">
        <div className="overlap-group-3">
          <img className="fondo-port" alt="Fondo" src="/img/fondo-2port.png" />
          <div className="rectngulo-6" />
          <div className="rectngulo-7" />
          <div className="text-wrapper-10">Configuración de contraseña</div>
          <p className="p">Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a configurar.</p>
          <div className="text-wrapper-11">Contraseña</div>
          <div className="rectngulo-8" />
          <img className="trazado-2" alt="Trazado" src="/img/trazado-2501.png" />
          <div className="form-size">
          <button onClick={handleChangePassword} className="text-wrapper-12">Guardar</button>
          <div className="rectngulo-9" />
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="input" 
            value={password1}
            onChange={(e) => setPassword1(e.target.value)} />
          <input 
            type="password" 
            placeholder="Confirmar Contraseña" 
            className="input-2" 
            value={password2}
            onChange={(e) => setPassword2(e.target.value)} />
          <div className="text-wrapper-13">Confirmar contraseña</div>
          <img
            className="logo-placeholder-2"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview.png"
          />
          <div className="b-preview" />
          <div className="b-preview-2" />
          <p className="tu-clave-de-acceso">
            <span className="span">
              Tu clave de acceso debe cumplir con estos requisitos:
              <br />
            </span>
            <span className="text-wrapper-14">
              - Tener 8 caracteres
              <br />- Ser alfanumérica con al menos 1 carácter numérico y un <br />
              único carácter especial
              <br />- Tener uno de estos caracteres especiales - / = . $ # *<br />- Evita colocar información personal
            </span>
          </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

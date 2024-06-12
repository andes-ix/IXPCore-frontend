
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";
import { useAuth } from "../Login/AuthContext"; 

export const SolicitudDeCdigoScreen = () => {
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const { email: contextEmail } = useAuth(); 
  const [email, setEmail] = useState(contextEmail || "");

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
      console.log("Email retrieved from localStorage:", savedEmail);
    }
  }, []);

  const handleSave = async () => {
    if (password1 !== password2) {
      alert("Las contraseñas no coinciden");
      return;
    }

    try {
      const payload = {
        email: email,
        password1: password1,
        password2: password2
      };
      console.log("Sending data:", payload);
      const response = await axios.post("https://portal-dev.andesix.net/v2/password_reset/change_password/", payload);

      alert("Contraseña cambiada exitosamente");
    } catch (error) {
      console.error("Error response:", error.response);
      alert("Error al cambiar la contraseña: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div className="solicitud-de-cdigo-screen">
      <div className="solicitud-de-cdigo-2">
        <div className="grupo-14">
          <button className="grupo-15" onClick={handleSave}>
            <div className="text-wrapper-62">Guardar</div>
          </button>
          <img className="lnea-8" alt="Lnea" src="/img/l-nea-50-1.png" />
          <div className="text-wrapper-63">Configuración de contraseña</div>
          <Link to={"/perfil-de-usuario-9"} className="text-wrapper-64">Cancelar</Link>
          <p className="text-wrapper-65">
            Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a configurar.
          </p>
          <div className="text-wrapper-66">Contraseña</div>
          <div className="overlap-17">
            <input
              type="password"
              className="text-wrapper-67"
              value={password1}
              onChange={(e) => setPassword1(e.target.value)}
              placeholder="**************"
            />
          </div>
          <div className="overlap-group-9">
            <input
              type="password"
              className="text-wrapper-67"
              value={password2}
              onChange={(e) => setPassword2(e.target.value)}
              placeholder="**************"
            />
          </div>
          <div className="text-wrapper-68">Confirmar contraseña</div>
          <p className="tu-clave-de-acceso-23">
            <span className="text-wrapper-69">
              Tu clave de acceso debe cumplir con estos requisitos:
              <br />
            </span>
            <span className="text-wrapper-70">
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

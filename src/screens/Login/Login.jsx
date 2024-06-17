import React, { useState } from "react";
import "./style.css";
import { Apiurl } from "../../../Service/Apirest";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ email: false, password: false, general: false });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError({ email: false, password: false, general: false });
    handleButton();
  };

  const handleButton = () => {
    const state = {
      form: {
        email: email,
        password: password,
      },
    };

    let url = Apiurl + "v1/signin/";
    axios
      .post(url, state.form)
      .then((response) => {
        console.log(response);
        if (response.status === 200 && response.data) {
          const userData = response.data;
          localStorage.setItem("user", JSON.stringify({
            cargo: userData.cargo || "",
            pais: userData.pais || "",
            email: userData.email || "",
            first_name: userData.first_name || "",
            last_name: userData.last_name || "",
            phone: userData.phone || ""
          }));
          navigate("/dashboard");
        } else {
          alert(`Error: ${response.data?.message || 'Unexpected error occurred'}`);
        }
      })
      .catch((error) => {
        console.error(error);
        alert(`Error: ${error.response?.data?.message || 'Unexpected error occurred'}`);
      });
  };

  return (
    <div className="login">
      <div className="overlap-group-wrapper-2">
        <div className="overlap-group-25">
          <img className="portal" alt="Portal" src="/img/portal.png" />
          <div className="rectngulo-49" />
          <div className="rectngulo-50" />
          <div className="text-wrapper-272">¡Hola!</div>
          <p className="ingresa-tu-correo">
            <span className="text-wrapper-273">
              Ingresa tu correo electrónico y contraseña e inicia sesión para disfrutar de los beneficios de nuestro{" "}
            </span>
            <span className="text-wrapper-274">PCP</span>
          </p>
          <div className="text-wrapper-275">Correo electrónico</div>
          <div className="rectngulo-51" />
          <div className="componente-26">
            <img className="trazado-72" alt="Trazado" src="/img/trazado-2500.png" />
          </div>
          <div className="rectngulo-52" />
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="correo-electronico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {error.email && <p className="error">Correo electrónico no válido</p>}
            <input
              type="password"
              placeholder="Contraseña"
              className="contrasea"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <p className="error">Contraseña no válida</p>}
            <button className="text-wrapper-276">Iniciar sesión</button>
            <Link to="/0-3recuperar-contrasena" className="text-wrapper-277">
              ¿Recuperar contraseña?
            </Link>
            <div className="text-wrapper-278">Contraseñas</div>
          </form>
          {error.general && <p className="error">Todos los campos son obligatorios</p>}
          <p className="text-wrapper-279">Términos y Condiciones de uso</p>
          <img className="chevron-right-19" alt="Chevron right" src="/img/chevron-right-20.png" />
          <img
            className="logo-placeholder-6"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview-5.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;

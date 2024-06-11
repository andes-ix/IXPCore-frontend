import React, { useState } from "react";
import axios from "axios";
import "./style.css";
import { Link } from "react-router-dom";

export const AgregarUsuario = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    
    try {
      const response = await axios.post(
        "https://portal-dev.andesix.net/v1/userapp/",
        formData,
        {
          headers: {
            "Authorization": `Token ${token}`,
            "Content-Type": "application/json"
          }
        }
      );
      setApiResponse(response.data);
      setError(null); 
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "Error de servidor");
      } else if (error.request) {
        setError("Error de red, intente nuevamente");
      } else {
        setError("Error inesperado");
      }
    }
  };
  return (
    <div className="Main">
      <div className="agregar-usuario">
        <div className="grupo-wrapper">
          <div className="grupo">
            <div className="text-wrapper">ID usuario</div>
            <div className="div">Nombre completo</div>
            <div className="text-wrapper-2">Contraseña</div>
            <div className="overlap">
              <div className="text-wrapper-3">#TW1500001</div>
            </div>
            <div className="overlap-group">
              <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={formData.password}
                onChange={handleChange}
                className="text-wrapper-3"
              />
            </div>
            <button onClick={handleSubmit}  className="div-wrapper">
              <div className="text-wrapper-4">Guardar</div>
            </button>
            <div className="overlap-2">
              <div className="text-wrapper-3">Peru</div>
              <img className="chevron-right" alt="Chevron right" src="/img/chevron-right-1.png" />
              <img className="lnea" alt="Lnea" src="/img/l-nea-53.png" />
            </div>
            <div className="overlap-3">
              <div className="text-wrapper-3">Finanzas</div>
              <img className="chevron-right" alt="Chevron right" src="/img/chevron-right-1.png" />
              <img className="lnea" alt="Lnea" src="/img/l-nea-53.png" />
            </div>
            <div className="text-wrapper-5">Pais</div>
            <div className="text-wrapper-6">Rol</div>
            <div className="overlap-4">
              <input
                type="email"
                name="email"
                placeholder="Example@pit.net"
                value={formData.email}
                onChange={handleChange}
                className="text-wrapper-3"
              />
            </div>
            <div className="overlap-5">
              <input
                type="text"
                name="name"
                placeholder="Nombre Completo"
                value={formData.name}
                onChange={handleChange}
                className="text-wrapper-3"
              />
            </div>
            <div className="text-wrapper-7">Correo electronico</div>
            <div className="overlap-group-2">
              <div className="overlap-6">
                <div className="rectngulo" />
                <div className="text-wrapper-8">+66</div>
                <img className="imagen" alt="Imagen" src="/img/imagen-7.png" />
              </div>
              <div className="text-wrapper-9">(0) 053 555 555</div>
            </div>
            <img className="img" alt="Lnea" src="/img/l-nea-50.png" />
            <div className="text-wrapper-10">Agregar usuario</div>
            <Link to={"/usuarios-gestion-de-usuarios-1"} className="text-wrapper-11">Cancelar</Link>
            <div className="text-wrapper-12">Permisos y accesos</div>
          </div>
        </div>
      </div>
    </div>
  );
};

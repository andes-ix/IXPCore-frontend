import React, { useEffect, useState } from "react";
import axios from "axios";
import "./style.css";

export const UsuariosGestinDe = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get("http://portal-dev.andesix.net/v1/userapp/");
        console.log(response.data); // Verifica la estructura de la respuesta
        setUsuarios(response.data); // Guarda los usuarios en el estado
      } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        // Puedes manejar el error aquí
      }
    };

    fetchUsuarios();
  }, []); // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div className="usuarios-gestin-de">
      <div className="grupo-wrapper-2">
        {usuarios.map((usuario) => (
          <div key={usuario.id} className="grupo-7">
            <div className="text-wrapper-27">ID usuario</div>
            <div className="text-wrapper-28">Nombre completo</div>
            <div className="text-wrapper-29">Cargo</div>
            <div className="overlap-9">
              <div className="text-wrapper-30">{usuario.id}</div>
            </div>
            <div className="overlap-10">
              <div className="text-wrapper-30">{usuario.nombre}</div>
            </div>
            <div className="grupo-8">
              <button className="text-wrapper-31">Guardar</button>
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-30">{usuario.pais}</div>
              <img className="chevron-right-6" alt="Chevron right" src="/img/chevron-right-12.png" />
              <img className="lnea-4" alt="Lnea" src="/img/l-nea-53-1.png" />
            </div>
            <div className="overlap-12">
              <div className="text-wrapper-30">{usuario.departamento}</div>
              <img className="chevron-right-6" alt="Chevron right" src="/img/chevron-right-12.png" />
              <img className="lnea-4" alt="Lnea" src="/img/l-nea-53-1.png" />
            </div>
            <div className="text-wrapper-32">Pais</div>
            <div className="text-wrapper-33">Rol</div>
            <div className="overlap-13">
              <div type="name" className="text-wrapper-30">{usuario.rol}</div>
            </div>
            <div className="overlap-14">
              <div type="email" className="text-wrapper-30">{usuario.correo}</div>
            </div>
            <div className="text-wrapper-34">Correo electronico</div>
            <div className="overlap-group-5">
              <div className="overlap-15">
                <div className="rectngulo-19" />
                <div className="text-wrapper-35">{usuario.telefono}</div>
                <img className="imagen-2" alt="Imagen" src="/img/imagen-7-1.png" />
              </div>
              <div type="password" className="text-wrapper-36">{usuario.telefono}</div>
            </div>
            <img className="lnea-5" alt="Lnea" src="/img/l-nea-50-1.png" />
            <div className="text-wrapper-37">Agregar usuario</div>
            <div className="text-wrapper-38">Cancelar</div>
            <div className="text-wrapper-39">Permisos y accesos</div>
          </div>
        ))}
      </div>
    </div>
  );
};

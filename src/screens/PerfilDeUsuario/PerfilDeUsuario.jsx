import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

export const PerfilDeUsuario = () => {
  const [userData, setUserData] = useState({
    name: "",
    cargo: "",
    pais: "",
    email: "",
    phone: ""
  });

  useEffect(() => {
    // Realizar la llamada a la API para obtener los datos del usuario
    axios.get("https://portal-dev.andesix.net/v1/userapp/1/")
      .then(response => {
        const user = response.data; // Ajusta esto según la estructura de la respuesta de tu API
        setUserData({
          name: user.name || "",
          cargo: user.cargo || "",
          pais: user.pais || "",
          email: user.email || "",
          phone: user.phone || ""
        });
      })
      .catch(error => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleUpdate = async () => {
    try {
      const response = await axios.patch(
        "https://portal-dev.andesix.net/v1/userapp/1/",
        userData
      );
      console.log("User updated successfully:", response.data);
      
    } catch (error) {
      console.error("Error updating user:", error);
      
    }
  };

  return (
    <div className="perfil-de-usuario">
      <div className="div-4">
        <div className="overlap-97">
          <div className="text-wrapper-270">Verificación en dos pasos 1 </div>
          <p className="text-wrapper-271">Protege tu cuenta con la verificación en dos pasos</p>
          <div className="rectngulo-35" />
          <div className="text-wrapper-272">Activado</div>
          <div className="grupo-47">
            <div className="overlap-98">
              <div className="rectngulo-36" />
              <div className="componente-23">
                <div className="grupo-48">
                  <div className="sun-5">
                    <div className="overlap-group-25">
                      <div className="elipse-8" />
                      <img className="trazado-62" alt="Trazado" src="/img/trazado-2504-4.png" />
                      <img className="trazado-63" alt="Trazado" src="/img/trazado-2505-4.png" />
                      <img className="trazado-64" alt="Trazado" src="/img/trazado-2508-4.png" />
                      <img className="trazado-65" alt="Trazado" src="/img/trazado-2509-4.png" />
                    </div>
                    <img className="trazado-66" alt="Trazado" src="/img/trazado-2503-4.png" />
                    <img className="trazado-67" alt="Trazado" src="/img/trazado-2503-4.png" />
                    <img className="trazado-68" alt="Trazado" src="/img/trazado-2507-4.png" />
                    <img className="trazado-69" alt="Trazado" src="/img/trazado-2507-4.png" />
                  </div>
                </div>
              </div>
              <div className="componente-24">
                <div className="grupo-49">
                  <img className="oval-11" alt="Oval" src="/img/oval-34.png" />
                  <div className="bell-ring-4">
                    <div className="overlap-group-26">
                      <img className="trazado-70" alt="Trazado" src="/img/trazado-2510-4.png" />
                      <img className="trazado-71" alt="Trazado" src="/img/trazado-2512-4.png" />
                      <img className="trazado-72" alt="Trazado" src="/img/trazado-2513-4.png" />
                    </div>
                    <img className="trazado-73" alt="Trazado" src="/img/trazado-2511-3.png" />
                  </div>
                </div>
              </div>
              <div className="text-wrapper-273">Empresa: Perú IX</div>
              <img className="chevron-right-14" alt="Chevron right" src="/img/chevron-right-25.png" />
              <div className="componente-25">
                <div className="grupo-50" />
              </div>
              <div className="componente-26">
                <div className="grupo-51">
                  <img className="rectngulo-37" alt="Rectngulo" src="/img/rect-ngulo-17-4.png" />
                </div>
              </div>
            </div>
          </div>
          <div className="text-wrapper-274">Información de perfil</div>
          <p className="text-wrapper-275">Revise y actualice los detalles de su cuenta</p>
          <p className="aseg-rese-de-que">
            Asegúrese de que estos datos estén actualizados, ya que se utilizarán para información en la <br />
            facturación de sus servicios
          </p>
          <div className="text-wrapper-276">Seguridad</div>
          <div className="rectngulo-38" />
          <img className="lock-star-line" alt="Lock star line" src="/img/lock-star-line-1.png" />
        </div>
        <p className="usa-los-c-digos">
          Usa los códigos generados por tu aplicación de autenticación para iniciar
          <br />
          sesión cada vez que ingreses en un dispositivo no asociado a tu cuenta de
          <br />
          usuario.
        </p>
        <div className="grupo-52">
          <div className="text-wrapper-277">Desactivar</div>
        </div>
        <img className="lnea-10" alt="Lnea" src="/img/l-nea-54.png" />
        <div className="overlap-99">
          <img className="rectangle-13" alt="Rectangle" src="/img/rectangle-2-10.png" />
          <div className="rectangle-14" />
          <img
            className="logo-placeholder-6"
            alt="Logo placeholder"
            src="/img/logo-placeholder-3-removebg-preview-6.png"
          />
          <div className="componente-27">
            <Link className="text-wrapper-278" to="/dashboard">
              Dashboard
            </Link>
            <Link className="text-wrapper-279" to="/cuenta">Cuenta</Link>
            <div className="text-wrapper-280">Usuarios</div>
            <div className="text-wrapper-281"></div>
            <img className="chevron-right-15" alt="Chevron right" src="/img/chevron-right-24.png" />
            <img className="chevron-right-16" alt="Chevron right" src="/img/chevron-right-24.png" />
            <div className="layout-dashboard-4">
              <div className="rectngulo-39" />
              <div className="rectngulo-40" />
              <div className="rectngulo-41" />
              <div className="rectngulo-42" />
            </div>
            <div className="wallet-4">
              <div className="overlap-group-27">
                <img className="trazado-74" alt="Trazado" src="/img/trazado-2497-4.png" />
                <img className="trazado-75" alt="Trazado" src="/img/trazado-2498-4.png" />
              </div>
            </div>
            <div className="overlap-100">
              <div className="square-user-round-4">
                <div className="overlap-101">
                  <img className="trazado-76" alt="Trazado" src="/img/trazado-2499-4.png" />
                  <div className="elipse-9" />
                  <div className="rectngulo-43" />
                </div>
              </div>
              <img className="oval-12" alt="Oval" src="/img/oval-33.png" />
            </div>
            <img className="oval-13" alt="Oval" src="/img/oval-33.png" />
          </div>
        </div>
        <p className="text-wrapper-282">Términos y Condiciones de uso</p>
        <img className="chevron-right-17" alt="Chevron right" src="/img/chevron-right-21.png" />
        <div className="overlap-102">
          <div className="rectngulo-44" />
          <div className="text-wrapper-283"></div>
          <div className="rectngulo-45" />
          <div className="text-wrapper-284">Nombre completo</div>
          <div className="text-wrapper-285">Cargo</div>
          <div className="rectngulo-46" />
          <div className="rectngulo-47" />
          <button className="grupo-53" onClick={handleUpdate}>
            <div className="text-wrapper-286">Actualizar</div>
          </button>
          <div className="rectngulo-48" />
          <input
            type="text"
            name="name"
            value={userData.name}
            onChange={handleChange}
            placeholder={userData.name || "Salvador Bertenbreiter"}
            className="text-wrapper-287"
          />
          <input
            type="text"
            name="cargo"
            value={userData.cargo}
            onChange={handleChange}
            placeholder={userData.cargo || "Gerente General"}
            className="text-wrapper-288"
          />
          <input
            type="text"
            name="pais"
            value={userData.pais}
            onChange={handleChange}
            placeholder={userData.pais || "Perú"}
            className="text-wrapper-289"
          />
          <div className="text-wrapper-290">Pais</div>
          <div className="rectngulo-49" />
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            placeholder={userData.email || "Example@pit.net"}
            className="text-wrapper-291"
          />
          <div className="text-wrapper-292">Correo electronico</div>
          <Link to={"/solicitud-de-codigo-si-el-usuario-tiene-el-2fa-activo"} className="text-wrapper-294">Autogestión de contraseña: Cambio de contraseña</Link>
          <div className="text-wrapper-295">Realiza el cambio de tu contraseña de acceso, de manera fácil y rápida.</div>
          <p className="aseg-rese-de-que-2">
            Asegúrese de que estos datos estén actualizados, ya que se utilizarán <br />
            para información en la facturación de sus servicios.
          </p>
          <div className="rectngulo-52" />
          <div className="rectngulo-53" />
          <div className="text-wrapper-298">+66</div>
          <img className="imagen-3" alt="Imagen" src="/img/imagen-4-1.png" />
          <img className="lnea-11" alt="Lnea" src="/img/l-nea-48-1.png" />
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleChange}
            placeholder={userData.phone || "(0) 053 555 555"}
            className="text-wrapper-299"
          />
          <img className="chevron-right-18" alt="Chevron right" src="/img/chevron-right-22.png" />
          <img className="lnea-12" alt="Lnea" src="/img/l-nea-48-1.png" />
          <img className="lnea-13" alt="Lnea" src="/img/l-nea-49-1.png" />
          <div className="grupo-54" />
          <img className="enmascarar-grupo-3" alt="Enmascarar grupo" src="/img/enmascarar-grupo-3-1.png" />
        </div>
      </div>
    </div>
  );
};

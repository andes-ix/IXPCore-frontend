import React, { useState } from "react";
import axios from "axios";

export const UsuariosGestinDe = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || name === "") {
      setError(true);
      setErrorMessage("Por favor completa todos los campos.");
      return;
    }
    setError(false);
    setErrorMessage("");

    const formData = {
      email: email,
      password: password,
      name: name
    };

    const token = "bb0a7194e846e49d3b84cb7e2aab238d388efe7e"; // Token proporcionado directamente

    try {
      console.log("Token:", token);
      console.log("Formulario enviado:", formData);

      const response = await axios.post("https://portal-dev.andesix.net/v1/userapp/", formData, {
        headers: {
          "Authorization": "token bb0a7194e846e49d3b84cb7e2aab238d388efe7e",
          "Content-Type": "application/json",
          "Content-Length" : "85",
          "Host":"portal-dev.andesix.net",
          "Accept":"*/*",
          "Accept-Encoding":"gzip, deflate, br",
          "Connection":"keep-alive",
          "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/89.0.142.86 Safari/537.36"
        },
        withCredentials: true // Si es necesario, habilita el envío de cookies o credenciales
      });
      console.log("Respuesta del servidor:", response);
    } catch (error) {
      if (error.response) {
        // El servidor respondió con un estado distinto de 2xx
        console.error("Error de respuesta:", error.response.data);
        console.error("Código de estado:", error.response.status);
        console.error("Encabezados:", error.response.headers);
      } else if (error.request) {
        // La solicitud se hizo pero no se recibió respuesta
        console.error("Error de solicitud:", error.request);
      } else {
        // Algo pasó al configurar la solicitud
        console.error("Error:", error.message);
      }
      console.error("Configuración de la solicitud:", error.config);

      setError(true);
      setErrorMessage("Error al procesar la solicitud. Verifica la consola para más detalles.");
    }
  };

  return (
    <div className="usuarios-gestin-de">
      <div className="grupo-wrapper-2">
        <div className="grupo-7">
          <div className="text-wrapper-27">ID usuario</div>
          <div className="text-wrapper-28">Nombre completo</div>
          <div className="text-wrapper-29">Contraseña</div>
          <div className="overlap-9">
            <div className="text-wrapper-30">#TW1500001</div>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="overlap-10">
              <div className="text-wrapper-30">
                <input type="password" placeholder="**********" className="Form-user-reg" value={password} onChange={e => setPassword(e.target.value)} />
              </div>
            </div>
            <div className="grupo-8">
              <button type="submit" className="text-wrapper-31">Guardar</button>
            </div>
            <div className="overlap-11">
              <div className="text-wrapper-30">Peru</div>
              <img className="chevron-right-6" alt="Chevron right" src="/img/chevron-right-12.png" />
              <img className="lnea-4" alt="Lnea" src="/img/l-nea-53-1.png" />
            </div>
            <div className="text-wrapper-32">Pais</div>
            <div className="overlap-13">
              <div className="text-wrapper-30">
                <input type="email" placeholder="Example@pit.net" className="Form-user-reg" value={email} onChange={e => setEmail(e.target.value)} />
              </div>
            </div>
            <div className="overlap-14">
              <div className="text-wrapper-30">
                <input type="name" placeholder="Example@pit.net" className="Form-user-reg" value={name} onChange={e => setName(e.target.value)} />
              </div>
            </div>
            <div className="text-wrapper-34">Correo electronico</div>
            <div className="overlap-group-5">
              <div className="overlap-15">
                <div className="rectngulo-19" />
                <div className="text-wrapper-35">+66</div>
                <img className="imagen-2" alt="Imagen" src="/img/imagen-7-1.png" />
              </div>
              <div className="text-wrapper-36">
                <input type="number" placeholder="(0) 053 555 555" className="Form-user-reg" />
              </div>
            </div>
            {error && (
              <div style={{ color: "red" }}>{errorMessage}</div>
            )}
          </form>
          <img className="lnea-5" alt="Lnea" src="/img/l-nea-50-1.png" />
          <div className="text-wrapper-37">Registro usuario</div>
          <div className="text-wrapper-38">Cancelar</div>
        </div>
      </div>
    </div>
  );
};

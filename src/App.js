import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import DetalleFactura from "./pages/DetalleFactura";
import UsuariosGestinDeUsuarios from "./pages/UsuariosGestinDeUsuarios";
import PerfilDeUsuario from "./pages/PerfilDeUsuario";
import PerfilDeUsuario1 from "./pages/PerfilDeUsuario1";
import PerfilDeUsuario2 from "./pages/PerfilDeUsuario2";
import Dashboard from "./pages/Dashboard";
import Dashboard1 from "./pages/Dashboard1";
import Login from "./pages/Login";
import Login1 from "./pages/Login1";
import Login2 from "./pages/Login2";
import Dashboard2 from "./pages/Dashboard2";
import Login3 from "./pages/Login3";
import SolicitudDe2FA from "./pages/SolicitudDe2FA";
import Cuenta from "./pages/Cuenta";
import SolicitudDeContraseaPost from "./pages/SolicitudDeContraseaPost";
import PerfilDeUsuario3 from "./pages/PerfilDeUsuario3";
import UsuariosGestinDeUsuarios2 from "./pages/UsuariosGestinDeUsuarios2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/usuarios-gestin-de-usuarios-2":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-16":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-15":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-14":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-2":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-1":
        title = "";
        metaDescription = "";
        break;
      case "/login-3":
        title = "";
        metaDescription = "";
        break;
      case "/login-2":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/login-1":
        title = "";
        metaDescription = "";
        break;
      case "/solicitud-de-2fa-1":
        title = "";
        metaDescription = "";
        break;
      case "/cuenta":
        title = "";
        metaDescription = "";
        break;
      case "/solicitud-de-contrasea-posterior-a-registro-1":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-9":
        title = "";
        metaDescription = "";
        break;
      case "/usuarios-gestin-de-usuarios-1":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<DetalleFactura />} />
      <Route
        path="/usuarios-gestin-de-usuarios-2"
        element={<UsuariosGestinDeUsuarios />}
      />
      <Route path="/perfil-de-usuario-16" element={<PerfilDeUsuario />} />
      <Route path="/perfil-de-usuario-15" element={<PerfilDeUsuario1 />} />
      <Route path="/perfil-de-usuario-14" element={<PerfilDeUsuario2 />} />
      <Route path="/dashboard-2" element={<Dashboard />} />
      <Route path="/dashboard-1" element={<Dashboard1 />} />
      <Route path="/login-3" element={<Login />} />
      <Route path="/login-2" element={<Login1 />} />
      <Route path="/login" element={<Login2 />} />
      <Route path="/dashboard" element={<Dashboard2 />} />
      <Route path="/login-1" element={<Login3 />} />
      <Route path="/solicitud-de-2fa-1" element={<SolicitudDe2FA />} />
      <Route path="/cuenta" element={<Cuenta />} />
      <Route
        path="/solicitud-de-contrasea-posterior-a-registro-1"
        element={<SolicitudDeContraseaPost />}
      />
      <Route path="/perfil-de-usuario-9" element={<PerfilDeUsuario3 />} />
      <Route
        path="/usuarios-gestin-de-usuarios-1"
        element={<UsuariosGestinDeUsuarios2 />}
      />
    </Routes>
  );
}
export default App;

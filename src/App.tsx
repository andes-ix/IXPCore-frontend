import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import UsuariosGestinDeUsuarios1 from "./pages/UsuariosGestinDeUsuarios1";
import PerfilDeUsuario from "./pages/PerfilDeUsuario";
import SolicitudDeContraseaPost from "./pages/SolicitudDeContraseaPost";
import Cuenta from "./pages/Cuenta";
import SolicitudDe2FA from "./pages/SolicitudDe2FA";
import Dashboard from "./pages/Dashboard";
import Login1 from "./pages/Login1";
import Login2 from "./pages/Login2";
import Login3 from "./pages/Login3";
import Dashboard1 from "./pages/Dashboard1";
import Dashboard2 from "./pages/Dashboard2";
import PerfilDeUsuario1 from "./pages/PerfilDeUsuario1";
import PerfilDeUsuario2 from "./pages/PerfilDeUsuario2";
import PerfilDeUsuario3 from "./pages/PerfilDeUsuario3";
import UsuariosGestinDeUsuarios3 from "./pages/UsuariosGestinDeUsuarios3";
import DetalleFactura from "./pages/DetalleFactura";

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
      case "/usuarios-gestin-de-usuarios-1":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-9":
        title = "";
        metaDescription = "";
        break;
      case "/solicitud-de-contrasea-posterior-a-registro-1":
        title = "";
        metaDescription = "";
        break;
      case "/cuenta":
        title = "";
        metaDescription = "";
        break;
      case "/solicitud-de-2fa-1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/login-2":
        title = "";
        metaDescription = "";
        break;
      case "/login-3":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-1":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard-2":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-14":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-15":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-16":
        title = "";
        metaDescription = "";
        break;
      case "/usuarios-gestin-de-usuarios-2":
        title = "";
        metaDescription = "";
        break;
      case "/detalle-factura":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/usuarios-gestin-de-usuarios-1"
        element={<UsuariosGestinDeUsuarios1 />}
      />
      <Route path="/perfil-de-usuario-9" element={<PerfilDeUsuario />} />
      <Route
        path="/solicitud-de-contrasea-posterior-a-registro-1"
        element={<SolicitudDeContraseaPost />}
      />
      <Route path="/cuenta" element={<Cuenta />} />
      <Route path="/solicitud-de-2fa-1" element={<SolicitudDe2FA />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login1 />} />
      <Route path="/login-2" element={<Login2 />} />
      <Route path="/login-3" element={<Login3 />} />
      <Route path="/dashboard-1" element={<Dashboard1 />} />
      <Route path="/dashboard-2" element={<Dashboard2 />} />
      <Route path="/perfil-de-usuario-14" element={<PerfilDeUsuario1 />} />
      <Route path="/perfil-de-usuario-15" element={<PerfilDeUsuario2 />} />
      <Route path="/perfil-de-usuario-16" element={<PerfilDeUsuario3 />} />
      <Route
        path="/usuarios-gestin-de-usuarios-2"
        element={<UsuariosGestinDeUsuarios3 />}
      />
      <Route path="/detalle-factura" element={<DetalleFactura />} />
    </Routes>
  );
}
export default App;

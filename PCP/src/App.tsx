import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import SolicitudDeContraseaPost from "./pages/SolicitudDeContraseaPost";
import PerfilDeUsuario from "./pages/PerfilDeUsuario";
import PerfilDeUsuario1 from "./pages/PerfilDeUsuario1";
import CuentaEstadoDeCuentaDet from "./pages/CuentaEstadoDeCuentaDet";
import PerfilDeUsuario2 from "./pages/PerfilDeUsuario2";
import PerfilDeUsuario3 from "./pages/PerfilDeUsuario3";
import UsuariosGestinDeUsuarios from "./pages/UsuariosGestinDeUsuarios";
import SolicitudDe2FA from "./pages/SolicitudDe2FA";
import UsuariosGestinDeUsuarios1 from "./pages/UsuariosGestinDeUsuarios1";
import Cuenta from "./pages/Cuenta";
import UsuariosGestinDeUsuarios2 from "./pages/UsuariosGestinDeUsuarios2";
import PerfilDeUsuario4 from "./pages/PerfilDeUsuario4";
import Dashboard from "./pages/Dashboard";

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
      case "/perfil-de-usuario-5":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-6":
        title = "";
        metaDescription = "";
        break;
      case "/cuenta-estado-de-cuenta-detalle-pago":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-7":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-8":
        title = "";
        metaDescription = "";
        break;
      case "/usuarios-gestin-de-usuarios-agregar-usuario-3":
        title = "";
        metaDescription = "";
        break;
      case "/solicitud-de-2fa-1":
        title = "";
        metaDescription = "";
        break;
      case "/usuarios-gestin-de-usuarios-editar":
        title = "";
        metaDescription = "";
        break;
      case "/cuenta":
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
      case "/dashboard":
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
      <Route path="/" element={<SolicitudDeContraseaPost />} />
      <Route path="/perfil-de-usuario-5" element={<PerfilDeUsuario />} />
      <Route path="/perfil-de-usuario-6" element={<PerfilDeUsuario1 />} />
      <Route
        path="/cuenta-estado-de-cuenta-detalle-pago"
        element={<CuentaEstadoDeCuentaDet />}
      />
      <Route path="/perfil-de-usuario-7" element={<PerfilDeUsuario2 />} />
      <Route path="/perfil-de-usuario-8" element={<PerfilDeUsuario3 />} />
      <Route
        path="/usuarios-gestin-de-usuarios-agregar-usuario-3"
        element={<UsuariosGestinDeUsuarios />}
      />
      <Route path="/solicitud-de-2fa-1" element={<SolicitudDe2FA />} />
      <Route
        path="/usuarios-gestin-de-usuarios-editar"
        element={<UsuariosGestinDeUsuarios1 />}
      />
      <Route path="/cuenta" element={<Cuenta />} />
      <Route
        path="/usuarios-gestin-de-usuarios-1"
        element={<UsuariosGestinDeUsuarios2 />}
      />
      <Route path="/perfil-de-usuario-9" element={<PerfilDeUsuario4 />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}
export default App;

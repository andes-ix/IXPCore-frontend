import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import UsuariosGestinDeUsuarios from "./pages/UsuariosGestinDeUsuarios";
import Cuenta from "./pages/Cuenta";
import Dashboard from "./pages/Dashboard";
import CuentaEstadoDeCuentaDet1 from "./pages/CuentaEstadoDeCuentaDet1";
import UsuariosGestinDeUsuarios2 from "./pages/UsuariosGestinDeUsuarios2";
import PerfilDeUsuario from "./pages/PerfilDeUsuario";

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
      case "/cuenta":
        title = "";
        metaDescription = "";
        break;
      case "/dashboard":
        title = "";
        metaDescription = "";
        break;
      case "/cuenta-estado-de-cuenta-detalle-pago":
        title = "";
        metaDescription = "";
        break;
      case "/usuarios-gestin-de-usuarios-editar":
        title = "";
        metaDescription = "";
        break;
      case "/perfil-de-usuario-9":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
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
        element={<UsuariosGestinDeUsuarios />}
      />
      <Route path="/cuenta" element={<Cuenta />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route
        path="/cuenta-estado-de-cuenta-detalle-pago"
        element={<CuentaEstadoDeCuentaDet1 />}
      />
      <Route
        path="/usuarios-gestin-de-usuarios-editar"
        element={<UsuariosGestinDeUsuarios2 />}
      />
      <Route path="/perfil-de-usuario-9" element={<PerfilDeUsuario />} />
    </Routes>
  );
}
export default App;

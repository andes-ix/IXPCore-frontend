import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./screens/Login";
import { Cuenta } from "./screens/Cuenta";
import { CuentaEstadoDe } from "./screens/CuentaEstadoDe";
import { Dashboard } from "./screens/Dashboard";
import { UsuariosGestinDe } from "./screens/UsuariosGestinDe";
import { FeedbackSolicitud } from "./screens/FeedbackSolicitud";
import { CuentaEstadoDeScreen } from "./screens/CuentaEstadoDeScreen";
import { UsuariosGestinDeScreen } from "./screens/UsuariosGestinDeScreen";
import { Feedback } from "./screens/Feedback";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen10 } from "./screens/Screen10";
import { PerfilDeUsuario } from "./screens/PerfilDeUsuario";
import { PerfilDeUsuarioScreen } from "./screens/PerfilDeUsuarioScreen";
import { SolicitudDe } from "./screens/SolicitudDe";
import { SolicitudDeScreen } from "./screens/SolicitudDeScreen";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Login />,
  },
  {
    path: "/login-1",
    element: <Login />,
  },
  {
    path: "/cuenta",
    element: <Cuenta />,
  },
  {
    path: "/cuenta-estado-de-cuenta-detalle-factura",
    element: <CuentaEstadoDe />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/usuarios-gestion-de-usuarios-agregar-usuario-3",
    element: <UsuariosGestinDe />,
  },
  {
    path: "/feedback-solicitud-de-recuperacion-de-contrasena",
    element: <FeedbackSolicitud />,
  },
  {
    path: "/cuenta-estado-de-cuenta-detalle-pago",
    element: <CuentaEstadoDeScreen />,
  },
  {
    path: "/usuarios-gestion-de-usuarios-1",
    element: <UsuariosGestinDeScreen />,
  },
  {
    path: "/feedback-configuracion-de-contrasena-satisfactoria",
    element: <Feedback />,
  },
  {
    path: "/usuarios-gestion-de-usuarios-agregar-usuario-1",
    element: <DivWrapper />,
  },
  {
    path: "/usuarios-gestion-de-usuarios-editar",
    element: <Screen10 />,
  },
  {
    path: "/perfil-de-usuario-5",
    element: <PerfilDeUsuario />,
  },
  {
    path: "/perfil-de-usuario-6",
    element: <PerfilDeUsuarioScreen />,
  },
  {
    path: "/solicitud-de-2fa-1",
    element: <SolicitudDe />,
  },
  {
    path: "/solicitud-de-contrasena-posterior-a-registro-1",
    element: <SolicitudDeScreen />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};

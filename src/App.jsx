import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AuthProvider } from "./screens/Login/AuthContext";
import { Login } from "./screens/Login";
import { AgregarUsuario } from "./screens/AgregarUsuario";
import { UsuariosGestinDeScreen } from "./screens/UsuariosGestinDeScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { Cuenta } from "./screens/Cuenta";
import { CuentaEstadoDe } from "./screens/CuentaEstadoDe";
import { CuentaEstadoDeScreen } from "./screens/CuentaEstadoDeScreen";
import { Dashboard } from "./screens/Dashboard";
import { PerfilDeUsuario } from "./screens/PerfilDeUsuario";
import { Element } from "./screens/Element";
import { ElementScreen } from "./screens/ElementScreen";
import { ElementRecuperar } from "./screens/ElementRecuperar";
import { SolicitudDeCdigo } from "./screens/SolicitudDeCdigo";
import { SolicitudDeCdigoScreen } from "./screens/SolicitudDeCdigoScreen";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/perfil-de-usuario-9",
    element: <PerfilDeUsuario />,
  },
  {
    path: "/agregar-usuario",
    element: <AgregarUsuario />,
  },
  {
    path: "/usuarios-gestion-de-usuarios-1",
    element: <UsuariosGestinDeScreen />,
  },
  {
    path: "/usuarios-gestion-de-usuarios-editar",
    element: <DivWrapper />,
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
    path: "/cuenta-estado-de-cuenta-detalle-pago",
    element: <CuentaEstadoDeScreen />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/1-3recuperar-contrasea",
    element: <Element />,
  },
  {
    path: "/0-3recuperar-contrasena",
    element: <ElementScreen />,
  },
  {
    path: "/2-3recuperar-contrasena",
    element: <ElementRecuperar />,
  },
  {
    path: "/solicitud-de-codigo-si-el-usuario-tiene-el-2fa-activo",
    element: <SolicitudDeCdigo />,
  },
  {
    path: "/solicitud-de-codigo-si-el-usuario-tiene-el-2fa-activo-1",
    element: <SolicitudDeCdigoScreen />,
  },
  {
    path: "/solicitud-de-codigo-si-el-usuario-no-tiene-el-2fa-activo",
    element: <DivWrapper />,
  },
  {
    path: "/perfil-de-usuario-7",
    element: <Screen5 />,
  },
  {
    path: "/perfil-de-usuario-6",
    element: <Screen6 />,
  },
  {
    path: "/perfil-de-usuario-5",
    element: <Screen7 />,
  },
]);

export const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

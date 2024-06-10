import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./screens/Login";
import { UsuariosGestinDe } from "./screens/UsuariosGestinDe";
import { UsuariosGestinDeScreen } from "./screens/UsuariosGestinDeScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { Cuenta } from "./screens/Cuenta";
import { CuentaEstadoDe } from "./screens/CuentaEstadoDe";
import { CuentaEstadoDeScreen } from "./screens/CuentaEstadoDeScreen";
import { Dashboard } from "./screens/Dashboard";
import { PerfilDeUsuario } from "./screens/PerfilDeUsuario";
import { SolicitudDe } from "./screens/SolicitudDe/SolicitudDe";
import { SolicitudDeRestablecimiento } from "./screens/SolicitudDeRestablecimiento/SolicitudDeSolicitudDeRestablecimiento";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Login />,
  },
  {
    path: "/perfil-de-usuario-9",
    element: <PerfilDeUsuario />,
  },
  {
    path: "/usuarios-gestion-de-usuarios-agregar-usuario-1",
    element: <UsuariosGestinDe />,
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
    element: <Dashboard  />,
  },
  {
    
    path: "/PerfilDeUsuario",
    element: <PerfilDeUsuario />,
  },
  {
    
    path: "/SolicitudDe",
    element: <SolicitudDe />,
  },
  {
    
    path: "/SolicitudDeRestablecimiento",
    element: <SolicitudDeRestablecimiento />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
  <Route path='/dashboard' element={<Dashboard/>}/>

};


  
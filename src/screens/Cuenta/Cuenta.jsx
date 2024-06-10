import React from "react";
import { Link } from "react-router-dom";  // Asegúrate de importar Link desde react-router-dom
import "./style.css";

export const Cuenta = () => {
  return (
    <div className="cuenta">
      <div className="div">
        <div className="overlap">
          <img className="rectangle" alt="Rectangle" src="/img/rectangle-2.png" />
          <div className="text-wrapper">Fecha de vencimiento</div>
          <div className="text-wrapper-2">05 de Abril 2024</div>
          <div className="text-wrapper-3">Detracción pendiente</div>
          <div className="text-wrapper-4">S/. 1127,00</div>
          <div className="text-wrapper-5">Total deuda</div>
          <div className="text-wrapper-6">S/. 53127,00</div>
          <div className="grupo">
            <div className="text-wrapper-7">Cuenta</div>
            <div className="text-wrapper-8">Estado de cuenta</div>
            <Link className="chevron-right" to="/Dashboard">
              <img alt="Chevron right" src="/img/chevron-right.png" />
            </Link>
          </div>
          <div className="overlap-wrapper">
            {/* Contenido omitido para brevedad */}
          </div>
          <div className="text-wrapper-10">Estado de cuenta</div>
          <div className="text-wrapper-11">/ Mes</div>
          <p className="p">Valor presentado en base (Sol)</p>
          <div className="text-wrapper-12">Cliente #TW1500001</div>
          <div className="text-wrapper-13">Balance</div>
          <div className="text-wrapper-14">S/. 3127,00</div>
        </div>
        <div className="overlap-2">
          <img className="rectangle-2" alt="Rectangle" src="/img/rectangle-2-1.png" />
          <div className="rectangle-3" />
          <img className="logo-placeholder" alt="Logo placeholder" src="/img/logo-placeholder-3-removebg-preview.png" />
          <div className="componente-3">
            <div className="overlap-3">
              <Link className="text-wrapper-15" to="/Dashboard">Dashboard</Link>
              <div className="layout-dashboard">
                <div className="rectngulo-3" />
                <div className="rectngulo-4" />
                <div className="rectngulo-5" />
                <div className="rectngulo-6" />
              </div>
            </div>
            <div className="text-wrapper-16">Cuenta</div>
            <Link className="text-wrapper-17" to="/usuarios-gestion-de-usuarios-1">Usuarios</Link>
            <div className="text-wrapper-18">Menu</div>
            <img className="chevron-right-3" alt="Chevron right" src="/img/chevron-right-2.png" />
            <img className="chevron-right-4" alt="Chevron right" src="/img/chevron-right-2.png" />
            <div className="wallet">
              <div className="overlap-group-4">
                <img className="trazado-12" alt="Trazado" src="/img/trazado-2497.png" />
                <img className="trazado-13" alt="Trazado" src="/img/trazado-2498.png" />
              </div>
            </div>
            <div className="overlap-4">
              {/* Contenido omitido para brevedad */}
            </div>
            <img className="oval-3" alt="Oval" src="/img/oval-1.png" />
          </div>
        </div>
        <div className="overlap-6">
          {/* Contenido omitido para brevedad */}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import "./style.css";

export const UsuariosGestinDe = () => {
  return (
    <div className="usuarios-gestin-de-screen">
      <div className="usuarios-gestin-de-2">
        <div className="grupo-40">
          <div className="text-wrapper-236">ID usuario</div>
          <div className="text-wrapper-237">Nombre completo</div>
          <div className="text-wrapper-238">Cargo</div>
          <div className="overlap-80">
            <div className="text-wrapper-239">#TW1500001</div>
          </div>
          <div className="overlap-81">
            <div className="text-wrapper-239">Gerente general</div>
          </div>
          <button className="grupo-41">Guardar </button>         
          <div className="overlap-82">
            <div className="text-wrapper-239">Peru</div>
            <img className="chevron-right-13" alt="Chevron right" src="/img/chevron-right-27.png" />
            <img className="lnea-6" alt="Lnea" src="/img/l-nea-48-1.png" />
          </div>
          <div className="overlap-83">
            <div className="text-wrapper-239">Finanzas</div>
            <img className="chevron-right-13" alt="Chevron right" src="/img/chevron-right-27.png" />
            <img className="lnea-6" alt="Lnea" src="/img/l-nea-48-1.png" />
          </div>
          <div className="text-wrapper-241">Pais</div>
          <div className="text-wrapper-242">Rol</div>
          <div className="overlap-84">
            <input type="email" placeholder="Example@pit.net" className="text-wrapper-239"></input>
          </div>
          <div className="overlap-85">
            <input placeholder="name"  type="name" className="text-wrapper-239"></input>
          </div>
          <div className="text-wrapper-243">Correo electronico</div>
          <div className="overlap-group-20">
            <div className="overlap-86">
              <div className="rectngulo-33" />
              <div className="text-wrapper-244">+66</div>
              <img className="imagen" alt="Imagen" src="/img/imagen-4-1.png" />
            </div>
            <input type="password" placeholder="Password" className="text-wrapper-245">(0) 053 555 555</input>
          </div>
          <img className="lnea-7" alt="Lnea" src="/img/l-nea-50-3.png" />
          <div className="text-wrapper-246">Agregar usuario</div>
          <div className="text-wrapper-247">Cancelar</div>
          <div className="text-wrapper-248">Permisos y accesos</div>
        </div>
      </div>
    </div>
  );
};

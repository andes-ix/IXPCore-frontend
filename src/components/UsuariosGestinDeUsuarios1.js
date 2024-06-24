import PropTypes from "prop-types";

const UsuariosGestinDeUsuarios1 = ({ className = "" }) => {
  return (
    <div
      className={`relative bg-gray-500 w-[430px] h-[1071px] max-w-full max-h-full overflow-auto text-left text-sm text-lightslategray-200 font-open-sans ${className}`}
    >
      <div className="absolute top-[58px] left-[7px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.1)] rounded bg-white w-[416px] h-[824px]" />
      <div className="absolute top-[152px] left-[29px] text-xs font-semibold text-dimgray-200">
        ID usuario
      </div>
      <div className="absolute top-[236px] left-[29px] text-xs font-semibold text-dimgray-200">
        Nombre completo
      </div>
      <div className="absolute top-[568px] left-[29px] text-xs font-semibold text-dimgray-200">
        Cargo
      </div>
      <div className="absolute top-[179px] left-[29px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-aliceblue-400 box-border w-[368px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[595px] left-[29px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[368px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[351px] left-[29px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[368px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[719px] left-[29px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[368px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[194px] left-[43px]">#TW1500001</div>
      <div className="absolute top-[610px] left-[43px]">Gerente general</div>
      <div className="absolute top-[366px] left-[43px]">Peru</div>
      <div className="absolute top-[734px] left-[43px]">Finanzas</div>
      <div className="absolute top-[324px] left-[29px] text-xs font-semibold text-dimgray-200">
        Pais
      </div>
      <div className="absolute top-[692px] left-[29px] text-xs font-semibold text-dimgray-200">
        Rol
      </div>
      <div className="absolute top-[507px] left-[29px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[368px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[263px] left-[29px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[368px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[522px] left-[43px]">Example@pit.net</div>
      <div className="absolute top-[278px] left-[43px]">Example@pit.net</div>
      <div className="absolute top-[480px] left-[29px] text-xs font-semibold text-dimgray-200">
        Correo electronico
      </div>
      <div className="absolute top-[413px] left-[29px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[368px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <div className="absolute top-[413px] left-[29px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-aliceblue-400 w-[83px] h-12 opacity-[0.4]" />
      <div className="absolute top-[428px] left-[73px]">+66</div>
      <img
        className="absolute top-[431px] left-[43px] w-5 h-[13.4px] object-cover"
        alt=""
        src="/imagen-4@2x.png"
      />
      <img
        className="absolute top-[372.36px] right-[49.36px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright4.svg"
      />
      <img
        className="absolute top-[740.36px] right-[52.36px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright2.svg"
      />
      <div className="absolute top-[350px] right-[74px] box-border w-0.5 h-[49px] border-r-[1px] border-solid border-aliceblue-500" />
      <div className="absolute top-[718px] right-[77px] box-border w-0.5 h-[49px] border-r-[1px] border-solid border-aliceblue-500" />
      <img
        className="absolute top-[136.5px] left-[6.5px] w-[416px] h-[3px]"
        alt=""
        src="/lnea-502.svg"
      />
      <div className="absolute top-[94px] left-[29px] text-xl text-dimgray-200">
        Agregar usuario
      </div>
      <div className="absolute top-[821px] left-[150px] text-base font-semibold text-cornflowerblue">
        Cancelar
      </div>
      <div className="absolute top-[665px] left-[29px] font-semibold text-cornflowerblue">
        Permisos y accesos
      </div>
      <div className="absolute top-[428px] left-[126px] opacity-[0.4]">
        (0) 053 555 555
      </div>
      <div className="absolute top-[808px] right-[33px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[136px] h-12 text-base text-white">
        <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_32px)] font-semibold">
          Guardar
        </div>
      </div>
    </div>
  );
};

UsuariosGestinDeUsuarios1.propTypes = {
  className: PropTypes.string,
};

export default UsuariosGestinDeUsuarios1;

import { FunctionComponent, useCallback } from "react";
import Componente5 from "../components/componente5";
import Componente3 from "../components/componente3";
import { useNavigate } from "react-router-dom";

const PerfilDeUsuario1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onVerificacinEnDosClick = useCallback(() => {
    navigate("/perfil-de-usuario-15");
  }, [navigate]);

  return (
    <div className="relative bg-aliceblue-300 w-full h-[1442px] text-left text-sm text-gray-200 font-open-sans">
      <div className="absolute top-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.03)] bg-white w-[430px] h-[100px]" />
      <img
        className="absolute top-[28px] left-[203px] w-[45px] h-[45px]"
        alt=""
        src="/componente-22--7.svg"
      />
      <img
        className="absolute top-[28px] left-[273px] w-[45px] h-[45px]"
        alt=""
        src="/componente-22--8.svg"
      />
      <div className="absolute top-[126px] left-[25px] text-base leading-[22px] text-cornflowerblue">
        <span>{`Empresa: `}</span>
        <span className="font-semibold">Perú IX</span>
      </div>
      <img
        className="absolute top-[135.36px] left-[163.64px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright4.svg"
      />
      <Componente5 />
      <img
        className="absolute top-[35px] left-[19px] w-[30px] h-[30px] object-cover"
        alt=""
        src="/imagen-151@2x.png"
      />
      <Componente3 propRight="unset" propLeft="132px" />
      <div className="absolute top-[177px] left-[25px] text-5xl text-dimgray-200">
        Información de perfil
      </div>
      <div className="absolute top-[226px] left-[25px]">
        Revise y actualice los detalles de su cuenta
      </div>
      <div className="absolute top-[259px] left-[25px] text-xs leading-[22px] text-dimgray-100">
        <p className="m-0">{`Asegúrese de que estos datos estén actualizados, ya que se `}</p>
        <p className="m-0">
          utilizarán para información en la facturación de sus servicios
        </p>
      </div>
      <div
        className="absolute top-[314px] left-[39px] text-xs text-cornflowerblue cursor-pointer"
        onClick={onVerificacinEnDosClick}
      >
        Verificación en dos pasos
      </div>
      <img
        className="absolute top-[316px] left-[25px] w-[7.3px] h-3"
        alt=""
        src="/chevronright3.svg"
      />
      <div className="absolute top-[362px] left-[25px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.1)] rounded bg-white w-[376.5px] h-[585px]" />
      <div className="absolute bottom-[68px] left-[25px] rounded-t-none rounded-b bg-whitesmoke-400 w-[376.5px] h-[793px]" />
      <div className="absolute bottom-[196px] left-[48px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[330px] h-12" />
      <div className="absolute bottom-[210px] left-[62px] text-lightslategray-200 opacity-[0.4]">
        Nueva contraseña
      </div>
      <div className="absolute bottom-[254px] left-[48px] text-xs font-semibold">
        Nueva contraseña
      </div>
      <div className="absolute top-[485px] left-[144px] font-semibold text-center">
        Salvador Bertenbreiter
      </div>
      <div className="absolute top-[599px] left-[48px] text-xs font-semibold">
        Nombre completo
      </div>
      <div className="absolute top-[931px] left-[45px] text-xs font-semibold">
        Cargo
      </div>
      <div className="absolute top-[626px] left-[48px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[330px] h-12" />
      <div className="absolute top-[958px] left-[45px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[333px] h-12" />
      <div className="absolute top-[800px] left-[48px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-aliceblue-400 w-[330px] h-12" />
      <div className="absolute top-[641px] left-[62px] text-lightslategray-200">
        Salvador Bertenbreiter
      </div>
      <div className="absolute top-[973px] left-[59px] text-lightslategray-200">
        Gerente general
      </div>
      <div className="absolute top-[815px] left-[62px] text-lightslategray-200">
        Peru
      </div>
      <div className="absolute top-[773px] left-[48px] text-xs font-semibold">
        Pais
      </div>
      <div className="absolute top-[713px] left-[48px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[330px] h-12" />
      <div className="absolute top-[728px] left-[62px] text-lightslategray-200">
        Example@pit.net
      </div>
      <div className="absolute top-[686px] left-[48px] text-xs font-semibold">
        Correo electronico
      </div>
      <div className="absolute top-[1110px] left-[48px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[330px] h-12" />
      <div className="absolute top-[1125px] left-[62px] text-lightslategray-200">
        ******
      </div>
      <div className="absolute top-[1082px] left-[283px] text-xs font-semibold text-cornflowerblue">
        ¿Olvidó?
      </div>
      <div className="absolute top-[1083px] left-[48px] text-xs font-semibold">
        Contraseña actual
      </div>
      <div className="absolute top-[514px] left-[56px] text-[10px] leading-[21px] text-dimgray-100 text-center">
        <p className="m-0">{`Asegúrese de que estos datos estén actualizados, ya que se utilizarán `}</p>
        <p className="m-0">
          para información en la facturación de sus servicios.
        </p>
      </div>
      <div className="absolute top-[867px] left-[48px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white w-[330px] h-12" />
      <div className="absolute top-[867px] left-[48px] rounded-tl rounded-tr-none rounded-br-none rounded-bl bg-aliceblue-400 w-[83px] h-12 opacity-[0.4]" />
      <div className="absolute top-[882px] left-[92px] text-lightslategray-200">
        +66
      </div>
      <img
        className="absolute top-[885px] left-[62px] w-5 h-[13.4px] object-cover"
        alt=""
        src="/imagen-7@2x.png"
      />
      <div className="absolute top-[882px] left-[145px] text-lightslategray-200 opacity-[0.4]">
        (0) 053 555 555
      </div>
      <img
        className="absolute top-[821.36px] right-[68.36px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright2.svg"
      />
      <div className="absolute top-[810px] left-[332px] box-border w-0.5 h-[49px] border-r-[1px] border-solid border-aliceblue-500" />
      <img
        className="absolute top-[382px] left-[170px] w-20 h-20 object-cover"
        alt=""
        src="/grupo-2@2x.png"
      />
      <img
        className="absolute top-[433px] left-[218px] w-[38px] h-[38px] object-cover"
        alt=""
        src="/enmascarar-grupo-3@2x.png"
      />
      <img
        className="absolute top-[1038px] left-[24.5px] w-[376.5px] h-[3px]"
        alt=""
        src="/lnea-491.svg"
      />
      <div className="absolute bottom-[119px] left-[48px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[330px] h-12 text-base text-white">
        <div className="absolute top-[calc(50%_-_11px)] left-[calc(50%_-_36px)] font-semibold">
          Actualizar
        </div>
      </div>
    </div>
  );
};

export default PerfilDeUsuario1;

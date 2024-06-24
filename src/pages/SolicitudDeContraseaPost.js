const SolicitudDeContraseaPost = () => {
  return (
    <div className="relative bg-aliceblue-300 w-full h-[1080px] text-left text-sm text-dimgray-100 font-open-sans">
      <img
        className="absolute top-[0px] left-[-24px] w-[1450px] h-[1080px] object-cover"
        alt=""
        src="/fondo2port@2x.png"
      />
      <img
        className="absolute right-[258px] bottom-[155px] w-[514px] h-[758px]"
        alt=""
        src="/trazado-30235.svg"
      />
      <img
        className="absolute top-[498px] right-[327.63px] w-[16.7px] h-[15px]"
        alt=""
        src="/bpreview.svg"
      />
      <img
        className="absolute top-[592px] right-[327.63px] w-[16.7px] h-[15px]"
        alt=""
        src="/bpreview.svg"
      />
      <div className="absolute top-[0px] left-[0px] bg-darkslateblue-200 w-[1425px] h-[1080px] opacity-[0.03]" />
      <div className="absolute top-[319px] left-[1198px] text-5xl font-semibold text-dimgray-200">
        Configuración de contraseña
      </div>
      <div className="absolute top-[368px] left-[1198px] leading-[22px] inline-block w-[369px] h-[46px]">
        Ten en cuenta los parámetros que debe cumplir la contraseña de acceso a
        configurar.
      </div>
      <div className="absolute top-[451px] left-[1198px] font-semibold">
        Contraseña
      </div>
      <div className="absolute top-[480px] left-[1198px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[422px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <button className="cursor-pointer [border:none] p-0 bg-steelblue-100 absolute top-[830px] left-[1198px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] w-[422px] h-12" />
      <div className="absolute top-[577px] left-[1198px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border w-[422px] h-12 border-[1px] border-solid border-whitesmoke-500" />
      <input
        className="[border:none] [outline:none] font-open-sans text-sm bg-[transparent] absolute top-[495px] left-[1212px] text-darkgray-100 text-left"
        type="password"
      />
      <input
        className="[border:none] [outline:none] font-open-sans text-sm bg-[transparent] absolute top-[592px] left-[1212px] text-darkgray-100 text-left"
        type="password"
      />
      <div className="absolute top-[548px] left-[1198px] font-semibold">
        Confirmar contraseña
      </div>
      <div className="absolute top-[649px] left-[1198px] leading-[22px] inline-block w-[387px] h-[135px]">
        <p className="m-0">
          <b>Tu clave de acceso debe cumplir con estos requisitos:</b>
        </p>
        <p className="m-0">- Tener 8 caracteres</p>
        <p className="m-0">{`- Ser alfanumérica con al menos 1 carácter numérico y un `}</p>
        <p className="m-0">único carácter especial</p>
        <p className="m-0">
          - Tener uno de estos caracteres especiales - / = . $ # *
        </p>
        <p className="m-0">- Evita colocar información personal</p>
      </div>
      <img
        className="absolute top-[205px] left-[1196px] w-20 h-[94px] object-cover"
        alt=""
        src="/logo-pit@2x.png"
      />
      <div className="absolute top-[843px] left-[1376px] text-base font-semibold text-white">
        Guardar
      </div>
    </div>
  );
};

export default SolicitudDeContraseaPost;

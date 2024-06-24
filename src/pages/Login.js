const Login = () => {
  return (
    <div className="relative bg-whitesmoke-300 w-full h-[930px] text-left text-xs text-dimgray-100 font-open-sans">
      <img
        className="absolute top-[0px] left-[0px] w-[430px] h-[930px]"
        alt=""
        src="/trazado-29742.svg"
      />
      <div className="absolute top-[106px] left-[0px] w-[416px] h-[727px]">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-3xs bg-white">
          <img
            className="absolute top-[11px] left-[0px] w-[199px] h-[139px] object-cover"
            alt=""
            src="/logoplaceholder3removebgpreview@2x.png"
          />
          <div className="absolute w-[calc(100%_-_77px)] top-[calc(50%_+_94.5px)] left-[40px] leading-[22px] inline-block h-[133px]">
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
        </div>
        <img
          className="absolute top-[182.16px] left-[calc(50%_+_135.55px)] w-4 h-4"
          alt=""
          src="/trazado-397.svg"
        />
        <img
          className="absolute top-[182.16px] left-[calc(50%_+_122.55px)] w-4 h-4"
          alt=""
          src="/trazado-3971.svg"
        />
        <div className="absolute top-[calc(50%_-_227.5px)] left-[39px] text-5xl font-semibold text-dimgray-200">
          Configuración de contraseña
        </div>
        <div className="absolute w-[calc(100%_-_61px)] top-[calc(50%_-_88.5px)] right-[22px] left-[39px] h-[167px]">
          <div className="absolute top-[0px] left-[0px] font-semibold">
            Contraseña
          </div>
          <div className="absolute top-[calc(50%_+_8.5px)] left-[0px] font-semibold">
            Confirmar contraseña
          </div>
          <div className="absolute w-full top-[calc(50%_-_56.5px)] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
          <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-white box-border h-12 border-[1px] border-solid border-whitesmoke-500" />
          <div className="absolute top-[calc(50%_-_41.5px)] left-[14px] text-sm text-darkgray-100">
            **************
          </div>
          <div className="absolute bottom-[14px] left-[14px] text-sm text-darkgray-100">
            **************
          </div>
          <img
            className="absolute top-[calc(50%_-_41.5px)] right-[20.63px] w-[16.7px] h-[15px]"
            alt=""
            src="/bpreview.svg"
          />
          <img
            className="absolute right-[20.63px] bottom-[18px] w-[16.7px] h-[15px]"
            alt=""
            src="/bpreview.svg"
          />
        </div>
        <div className="absolute w-[calc(100%_-_61px)] right-[22px] bottom-[44px] left-[39px] h-12 text-sm text-white">
          <img
            className="absolute h-[calc(100%_+_18px)] w-[calc(100%_+_18px)] top-[0px] right-[-18px] bottom-[-18px] left-[0px] max-w-full overflow-hidden max-h-full"
            alt=""
            src="/componente-20--2.svg"
          />
          <div className="absolute top-[calc(50%_-_10px)] left-[calc(50%_-_22.5px)] font-semibold">
            Enviar
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_60px)] top-[calc(50%_-_182.5px)] left-[39px] text-sm leading-[22px] inline-block h-[63px]">
          <span>{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu finibus eros, quis sodales velit. Curabitur eu `}</span>
          <b className="text-mediumblue">Ex...…….@gmail.com</b>
        </div>
      </div>
    </div>
  );
};

export default Login;

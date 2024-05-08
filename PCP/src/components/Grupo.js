const Grupo = ({ onInformacinDePerfilClick }) => {
  return (
    <div className="absolute top-[-2px] right-[0px] w-[1621px] h-[297.7px] text-left text-sm text-cornflowerblue font-open-sans">
      <div className="absolute w-full top-[0px] right-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.03)] bg-white h-[100px]" />
      <img
        className="absolute top-[28px] right-[255px] w-[45px] h-[45px]"
        alt=""
        src="/componente-22--7.svg"
      />
      <img
        className="absolute top-[28px] right-[185px] w-[45px] h-[45px]"
        alt=""
        src="/componente-22--8.svg"
      />
      <div className="absolute top-[43px] left-[35px]">Empresa: Perú IX</div>
      <img
        className="absolute top-[50.36px] left-[163.64px] w-3 h-[7.3px]"
        alt=""
        src="/chevronright3.svg"
      />
      <div className="absolute h-[calc(100%_-_24px)] top-[24px] right-[101px] bottom-[0px] w-[302px] text-dimgray-200">
        <img
          className="absolute top-[0px] right-[3px] w-12 h-12 object-cover"
          alt=""
          src="/grupo-37691@2x.png"
        />
        <div className="absolute h-[calc(100%_-_59.7px)] w-full top-[59.7px] right-[0px] bottom-[0px] left-[0px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0]">
          <div className="absolute top-[28.3px] left-[calc(50%_-_63.5px)] text-base font-semibold">
            Juan Hernandez
          </div>
          <div className="absolute top-[calc(50%_-_56.7px)] left-[calc(50%_-_63.5px)] leading-[22px] font-light text-dimgray-100 inline-block w-[75px] h-5">
            Supervisor
          </div>
          <div
            className="absolute top-[calc(50%_-_5px)] left-[calc(50%_-_91px)] text-lightslategray-100 cursor-pointer"
            onClick={onInformacinDePerfilClick}
          >
            Información de perfil
          </div>
          <div className="absolute bottom-[30px] left-[calc(50%_-_91px)] font-semibold text-steelblue">
            Cerrar sesión
          </div>
          <div className="absolute w-[calc(100%_+_1px)] top-[calc(50%_+_38.8px)] right-[0px] left-[-1px] box-border h-0.5 border-t-[1px] border-solid border-whitesmoke-500" />
          <img
            className="absolute top-[22.3px] left-[26px] w-12 h-12 object-cover"
            alt=""
            src="/grupo-37691@2x.png"
          />
          <img
            className="absolute top-[calc(50%_-_7.7px)] left-[29px] w-4 h-5"
            alt=""
            src="/user.svg"
          />
          <img
            className="absolute bottom-[27.7px] left-[27px] w-5 h-5"
            alt=""
            src="/logout.svg"
          />
        </div>
      </div>
      <div className="absolute top-[27px] right-[227px] w-36 h-[151.7px] text-steelblue">
        <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-[calc(100%_-_106.7px)] w-[calc(100%_-_99px)] top-[0px] right-[99px] bottom-[106.7px] left-[0px] rounded-sm bg-aliceblue-100 opacity-[0]" />
          <img
            className="absolute h-[calc(100%_-_119.7px)] w-[calc(100%_-_112px)] top-[7px] right-[105px] bottom-[112.7px] left-[7px] rounded-sm max-w-full overflow-hidden max-h-full object-cover"
            alt=""
            src="/rectngulo-17@2x.png"
          />
          <div className="absolute h-[calc(100%_-_51.7px)] w-[calc(100%_-_7px)] top-[51.7px] right-[0px] bottom-[0px] left-[7px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.13)] rounded-3xs bg-white opacity-[0]" />
          <div className="absolute top-[calc(50%_-_2.85px)] left-[calc(50%_-_14.5px)] opacity-[0]">
            Ingles
          </div>
          <div className="absolute top-[calc(50%_+_37.85px)] left-[calc(50%_-_16px)] text-lightslategray-100 opacity-[0]">
            Español
          </div>
          <img
            className="absolute top-[calc(50%_-_2.85px)] left-[23px] rounded-[50%] w-5 h-5 opacity-[0]"
            alt=""
            src="/elipse-369.svg"
          />
          <img
            className="absolute top-[calc(50%_+_37.15px)] left-[23px] rounded-[50%] w-5 h-5 opacity-[0]"
            alt=""
            src="/elipse-369.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Grupo;

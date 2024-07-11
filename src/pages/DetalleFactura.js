const DetalleFactura = () => {
  return (
    <div className="relative bg-gray-400 w-full h-[1411px] text-left text-sm text-dimgray-100 font-open-sans">
      <div className="absolute top-[0px] left-[0px] rounded-t-none rounded-b-8xs bg-white box-border w-[430px] h-[1365px] border-[0.5px] border-solid border-dimgray-300" />
      <img
        className="absolute top-[33px] right-[26px] w-3.5 h-3.5"
        alt=""
        src="/ic-clear-24px.svg"
      />
      <div className="absolute top-[25px] left-[20px] text-lg">
        <span>{`Detalle de factura `}</span>
        <b className="text-cornflowerblue">F 001-00001753</b>
      </div>
      <div className="absolute top-[52px] left-[20px] leading-[22px] text-center text-cornflowerblue">
        <p className="m-0">
          <span className="font-light font-open-sans text-lightslategray-100">
            Emisión
          </span>
          <span className="font-semibold"> 10/03/2024</span>
        </p>
      </div>
      <div className="absolute top-[114px] left-[0.16px] w-[430.7px] h-[1114.3px] text-lightslategray-100">
        <div className="absolute top-[149px] left-[36px] font-semibold text-steelblue-100">
          RUC 20605039546
        </div>
        <div className="absolute top-[124px] left-[36px] text-dimgray-100">
          PIT PERU S.A.C.
        </div>
        <b className="absolute top-[198px] left-[36px] text-xs text-dimgray-100">
          Miraflores, Lima, Perú
        </b>
        <div className="absolute top-[175px] left-[36px] text-xs font-light text-dimgray-100">
          <span className="capitalize">Sa</span>
          <span className="lowercase">
            N MIGUEL DE MIRAFLORES CAL. MARTIR JOSE OLAYA NRO 129
          </span>
        </div>
        <b className="absolute top-[calc(50%_-_68.99px)] left-[34.08px] text-dimgray-100">
          Detraccion
        </b>
        <b className="absolute top-[calc(50%_-_8.99px)] left-[34.04px] text-dimgray-100">
          Descripcion
        </b>
        <b className="absolute top-[calc(50%_+_81.64px)] left-[34px]">
          Monto detraccion
        </b>
        <b className="absolute top-[calc(50%_+_52.01px)] left-[34px] text-3xl text-cornflowerblue">
          127,00
        </b>
        <div className="absolute top-[calc(50%_-_42.36px)] left-[34.08px] text-xs text-darkgray-200">
          Operación sujeta al SPOT con el gobierno central...
        </div>
        <div className="absolute top-[calc(50%_+_17.64px)] left-[34.04px] text-xs text-darkgray-200">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
        <div className="absolute w-[calc(100%_-_14px)] right-[7px] bottom-[70.01px] left-[7px] bg-white h-[70px]" />
        <div className="absolute w-[calc(100%_-_14px)] right-[7px] bottom-[140.01px] left-[7px] bg-aliceblue-300 h-[55px]" />
        <b className="absolute right-[52.28px] bottom-[159.01px] text-base leading-[13px]">
          $ 2.650,00
        </b>
        <b className="absolute bottom-[158.01px] left-[48.12px] text-base leading-[13px]">
          Base imponible
        </b>
        <div className="absolute bottom-[98.01px] left-[59.82px]">IGV</div>
        <div className="absolute bottom-[92.01px] left-[calc(50%_+_84.97px)] text-base text-darkslategray">
          $ 477,00
        </div>
        <div className="absolute w-full top-[calc(50%_+_141.64px)] right-[0px] left-[0px] h-[195px] overflow-auto mix-blend-normal text-base text-darkslategray">
          <div className="absolute h-full w-[calc(100%_+_481px)] top-[0px] right-[-481px] bottom-[0px] left-[0px]">
            <div className="absolute w-full top-[calc(50%_-_42.5px)] right-[0px] left-[0px] bg-white h-[70px]" />
            <div className="absolute w-full right-[0px] bottom-[0px] left-[0px] bg-whitesmoke-100 h-[70px]" />
            <div className="absolute w-full top-[0px] right-[0px] left-[0px] bg-aliceblue-300 h-[55px]" />
            <b className="absolute top-[14px] left-[calc(50%_-_123.91px)] leading-[13px] text-lightslategray-100">
              Cantidad
            </b>
            <b className="absolute top-[14px] left-[calc(50%_+_11.97px)] leading-[13px] text-lightslategray-100">
              Precio unitario
            </b>
            <b className="absolute top-[14px] left-[calc(50%_+_181.68px)] leading-[13px] text-lightslategray-100">
              Impuestos
            </b>
            <b className="absolute top-[14px] right-[64.99px] leading-[13px] text-lightslategray-100">
              Importe
            </b>
            <b className="absolute top-[15px] left-[43px] leading-[13px] text-lightslategray-100">
              Descripción
            </b>
            <div className="absolute top-[calc(50%_-_25.5px)] left-[44px] text-sm text-lightslategray-100">
              <p className="m-0">{`[SERV-0010] Puerta a Conexión `}</p>
              <p className="m-0">10Gbps - Pago mensual</p>
            </div>
            <div className="absolute top-[calc(50%_-_19.5px)] left-[calc(50%_+_185.42px)]">
              IGV 18%
            </div>
            <div className="absolute top-[calc(50%_-_19.5px)] right-[54.47px]">
              $ 2.000,00
            </div>
            <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_-_118.48px)]">
              1
            </div>
            <div className="absolute top-[calc(50%_-_16.5px)] left-[calc(50%_+_19.13px)]">{`2.000,00 `}</div>
            <div className="absolute bottom-[26px] left-[44px] text-sm text-lightslategray-100">
              [SERV-0020] Crossconexión
            </div>
            <div className="absolute bottom-[26px] left-[calc(50%_+_185.42px)]">
              IGV 18%
            </div>
            <div className="absolute right-[67.47px] bottom-[26px]">
              $ 650,00
            </div>
            <div className="absolute bottom-[23px] left-[calc(50%_-_118.48px)]">
              1
            </div>
            <div className="absolute bottom-[23px] left-[calc(50%_+_21.14px)]">
              650,00
            </div>
          </div>
        </div>
        <div className="absolute w-[calc(100%_-_14px)] right-[7px] bottom-[0.01px] left-[7px] bg-aliceblue-300 h-[70px]" />
        <b className="absolute bottom-[26.01px] left-[58.39px]">Total</b>
        <b className="absolute right-[52.38px] bottom-[23.01px] text-base">
          $ 3.127,00
        </b>
        <div className="absolute top-[47px] right-[45.7px] shadow-[0px_3px_6px_rgba(0,_0,_0,_0.02)] rounded-md bg-cornflowerblue w-[54px] h-12">
          <img
            className="absolute top-[calc(50%_-_9px)] left-[calc(50%_-_9px)] w-5 h-5"
            alt=""
            src="/download.svg"
          />
        </div>
        <img
          className="absolute top-[0px] left-[4px] w-[190px] h-[133px] object-cover"
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
        <img
          className="absolute top-[calc(50%_-_321.15px)] left-[calc(50%_+_64.65px)] w-px h-[72px]"
          alt=""
          src="/rectangle12.svg"
        />
        <img
          className="absolute top-[calc(50%_-_321.15px)] left-[calc(50%_-_76.35px)] w-px h-[72px]"
          alt=""
          src="/rectangle12.svg"
        />
        <div className="absolute top-[calc(50%_-_304.15px)] right-[51.7px] leading-[22px] text-center">
          <p className="m-0 font-semibold text-cornflowerblue">$ 3.127,00</p>
          <p className="m-0 font-light">Total</p>
          <span className="font-light" />
        </div>
        <div className="absolute top-[calc(50%_-_304.15px)] left-[32px] leading-[22px] text-center text-cornflowerblue">
          <p className="m-0 font-semibold">10/03/2024</p>
          <p className="m-0 text-lightslategray-100">
            <span className="font-light">Vencimient</span>o
          </p>
        </div>
        <div className="absolute top-[calc(50%_-_281.81px)] left-[calc(50%_-_26.27px)] font-light text-center">
          Estatus
        </div>
        <img
          className="absolute top-[calc(50%_-_308.15px)] left-[calc(50%_-_26.77px)] w-[47px] h-[22px]"
          alt=""
          src="/groupcopy2.svg"
        />
        <div className="absolute top-[calc(50%_-_198.49px)] left-[7.43%] text-xs text-royalblue">
          Fiber digital sociedad comercial de responsabilidad limitada
        </div>
        <b className="absolute top-[calc(50%_-_225.49px)] left-[32.08px] text-dimgray-100">
          Datos del cliente
        </b>
        <div className="absolute top-[calc(50%_-_173.86px)] left-[32.08px] text-xs text-dimgray-200">
          <span className="font-semibold">RUC 20604630488</span>
          <span className="text-darkgray-200" />
        </div>
        <div className="absolute top-[calc(50%_-_148.49px)] left-[32.08px] text-xs font-semibold text-dimgray-200">
          Dirección
        </div>
        <div className="absolute top-[calc(50%_-_128.49px)] left-[34.04px] text-xs text-darkgray-200">
          <p className="m-0">
            MZA,L18 Lote 25,C,H,Mariscal Cáceres (Intercesión
          </p>
          <p className="m-0">Av., central y Av. Muro)</p>
        </div>
      </div>
    </div>
  );
};

export default DetalleFactura;

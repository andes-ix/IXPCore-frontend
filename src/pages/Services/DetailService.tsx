import React, { useState } from "react";

import { Text } from "Common/Components/Text/textComponent";

import { Title } from "Common/Components/Title/titleComponent";
import { BLUE10, GREY10, GREY100, GREY150 } from "Common/constants/colors";

import SessionTablesComponent from "./SessionsTablesComponent";
import { GraphicComponent } from "./GraphicComponent";
import SessionSimpleTablesComponent from "./SessionsSimpleTablesComponent";

export enum optionDetailTagEnum {
  SESSION_BGP = "SESSION_BGP",
  TRAFFIC = "TRAFFIC",
  LOST = "LOST",
  TRAFFIC_BUM = "TRAFFIC_BUM",
}

const ListServices = () => {
  const [showSessionBGP, setShowSessionBGP] = useState<boolean>(true);
  const [showTraffic, setShowTraffic] = useState<boolean>(false);
  const [showTrafficBum, setShowTrafficBum] = useState<boolean>(false);
  const [showLost, setShowLost] = useState<boolean>(false);

  const handleShowOptionTable = (optionTable: string) => {
    switch (optionTable) {
      case optionDetailTagEnum.LOST:
        setShowLost(true);
        setShowSessionBGP(false);
        setShowTraffic(false);
        setShowTrafficBum(false);
        break;
      case optionDetailTagEnum.TRAFFIC:
        setShowLost(false);
        setShowSessionBGP(false);
        setShowTraffic(true);
        setShowTrafficBum(false);
        break;
      case optionDetailTagEnum.SESSION_BGP:
        setShowLost(false);
        setShowSessionBGP(true);
        setShowTraffic(false);
        setShowTrafficBum(false);
        break;
      case optionDetailTagEnum.TRAFFIC_BUM:
        setShowLost(false);
        setShowSessionBGP(false);
        setShowTraffic(false);
        setShowTrafficBum(true);
        break;
      default:
        break;
    }
  };

  return (
    <React.Fragment>
      <div className="pl-4 pt-10 pb-4 pr-4">
        <div className="flex justify-between">
          <div className="flex gap-1">
            <Title
              size={"medium"}
              text={"Detalle de servicio"}
              bold={"normal"}
              color={GREY150}
            />
            <Title
              className=""
              size={"medium"}
              bold={"bold"}
              text={"PE-INP-001"}
              color={BLUE10}
            />
          </div>
          <ul className="flex gap-1 pt-1 pr-10 ">
            <li className=" relative before:content-['\ea54'] before:font-remix before:ltr:-right-1 before:rtl:-left-1 before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:rtl:rotate-180 before:text-[#168EEA] dark:before:text-zink-200">
              <a href="#!" className="text-slate-500 dark:text-zink-200">
                <Text size={"medium"} text={"Servicios"} color={BLUE10}></Text>
              </a>
            </li>
            <li className="text-slate-700 dark:text-zink-100">
              <Text
                size={"medium"}
                text={"Listado de servicios"}
                color={BLUE10}
              ></Text>
            </li>
            <li className=" relative before:content-['\ea54'] before:font-remix before:ltr:-right-1 before:rtl:-left-1 before:absolute before:text-[18px] before:-top-[3px] ltr:pr-4 rtl:pl-4 before:rtl:rotate-180 before:text-[#168EEA] dark:before:text-zink-200"></li>
            <li className="text-slate-700 dark:text-zink-100">
              <Text
                size={"medium"}
                text={"Detalle de servicio"}
                color={BLUE10}
              ></Text>
            </li>
          </ul>
        </div>

        <Title
          className="pt-2"
          size={"medium-sm"}
          text={"Estadísticas asociadas al servicio"}
          color={GREY100}
        />
        <Text
          className="pt-1"
          text={
            "Visualización de tablas y gráficos con datos de interés pertenecientes al servicio."
          }
          size={"medium-sm"}
          color={GREY10}
        />
        {/* tags section */}
        {/* <div className="flex  pt-10 gap-2">
          <button
            type="button"
            className={`${
              showSessionBGP
                ? "btn text-white bg-blue-600"
                : "btn text-blue-500"
            } border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
            onClick={() => {
              handleShowOptionTable(optionDetailTagEnum.SESSION_BGP);
            }}
          >
            <span className="align-middle">Estado sesiones BGP</span>
          </button>
          <button
            type="button"
            className={`${
              showTraffic ? "btn text-white bg-blue-600" : "btn text-blue-500"
            } btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
            onClick={() => {
              handleShowOptionTable(optionDetailTagEnum.TRAFFIC);
            }}
          >
            <span className="align-middle">Tráfico</span>
          </button>
          <button
            type="button"
            className={`${
              showLost ? "btn text-white bg-blue-600" : "btn text-blue-500"
            } btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
            onClick={() => {
              handleShowOptionTable(optionDetailTagEnum.LOST);
            }}
          >
            <span className="align-middle">Pérdida de paquetes</span>
          </button>
          <button
            type="button"
            className={`${
              showTrafficBum
                ? "btn text-white bg-blue-600"
                : "btn text-blue-500"
            } btn border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20`}
            onClick={() => {
              handleShowOptionTable(optionDetailTagEnum.TRAFFIC_BUM);
            }}
          >
            <span className="align-middle">Tráfico BUM</span>
          </button>
        </div> */}

        <div className="">
          {showSessionBGP && <SessionSimpleTablesComponent />}
          {showLost && <GraphicComponent type={optionDetailTagEnum.LOST} />}
          {showTraffic && (
            <GraphicComponent type={optionDetailTagEnum.TRAFFIC} />
          )}
          {showTrafficBum && (
            <GraphicComponent type={optionDetailTagEnum.TRAFFIC_BUM} />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListServices;

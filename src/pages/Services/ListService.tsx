import React from "react";

import { Text } from "Common/Components/Text/textComponent";

import { Title } from "Common/Components/Title/titleComponent";
import { BLUE10, GREY150 } from "Common/constants/colors";

import ServiceTableComponent from "./ServiceTableComponent";

const ListServices = () => {
  return (
    <React.Fragment>
      <div className="pt-4 pr-4">
        <ul className="flex flex-wrap items-center gap-2 mb-3 text-sm font-normal justify-end pt-4 pr-4">
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
        </ul>
        <Title
          className="pl-4"
          size={"medium"}
          text={"Listado de servicios"}
          bold={"normal"}
          color={GREY150}
        />
        <div className="pt-2 pb-1 pl-4">
          <p className={`text-[#8A8F9C] text-base `}>
            Listado de usuarios habilitados dentro del sistema.
          </p>
        </div>
        <div >
          <ServiceTableComponent />
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListServices;

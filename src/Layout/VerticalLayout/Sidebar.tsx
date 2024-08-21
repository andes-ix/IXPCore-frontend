import React from "react";

//import images
import logoSm from "assets/images/logo-sm.png";
import logoDark from "assets/images/logo-dark.png";
import logoLight from "assets/images/logo-light.png";

import { Link } from "react-router-dom";

import VerticalLayout from "../VerticalLayout/Index";
import withRouter from "Common/withRouter";
import SimpleBar from "simplebar-react";
import HorizontalLayout from "Layout/HorizontalLayout";
import { AlignCenter } from "lucide-react";
import { Title } from "Common/Components/Title/titleComponent";
import { GREY100 } from "Common/constants/colors";

const Sidebar = ({ layoutType, layoutSidebarSizeType }: any) => {
  return (
    <React.Fragment>
      <div
        className={` app-menu w-vertical-menu bg-vertical-menu ltr:border-r rtl:border-l border-vertical-menu-border fixed bottom-0 top-0 z-[1003] transition-all duration-75 ease-linear group-data-[sidebar-size=md]:w-vertical-menu-md group-data-[sidebar-size=sm]:w-vertical-menu-sm group-data-[sidebar-size=sm]:pt-header group-data-[sidebar=dark]:bg-vertical-menu-dark group-data-[sidebar=dark]:border-vertical-menu-dark group-data-[sidebar=brand]:bg-vertical-menu-brand group-data-[sidebar=brand]:border-vertical-menu-brand group-data-[sidebar=modern]:bg-gradient-to-tr group-data-[sidebar=modern]:to-vertical-menu-to-modern group-data-[sidebar=modern]:from-vertical-menu-form-modern group-data-[layout=horizontal]:w-full group-data-[layout=horizontal]:bottom-auto group-data-[layout=horizontal]:top-header md:block print:hidden group-data-[sidebar-size=sm]:absolute group-data-[sidebar=modern]:border-vertical-menu-border-modern group-data-[layout=horizontal]:dark:bg-zink-700 group-data-[layout=horizontal]:border-t group-data-[layout=horizontal]:dark:border-zink-500 group-data-[layout=horizontal]:border-r-0 group-data-[sidebar=dark]:dark:bg-zink-700 group-data-[sidebar=dark]:dark:border-zink-600 group-data-[layout=horizontal]:group-data-[navbar=scroll]:absolute group-data-[layout=horizontal]:group-data-[navbar=bordered]:top-[calc(theme('spacing.header')_+_theme('spacing.4'))] group-data-[layout=horizontal]:group-data-[navbar=bordered]:inset-x-4 group-data-[layout=horizontal]:group-data-[navbar=hidden]:top-0 group-data-[layout=horizontal]:group-data-[navbar=hidden]:h-16 group-data-[layout=horizontal]:group-data-[navbar=bordered]:w-[calc(100%_-_2rem)] group-data-[layout=horizontal]:group-data-[navbar=bordered]:[&.sticky]:top-header group-data-[layout=horizontal]:group-data-[navbar=bordered]:rounded-b-md group-data-[layout=horizontal]:shadow-md group-data-[layout=horizontal]:shadow-slate-500/10 group-data-[layout=horizontal]:dark:shadow-zink-500/10 hidden ${
          layoutType === "vertical"
            ? "group-data-[layout=horizontal]:opacity-0"
            : ""
        }`}
      >
        <div className="flex pt-7 px-5 pb-5 h-header group-data-[layout=horizontal]:hidden group-data-[sidebar-size=sm]:fixed group-data-[sidebar-size=sm]:top-0 group-data-[sidebar-size=sm]:bg-vertical-menu group-data-[sidebar-size=sm]:group-data-[sidebar=dark]:bg-vertical-menu-dark group-data-[sidebar-size=sm]:group-data-[sidebar=brand]:bg-vertical-menu-brand group-data-[sidebar-size=sm]:group-data-[sidebar=modern]:bg-vertical-menu-modern group-data-[sidebar-size=sm]:z-10 group-data-[sidebar-size=sm]:w-[calc(theme('spacing.vertical-menu-sm')_-_1px)] group-data-[sidebar-size=sm]:group-data-[sidebar=dark]:dark:bg-zink-700">
          <Link
            to="#"
            className="group-data-[sidebar=dark]:hidden group-data-[sidebar=brand]:hidden group-data-[sidebar=modern]:hidden"
          >
            <span className="hidden group-data-[sidebar-size=sm]:block">
              <img src={logoSm} alt="" className="h-6 mx-auto" />
            </span>
            <span className="group-data-[sidebar-size=sm]:hidden" >
            <img src={"/img/logo.webp"} alt="PIT" width={72} height={84} />
            </span>
          </Link>
          <Link
            to="#"
            className="hidden group-data-[sidebar=dark]:block group-data-[sidebar=brand]:block group-data-[sidebar=modern]:block"
          >
            <span className="hidden group-data-[sidebar-size=sm]:block">
              <img src={logoSm} alt="" className="h-6 mx-auto" />
            </span>
            <span className="group-data-[sidebar-size=sm]:hidden">
            <img src={"/img/logo.webp"} alt="PIT" width={72} height={84} />
            </span>
          </Link>
          <button
            type="button"
            className="hidden p-0 float-end"
            id="vertical-hover"
          >
            <i className="ri-record-circle-line"></i>
          </button>
        </div>

        {layoutType === "vertical" && layoutSidebarSizeType !== "sm" ? (
          <SimpleBar
            id="scrollbar"
            className="group-data-[sidebar-size=md]:max-h-[calc(100vh_-_theme('spacing.header')_*_1.2)] group-data-[sidebar-size=lg]:max-h-[calc(100vh_-_theme('spacing.header')_*_1.2)] group-data-[layout=horizontal]:h-56 group-data-[layout=horizontal]:md:h-auto group-data-[layout=horizontal]:overflow-auto group-data-[layout=horizontal]:md:overflow-visible group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:mx-auto"
          >
            <div className="pt-20">
              <ul
                className=" group-data-[layout=horizontal]:flex group-data-[layout=horizontal]:flex-col group-data-[layout=horizontal]:md:flex-row"
                id="navbar-nav"
              >
                <VerticalLayout />
              </ul>
            </div>

            <div
            style={{
              height: 235,
              alignItems: "flex-end",
              paddingBottom: "10%",
              backgroundColor:"#E9E3FF",
              width:"80%",
              marginLeft:"25px",
              borderRadius:10,
              marginTop:60,
            }}
          >
          <div 
          style={{
          marginLeft:"25px",
          }}
          >
          <img src={"/img/active-man.svg"} alt="PIT" width={170} height={193} ></img>
          </div>
          <Title
              bold={"bold"}
              size={"normal-bg"}
              color={GREY100}
              className="pt-5 font-public"
              text="Servicio de soporte"
            ></Title>
            <p className={`text-[#8A8F9C] text-base `} 
            style={{
              fontSize:"12px",
            }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Duis gravida porttitor tempor. 
              </p>
              <button
              type="button"
              className="text-white btn bg-custom-500 border-custom-500 hover:text-white hover:bg-custom-600 hover:border-custom-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
              >
              <span className="align-middle">Enviar ticket</span>
              </button>
          </div>
          </SimpleBar>
        ) : (
          <div
            id="scrollbar"
            className="group-data-[sidebar-size=md]:max-h-[calc(100vh_-_theme('spacing.header')_*_1.2)] group-data-[sidebar-size=lg]:max-h-[calc(100vh_-_theme('spacing.header')_*_1.2)] group-data-[layout=horizontal]:h-56 group-data-[layout=horizontal]:md:h-auto group-data-[layout=horizontal]:overflow-auto group-data-[layout=horizontal]:md:overflow-visible group-data-[layout=horizontal]:max-w-screen-2xl group-data-[layout=horizontal]:mx-auto"
          >
            <div>
              <ul
                className="group-data-[layout=horizontal]:flex group-data-[layout=horizontal]:flex-col group-data-[layout=horizontal]:md:flex-row"
                id="navbar-nav"
              >
                <HorizontalLayout />
              </ul>
            </div>
          </div>
        )}
      </div>
      <div
        id="sidebar-overlay"
        className="absolute inset-0 z-[1002] bg-slate-500/30 hidden"
      ></div>
    </React.Fragment>
  );
};

export default withRouter(Sidebar);

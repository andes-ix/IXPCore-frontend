import CustomDrawerComponent, {
  TypeDrawerEnum,
} from "Common/Components/CustomDrawer/customDrawerComponent";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import {
  BLUE10,
  BLUE50,
  GREY10,
  GREY100,
  GREY15,
  GREY150,
} from "Common/constants/colors";
import { Download, X } from "lucide-react";

interface DrawerPaymentProps {
  handleDrawerOpen: () => void;
  isDrawerOpen: boolean;
  itemDetail: any;
}

const DrawerPaymentComponent: React.FC<DrawerPaymentProps> = ({
  handleDrawerOpen,
  isDrawerOpen = false,
  itemDetail,
}) => {
  console.log("este es el item detail dentro de drawer", itemDetail);
  const { extra_details } = itemDetail;
  return (
    <CustomDrawerComponent
      handleCustomDrawer={handleDrawerOpen}
      showCustomDrawer={isDrawerOpen}
      type={TypeDrawerEnum.BOTTOM_SM}
      body={
        <div className="overflow-y-auto max-h-[90vh] hide-scrollbar">
          {/* title section  */}
          <div className="flex pt-10 pb-5 mr-10 ml-10 mb-10 justify-between border-b  border-slate-200">
            <div className="leading-6">
              <div className="flex gap-1">
                <Title
                  bold={"bold"}
                  color={GREY150}
                  size={"medium"}
                  text={"Detalle de pago"}
                />
                <></>
                <Title
                  bold={"bold"}
                  color={BLUE10}
                  size={"medium"}
                  text={itemDetail?.number}
                />
              </div>
            </div>
            <span className="cursor-pointer" onClick={handleDrawerOpen}>
              <X color={GREY15} />
            </span>
          </div>

          <div className="flex pl-10 pr-10 gap-1 ">
            {/* section left to drawer */}
            <div className=" w-2/5 pl-10 pr-10 pt-20 mb-10 border-solid border-2 border-[#EFEFEF] rounded-md">
              {/* client information */}
              <div>
                <Text
                  color={GREY150}
                  bold={"bold"}
                  size={"big-sm"}
                  text={"Datos del cliente"}
                ></Text>
                <Text
                  color={BLUE50}
                  size={"medium"}
                  text={extra_details?.isp_name}
                ></Text>
                <Text
                  size={"medium"}
                  color={GREY15}
                  text={extra_details?.isp_document}
                ></Text>
                <Text
                  size={"medium"}
                  color={GREY100}
                  bold={"semi-bold"}
                  text={"Dirección"}
                ></Text>
                <Text
                  color={GREY15}
                  size={"medium"}
                  text={extra_details?.isp_direction_text.toUpperCase()}
                ></Text>
              </div>
              {/* add services */}
              <div className="pt-10">
                <Text
                  color={GREY150}
                  bold={"bold"}
                  size={"big"}
                  text={"Servicios asociados"}
                ></Text>

                {/* <Text
                  className="pt-4"
                  size={"medium"}
                  color={GREY15}
                  text={"[SERV-0010] Puerta a Conexión 10Gbps - Pago mensual"}
                ></Text>
                <Text
                  className="pt-4"
                  size={"medium"}
                  color={GREY15}
                  text={"[SERV-0020] Crossconexión"}
                ></Text> */}
              </div>
            </div>
            {/* section rigth to drawer */}
            <div className=" w-1/2 p-10 mb-10  ">
              <div className="   flex pb-10 justify-between ">
                <div className="w-10/12">
                  <div>
                    <Text
                      size={"big"}
                      bold="bold"
                      color={GREY150}
                      text={"Información general del pago"}
                    ></Text>
                    <div className="flex gap-1 pt-2">
                      <Text
                        size={"medium"}
                        color={GREY100}
                        text={"Fecha:"}
                      ></Text>
                      <Text
                        size={"big-sm"}
                        color={BLUE10}
                        bold="bold"
                        text={itemDetail?.date}
                      />
                    </div>

                    <Text
                      className="pt-2"
                      color={GREY10}
                      bold={"bold"}
                      size={"big-sm"}
                      text={"Cuenta destino"}
                    ></Text>
                  </div>
                  <div className="flex pt-5 pb-5 justify-between leading-5 w-10/12">
                    <div className="flex flex-col">
                      <Title
                        color={BLUE10}
                        bold={"bold"}
                        size={"medium"}
                        text={`S/ ${itemDetail?.amount_total || 0} ${
                          extra_details?.currency
                        }`}
                      />
                      <Text
                        color={GREY10}
                        size={"big-sm"}
                        bold="bold"
                        text={"Importe"}
                      />
                    </div>
                    <div className="flex flex-col">
                      <Title
                        color={BLUE10}
                        bold={"bold"}
                        size={"medium"}
                        text={itemDetail?.bank}
                      />
                      <Text
                        color={GREY15}
                        size={"medium-sm"}
                        text={extra_details?.account_bank}
                      />
                      <Text
                        color={GREY10}
                        size={"big-sm"}
                        bold="bold"
                        text={"Banco"}
                      />
                    </div>
                    <div className="flex flex-col">
                      <Title
                        color={BLUE10}
                        bold={"bold"}
                        size={"medium"}
                        text={extra_details?.currency}
                      />
                      <Text
                        color={GREY10}
                        size={"big-sm"}
                        bold="bold"
                        text={"Moneda"}
                      />
                    </div>
                  </div>
                  <div>
                    <Text
                      size={"big-sm"}
                      color={GREY10}
                      bold={"semi-bold"}
                      text={"Observación"}
                    ></Text>
                    <Text
                      color={GREY15}
                      size={"medium"}
                      text={extra_details?.display_name}
                    ></Text>
                  </div>
                </div>

                {extra_details?.file && (
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      const fileUrl = extra_details?.file;
                      if (fileUrl) {
                        const link = document.createElement("a");
                        link.href = fileUrl;
                        link.setAttribute("download", "payment.pdf"); // El nombre del archivo descargado será "invoice.pdf"
                        link.setAttribute("target", "_blank"); // Abrir en nueva ventana para asegurar que no lo reemplace
                        document.body.appendChild(link);
                        link.click();
                        document.body.removeChild(link); // Eliminar el enlace temporal del DOM
                      }
                    }}
                  >
                    <div
                      className={`flex items-center justify-center size-10 rounded-md  bg-[${BLUE10}]`}
                    >
                      <Download className="size-5" color={"white"} />
                    </div>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DrawerPaymentComponent;

import CustomDrawerComponent, {
  TypeDrawerEnum,
} from "Common/Components/CustomDrawer/customDrawerComponent";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import {
  BLACK200,
  BLUE10,
  BLUE100,
  BLUE250,
  BLUE50,
  GREY10,
  GREY100,
  GREY15,
  GREY150,
} from "Common/constants/colors";
import { Download, QrCode, X } from "lucide-react";
import moment from "moment";

interface DrawerInvoiceProps {
  handleDrawerOpen: () => void;
  isDrawerOpen: boolean;
  itemDetail: any;
}

const DrawerInvoiceComponent: React.FC<DrawerInvoiceProps> = ({
  handleDrawerOpen,
  isDrawerOpen = false,
  itemDetail,
}) => {
  const { extra_details } = itemDetail;
  // const columnsTest = [
  //   { key: "id", label: "Order ID" },
  //   { key: "shop", label: "Shop" },
  //   { key: "customer", label: "Customer" },
  //   { key: "price", label: "Price" },
  // ];

  // const data = [
  //   {
  //     id: "#541254265",
  //     shop: "Amezon",
  //     customer: "Cleo Carson",
  //     price: "$4,521",
  //   },
  //   {
  //     id: "#744145235",
  //     shop: "Shoppers",
  //     customer: "Juston Eichmann",
  //     price: "$7,546",
  //   },
  // ];
  return (
    <CustomDrawerComponent
      handleCustomDrawer={handleDrawerOpen}
      showCustomDrawer={isDrawerOpen}
      type={TypeDrawerEnum.BOTTOM}
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
                  text={"Detalle de factura"}
                />
                <></>
                <Title
                  bold={"bold"}
                  color={BLUE10}
                  size={"medium"}
                  text={itemDetail?.number}
                />
              </div>

              <div className="flex gap-1">
                <Text size={"big-sm"} color={GREY15} text={"Emisión"} />
                <Text
                  size={"big-sm"}
                  color={BLUE10}
                  text={moment(itemDetail.invoice_date).format("DD/MM/YYYY")}
                />
              </div>
            </div>
            <span className="cursor-pointer" onClick={handleDrawerOpen}>
              <X color={GREY15} />
            </span>
          </div>

          <div className="flex pl-10 pr-10 justify-between ">
            {/* section left to drawer */}
            <div className=" w-1/2 p-10 mb-10 border-solid border-2 border-[#EFEFEF] rounded-md">
              <div className=" flex pb-10 justify-between ">
                <div>
                  <img className="w-16 h-22" src={"/img/logo.webp"} alt="PIT" />
                </div>
                {itemDetail?.extra_details?.file && (
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      const fileUrl = itemDetail?.extra_details?.file;
                      if (fileUrl) {
                        const link = document.createElement("a");
                        link.href = fileUrl;
                        link.setAttribute("download", "invoice.pdf"); // El nombre del archivo descargado será "invoice.pdf"
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
              <div>
                <Text
                  size={"big-sm"}
                  color={GREY150}
                  text={extra_details?.isp_name}
                ></Text>
                <Text
                  size={"big"}
                  color={BLUE100}
                  text={"RUC 20605039546"}
                ></Text>
                <Text
                  color={GREY150}
                  size={"medium"}
                  text={extra_details?.pit_direction_1}
                ></Text>
                <Text
                  color={GREY150}
                  bold={"bold"}
                  size={"big-sm"}
                  text={extra_details?.pit_direction_2?.toUpperCase()}
                ></Text>
              </div>
              <div className="flex pt-5 pb-5 justify-evenly">
                <div className="flex flex-col items-center">
                  <Text
                    color={BLUE10}
                    bold={"semi-bold"}
                    size={"big-sm"}
                    text={moment(itemDetail.invoice_date_due).format(
                      "DD/MM/YYYY"
                    )}
                  />
                  <Text color={GREY15} size={"big-sm"} text={"Vencimiento"} />
                </div>
                <div className="flex flex-col items-center">
                  <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                    <div className="flex gap-1 justify-center items-center">
                      {itemDetail?.payment_state}
                    </div>
                  </span>
                  <Text color={GREY15} size={"big-sm"} text={" Estatus"} />
                </div>
                <div className="flex flex-col items-center">
                  <Text
                    color={BLUE10}
                    bold={"semi-bold"}
                    size={"big-sm"}
                    text={`$ ${itemDetail?.amount_total}`}
                  />
                  <Text color={GREY15} size={"big-sm"} text={"Total"} />
                </div>
              </div>
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
                  text={itemDetail?.extra_details?.isp_name}
                ></Text>
                <Text
                  size={"medium"}
                  color={GREY15}
                  text={extra_details?.pit_document}
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
                  text={itemDetail?.extra_details?.isp_direction_text}
                ></Text>
              </div>
              <div className="flex pt-10 justify-between ">
                <div className="w-1/3">
                  <Text
                    color={GREY150}
                    size={"big-sm"}
                    text="Detraccion"
                    bold={"bold"}
                  ></Text>
                  <Text
                    color={GREY15}
                    text={extra_details?.detraccion_comentary}
                    size={"medium"}
                  />
                </div>
                <div className="w-1/3">
                  <Text
                    color={GREY150}
                    size={"big-sm"}
                    text="Descripcion"
                    bold={"bold"}
                  ></Text>
                  <Text
                    color={GREY15}
                    text={extra_details?.detraccion_description}
                    size={"medium"}
                  />
                </div>

                <div className="w-1/4">
                  <Title
                    color={BLUE10}
                    bold={"bold"}
                    size={"normal-xl"}
                    text={extra_details?.detraccion_amount}
                  ></Title>
                  <Text
                    color={GREY10}
                    bold={"bold"}
                    text={"Monto detraccion"}
                    size={"medium"}
                  />
                </div>
              </div>
              <div className="pt-5">
                {/* <CustomTableSimpleComponent
                  columns={columnsTest}
                  data={data}
                ></CustomTableSimpleComponent> */}
                <div className="flex pt-5 justify-end">
                  <div className="flex w-1/2">
                    <table className="w-full">
                      <thead className="ltr:text-left rtl:text-right ">
                        <tr className="">
                          <th className="px-3.5 py-2.5 font-semibold text-[#8A8F9C]  bg-[#F1F5F9]">
                            Base imponible
                          </th>
                          <th className="px-3.5 py-2.5 font-semibold text-[#8A8F9C]  bg-[#F1F5F9]">
                            $ {extra_details?.amount_untaxed || 0}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-slate-50 dark:odd:bg-zink-600 dark:even:bg-zink-700">
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text text="IGV" color={GREY10} size="medium-sm" />
                          </td>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text
                              text={`$ ${extra_details?.amount_tax || 0}`}
                              color={BLUE250}
                              size="medium"
                            />
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50 dark:odd:bg-zink-600 dark:even:bg-zink-700">
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text
                              text="Total"
                              color={GREY10}
                              size="medium-sm"
                              bold="bold"
                            />
                          </td>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text
                              text={`$ ${itemDetail?.amount_total || 0}`}
                              color={GREY10}
                              size="medium"
                              bold="bold"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* section rigth to drawer */}
            <div className=" w-1/2 pl-10 pt-6 mb-10 ">
              <div className="w-2/3">
                <div>
                  <Text
                    color={GREY150}
                    bold={"bold"}
                    size={"big-sm"}
                    text={"Observaciones"}
                  ></Text>

                  <Text
                    size={"medium"}
                    className="pt-3"
                    color={GREY15}
                    text={
                      "Por favor utilice la siguiente referencia al realizar"
                    }
                  ></Text>
                  <div className="flex gap-1">
                    <Text
                      size={"medium"}
                      color={GREY15}
                      text={"su pago:"}
                    ></Text>
                    <Text
                      color={BLUE50}
                      bold="bold"
                      size={"medium"}
                      text={itemDetail?.number}
                    ></Text>
                  </div>
                  <Text
                    className="pt-3"
                    size={"medium"}
                    color={GREY15}
                    text={
                      "Autorizado mediante resolución de Superintendencia Inc c Art 2 RS 155-2017/SUNAT. BANCO DE LA NACION - CTA CTE: 00-074-173713."
                    }
                  ></Text>
                </div>

                <div className="pt-5">
                  <div className="flex pt-5">
                    <table className="w-full">
                      <thead className="ltr:text-left rtl:text-right ">
                        <tr className="">
                          <th className="px-3.5 py-2.5 font-semibold text-[#8A8F9C]  bg-[#F1F5F9]">
                            Base imponible
                          </th>
                          <th className="px-3.5 py-2.5 font-semibold text-[#8A8F9C]  bg-[#F1F5F9]">
                            $ {extra_details?.amount_untaxed || 0}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="odd:bg-white even:bg-slate-50 dark:odd:bg-zink-600 dark:even:bg-zink-700">
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text text="IGV" color={GREY10} size="medium-sm" />
                          </td>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text
                              text={`$ ${extra_details?.amount_tax || 0}`}
                              color={BLUE250}
                              size="medium"
                            />
                          </td>
                        </tr>
                        <tr className="odd:bg-white even:bg-slate-50 dark:odd:bg-zink-600 dark:even:bg-zink-700">
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text
                              text="Total"
                              color={GREY10}
                              size="medium-sm"
                              bold="bold"
                            />
                          </td>
                          <td className="px-3.5 py-2.5 border-y border-slate-200 dark:border-zink-500">
                            <Text
                              text={`$ ${itemDetail?.amount_total || 0}`}
                              color={GREY10}
                              size="medium"
                              bold="bold"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="pt-5">
                  <Text
                    color={BLACK200}
                    bold={"bold"}
                    size={"big"}
                    text={"Son"}
                  ></Text>

                  <Text
                    color={GREY15}
                    size={"medium"}
                    className="pt-3"
                    text={
                      "Operación sujeta al sistema de Pago de Obligaciones Tributarias-SPOT, Banco de la Nacion 12.0% Cod Serv. 037"
                    }
                  ></Text>

                  <QrCode className="size-20 pl-4 pt-5" />
                  <Text
                    color={GREY15}
                    size={"medium-sm"}
                    className="pt-3"
                    text={"Timbre electronico"}
                  ></Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DrawerInvoiceComponent;

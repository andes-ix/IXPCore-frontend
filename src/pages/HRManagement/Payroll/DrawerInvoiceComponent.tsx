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
  GREY1,
  GREY10,
  GREY100,
  GREY15,
  GREY150,
} from "Common/constants/colors";
import { Download, QrCode, X } from "lucide-react";
import moment from "moment";
import { CustomTableSimpleComponent } from "Common/Components/CustomTableSimple/customTableSimple";

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
  const columnsTest = [
    { key: "id", label: "Descripción" },
    { key: "shop", label: "Cantidad" },
    { key: "customer", label: "Precio unitario" },
    { key: "price", label: "Impuestos" },
    { key: "price", label: "Importe" },
  ];

  const data: any = [];
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
            <div className=" w-3/4 p-10 mb-10 border-solid border-2 border-[#EFEFEF] rounded-md">
              <div className=" flex pb-10 justify-between  ">
                <div className="card shadow-none w-1/3 h-72 rounded-md">
                  <div
                    className={`h-1/3 bg-[${GREY1}]  flex justify-between  `}
                  >
                    <div className="flex flex-col pl-5 leading-5 justify-center">
                      <Text
                        bold="bold"
                        size={"big-sm"}
                        color={GREY150}
                        text={"Factura"}
                      />
                      <Text
                        color={BLUE10}
                        bold="bold"
                        size="big"
                        text={itemDetail?.number}
                      />
                    </div>
                    <div className="pt-4 pr-4">
                      <span className="px-2.5 py-0.5 inline-block text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                        <div className="flex gap-1 justify-center items-center">
                          {itemDetail?.payment_state}
                        </div>
                      </span>
                    </div>
                  </div>

                  <div className={`h-1/3 bg-[#F9F9F9]  flex justify-between  `}>
                    <div className="flex flex-col pl-5 leading-5 justify-center">
                      <Text
                        bold="bold"
                        size={"big-sm"}
                        color={GREY150}
                        text={"Vencimiento"}
                      />
                      <Text
                        color={BLUE10}
                        bold={"semi-bold"}
                        size={"big-sm"}
                        text={moment(itemDetail.invoice_date_due).format(
                          "DD/MM/YYYY"
                        )}
                      />
                    </div>
                  </div>
                  <div
                    className={`h-1/3 bg-[${GREY1}]  flex justify-between  `}
                  >
                    <div className="flex flex-col pl-5 leading-5 justify-center">
                      <Text
                        bold="bold"
                        size={"big-sm"}
                        color={GREY150}
                        text={"Total"}
                      />
                      <Text
                        color={BLUE10}
                        bold={"semi-bold"}
                        size={"big-sm"}
                        text={`$ ${itemDetail?.amount_total || 0} `}
                      />
                    </div>
                  </div>
                </div>

                <div className=" pl-4 w-3/4  h-72 ">
                  <div
                    className={`flex flex-col p-5 h-full rounded-md  bg-[#F9F9F9]`}
                  >
                    <Text
                      size={"big"}
                      className="pb-5"
                      bold="bold"
                      color={GREY150}
                      text={"Cargos adicionales"}
                    />
                    <div className="border-solid border-t-2 border-[#EFEFEF]"></div>
                    <div className="flex justify-between pt-5">
                      <div>
                        <Text
                          color={GREY150}
                          size={"big-sm"}
                          bold="bold"
                          text="Impuestos y detracciones"
                        />
                        <Text
                          size={"medium"}
                          color={GREY15}
                          text={
                            "Operación sujeta al SPOT con el gobierno central..."
                          }
                        />
                      </div>
                      <div>
                        <Title
                          size={"medium"}
                          color={BLUE10}
                          bold="bold"
                          text={extra_details?.amount_tax}
                        />
                        <Text
                          size={"big-sm"}
                          text={"Monto total"}
                          color={GREY10}
                          bold={"bold"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-5">
                <CustomTableSimpleComponent
                  columns={columnsTest}
                  data={data}
                ></CustomTableSimpleComponent>
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
            <div className=" flex justify-center items-center w-3/4 mb-10 ">
              <div className=" pl-10 w-full h-full">
                <iframe
                  className="rounded-md"
                  src={extra_details?.file}
                  width="100%"
                  height="100%"
                  title="PDF Viewer"
                  frameBorder="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DrawerInvoiceComponent;

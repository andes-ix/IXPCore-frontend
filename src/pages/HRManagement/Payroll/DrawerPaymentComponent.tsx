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
}

const DrawerPaymentComponent: React.FC<DrawerPaymentProps> = ({
  handleDrawerOpen,
  isDrawerOpen = false,
}) => {
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
                  text={"001-00001753"}
                />
              </div>

              <div className="flex gap-1">
                <Text size={"big-sm"} color={GREY15} text={"Emisión"} />
                <Text size={"big-sm"} color={BLUE10} text={"10/03/2024"} />
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
                  text={
                    "Fiber digital sociedad comercial de responsabilidad limitada"
                  }
                ></Text>
                <Text
                  size={"medium"}
                  color={GREY15}
                  text={"RUC 20604630488"}
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
                  text={
                    "MZA,L18 Lote 25,C,H,Mariscal Cáceres (IntercesiónAv., central y Av. Muro)"
                  }
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

                <Text
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
                ></Text>
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
                        color={BLUE50}
                        bold="bold"
                        size={"medium"}
                        text={"10/03/2024"}
                      ></Text>
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
                        text={"S/ 357,00 PEN"}
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
                        text={"Banco de la nación"}
                      />
                      <Text
                        color={GREY15}
                        size={"medium-sm"}
                        text={"00-074-173713"}
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
                        text={"Soles"}
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
                      text={"E001 0000000110 FIBER LINE S.A.C"}
                    ></Text>
                  </div>
                </div>

                <span className="cursor-pointer" onClick={() => {}}>
                  <div
                    className={`flex items-center justify-center size-10 rounded-md  bg-[${BLUE10}]`}
                  >
                    <Download className="size-5" color={"white"} />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default DrawerPaymentComponent;

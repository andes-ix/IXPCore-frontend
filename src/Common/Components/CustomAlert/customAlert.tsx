import React from "react";
import Alert from "Common/Components/Alert";
import Modal from "Common/Components/Modal";
import { AlertTypeEnum } from "../../constants/alertType.enum";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { RED100 } from "Common/constants/colors";
import { Title } from "../Title/titleComponent";

interface AlertProps {
  title?: React.ReactNode;
  msg?: React.ReactNode;
  type?: AlertTypeEnum;
  show: boolean;
  handleShowAlert: any;
}

// Función para obtener el estilo de alerta basado en el tipo
const getAlertClassName = (type: AlertTypeEnum | undefined) => {
  switch (type) {
    case AlertTypeEnum.ERROR:
      return "flex gap-2 px-4 py-3 text-sm border border-red-200 rounded-md md:items-center bg-red-50 dark:bg-red-400/20 dark:border-red-500/50";
    case AlertTypeEnum.SUCCESS:
      return "flex gap-2 px-4 py-3 text-sm text-green-500 border border-green-200 rounded-md md:items-center bg-green-50 dark:bg-green-400/20 dark:border-green-500/50";
    default:
      return "flex gap-2 px-4 py-3 text-sm border rounded-md md:items-center border-custom-200 text-custom-500 bg-custom-50 dark:bg-custom-400/20 dark:border-custom-500/50";
  }
};

const getAlertIcon = (type: AlertTypeEnum | undefined) => {
  switch (type) {
    case AlertTypeEnum.SUCCESS:
      return (
        <div className="ml-5 w-10 h-10 bg-[#B7FFDD] flex items-center justify-center rounded-md">
          <CheckCircle2 width={20} height={20} />
        </div>
      );
    case AlertTypeEnum.ERROR:
      return (
        <div className="ml-5 w-10 h-10 bg-[#FFE6E6] flex items-center justify-center rounded-md">
          <AlertCircle width={20} height={20} color={RED100} />
        </div>
      );
    default:
      return "";
  }
};

const getAlertClassButtomX = (type: AlertTypeEnum | undefined) => {
  switch (type) {
    case AlertTypeEnum.ERROR:
      return "absolute top-0 right-0 pt-8 pr-8 text-[#FB516D] transition hover:text-[#E0244E] active:text-[#D0133C]";
    case AlertTypeEnum.SUCCESS:
      return "absolute top-0 right-0 pt-8 pr-8 text-[#2E9B69] transition hover:text-[#1F8A5F] active:text-[#1F8A5F]";
    default:
      return "";
  }
};

export const CustomAlert: React.FC<AlertProps> = ({
  title,
  msg,
  type,
  show,
  handleShowAlert,
}) => {
  return (
    <Modal
      show={show}
      onHide={handleShowAlert}
      id="topModal"
      modal-top="true"
      className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4"
      dialogClassName="w-screen md:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col"
    >
      <Alert className={getAlertClassName(type)}>
        {getAlertIcon(type)}
        <a href="#" onClick={handleShowAlert}>
          <Title className={getAlertClassButtomX(type)} text="X" />
        </a>
        <div className="flex ml-5 pb-4 flex-col gap-1 pt-4 w-[70%]">
          <div>{title}</div>
          <div>{msg}</div>
        </div>
      </Alert>
    </Modal>
  );
};

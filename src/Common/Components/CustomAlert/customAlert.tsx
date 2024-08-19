import React from "react";
import Alert from "Common/Components/Alert";
import Modal from "Common/Components/Modal";
import { AlertTypeEnum } from "../../constants/alertType.enum";
import { ChevronRight, CheckCircle2, AlertCircle } from "lucide-react";
import { RED10, RED100 } from "Common/constants/colors";
import { Text } from "../Text/textComponent";
import { Title } from "../Title/titleComponent";

interface AlertProps {
  title?: React.ReactNode;
  msg?: React.ReactNode;
  type: AlertTypeEnum;
  show: boolean;
  handleShowAlert: any;
}

export const CustomAlert: React.FC<AlertProps> = (props) => {
  const { title, msg, type, show, handleShowAlert } = props;
  const className =
    type === AlertTypeEnum.ERROR
      ? "flex gap-2 px-4 py-3 text-sm border border-red-200 rounded-md md:items-center bg-red-50 dark:bg-red-400/20 dark:border-red-500/50"
      : "flex gap-2 px-4 py-3 text-sm  border border-red-200 rounded-md md:items-center bg-red-50 dark:bg-red-400/20 dark:border-red-500/50";
  return (
    <Modal
      show={show}
      onHide={handleShowAlert}
      id="topModal"
      modal-top="true"
      className="fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4"
      dialogClassName="w-screen md:w-[45rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col"
    >
      <Alert className={className}>
        {type === AlertTypeEnum.SUCCESS ? (
          <CheckCircle2 />
        ) : type === AlertTypeEnum.ERROR ? (
          <div
            className={`ml-5 w-10 h-10  bg-[${RED10}] flex items-center justify-center rounded-md`}
          >
            <AlertCircle width={20} height={20} color={RED100} />
          </div>
        ) : null}
        <a href="#" onClick={handleShowAlert}>
          <Title
            className={`absolute top-0 right-0 p-3 text-[#FB516D] transition hover:text-[#E0244E] active:text-[#D0133C]`}
            text={"X"}
          ></Title>
        </a>
        <div className="flex ml-5 pb-4 flex-col gap-1 pt-6 w-[60%]">
          <div>{title}</div>

          <div>{msg}</div>
        </div>
      </Alert>
    </Modal>
  );
};

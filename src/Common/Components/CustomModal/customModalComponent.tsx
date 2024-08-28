import Modal from "../Modal";

export enum TypeModalEnum {
  XSMART = "XSMART",
  SMART = "SMART",
  NORMAL = "NORMAL",
  LARGE = "LARGE",
  XLARGE = "XLARGE",
}

interface AlertProps {
  /**
   * El título del modal. Puede ser un nodo React.
   */
  title?: React.ReactNode;

  /**
   * El contenido del cuerpo del modal. Puede ser un nodo React.
   */
  body?: React.ReactNode;

  /**
   * El contenido del pie del modal. Puede ser un nodo React.
   */
  footer?: React.ReactNode;

  /**
   * Indica si el modal debe mostrarse o no.
   */
  showModal: boolean;

  /**
   * Función para manejar el cambio de visibilidad del modal.
   */
  handleShowModal: () => void;

  /**
   * Tipo de tamaño del modal.
   */
  /**
   * Tamaño del texto.
   * - `"XSMART"`
   * - `"SMART"`
   * - `"NORMAL"`
   * - `"LARGE"`
   * - `"XLARGE"`
   */
  size: TypeModalEnum;
}

const CustomModalComponent: React.FC<AlertProps> = ({
  title,
  body,
  footer,
  showModal = false,
  handleShowModal,
  size,
}) => {
  let className = "";
  let dialogClassName = "";

  switch (size) {
    case TypeModalEnum.XSMART:
      className =
        "fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4";
      dialogClassName =
        "w-screen md:w-[20rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full";
      break;
    case TypeModalEnum.SMART:
      className =
        "fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4";
      dialogClassName =
        "w-screen md:w-[25rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full";
      break;
    case TypeModalEnum.NORMAL:
      className =
        "fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4";
      dialogClassName =
        "w-screen md:w-[30rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full";
      break;
    case TypeModalEnum.LARGE:
      className =
        "fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4";
      dialogClassName =
        "w-screen md:w-[40rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full";
      break;
    case TypeModalEnum.XLARGE:
      className =
        "fixed flex flex-col transition-all duration-300 ease-in-out left-2/4 z-drawer -translate-x-2/4 -translate-y-2/4";
      dialogClassName =
        "w-screen md:w-[50rem] bg-white shadow rounded-md dark:bg-zink-600 flex flex-col h-full";
      break;
    default:
      className = "";
      dialogClassName = "";
      break;
  }

  return (
    <Modal
      show={showModal}
      onHide={handleShowModal}
      id="customModal"
      modal-center="true"
      className={className}
      dialogClassName={dialogClassName}
    >
      {title && <Modal.Title>{title}</Modal.Title>}
      {body && <Modal.Body>{body}</Modal.Body>}
      {footer && <Modal.Footer>{footer}</Modal.Footer>}
    </Modal>
  );
};

export default CustomModalComponent;

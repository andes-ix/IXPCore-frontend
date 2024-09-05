import Drawer from "../Drawer";

export enum TypeDrawerEnum {
  END = "END",
  START = "START",
  BOTTOM = "BOTTOM",
  BOTTOM_SM = "BOTTOM_SM",
  TOP = "TOP",
}

interface AlertProps {
  /**
   * El título del modal. Puede ser un nodo React.
   */

  header?: React.ReactNode;

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
  showCustomDrawer: boolean;

  /**
   * Función para manejar el cambio de visibilidad del modal.
   */
  handleCustomDrawer: (() => void) | ((e: any) => void);

  /**
   * TypeDrawerEnum
   * -`"END"`
   * -`"START"`
   * -`"BOTTOM"`
   * -`"TOP"`
   */
  type: TypeDrawerEnum;
}

const CustomDrawerComponent: React.FC<AlertProps> = ({
  header,
  body,
  footer,
  showCustomDrawer = false,
  handleCustomDrawer,
  type,
}) => {
  let className = "";

  switch (type) {
    case TypeDrawerEnum.TOP:
      className =
        "fixed top-0 left-0 right-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow md:h-80 z-drawer dark:bg-zink-600";
      break;
    case TypeDrawerEnum.BOTTOM:
      className =
        "fixed bottom-0 left-0 right-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow md:h-[90%] z-drawer dark:bg-zink-600";
      break;
    case TypeDrawerEnum.BOTTOM_SM:
      className =
        "fixed bottom-0 left-0 right-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow md:h-[65%] z-drawer dark:bg-zink-600";
      break;
    case TypeDrawerEnum.END:
      className =
        "fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:right-0 rtl:left-0 md:w-80 z-drawer dark:bg-zink-600";
      break;
    case TypeDrawerEnum.START:
      className =
        "fixed inset-y-0 flex flex-col w-full transition-transform duration-300 ease-in-out transform bg-white shadow ltr:left-0 rtl:right-0 md:w-80 z-drawer dark:bg-zink-600";
      break;

    default:
      className = "";
      break;
  }
  return (
    <>
      <Drawer
        show={showCustomDrawer}
        onHide={handleCustomDrawer}
        id="drawerBottom"
        drawer-bottom="true"
        className={className}
      >
        {header && <Drawer.Header>{header}</Drawer.Header>}
        {body && <Drawer.Body>{body}</Drawer.Body>}
        {footer && <Drawer.Footer>{footer}</Drawer.Footer>}
      </Drawer>
    </>
  );
};

export default CustomDrawerComponent;

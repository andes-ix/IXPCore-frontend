import { Dropdown } from "../Dropdown";

interface AlertProps {
  /**
   * Activador del drop down
   */

  trigger: React.ReactNode;

  /**
   * string de class name de trigger
   */
  triggerClassName?: string;

  /**
   * El contenido del cuerpo  drop down. Puede ser un nodo React.
   */
  body?: React.ReactNode;

  /**
   * string de class name de body
   */
  bodyClassName?: string;
}

const CustomDropDownComponent: React.FC<AlertProps> = ({
  trigger,
  body,
  triggerClassName,
  bodyClassName,
}) => {
  return (
    <>
      <Dropdown className="relative flex items-center pr-5">
        <Dropdown.Trigger
          type={"input"}
          className={triggerClassName}
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
        >
          {trigger}
        </Dropdown.Trigger>
        <Dropdown.Content
          placement="right-end"
          className={bodyClassName}
          aria-labelledby="dropdownMenuButton"
        >
          {body}
        </Dropdown.Content>
      </Dropdown>
    </>
  );
};

export default CustomDropDownComponent;

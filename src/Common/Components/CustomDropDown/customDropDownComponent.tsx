import { useState, useRef, useEffect } from "react";
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
   * El contenido del cuerpo drop down. Puede ser un nodo React.
   */
  body?: React.ReactNode;

  /**
   * string de class name de body
   */
  bodyClassName?: string;

  autoClose?: boolean;
}

const CustomDropDownComponent: React.FC<AlertProps> = ({
  trigger,
  body,
  triggerClassName,
  bodyClassName,
  autoClose = true,
}) => {
  const [showAbove, setShowAbove] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePosition = () => {
      if (triggerRef.current && bodyRef.current) {
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const bodyHeight = bodyRef.current.offsetHeight;
        const spaceAbove = triggerRect.top;
        const spaceBelow = window.innerHeight - triggerRect.bottom;

        if (spaceBelow >= bodyHeight) {
          setShowAbove(false);
        } else if (spaceAbove >= bodyHeight) {
          setShowAbove(true);
        } else {
          setShowAbove(spaceBelow < spaceAbove);
        }
      }
    };

    handlePosition();
    window.addEventListener("resize", handlePosition);

    return () => {
      window.removeEventListener("resize", handlePosition);
    };
  }, []);

  return (
    <Dropdown className="relative flex items-center pr-5">
      <div ref={triggerRef}>
        <Dropdown.Trigger
          type={"input"}
          className={triggerClassName}
          id="dropdownMenuButton"
          data-bs-toggle="dropdown"
        >
          {trigger}
        </Dropdown.Trigger>
      </div>
      <div ref={bodyRef}>
        <Dropdown.Content
          placement={showAbove ? "top-end" : "bottom-end"} // Cambia la colocación dinámicamente
          className={bodyClassName}
          aria-labelledby="dropdownMenuButton"
          autoClose={autoClose}
        >
          {body}
        </Dropdown.Content>
      </div>
    </Dropdown>
  );
};

export default CustomDropDownComponent;

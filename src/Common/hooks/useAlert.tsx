import { useState, useCallback } from "react";
import { AlertTypeEnum } from "Common/constants/alertType.enum";

interface AlertState {
  show: boolean;
  title: JSX.Element | string;
  msg: JSX.Element | string;
  type: AlertTypeEnum;
}

const useAlert = () => {
  const [alertState, setAlertState] = useState<AlertState>({
    show: false,
    title: "",
    msg: "",
    type: AlertTypeEnum.SUCCESS,
  });

  const showAlert = useCallback(
    (
      type: AlertTypeEnum,
      title: JSX.Element | string,
      msg: JSX.Element | string
    ) => {
      setAlertState({
        show: true,
        type,
        title,
        msg,
      });

      // Ocultar la alerta después de 5 segundos
      setTimeout(() => {
        setAlertState((prevState) => ({ ...prevState, show: false }));
      }, 5000);
    },
    []
  );

  const hideAlert = useCallback(() => {
    setAlertState((prevState) => ({ ...prevState, show: false }));
  }, []);

  return { alertState, showAlert, hideAlert };
};

export default useAlert;

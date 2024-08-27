// AlertContext.tsx
import React, { createContext, useContext, useState, ReactNode } from "react";
import { AlertTypeEnum } from "Common/constants/alertType.enum";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert"; // Asegúrate de que CustomAlert esté bien configurado

interface AlertContextProps {
  showAlert: (type: AlertTypeEnum, title: any, msg: any) => void;
}

const AlertContext = createContext<AlertContextProps | undefined>(undefined);

export const useAlert = (): AlertContextProps => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
};

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const [alertState, setAlertState] = useState<{
    show: boolean;
    type: AlertTypeEnum;
    title: any;
    msg: any;
  } | null>(null);

  const showAlert = (type: AlertTypeEnum, title: string, msg: string) => {
    setAlertState({ show: true, type, title, msg });
    setTimeout(() => {
      setAlertState(null);
    }, 5000); // Ajusta el tiempo según lo necesites
  };

  const hideAlert = () => setAlertState(null);

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
      {alertState && (
        <CustomAlert
          type={alertState.type}
          show={alertState.show}
          handleShowAlert={hideAlert}
          title={alertState.title}
          msg={alertState.msg}
        />
      )}
    </AlertContext.Provider>
  );
};

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert";
import { AlertTypeEnum } from "Common/constants/alertType.enum";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { BLUE10, GREY100, RED100 } from "Common/constants/colors";
import { useNavigate } from "react-router-dom";

interface Alert2FContextProps {
  showAlert: boolean;
  hideAlert: () => void;
}

const Alert2FContext = createContext<Alert2FContextProps | undefined>(
  undefined
);

export const useAlert = (): Alert2FContextProps => {
  const context = useContext(Alert2FContext);
  if (!context) {
    throw new Error("useAlert must be used within an Alert2FProvider");
  }
  return context;
};

interface Alert2FProviderProps {
  children: ReactNode;
}

export const Alert2FProvider: React.FC<Alert2FProviderProps> = ({
  children,
}) => {
  const authUserRaw = localStorage.getItem("authUser");
  const alert2FShow = localStorage.getItem("alert2FShow") ? true : false;
  const authUser = authUserRaw ? JSON.stringify(authUserRaw) : null;
  const navigation = useNavigate();
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const handleShowAlert = (event: any) => {
    setShowAlert(!showAlert);
    return;
  };

  const handleSubmit = () => {
    setShowAlert(false);
    navigation("/user-profile");
  };

  useEffect(() => {
    if (authUser) {
      if (!alert2FShow) {
        const timeoutId = setTimeout(() => {
          setShowAlert(true);
          localStorage.setItem("alert2FShow", "true");
        }, 120000); // 120000 ms = 2 minutos

        return () => clearTimeout(timeoutId);
      }
    } else {
      localStorage.removeItem("alert2FShow");
    }
  }, [authUser]);

  const hideAlert = () => setShowAlert(false);

  return (
    <Alert2FContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {showAlert && (
        <>
          <CustomAlert
            type={AlertTypeEnum.ERROR}
            show={showAlert}
            handleShowAlert={handleShowAlert}
            title={
              <Title
                color={GREY100}
                bold={"bold"}
                size={"normal-bg"}
                text="Verificación en 2 pasos sin activar!"
              ></Title>
            }
            msg={
              <div className="flex flex-col gap-2">
                <Text
                  color={RED100}
                  text={
                    "Recuerda realizar la configuración del 2FA y agrega un nivel superior de protección adicional a tu cuenta."
                  }
                ></Text>
                <span className="cursor-pointer" onClick={handleSubmit}>
                  <Text bold="bold" color={BLUE10} text={"Activa ahora"}></Text>
                </span>
              </div>
            }
          />
        </>
      )}
    </Alert2FContext.Provider>
  );
};

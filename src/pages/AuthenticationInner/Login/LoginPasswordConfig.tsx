import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoginLayout from "./LoginLayout";
import PasswordConfig from "./PasswordConfig";
import withRouter from "Common/withRouter";
import { apiClient } from "services";
import { Title } from "Common/Components/Title/titleComponent";
import { Text } from "Common/Components/Text/textComponent";
import { GREY100, RED100 } from "Common/constants/colors";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert";
import { AlertTypeEnum } from "Common/constants/alertType.enum";

const LoginPasswordConfig = (props: any) => {
  const location = useLocation();
  const [showAlert, SetShowAlerts] = useState<boolean>(false);
  const [msgAlert, SetMsgAlert] = useState<JSX.Element | string>("");
  const [titleAlert, SetTitleAlert] = useState<JSX.Element | string>("");
  const handleShowAlert = (event: any) => {
    SetShowAlerts(!showAlert);
    return;
  };
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get("email");
  const code = searchParams.get("code");

  document.title = "Sign In | Tailwick - React Admin & Dashboard Template";
  useEffect(() => {
    const verifyCode = async () => {
      try {
        await apiClient.post("/v2/password_reset/verificate_code_password/", {
          email,
          code,
        });
      } catch (error) {
        console.error("Error verifying code:", error);
        SetShowAlerts(true);
        SetTitleAlert(
          <Title
            color={GREY100}
            bold={"bold"}
            size={"normal-bg"}
            text="Ha ocurrido un problema inesperado o de conexión"
          ></Title>
        );
        SetMsgAlert(
          <Text
            color={RED100}
            text={
              "Por favor, verifica tu conexión a internet e inténtalo nuevamente. Si el problema persiste, contacta a nuestro soporte técnico."
            }
          ></Text>
        );
      }
    };

    if (email && code) {
      verifyCode();
    }
  }, [email, code]);

  return (
    <React.Fragment>
      <LoginLayout>
        <CustomAlert
          type={AlertTypeEnum.ERROR}
          show={showAlert}
          handleShowAlert={handleShowAlert}
          title={titleAlert}
          msg={msgAlert}
        />
        <PasswordConfig />
      </LoginLayout>
    </React.Fragment>
  );
};

export default withRouter(LoginPasswordConfig);

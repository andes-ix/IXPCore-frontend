import React from "react";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert";
import useAlert from "Common/hooks/useAlert"; // Asegúrate de importar correctamente el hook

const GlobalAlert: React.FC = () => {
  const { alertState, hideAlert } = useAlert();

  return (
    <CustomAlert
      type={alertState.type}
      show={alertState.show}
      handleShowAlert={hideAlert}
      title={alertState.title}
      msg={alertState.msg}
    />
  );
};

export default GlobalAlert;

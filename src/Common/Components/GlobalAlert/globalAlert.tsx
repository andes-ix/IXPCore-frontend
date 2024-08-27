import React from "react";
import { CustomAlert } from "Common/Components/CustomAlert/customAlert";
import useAlert from "Common/hooks/useAlert"; // Asegúrate de importar correctamente el hook

const GlobalAlert: React.FC = () => {
  const { alertState, showAlert, hideAlert } = useAlert();

  if (!alertState.show) return null;

  return (
    <div className={`alert ${alertState.type}`}>
      <h2>{alertState.title}</h2>
      <p>{alertState.msg}</p>
      <button onClick={hideAlert}>Close</button>
    </div>
  );
};

export default GlobalAlert;

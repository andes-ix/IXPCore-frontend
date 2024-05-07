import { FunctionComponent, useState, useCallback } from "react";
import Login from "./Login";
import PortalPopup from "./PortalPopup";
import styles from "./FeedbackConfiguracinDeCont.module.css";

const FeedbackConfiguracinDeCont: FunctionComponent = () => {
  const [isLogin1Open, setLogin1Open] = useState(false);

  const openLogin1 = useCallback(() => {
    setLogin1Open(true);
  }, []);

  const closeLogin1 = useCallback(() => {
    setLogin1Open(false);
  }, []);

  return (
    <>
      <div className={styles.feedbackConfiguracinDeCont} onClick={openLogin1}>
        <div className={styles.grupo37820}>
          <b className={styles.configuracinDeContrasea}>
            Configuración de contraseña exitosa
          </b>
          <div className={styles.ingresaAlSistemaContainer}>
            <p
              className={styles.ingresaAlSistema}
            >{`Ingresa al sistema con tus credenciales de acceso para empezar a `}</p>
            <p className={styles.ingresaAlSistema}>
              disfrutar los beneficios de nuestro PCP.
            </p>
          </div>
          <img className={styles.frameCopyIcon} alt="" src="/frame-copy1.svg" />
          <div className={styles.rectngulo6419} />
          <img
            className={styles.trazado29750Icon}
            alt=""
            src="/trazado-29750.svg"
          />
        </div>
      </div>
      {isLogin1Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLogin1}
        >
          <Login onClose={closeLogin1} />
        </PortalPopup>
      )}
    </>
  );
};

export default FeedbackConfiguracinDeCont;

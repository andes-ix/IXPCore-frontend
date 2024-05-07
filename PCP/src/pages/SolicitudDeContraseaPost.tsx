import { FunctionComponent, useState, useCallback } from "react";
import FeedbackConfiguracinDeCont from "../components/FeedbackConfiguracinDeCont";
import PortalPopup from "../components/PortalPopup";
import styles from "./SolicitudDeContraseaPost.module.css";

const SolicitudDeContraseaPost: FunctionComponent = () => {
  const [isFeedbackConfiguracinDeContOpen, setFeedbackConfiguracinDeContOpen] =
    useState(false);

  const openFeedbackConfiguracinDeCont = useCallback(() => {
    setFeedbackConfiguracinDeContOpen(true);
  }, []);

  const closeFeedbackConfiguracinDeCont = useCallback(() => {
    setFeedbackConfiguracinDeContOpen(false);
  }, []);

  return (
    <>
      <div className={styles.solicitudDeContraseaPost}>
        <div className={styles.rectngulo1} />
        <div className={styles.rectngulo2} />
        <div className={styles.configuracinDeContrasea}>
          Configuración de contraseña
        </div>
        <div className={styles.tenEnCuenta}>
          Ten en cuenta los parámetros que debe cumplir la contraseña de acceso
          a configurar.
        </div>
        <div className={styles.contrasea}>Contraseña</div>
        <div className={styles.rectngulo4} />
        <img
          className={styles.trazado2501Icon}
          alt=""
          src="/trazado-2501.svg"
        />
        <div
          className={styles.guardar}
          onClick={openFeedbackConfiguracinDeCont}
        >
          Guardar
        </div>
        <div className={styles.rectngulo6} />
        <div className={styles.div}>**************</div>
        <div className={styles.div1}>**************</div>
        <div className={styles.confirmarContrasea}>Confirmar contraseña</div>
        <img
          className={styles.logoPlaceholder3RemovebgPrIcon}
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
        <img className={styles.bPreviewIcon} alt="" src="/bpreview.svg" />
        <img className={styles.bPreviewIcon1} alt="" src="/bpreview.svg" />
        <div className={styles.tuClaveDeContainer}>
          <p className={styles.tuClaveDeAccesoDebeCumpli}>
            <b>Tu clave de acceso debe cumplir con estos requisitos:</b>
          </p>
          <p className={styles.tuClaveDeAccesoDebeCumpli}>
            - Tener 8 caracteres
          </p>
          <p
            className={styles.tuClaveDeAccesoDebeCumpli}
          >{`- Ser alfanumérica con al menos 1 carácter numérico y un `}</p>
          <p className={styles.tuClaveDeAccesoDebeCumpli}>
            único carácter especial
          </p>
          <p className={styles.tuClaveDeAccesoDebeCumpli}>
            - Tener uno de estos caracteres especiales - / = . $ # *
          </p>
          <p className={styles.tuClaveDeAccesoDebeCumpli}>
            - Evita colocar información personal
          </p>
        </div>
      </div>
      {isFeedbackConfiguracinDeContOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFeedbackConfiguracinDeCont}
        >
          <FeedbackConfiguracinDeCont
            onClose={closeFeedbackConfiguracinDeCont}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default SolicitudDeContraseaPost;

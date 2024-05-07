import { FunctionComponent, useState, useCallback } from "react";
import FeedbackSolicitudDeRecupera from "./FeedbackSolicitudDeRecupera";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  const [
    isFeedbackSolicitudDeRecuperaOpen,
    setFeedbackSolicitudDeRecuperaOpen,
  ] = useState(false);
  const navigate = useNavigate();

  const onLogin1ContainerClick = useCallback(() => {
    navigate("/solicitud-de-2fa-1");
  }, [navigate]);

  const onIniciarSesionTextClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const openFeedbackSolicitudDeRecupera = useCallback(() => {
    setFeedbackSolicitudDeRecuperaOpen(true);
  }, []);

  const closeFeedbackSolicitudDeRecupera = useCallback(() => {
    setFeedbackSolicitudDeRecuperaOpen(false);
  }, []);

  return (
    <>
      <div className={styles.login1} onClick={onLogin1ContainerClick}>
        <div className={styles.rectngulo1} />
        <div className={styles.rectngulo2} />
        <div className={styles.hola}>¡Hola!</div>
        <div className={styles.ingresaTuCorreoContainer}>
          <span>{`Ingresa tu correo electrónico y contraseña e inicia sesión para disfrutar de los beneficios de nuestro `}</span>
          <b className={styles.pcp}>PCP</b>
        </div>
        <div className={styles.rectngulo3} />
        <div className={styles.correoElectrnico}>Correo electrónico</div>
        <div className={styles.rectngulo4} />
        <img
          className={styles.componente202}
          alt=""
          src="/componente-20--2.svg"
        />
        <div
          className={styles.iniciarSesion}
          onClick={onIniciarSesionTextClick}
        >
          Iniciar sesion
        </div>
        <div className={styles.rectngulo6} />
        <div className={styles.correoElectronico}>Correo electronico</div>
        <div className={styles.contrasea}>Contraseña</div>
        <div
          className={styles.recuperarContrasea}
          onClick={openFeedbackSolicitudDeRecupera}
        >
          Recuperar contraseña?
        </div>
        <div className={styles.contrasea1}>Contraseña</div>
        <div className={styles.trminosYCondiciones}>
          Términos y Condiciones de uso
        </div>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright7.svg"
        />
        <img
          className={styles.logoPlaceholder3RemovebgPrIcon}
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
      </div>
      {isFeedbackSolicitudDeRecuperaOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeFeedbackSolicitudDeRecupera}
        >
          <FeedbackSolicitudDeRecupera
            onClose={closeFeedbackSolicitudDeRecupera}
          />
        </PortalPopup>
      )}
    </>
  );
};

export default Login;

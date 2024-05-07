import { FunctionComponent } from "react";
import styles from "./FeedbackSolicitudDeRecupera.module.css";

const FeedbackSolicitudDeRecupera: FunctionComponent = () => {
  return (
    <div className={styles.feedbackSolicitudDeRecupera}>
      <div className={styles.grupo37820}>
        <b className={styles.correoElectrnicoEnviado}>
          Correo electrónico enviado satisfactoriamente
        </b>
        <div className={styles.haSidoEnviadoContainer}>
          <p className={styles.haSidoEnviadoATuCorreoRe}>
            <span
              className={styles.haSidoEnviado}
            >{`Ha sido enviado a tu correo registrado `}</span>
            <b className={styles.exgmailcom}>{`Ex...…….@gmail.com `}</b>
            <span className={styles.las}>las</span>
          </p>
          <p className={styles.indicacionesParaRecuperar}>
            indicaciones para recuperar tu contraseña.
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
  );
};

export default FeedbackSolicitudDeRecupera;

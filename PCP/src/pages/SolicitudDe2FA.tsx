import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SolicitudDe2FA.module.css";

const SolicitudDe2FA: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGrupo8ContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.solicitudDe2fa1}>
      <div className={styles.rectngulo1} />
      <div className={styles.grupo8} onClick={onGrupo8ContainerClick}>
        <div className={styles.ingreseElCdigoContainer}>
          <p className={styles.ingreseElCdigo}>{`Ingrese el código de su `}</p>
          <p className={styles.ingreseElCdigo}>aplicación de autenticación</p>
        </div>
        <div className={styles.codigo}>Codigo</div>
        <div className={styles.rectngulo4} />
        <div className={styles.rectngulo5} />
        <div className={styles.enviar}>Enviar</div>
        <div className={styles.div}>******</div>
        <div className={styles.regresar}>Regresar</div>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright4.svg"
        />
        <img
          className={styles.logoPlaceholder3RemovebgPrIcon}
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
        <div className={styles.searchUsersBy}>
          Reconocer este dispositivo en el futuro
        </div>
        <div className={styles.grupo8Child} />
      </div>
    </div>
  );
};

export default SolicitudDe2FA;

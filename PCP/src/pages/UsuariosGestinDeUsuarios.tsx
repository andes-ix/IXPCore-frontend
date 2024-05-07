import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./UsuariosGestinDeUsuarios.module.css";

const UsuariosGestinDeUsuarios: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameCopyIconClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  return (
    <div className={styles.usuariosGestinDeUsuarios}>
      <div className={styles.grupo37820}>
        <b className={styles.verificacinEn2}>
          Verificación en 2 pasos sin activar!
        </b>
        <b className={styles.activarAhora}>Activar ahora</b>
        <div className={styles.recuerdaRealizarLaContainer}>
          <p className={styles.recuerdaRealizarLaConfigura}>
            <span
              className={styles.recuerdaRealizarLa}
            >{`Recuerda realizar la configuración del `}</span>
            <span className={styles.fa}>2FA</span>
            <span className={styles.yAgregaUn}>
              {" "}
              y agrega un nivel superior de
            </span>
          </p>
          <p className={styles.proteccinAdicionalA}>
            protección adicional a tu cuenta.
          </p>
        </div>
        <img
          className={styles.frameCopyIcon}
          alt=""
          src="/frame-copy2.svg"
          onClick={onFrameCopyIconClick}
        />
        <div className={styles.rectngulo6419} />
        <img
          className={styles.trazado29749Icon}
          alt=""
          src="/trazado-29749.svg"
        />
      </div>
    </div>
  );
};

export default UsuariosGestinDeUsuarios;

import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PerfilDeUsuario3.module.css";

const PerfilDeUsuario3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGrupo9ContainerClick = useCallback(() => {
    navigate("/perfil-de-usuario-7");
  }, [navigate]);

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  return (
    <div className={styles.perfilDeUsuario8}>
      <div className={styles.verificacinEnDos}>Verificación en dos pasos</div>
      <div className={styles.protegeTuCuenta}>
        Protege tu cuenta con la verificación en dos pasos
      </div>
      <div className={styles.siNoVes}>
        Si no ves el correo electrónico en tu buzón, revisa la carpeta de spam.
      </div>
      <div className={styles.teHemosEnviado}>
        Te hemos enviado un código a tu correo electronico
      </div>
      <div className={styles.introduceElCdigoContainer}>
        <p
          className={styles.introduceElCdigo}
        >{`Introduce el código de verificación de 6 dígitos que te hemos `}</p>
        <p className={styles.introduceElCdigo}>enviado a exam…..@gmail.com</p>
      </div>
      <div className={styles.rectngulo6318} />
      <div className={styles.grupo9} onClick={onGrupo9ContainerClick}>
        <div className={styles.enviar}>Enviar</div>
      </div>
      <div className={styles.codigoDe6}>Codigo de 6 digitos</div>
      <img className={styles.rectangle2Icon} alt="" src="/rectangle2.svg" />
      <div className={styles.perfilDeUsuario8Child} />
      <img
        className={styles.logoPlaceholder3RemovebgPrIcon}
        alt=""
        src="/logoplaceholder3removebgpreview@2x.png"
      />
      <div className={styles.componente195}>
        <div className={styles.dashboard}>Dashboard</div>
        <div className={styles.cuenta}>Cuenta</div>
        <div className={styles.usuarios}>Usuarios</div>
        <div className={styles.listadoDeUsuarios}>Listado de usuarios</div>
        <div className={styles.listadoDeUsuarios1}>Listado de usuarios</div>
        <div className={styles.menu}>Menu</div>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevronright.svg"
        />
        <img
          className={styles.chevronRightIcon1}
          alt=""
          src="/chevronright.svg"
        />
        <div className={styles.layoutDashboard}>
          <div className={styles.rectngulo6345} />
          <div className={styles.rectngulo6346} />
          <div className={styles.rectngulo6347} />
          <div className={styles.rectngulo6348} />
        </div>
        <img className={styles.walletIcon} alt="" src="/wallet.svg" />
        <div className={styles.squareUserRound}>
          <img
            className={styles.trazado2499Icon}
            alt=""
            src="/trazado-2499.svg"
          />
          <img className={styles.elipse366Icon} alt="" src="/elipse-366.svg" />
        </div>
        <img className={styles.ovalIcon} alt="" src="/oval.svg" />
        <img className={styles.ovalIcon1} alt="" src="/oval.svg" />
      </div>
      <div className={styles.grupo37694}>
        <div className={styles.rectngulo301} />
        <img
          className={styles.componente2213}
          alt=""
          src="/componente-22--22.svg"
        />
        <img
          className={styles.componente2214}
          alt=""
          src="/componente-22--23.svg"
        />
        <div className={styles.empresaPerIx}>Empresa: Perú IX</div>
        <img
          className={styles.chevronRightIcon2}
          alt=""
          src="/chevronright1.svg"
        />
        <div className={styles.componente235}>
          <img
            className={styles.grupo37691Icon}
            alt=""
            src="/grupo-37691@2x.png"
          />
          <div className={styles.grupo37693}>
            <div className={styles.juanHernandez}>Juan Hernandez</div>
            <div className={styles.supervisor}>Supervisor</div>
            <div
              className={styles.informacinDePerfil}
              onClick={onInformacinDePerfilClick}
            >
              Información de perfil
            </div>
            <div className={styles.cerrarSesin}>Cerrar sesión</div>
            <div className={styles.lnea1} />
            <img
              className={styles.grupo37692Icon}
              alt=""
              src="/grupo-37691@2x.png"
            />
            <img className={styles.userIcon} alt="" src="/user.svg" />
            <img className={styles.logOutIcon} alt="" src="/logout.svg" />
          </div>
        </div>
        <div className={styles.componente2215}>
          <div className={styles.grupo37690}>
            <div className={styles.rectngulo6350} />
            <img
              className={styles.rectngulo17Icon}
              alt=""
              src="/rectngulo-17@2x.png"
            />
            <div className={styles.rectngulo6351} />
            <div className={styles.ingles}>Ingles</div>
            <div className={styles.espaol}>Español</div>
            <img
              className={styles.elipse369Icon}
              alt=""
              src="/elipse-369.svg"
            />
            <img
              className={styles.elipse370Icon}
              alt=""
              src="/elipse-369.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.informacinDePerfil1}>Información de perfil</div>
      <div className={styles.reviseYActualice}>
        Revise y actualice los detalles de su cuenta
      </div>
      <div className={styles.asegreseDeQueContainer}>
        <p
          className={styles.introduceElCdigo}
        >{`Asegúrese de que estos datos estén actualizados, ya que se utilizarán para información en la `}</p>
        <p className={styles.introduceElCdigo}>facturación de sus servicios</p>
      </div>
      <div className={styles.trminosYCondiciones}>
        Términos y Condiciones de uso
      </div>
      <img
        className={styles.chevronRightIcon3}
        alt=""
        src="/chevronright2.svg"
      />
      <div className={styles.rectngulo296} />
      <div className={styles.salvadorBertenbreiter}>Salvador Bertenbreiter</div>
      <div className={styles.rectngulo297} />
      <div className={styles.nombreCompleto}>Nombre completo</div>
      <div className={styles.cargo}>Cargo</div>
      <div className={styles.rectngulo298} />
      <div className={styles.rectngulo311} />
      <div className={styles.grupo3}>
        <div className={styles.actualizar}>Actualizar</div>
      </div>
      <div className={styles.rectngulo300} />
      <div className={styles.salvadorBertenbreiter1}>
        Salvador Bertenbreiter
      </div>
      <div className={styles.gerenteGeneral}>Gerente general</div>
      <div className={styles.peru}>Peru</div>
      <div className={styles.pais}>Pais</div>
      <div className={styles.rectngulo3011} />
      <div className={styles.examplepitnet}>Example@pit.net</div>
      <div className={styles.correoElectronico}>Correo electronico</div>
      <div className={styles.rectngulo302} />
      <div className={styles.div}>******</div>
      <div className={styles.olvid}>¿Olvidó?</div>
      <div className={styles.contraseaActual}>Contraseña actual</div>
      <div className={styles.rectngulo303} />
      <div className={styles.nuevaContrasea}>Nueva contraseña</div>
      <div className={styles.nuevaContrasea1}>Nueva contraseña</div>
      <div className={styles.asegreseDeQueContainer1}>
        <p
          className={styles.introduceElCdigo}
        >{`Asegúrese de que estos datos estén actualizados, ya que se utilizarán `}</p>
        <p className={styles.introduceElCdigo}>
          para información en la facturación de sus servicios.
        </p>
      </div>
      <div className={styles.rectngulo305} />
      <div className={styles.rectngulo304} />
      <div className={styles.div1}>+66</div>
      <img className={styles.imagen4Icon} alt="" src="/imagen-4@2x.png" />
      <div className={styles.lnea47} />
      <div className={styles.div2}>(0) 053 555 555</div>
      <img
        className={styles.chevronRightIcon4}
        alt=""
        src="/chevronright3.svg"
      />
      <div className={styles.lnea48} />
      <img className={styles.lnea49Icon} alt="" src="/lnea-49.svg" />
      <img className={styles.grupo2Icon} alt="" src="/grupo-2@2x.png" />
      <img
        className={styles.enmascararGrupo3}
        alt=""
        src="/enmascarar-grupo-3@2x.png"
      />
      <div className={styles.seguridad}>Seguridad</div>
      <div className={styles.rectngulo6315} />
      <img className={styles.lockStarLineIcon} alt="" src="/lockstarline.svg" />
    </div>
  );
};

export default PerfilDeUsuario3;

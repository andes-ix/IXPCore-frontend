import { FunctionComponent, useState, useCallback } from "react";
import CuentaEstadoDeCuentaDet1 from "../components/CuentaEstadoDeCuentaDet1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  const [isCuentaEstadoDeCuentaDetOpen, setCuentaEstadoDeCuentaDetOpen] =
    useState(false);
  const navigate = useNavigate();

  const openCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(true);
  }, []);

  const closeCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(false);
  }, []);

  const onIrAEstadoClick = useCallback(() => {
    navigate("/cuenta");
  }, [navigate]);

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  return (
    <>
      <div className={styles.dashboard}>
        <div className={styles.rectngulo6357} />
        <div className={styles.rectngulo6358} />
        <img
          className={styles.trazado29741Icon}
          alt=""
          src="/trazado-29741.svg"
        />
        <img className={styles.rectangle2Icon} alt="" src="/rectangle2.svg" />
        <div className={styles.dashboardChild} />
        <img
          className={styles.logoPlaceholder3RemovebgPrIcon}
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
        <div className={styles.componente191}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          <div className={styles.dashboard1}>Dashboard</div>
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
            <img
              className={styles.elipse366Icon}
              alt=""
              src="/elipse-366.svg"
            />
          </div>
          <img className={styles.ovalIcon} alt="" src="/oval.svg" />
          <img className={styles.ovalIcon1} alt="" src="/oval.svg" />
        </div>
        <div className={styles.bienvenidoSalvador}>¡Bienvenido Salvador!</div>
        <div className={styles.deAbril2024}>08 de Abril 2024</div>
        <div className={styles.consultaTuEstadoContainer}>
          <p
            className={styles.consultaTuEstado}
          >{`Consulta tu estado de cuenta y detalle de tus `}</p>
          <p className={styles.consultaTuEstado}>
            <span>{`servicios facturados fácilmente desde nuestro `}</span>
            <b className={styles.pcp}>PCP</b>
          </p>
        </div>
        <img
          className={styles.enmascararGrupo34}
          alt=""
          src="/enmascarar-grupo-34.svg"
        />
        <div className={styles.agregadosRecientemente}>
          Agregados recientemente
        </div>
        <img className={styles.elipse462Icon} alt="" src="/elipse-462@2x.png" />
        <img className={styles.grupo1675Icon} alt="" src="/grupo-1675@2x.png" />
        <img className={styles.grupo1674Icon} alt="" src="/grupo-1674@2x.png" />
        <img className={styles.grupo1676Icon} alt="" src="/grupo-1676@2x.png" />
        <div className={styles.grupo1647}>
          <img className={styles.elipse470Icon} alt="" src="/elipse-470.svg" />
          <div className={styles.div}>+3</div>
        </div>
        <div className={styles.rectngulo6352} />
        <div className={styles.rectngulo6355} />
        <div className={styles.valorPresentadoEn}>
          Valor presentado en base (Sol)
        </div>
        <div className={styles.serv0010PuertaAContainer}>
          <p
            className={styles.consultaTuEstado}
          >{`[SERV-0010] Puerta a Conexión `}</p>
          <p className={styles.consultaTuEstado}>10Gbps - Pago mensual</p>
        </div>
        <div className={styles.serv0010PuertaAContainer1}>
          <p
            className={styles.consultaTuEstado}
          >{`[SERV-0010] Puerta a Conexión `}</p>
          <p className={styles.consultaTuEstado}>10Gbps - Pago mensual</p>
        </div>
        <div className={styles.serv0010PuertaAContainer2}>
          <p
            className={styles.consultaTuEstado}
          >{`[SERV-0010] Puerta a Conexión `}</p>
          <p className={styles.consultaTuEstado}>10Gbps - Pago mensual</p>
        </div>
        <div className={styles.serv0010PuertaAContainer3}>
          <p
            className={styles.consultaTuEstado}
          >{`[SERV-0010] Puerta a Conexión `}</p>
          <p className={styles.consultaTuEstado}>10Gbps - Pago mensual</p>
        </div>
        <b className={styles.finanzasPit}>Finanzas PIT</b>
        <div className={styles.disponeDeUnaContainer}>
          <span>{`Dispone de una factura `}</span>
          <b className={styles.pendiente}>pendiente</b>
        </div>
        <b className={styles.finanzasPit1}>Finanzas PIT</b>
        <b className={styles.finanzasPit2}>Finanzas PIT</b>
        <b className={styles.finanzasPit3}>Finanzas PIT</b>
        <div className={styles.balance}>Balance</div>
        <div className={styles.prximosPagos}>Próximos pagos</div>
        <div className={styles.totalUsuarios}>Total usuarios</div>
        <div className={styles.s312700}>S/. 3127,00</div>
        <div className={styles.das}>15 días</div>
        <div className={styles.div1}>1200</div>
        <div className={styles.rectngulo6356} />
        <img className={styles.group10Icon} alt="" src="/group10.svg" />
        <img className={styles.group11Icon} alt="" src="/group11.svg" />
        <img className={styles.group12Icon} alt="" src="/group12.svg" />
        <img className={styles.group13Icon} alt="" src="/group13.svg" />
        <img className={styles.groupIcon} alt="" src="/group.svg" />
        <img
          className={styles.november2023Icon}
          alt=""
          src="/november2023.svg"
        />
        <img className={styles.rectangleIcon1} alt="" src="/rectangle10.svg" />
        <img className={styles.rectangleIcon2} alt="" src="/rectangle11.svg" />
        <img className={styles.rectangleIcon3} alt="" src="/rectangle13.svg" />
        <img className={styles.rectangle2Icon1} alt="" src="/rectangle25.svg" />
        <img className={styles.rectangle2Icon2} alt="" src="/rectangle26.svg" />
        <img className={styles.rectangleIcon4} alt="" src="/rectangle14.svg" />
        <div className={styles.perfilDeUsuario}>Perfil de usuario</div>
        <div className={styles.noc}>NOC</div>
        <div className={styles.facturacin}>Facturación</div>
        <div className={styles.ltimosCargos}>Últimos cargos</div>
        <b className={styles.juanHernandez}>Juan Hernandez</b>
        <b className={styles.informacinDeContcto}>Información de contácto</b>
        <b className={styles.informacinDeContcto1}>Información de contácto</b>
        <b className={styles.facturaN}>Factura N°</b>
        <div className={styles.f00100001753}>F 001-00001753</div>
        <b className={styles.monto}>Monto</b>
        <b className={styles.emisin}>Emisión</b>
        <div className={styles.div2}>$ 3.127,00</div>
        <div className={styles.div3}>10/03/2024</div>
        <div className={styles.examplepitnet}>Example@pit.net</div>
        <div className={styles.examplepitnet1}>Example@pit.net</div>
        <div className={styles.examplepitnet2}>Example@pit.net</div>
        <div className={styles.div4}>(0) 053 555 555</div>
        <div className={styles.div5}>(0) 053 555 555</div>
        <div className={styles.div6}>(0) 053 555 555</div>
        <b className={styles.notificacin}>Notificación</b>
        <div className={styles.tuFacturaTieneContainer}>
          <p className={styles.consultaTuEstado}>{`Tu factura tiene un `}</p>
          <p className={styles.consultaTuEstado}>vencimiento de</p>
        </div>
        <b className={styles.evitaCortesEn}>Evita cortes en tus servicios</b>
        <img
          className={styles.trazado29744Icon}
          alt=""
          src="/trazado-29744.svg"
        />
        <b className={styles.verDetalle} onClick={openCuentaEstadoDeCuentaDet}>
          Ver detalle
        </b>
        <b className={styles.irAEstado} onClick={onIrAEstadoClick}>
          Ir a estado de cuenta
        </b>
        <img
          className={styles.trazado29746Icon}
          alt=""
          src="/trazado-29746.svg"
        />
        <div className={styles.grupo37821}>
          <div className={styles.rectngulo301} />
          <img
            className={styles.componente2225}
            alt=""
            src="/componente-22--22.svg"
          />
          <img
            className={styles.componente2226}
            alt=""
            src="/componente-22--23.svg"
          />
          <div className={styles.empresaPerIxContainer}>
            <span>{`Empresa: `}</span>
            <span className={styles.perIx}>Perú IX</span>
          </div>
          <img
            className={styles.chevronRightIcon2}
            alt=""
            src="/chevronright1.svg"
          />
          <div className={styles.componente2227}>
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
          <div className={styles.componente239}>
            <img
              className={styles.grupo37691Icon}
              alt=""
              src="/grupo-37691@2x.png"
            />
            <div className={styles.grupo37693}>
              <div className={styles.juanHernandez1}>Juan Hernandez</div>
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
        </div>
        <img
          className={styles.trazado29747Icon}
          alt=""
          src="/trazado-29747.svg"
        />
        <div className={styles.visualizaElDesgloseContainer}>
          <p
            className={styles.consultaTuEstado}
          >{`Visualiza el desglose de tus `}</p>
          <p className={styles.consultaTuEstado}>pagos y facturas.</p>
        </div>
        <div className={styles.rectngulo6420} />
        <img
          className={styles.trazado29748Icon}
          alt=""
          src="/trazado-29748.svg"
        />
      </div>
      {isCuentaEstadoDeCuentaDetOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCuentaEstadoDeCuentaDet}
        >
          <CuentaEstadoDeCuentaDet1 onClose={closeCuentaEstadoDeCuentaDet} />
        </PortalPopup>
      )}
    </>
  );
};

export default Dashboard;

import { FunctionComponent, useState, useCallback } from "react";
import UsuariosGestinDeUsuarios3 from "../components/UsuariosGestinDeUsuarios3";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./UsuariosGestinDeUsuarios2.module.css";

const UsuariosGestinDeUsuarios2: FunctionComponent = () => {
  const [isUsuariosGestinDeUsuariosOpen, setUsuariosGestinDeUsuariosOpen] =
    useState(false);
  const navigate = useNavigate();

  const onLayoutDashboardContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  const openUsuariosGestinDeUsuarios = useCallback(() => {
    setUsuariosGestinDeUsuariosOpen(true);
  }, []);

  const closeUsuariosGestinDeUsuarios = useCallback(() => {
    setUsuariosGestinDeUsuariosOpen(false);
  }, []);

  return (
    <>
      <div className={styles.usuariosGestinDeUsuarios}>
        <div className={styles.usuarios}>Usuarios</div>
        <div className={styles.grupo4}>
          <div className={styles.usarios}>Usarios</div>
          <div className={styles.listadoDeUsuarios}>Listado de usuarios</div>
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/chevronright2.svg"
          />
        </div>
        <img className={styles.rectangle2Icon} alt="" src="/rectangle2.svg" />
        <img
          className={styles.logoPlaceholder3RemovebgPrIcon}
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
        <div className={styles.componente193}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.cuenta}>Cuenta</div>
          <div className={styles.usuarios1}>Usuarios</div>
          <div className={styles.listadoDeUsuarios1}>Listado de usuarios</div>
          <div className={styles.listadoDeUsuarios2}>Listado de usuarios</div>
          <div className={styles.menu}>Menu</div>
          <img
            className={styles.chevronRightIcon1}
            alt=""
            src="/chevronright6.svg"
          />
          <img
            className={styles.chevronRightIcon2}
            alt=""
            src="/chevronright.svg"
          />
          <div
            className={styles.layoutDashboard}
            onClick={onLayoutDashboardContainerClick}
          >
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
              src="/trazado-24991.svg"
            />
            <img
              className={styles.elipse366Icon}
              alt=""
              src="/elipse-3661.svg"
            />
          </div>
          <img className={styles.ovalIcon} alt="" src="/oval1.svg" />
          <img className={styles.ovalIcon1} alt="" src="/oval.svg" />
        </div>
        <div className={styles.grupo37694}>
          <div className={styles.rectngulo301} />
          <img
            className={styles.componente227}
            alt=""
            src="/componente-22--22.svg"
          />
          <img
            className={styles.componente228}
            alt=""
            src="/componente-22--23.svg"
          />
          <div className={styles.empresaPerIx}>Empresa: Perú IX</div>
          <img
            className={styles.chevronRightIcon3}
            alt=""
            src="/chevronright1.svg"
          />
          <div className={styles.componente233}>
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
          <div className={styles.componente229}>
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
        <div className={styles.grupo37727}>
          <img className={styles.rectangleIcon1} alt="" src="/rectangle1.svg" />
          <div className={styles.rectngulo1511} />
          <div className={styles.rectngulo6270} />
          <div className={styles.rectngulo6296} />
          <div className={styles.rectngulo6301} />
          <div className={styles.rectngulo15111} />
          <div className={styles.rectngulo6269} />
          <div className={styles.rectngulo6295} />
          <div className={styles.rectngulo6300} />
          <div className={styles.rectngulo15112} />
          <div className={styles.rectngulo15113} />
          <div className={styles.rectngulo1510} />
          <div className={styles.rectngulo298} />
          <div className={styles.buscarUsuario}>Buscar usuario</div>
          <div className={styles.listadoDeUsuarios3}>Listado de usuarios</div>
          <div className={styles.listadoDeUsuarios4}>
            Listado de usuarios habilitados dentro del sistema.
          </div>
          <img
            className={styles.searchLine1Icon}
            alt=""
            src="/searchline-1.svg"
          />
          <b className={styles.nombreCompleto}>Nombre completo</b>
          <b className={styles.rol}>Rol</b>
          <b className={styles.operacin}>Operación</b>
          <b className={styles.telfono}>Teléfono</b>
          <b className={styles.correoElectrnico}>Correo electrónico</b>
          <b className={styles.cargo}>Cargo</b>
          <b className={styles.idUsuario}>ID usuario</b>
          <div className={styles.tw1500001}>#TW1500001</div>
          <div className={styles.tw15000011}>#TW1500001</div>
          <div className={styles.tw15000012}>#TW1500001</div>
          <div className={styles.tw15000013}>#TW1500001</div>
          <b className={styles.carlosCarpio}>Carlos Carpio</b>
          <b className={styles.antonioTineo}>Antonio Tineo</b>
          <b className={styles.antonioTineo1}>Antonio Tineo</b>
          <b className={styles.antonioTineo2}>Antonio Tineo</b>
          <div className={styles.examplegmaillcom}>Example@gmaillc.om</div>
          <div className={styles.gerenteGeneral}>Gerente general</div>
          <div className={styles.finanzas}>Finanzas</div>
          <div className={styles.examplegmaillcom1}>Example@gmaillc.om</div>
          <div className={styles.atencinAlCliente}>Atención al cliente</div>
          <div className={styles.finanzas1}>Finanzas</div>
          <div className={styles.examplegmaillcom2}>Example@gmaillc.om</div>
          <div className={styles.atencinAlCliente1}>Atención al cliente</div>
          <div className={styles.finanzas2}>Finanzas</div>
          <div className={styles.examplegmaillcom3}>Example@gmaillc.om</div>
          <div className={styles.atencinAlCliente2}>Atención al cliente</div>
          <div className={styles.finanzas3}>Finanzas</div>
          <div className={styles.div}>+56 5875 25475</div>
          <div className={styles.div1}>+56 5875 25475</div>
          <div className={styles.div2}>+56 5875 25475</div>
          <div className={styles.div3}>+56 5875 25475</div>
          <div className={styles.tw15000014}>#TW1500001</div>
          <div className={styles.tw15000015}>#TW1500001</div>
          <div className={styles.tw15000016}>#TW1500001</div>
          <div className={styles.tw15000017}>#TW1500001</div>
          <b className={styles.juanHernandez1}>Juan Hernandez</b>
          <b className={styles.carlosLopez}>Carlos Lopez</b>
          <b className={styles.carlosLopez1}>Carlos Lopez</b>
          <b className={styles.carlosLopez2}>Carlos Lopez</b>
          <div className={styles.examplegmaillcom4}>Example@gmaillc.om</div>
          <div className={styles.finanzas4}>Finanzas</div>
          <div className={styles.finanzas5}>Finanzas</div>
          <div className={styles.examplegmaillcom5}>Example@gmaillc.om</div>
          <div className={styles.atencinAlCliente3}>Atención al cliente</div>
          <div className={styles.finanzas6}>Finanzas</div>
          <div className={styles.examplegmaillcom6}>Example@gmaillc.om</div>
          <div className={styles.atencinAlCliente4}>Atención al cliente</div>
          <div className={styles.finanzas7}>Finanzas</div>
          <div className={styles.examplegmaillcom7}>Example@gmaillc.om</div>
          <div className={styles.atencinAlCliente5}>Atención al cliente</div>
          <div className={styles.finanzas8}>Finanzas</div>
          <div className={styles.div4}>+56 5875 25475</div>
          <div className={styles.div5}>+56 5875 25475</div>
          <div className={styles.div6}>+56 5875 25475</div>
          <div className={styles.div7}>+56 5875 25475</div>
          <div className={styles.tw15000018}>#TW1500001</div>
          <b className={styles.carlaAngola}>Carla Angola</b>
          <div className={styles.examplegmaillcom8}>Example@gmaillc.om</div>
          <div className={styles.administradora}>Administradora</div>
          <div className={styles.finanzas9}>Finanzas</div>
          <div className={styles.div8}>+56 5875 25475</div>
          <div className={styles.tw15000019}>#TW1500001</div>
          <b className={styles.luisArcia}>Luis Arcia</b>
          <div className={styles.examplegmaillcom9}>Example@gmaillc.om</div>
          <div className={styles.ventas}>Ventas</div>
          <div className={styles.finanzas10}>Finanzas</div>
          <div className={styles.div9}>+56 5875 25475</div>
          <img
            className={styles.componente22}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente23}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente24}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente25}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente26}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente27}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente28}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente29}
            alt=""
            src="/componente-2--2.svg"
          />
          <img
            className={styles.componente210}
            alt=""
            src="/componente-2--2.svg"
          />
          <div className={styles.mostrando10De}>
            Mostrando 10 de 200 resultados
          </div>
          <img className={styles.nextIcon} alt="" src="/next1.svg" />
          <div className={styles.grupo3}>
            <div
              className={styles.agregarUsuario}
              onClick={openUsuariosGestinDeUsuarios}
            >
              Agregar usuario
            </div>
          </div>
          <div className={styles.componente21}>
            <div className={styles.grupo5}>
              <div className={styles.visualizar}>Visualizar</div>
              <div className={styles.editar}>Editar</div>
              <div className={styles.deshabilitar}>Deshabilitar</div>
              <div className={styles.rectngulo307} />
              <div className={styles.rectngulo308} />
              <div className={styles.rectngulo6299} />
            </div>
            <div className={styles.rectngulo6298} />
            <img className={styles.frameIcon} alt="" src="/frame.svg" />
          </div>
        </div>
      </div>
      {isUsuariosGestinDeUsuariosOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeUsuariosGestinDeUsuarios}
        >
          <UsuariosGestinDeUsuarios3 onClose={closeUsuariosGestinDeUsuarios} />
        </PortalPopup>
      )}
    </>
  );
};

export default UsuariosGestinDeUsuarios2;

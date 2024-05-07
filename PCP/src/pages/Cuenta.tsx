import { FunctionComponent, useState, useCallback } from "react";
import CuentaEstadoDeCuentaDet1 from "../components/CuentaEstadoDeCuentaDet1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./Cuenta.module.css";

const Cuenta: FunctionComponent = () => {
  const [isCuentaEstadoDeCuentaDetOpen, setCuentaEstadoDeCuentaDetOpen] =
    useState(false);
  const navigate = useNavigate();

  const onInformacinDePerfilClick = useCallback(() => {
    navigate("/perfil-de-usuario-9");
  }, [navigate]);

  const openCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(true);
  }, []);

  const closeCuentaEstadoDeCuentaDet = useCallback(() => {
    setCuentaEstadoDeCuentaDetOpen(false);
  }, []);

  return (
    <>
      <div className={styles.cuenta}>
        <img className={styles.rectangle2Icon} alt="" src="/rectangle23.svg" />
        <div className={styles.fechaDeVencimiento}>Fecha de vencimiento</div>
        <b className={styles.deAbril2024}>05 de Abril 2024</b>
        <div className={styles.detraccinPendiente}>Detracción pendiente</div>
        <b className={styles.s112700}>S/. 1127,00</b>
        <div className={styles.totalAbonado}>Total abonado</div>
        <b className={styles.s5312700}>S/. 53127,00</b>
        <div className={styles.grupo4}>
          <div className={styles.cuenta1}>Cuenta</div>
          <div className={styles.estadoDeCuenta}>Estado de cuenta</div>
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/chevronright2.svg"
          />
        </div>
        <img className={styles.rectangle2Icon1} alt="" src="/rectangle24.svg" />
        <div className={styles.cuentaChild} />
        <img
          className={styles.logoPlaceholder3RemovebgPrIcon}
          alt=""
          src="/logoplaceholder3removebgpreview@2x.png"
        />
        <div className={styles.componente192}>
          <img className={styles.rectangleIcon} alt="" src="/rectangle.svg" />
          <div className={styles.dashboard}>Dashboard</div>
          <div className={styles.cuenta2}>Cuenta</div>
          <div className={styles.usuarios}>Usuarios</div>
          <div className={styles.listadoDeUsuarios}>Listado de usuarios</div>
          <div className={styles.estadoDeCuenta1}>Estado de cuenta</div>
          <div className={styles.menu}>Menu</div>
          <img
            className={styles.chevronRightIcon1}
            alt=""
            src="/chevronright.svg"
          />
          <img
            className={styles.chevronRightIcon2}
            alt=""
            src="/chevronright6.svg"
          />
          <div className={styles.layoutDashboard}>
            <div className={styles.rectngulo6345} />
            <div className={styles.rectngulo6346} />
            <div className={styles.rectngulo6347} />
            <div className={styles.rectngulo6348} />
          </div>
          <img className={styles.walletIcon} alt="" src="/wallet1.svg" />
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
          <img className={styles.ovalIcon1} alt="" src="/oval1.svg" />
        </div>
        <div className={styles.grupo37694}>
          <div className={styles.rectngulo301} />
          <img
            className={styles.componente224}
            alt=""
            src="/componente-22--22.svg"
          />
          <img
            className={styles.componente225}
            alt=""
            src="/componente-22--23.svg"
          />
          <div className={styles.empresaPerIx}>Empresa: Perú IX</div>
          <img
            className={styles.chevronRightIcon3}
            alt=""
            src="/chevronright1.svg"
          />
          <div className={styles.componente232}>
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
          <div className={styles.componente226}>
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
        <img className={styles.rectangle3Icon} alt="" src="/rectangle3.svg" />
        <img
          className={styles.rectangle3CopyIcon}
          alt=""
          src="/rectangle3copy.svg"
        />
        <img
          className={styles.rectangle3Copy3Icon}
          alt=""
          src="/rectangle3copy3.svg"
        />
        <div className={styles.estadoDeCuenta2}>Estado de cuenta</div>
        <div className={styles.mes}>/ Mes</div>
        <div className={styles.div}>18%</div>
        <div className={styles.div1}>10%</div>
        <div className={styles.div2}>72%</div>
        <div className={styles.valorPresentadoEn}>
          Valor presentado en base (Sol)
        </div>
        <div className={styles.desgloseGeneralDel}>
          Desglose general del valor representado en el balance
        </div>
        <b className={styles.clienteTw1500001}>Cliente #TW1500001</b>
        <div className={styles.balance}>Balance</div>
        <div className={styles.s312700}>S/. 3127,00</div>
        <div className={styles.grupo37469}>
          <img className={styles.downloadIcon} alt="" src="/download.svg" />
        </div>
        <img className={styles.rectangleIcon1} alt="" src="/rectangle1.svg" />
        <div className={styles.ltimosMovimientos}>Últimos movimientos</div>
        <div className={styles.grupo37468}>
          <div className={styles.mar2024To}>13 Mar, 2024 to 21 Mar, 2024</div>
        </div>
        <div className={styles.visualizaElDetalle}>
          Visualiza el detalle de tus facturas y pagos
        </div>
        <div className={styles.componente271}>
          <div className={styles.grupo37686}>
            <div className={styles.grupo37682}>
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
              <b className={styles.emision}>Emision</b>
              <b className={styles.vencimiento}>Vencimiento</b>
              <b className={styles.descipcion}>Descipcion</b>
              <b className={styles.total}>Total</b>
              <b className={styles.estadoDePago}>Estado de pago</b>
              <b className={styles.estado}>Estado</b>
              <b className={styles.numero}>Numero</b>
              <b
                className={styles.f00100001753}
                onClick={openCuentaEstadoDeCuentaDet}
              >
                F 001-00001753
              </b>
              <b className={styles.f001000017531}>F 001-00001753</b>
              <b className={styles.f001000017532}>F 001-00001753</b>
              <b className={styles.f001000017533}>F 001-00001753</b>
              <div className={styles.div3}>3127,00</div>
              <div className={styles.publicado}>Publicado</div>
              <div className={styles.div4}>3127,00</div>
              <div className={styles.publicado1}>Publicado</div>
              <div className={styles.div5}>3127,00</div>
              <div className={styles.publicado2}>Publicado</div>
              <div className={styles.div6}>3127,00</div>
              <div className={styles.publicado3}>{`Publicado `}</div>
              <div className={styles.div7}>2013-08-11</div>
              <div className={styles.div8}>2013-08-11</div>
              <div className={styles.loremIpsumDolorContainer}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer1}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer2}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer3}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer4}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer5}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer6}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer7}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer8}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.loremIpsumDolorContainer9}>
                <p
                  className={styles.loremIpsumDolor}
                >{`Lorem ipsum dolor sit amet, consectetur `}</p>
                <p className={styles.loremIpsumDolor}>
                  adipiscing elit. Cras eu finibus eros.
                </p>
              </div>
              <div className={styles.div9}>2013-08-11</div>
              <div className={styles.div10}>2013-08-11</div>
              <div className={styles.div11}>2013-08-11</div>
              <div className={styles.div12}>2013-08-11</div>
              <div className={styles.div13}>2013-08-11</div>
              <div className={styles.div14}>2013-08-11</div>
              <b className={styles.f001000017534}>F 001-00001753</b>
              <b className={styles.f001000017535}>F 001-00001753</b>
              <b className={styles.f001000017536}>F 001-00001753</b>
              <b className={styles.f001000017537}>F 001-00001753</b>
              <div className={styles.div15}>3127,00</div>
              <div className={styles.cancelado}>Cancelado</div>
              <div className={styles.div16}>3127,00</div>
              <div className={styles.publicado4}>Publicado</div>
              <div className={styles.div17}>3127,00</div>
              <div className={styles.publicado5}>Publicado</div>
              <div className={styles.div18}>3127,00</div>
              <div className={styles.publicado6}>Publicado</div>
              <div className={styles.div19}>2013-08-11</div>
              <div className={styles.div20}>2013-08-11</div>
              <div className={styles.div21}>2013-08-11</div>
              <div className={styles.div22}>2013-08-11</div>
              <div className={styles.div23}>2013-08-11</div>
              <div className={styles.div24}>2013-08-11</div>
              <div className={styles.div25}>2013-08-11</div>
              <div className={styles.div26}>2013-08-11</div>
              <b className={styles.f001000017538}>F 001-00001753</b>
              <div className={styles.div27}>3127,00</div>
              <div className={styles.cancelado1}>Cancelado</div>
              <div className={styles.div28}>2013-08-11</div>
              <div className={styles.div29}>2013-08-11</div>
              <b className={styles.f001000017539}>F 001-00001753</b>
              <div className={styles.div30}>3127,00</div>
              <div className={styles.publicado7}>Publicado</div>
              <div className={styles.div31}>2013-08-11</div>
              <div className={styles.div32}>2013-08-11</div>
              <div className={styles.grupo37697}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle4.svg"
                />
                <div className={styles.pendiente}>Pendiente</div>
                <img className={styles.ovalIcon2} alt="" src="/oval2.svg" />
              </div>
              <div className={styles.grupo37698}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle5.svg"
                />
                <div className={styles.revertido}>Revertido</div>
                <img className={styles.ovalIcon2} alt="" src="/oval3.svg" />
              </div>
              <div className={styles.grupo37699}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle5.svg"
                />
                <div className={styles.revertido}>Revertido</div>
                <img className={styles.ovalIcon2} alt="" src="/oval3.svg" />
              </div>
              <div className={styles.grupo37700}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle6.svg"
                />
                <div className={styles.parcial}>Parcial</div>
                <img className={styles.ovalIcon2} alt="" src="/oval4.svg" />
              </div>
              <div className={styles.grupo37702}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle6.svg"
                />
                <div className={styles.parcial}>Parcial</div>
                <img className={styles.ovalIcon2} alt="" src="/oval4.svg" />
              </div>
              <div className={styles.grupo37701}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle7.svg"
                />
                <div className={styles.pagado}>Pagado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37703}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle7.svg"
                />
                <div className={styles.pagado}>Pagado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37704}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle7.svg"
                />
                <div className={styles.pagado}>Pagado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37705}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle7.svg"
                />
                <div className={styles.pagado}>Pagado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37706}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle7.svg"
                />
                <div className={styles.pagado}>Pagado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
            </div>
            <div className={styles.grupo37683}>
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
              <b className={styles.fecha}>Fecha</b>
              <b className={styles.banco}>Banco</b>
              <b className={styles.total1}>Total</b>
              <b className={styles.status}>Status</b>
              <b className={styles.numero}>Numero</b>
              <b className={styles.b}>00076</b>
              <b className={styles.f001000017531}>00076</b>
              <b className={styles.f001000017532}>00076</b>
              <b className={styles.f001000017533}>00076</b>
              <div className={styles.div33}>3127,00</div>
              <div className={styles.div34}>3127,00</div>
              <div className={styles.div35}>3127,00</div>
              <div className={styles.div36}>3127,00</div>
              <div className={styles.div37}>2013-08-11</div>
              <div className={styles.bancoDeLa}>Banco de la Nación - Soles</div>
              <div className={styles.div38}>2013-08-11</div>
              <div className={styles.bancoDeLa1}>
                Banco de la Nación - Soles
              </div>
              <div className={styles.div39}>2013-08-11</div>
              <div className={styles.bancoDeLa2}>
                Banco de la Nación - Soles
              </div>
              <div className={styles.div40}>2013-08-11</div>
              <div className={styles.bancoDeLa3}>
                Banco de la Nación - Soles
              </div>
              <b className={styles.f001000017534}>00076</b>
              <b className={styles.f001000017535}>00076</b>
              <b className={styles.f001000017536}>00076</b>
              <b className={styles.f001000017537}>00076</b>
              <div className={styles.div41}>3127,00</div>
              <div className={styles.div42}>3127,00</div>
              <div className={styles.div43}>3127,00</div>
              <div className={styles.div44}>3127,00</div>
              <div className={styles.div45}>2013-08-11</div>
              <div className={styles.bancoDeLa4}>
                Banco de la Nación - Soles
              </div>
              <div className={styles.div46}>2013-08-11</div>
              <div className={styles.bancoDeLa5}>
                Banco de la Nación - Soles
              </div>
              <div className={styles.div47}>2013-08-11</div>
              <div className={styles.bancoDeLa6}>
                Banco de la Nación - Soles
              </div>
              <div className={styles.div48}>2013-08-11</div>
              <div className={styles.bancoDeLa7}>
                Banco de la Nación - Soles
              </div>
              <b className={styles.f001000017538}>00076</b>
              <div className={styles.div49}>3127,00</div>
              <div className={styles.div50}>2013-08-11</div>
              <div className={styles.bancoDeLa8}>
                Banco de la Nación - Soles
              </div>
              <b className={styles.f001000017539}>00076</b>
              <div className={styles.div51}>3127,00</div>
              <div className={styles.div52}>2013-08-11</div>
              <div className={styles.bancoDeLa9}>
                Banco de la Nación - Soles
              </div>
              <div className={styles.grupo37708}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37715}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37711}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37713}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37709}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37714}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37710}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37712}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
              <div className={styles.grupo37716}>
                <img
                  className={styles.rectangleIcon2}
                  alt=""
                  src="/rectangle8.svg"
                />
                <div className={styles.asociado}>Asociado</div>
                <img className={styles.ovalIcon2} alt="" src="/oval5.svg" />
              </div>
            </div>
            <div className={styles.grupo37707}>
              <img
                className={styles.rectangleIcon2}
                alt=""
                src="/rectangle9.svg"
              />
              <div className={styles.sinAsociar}>Sin asociar</div>
              <img className={styles.ovalIcon2} alt="" src="/oval2.svg" />
            </div>
          </div>
          <div className={styles.grupo37724}>
            <div className={styles.grupo37721}>
              <div className={styles.general}>General</div>
            </div>
            <div className={styles.grupo37722}>
              <div className={styles.facturas}>Facturas</div>
            </div>
            <div className={styles.grupo37723}>
              <div className={styles.pagos}>Pagos</div>
            </div>
          </div>
        </div>
        <div className={styles.mostrando10De}>
          Mostrando 10 de 200 resultados
        </div>
        <img className={styles.nextIcon} alt="" src="/next.svg" />
        <div className={styles.componente241}>
          <div className={styles.grupo37717}>
            <img className={styles.filterIcon} alt="" src="/filter.svg" />
          </div>
          <div className={styles.grupo37718}>
            <b className={styles.filtrosPredeterminados}>
              Filtros predeterminados
            </b>
            <div className={styles.mesActual}>Mes actual</div>
            <div className={styles.mesAnterior}>Mes anterior</div>
            <div className={styles.grupo37718Child} />
          </div>
        </div>
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

export default Cuenta;

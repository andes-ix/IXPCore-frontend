"use client";

import { useTranslations } from "next-intl";
import styles from "./styles.module.scss";
import { useState } from "react";
import UserListTableHero from "./Hero";
import UserListTableFooter from "./Footer";
import ModalAddUser from "./AddUser";

const users = [
  {
    id: "#TW1500001",
    name: "Carlos Carpio",
    phone: "+56 5875 25475",
    email: "carlos.carpio@example.com",
    charge: "Gerente general",
    role: "Finanzas",
  },
  {
    id: "#TW1500002",
    name: "Ana Rodríguez",
    phone: "+56 5875 25476",
    email: "ana.rodriguez@example.com",
    charge: "Subgerente",
    role: "Marketing",
  },
  {
    id: "#TW1500003",
    name: "Luis Pérez",
    phone: "+56 5875 25477",
    email: "luis.perez@example.com",
    charge: "Jefe de proyecto",
    role: "Desarrollo",
  },
  {
    id: "#TW1500004",
    name: "María Gómez",
    phone: "+56 5875 25478",
    email: "maria.gomez@example.com",
    charge: "Analista",
    role: "Finanzas",
  },
  {
    id: "#TW1500005",
    name: "Juan López",
    phone: "+56 5875 25479",
    email: "juan.lopez@example.com",
    charge: "Consultor",
    role: "Consultoría",
  },
  {
    id: "#TW1500006",
    name: "Carmen Díaz",
    phone: "+56 5875 25480",
    email: "carmen.diaz@example.com",
    charge: "Especialista",
    role: "Recursos Humanos",
  },
  {
    id: "#TW1500007",
    name: "Pedro Sánchez",
    phone: "+56 5875 25481",
    email: "pedro.sanchez@example.com",
    charge: "Coordinador",
    role: "Logística",
  },
  {
    id: "#TW1500008",
    name: "Laura Fernández",
    phone: "+56 5875 25482",
    email: "laura.fernandez@example.com",
    charge: "Asistente",
    role: "Administración",
  },
  {
    id: "#TW1500009",
    name: "Miguel García",
    phone: "+56 5875 25483",
    email: "miguel.garcia@example.com",
    charge: "Director",
    role: "Ventas",
  },
  {
    id: "#TW1500010",
    name: "Sofía Martínez",
    phone: "+56 5875 25484",
    email: "sofia.martinez@example.com",
    charge: "Gerente de producto",
    role: "Producto",
  },
  {
    id: "#TW1500011",
    name: "Jorge Ramírez",
    phone: "+56 5875 25485",
    email: "jorge.ramirez@example.com",
    charge: "Ingeniero",
    role: "Desarrollo",
  },
  {
    id: "#TW1500012",
    name: "Patricia Torres",
    phone: "+56 5875 25486",
    email: "patricia.torres@example.com",
    charge: "Desarrollador",
    role: "IT",
  },
  {
    id: "#TW1500013",
    name: "Ricardo Flores",
    phone: "+56 5875 25487",
    email: "ricardo.flores@example.com",
    charge: "Diseñador",
    role: "Creativo",
  },
  {
    id: "#TW1500014",
    name: "Valeria Rivera",
    phone: "+56 5875 25488",
    email: "valeria.rivera@example.com",
    charge: "Coordinadora",
    role: "Proyectos",
  },
  {
    id: "#TW1500015",
    name: "Eduardo Herrera",
    phone: "+56 5875 25489",
    email: "eduardo.herrera@example.com",
    charge: "Analista",
    role: "Investigación",
  },
  {
    id: "#TW1500016",
    name: "Lucía Cruz",
    phone: "+56 5875 25490",
    email: "lucia.cruz@example.com",
    charge: "Consultora",
    role: "Consultoría",
  },
  {
    id: "#TW1500017",
    name: "Martín Romero",
    phone: "+56 5875 25491",
    email: "martin.romero@example.com",
    charge: "Gerente",
    role: "Operaciones",
  },
  {
    id: "#TW1500018",
    name: "Paula Vega",
    phone: "+56 5875 25492",
    email: "paula.vega@example.com",
    charge: "Analista",
    role: "Contabilidad",
  },
  {
    id: "#TW1500019",
    name: "Gabriel Delgado",
    phone: "+56 5875 25493",
    email: "gabriel.delgado@example.com",
    charge: "Especialista",
    role: "Legal",
  },
  {
    id: "#TW1500020",
    name: "Victoria Medina",
    phone: "+56 5875 25494",
    email: "victoria.medina@example.com",
    charge: "Encargada",
    role: "Sistemas",
  },
  {
    id: "#TW1500021",
    name: "Andrés Ortega",
    phone: "+56 5875 25495",
    email: "andres.ortega@example.com",
    charge: "Coordinador",
    role: "Logística",
  },
  {
    id: "#TW1500022",
    name: "Mónica Castro",
    phone: "+56 5875 25496",
    email: "monica.castro@example.com",
    charge: "Supervisora",
    role: "Calidad",
  },
  {
    id: "#TW1500023",
    name: "Diego Morales",
    phone: "+56 5875 25497",
    email: "diego.morales@example.com",
    charge: "Técnico",
    role: "Soporte",
  },
  {
    id: "#TW1500024",
    name: "Claudia Rojas",
    phone: "+56 5875 25498",
    email: "claudia.rojas@example.com",
    charge: "Ingeniera",
    role: "Producción",
  },
  {
    id: "#TW1500025",
    name: "Fernando Reyes",
    phone: "+56 5875 25499",
    email: "fernando.reyes@example.com",
    charge: "Jefe de equipo",
    role: "Desarrollo",
  },
  {
    id: "#TW1500026",
    name: "Adriana Campos",
    phone: "+56 5875 25500",
    email: "adriana.campos@example.com",
    charge: "Gerente de ventas",
    role: "Ventas",
  },
  {
    id: "#TW1500027",
    name: "Alejandro Ruiz",
    phone: "+56 5875 25501",
    email: "alejandro.ruiz@example.com",
    charge: "Coordinador",
    role: "Marketing",
  },
  {
    id: "#TW1500028",
    name: "Isabel Ortiz",
    phone: "+56 5875 25502",
    email: "isabel.ortiz@example.com",
    charge: "Especialista",
    role: "Comunicación",
  },
  {
    id: "#TW1500029",
    name: "Manuel Silva",
    phone: "+56 5875 25503",
    email: "manuel.silva@example.com",
    charge: "Supervisor",
    role: "Producción",
  },
  {
    id: "#TW1500030",
    name: "Natalia Paredes",
    phone: "+56 5875 25504",
    email: "natalia.paredes@example.com",
    charge: "Analista",
    role: "Estadística",
  },
  {
    id: "#TW1500031",
    name: "Sergio Herrera",
    phone: "+56 5875 25505",
    email: "sergio.herrera@example.com",
    charge: "Coordinador",
    role: "Eventos",
  },
  {
    id: "#TW1500032",
    name: "Verónica Espinoza",
    phone: "+56 5875 25506",
    email: "veronica.espinoza@example.com",
    charge: "Directora",
    role: "Recursos Humanos",
  },
];

const UserListTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModalUserOptions, setShowModalUserOptions] = useState("");
  const [showModalAddUser, setShowModalAddUser] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const filteredUsers = users.filter((user) =>user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const t = useTranslations("Users.UsersList.Table");

  const handleOpenModal = (id: string) => {
    if (!showModalUserOptions) {
      return setShowModalUserOptions(id);
    }

    if (showModalUserOptions === id) {
      return setShowModalUserOptions("");
    }

    return setShowModalUserOptions(id);
  };

  return (
    <div>
      <UserListTableHero
        setShowModalAddUser={setShowModalAddUser}
        setSearchTerm={setSearchTerm}
      />

      <section className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <th>{t("column1")}</th>
              <th>{t("column2")}</th>
              <th>{t("column3")}</th>
              <th>{t("column4")}</th>
              <th>{t("column5")}</th>
              <th>{t("column6")}</th>
            </tr>
          </thead>

          <tbody>
            {currentUsers.map((user, i) => {
              return (
                <tr
                  className={i % 2 === 0 ? styles.evenRow : styles.oddRow}
                  key={i}
                >
                  <td>{user.id}</td>
                  <td className={styles.userName}>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className={styles.tdButton}>
                    <button onClick={() => handleOpenModal(user.id)}>
                      ...
                    </button>

                    {showModalUserOptions === user.id && (
                      <article
                        className={`${styles.rowModal} ${
                          i === 8 || i === 9 ? styles.latestModals : ""
                        }`}
                      >
                        <button>Editar</button>
                        <button>Deshabilitar</button>
                      </article>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

      <UserListTableFooter
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />

      {showModalAddUser && (
        <ModalAddUser setShowModalAddUser={setShowModalAddUser} />
      )}
    </div>
  );
};

export default UserListTable;

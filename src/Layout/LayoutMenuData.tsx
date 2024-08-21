import {
  LayoutDashboard,
  Mail,
  RadioTower,
  SquareUser,
  Wallet,
} from "lucide-react";

const menuData: any = [
  {
    id: "dashboards",
    label: "Dashboard",
    link: "/dashboard",
    icon: <LayoutDashboard />,
    parentId: 2,
  },
  {
    id: "services",
    label: "Servicios",
    icon: <RadioTower />,
    subItems: [
      {
        id: "listservice",
        label: "Listado de servicios",
        link: "/tables-basic",
        parentId: "tables",
      },
    ],
  },
  {
    id: "counts",
    label: "Cuenta",
    icon: <Wallet />,
    subItems: [
      {
        id: "countstate",
        label: "Estado de cuenta",
        link: "/tables-basic",
        parentId: "tables",
      },
    ],
  },
  {
    id: "users",
    label: "Usuarios",
    icon: <SquareUser />,
    subItems: [
      {
        id: "userlistview",
        label: "Listado de usuarios",
        link: "/apps-users-list",
        parentId: "users",
      },
    ],
  },
];

export { menuData };

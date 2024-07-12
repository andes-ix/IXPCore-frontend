"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import { useUtilStore } from "@store/util";
import EnterpriseNameElement from "@components/Dashboard/Elements/EnterpriseName";
import ModalUserSettings from "./ModalUserSettings";
import { useEffect, useState } from "react";
import { usePathname } from "src/navigation";

const DashboardHeader = () => {
  const [isOpenModalUser, setIsOpenModalUser] = useState(false);
  const { openNavbar } = useUtilStore();
  const pathname = usePathname();

  useEffect(() => {
    setIsOpenModalUser(false);
  }, [pathname]);

  return (
    <header className={styles.headerContainer}>
      <button className={styles.chevronLeft} onClick={openNavbar}>
        <Image
          src={"/img/_reusable/chevron-right-blue.svg"}
          alt="Chevron"
          width={7.28}
          height={12}
        />
        <Image
          src={"/img/_reusable/chevron-right-blue.svg"}
          alt="Chevron"
          width={7.28}
          height={12}
        />
      </button>

      <div className={styles.entrepriseNameContainer}>
        <EnterpriseNameElement />
      </div>

      <section className={styles.navSection}>
        <button>
          <Image src={"/img/header/en.svg"} alt="Flag" width={32} height={32} />
        </button>
        <button>
          <Image src={"/img/header/sun.svg"} alt="Sun" width={45} height={45} />
        </button>
        <button>
          <Image
            src={"/img/header/bell.svg"}
            alt="Notifications"
            width={45}
            height={45}
          />
        </button>
        <button onClick={() => setIsOpenModalUser(!isOpenModalUser)}>
          <Image
            src={"/img/header/user.svg"}
            alt="User"
            width={45}
            height={45}
          />
        </button>
      </section>

      {isOpenModalUser && <ModalUserSettings />}
    </header>
  );
};

export default DashboardHeader;

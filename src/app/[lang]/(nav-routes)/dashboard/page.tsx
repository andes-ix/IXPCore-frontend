"use client"

import styles from "./page.module.scss";
import DashboardDesktop from "@components/Dashboard/Desktop";
import DashboardMobile from "@components/Dashboard/Mobile";
import useWindowSize from "@hooks/useWindowSize";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { toast, Toaster } from "sonner";
import { Link } from "src/navigation";

const showErrorToast = () => {
  toast.error(
    <div className={styles.errorAlert}>
      <div className={styles.containerImg}>
        <Image
          src={"/img/_reusable/alert-red.svg"}
          alt="Success"
          width={34}
          height={34}
        />
      </div>

      <div className={styles.contentContainer}>
        <h3>Verificación en 2 pasos sin activar!</h3>

        <p>
          Recuerda realizar la configuración del 2FA y agrega un nivel superior
          de protección adicional a tu cuenta.
        </p>

        <Link href={"profile"}>Activar ahora</Link>
      </div>
    </div>,
    {
      style: {
        background: "#fff4f4",
      },
      duration: Infinity,
    }
  );
};

const Dashboard = () => {
  const { width } = useWindowSize();
  const hasShownToast = useRef(false);

  useEffect(() => {
    if (!hasShownToast.current) {
      showErrorToast();
      hasShownToast.current = true;
    }
  }, []);

  return (
    <>
      {width >= 1400 && <DashboardDesktop />}

      {width < 1400 && <DashboardMobile />}

      <Toaster
        position="top-center"
        richColors
        closeButton
        toastOptions={{
          classNames: {
            closeButton: styles.closeBtn,
          },
        }}
      />
    </>
  );
};

export default Dashboard;

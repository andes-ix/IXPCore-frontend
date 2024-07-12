import styles from "./layout.module.scss";
import Image from "next/image";

interface IProps {
  children: React.ReactNode;
}

const LoginLayout = ({ children }: IProps) => {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.imageContainer}>
        <Image
          src={"/img/login/world.webp"}
          alt="Mundo"
          priority
          width={1425}
          height={1080}
        />
      </div>

      {children}
    </main>
  );
};

export default LoginLayout;

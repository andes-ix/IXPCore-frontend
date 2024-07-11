import Image from "next/image";
import styles from "./page.module.scss";
import LoginForm from "@components/Login/Form";

const Login = () => {
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

      <LoginForm />

      {/* <Login2FA /> */}

      {/* <LoginPasswordConfiguration /> */}
    </main>
  );
};

export default Login;

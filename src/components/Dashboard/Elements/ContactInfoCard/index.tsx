import styles from "./styles.module.scss";
import Image from "next/image";

// Network Operations Center (NOC)
// Billing
// User Profile

interface IProps {
  title: string;
  blueText: string;
  email: string;
  number: string;
}

const ContactInfoCard = ({ title, blueText, email, number }: IProps) => {
  const isProfile = title === "Perfil de usuario" || title === "User profile";

  return (
    <section className={styles.sectionContainer}>
      <div>
        <h2>{title}</h2>

        <article>
          <button>{blueText}</button>

          <p>{email}</p>

          <p>{number}</p>
        </article>
      </div>

      {title === "NOC" && (
        <Image
          src={"/img/dashboard/peru-flag.png"}
          alt="Flag"
          width={48}
          height={48}
        />
      )}

      {isProfile && (
        <Image
          src={"/img/dashboard/user-example.png"}
          alt="Flag"
          width={48}
          height={48}
        />
      )}
    </section>
  );
};

export default ContactInfoCard;

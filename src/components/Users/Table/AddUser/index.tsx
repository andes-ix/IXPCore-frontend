import styles from "./styles.module.scss";
import { useTranslations } from "next-intl";
import countries from "./countries.json";
import { useState } from "react";
import { FormEvent, InputEvent, SelectEvent } from "@constants/customTypes";
import "react-international-phone/style.css";
import { addUser } from "@services/apiMethods";
import FormAddUserDesktop from "./Desktop";
import FormAddUserMobile from "./Mobile";
import { toast, Toaster } from "sonner";

interface IProps {
  setShowModalAddUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalAddUser = ({ setShowModalAddUser }: IProps) => {
  const [inputValue, setInputValue] = useState({
    id: "",
    name: "",
    country: {
      text: "",
      code: "",
    },
    phone: "",
    charge: "",
    email: "",
    role: "",
  });

  const t = useTranslations("Users.AddUser");

  const handleChange = (e: InputEvent | SelectEvent) => {
    const { name, value } = e.target;

    if (name === "country") {
      return setInputValue({
        ...inputValue,
        country: {
          text: countries.find((c) => c.value === value)!.text,
          code: value,
        },
      });
    }

    if (name === "name" && value !== "") {
      const ONLY_LETTERS = /^[a-zA-Z\s]+$/;

      if (!ONLY_LETTERS.test(value)) return;
    }

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleChangePhone = (value: string) => {
    setInputValue({
      ...inputValue,
      phone: value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      !inputValue.id ||
      !inputValue.name ||
      !inputValue.country.code ||
      !inputValue.charge ||
      !inputValue.email ||
      !inputValue.role ||
      inputValue.phone.length < 5
    ) {
      return;
    }

    const response = await addUser(inputValue);

    if (response.error) {
      return toast.error(response.error);
    }


    setShowModalAddUser(false);
  };

  return (
    <section className={styles.sectionContainer}>
      <Toaster position="top-center" richColors />
      <article>
        <h2>{t("title")}</h2>

        <FormAddUserDesktop
          handleChange={handleChange}
          handleChangePhone={handleChangePhone}
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setShowModalAddUser={setShowModalAddUser}
        />

        <FormAddUserMobile
          handleChange={handleChange}
          handleChangePhone={handleChangePhone}
          handleSubmit={handleSubmit}
          inputValue={inputValue}
          setShowModalAddUser={setShowModalAddUser}
        />
      </article>
    </section>
  );
};

export default ModalAddUser;

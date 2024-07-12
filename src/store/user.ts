import { create } from "zustand";

interface IUser {
  cargo: string;
  pais: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

interface UserState {
  token: string;
  user: IUser;
  setUser: (data: ISetUser) => void;
}

export const useUserStore = create<UserState>((set) => ({
  token: "",
  user: {
    cargo: "",
    pais: "",
    email: "",
    first_name: "",
    last_name: "",
    phone: "",
  },
  setUser: (data: ISetUser) =>
    set({
      token: data.token,
      user: {
        cargo: "",
        pais: "",
        email: data.user_detail.email,
        first_name: data.user_detail.first_name,
        last_name: data.user_detail.last_name,
        phone: data.user_detail.phone,
      },
    }),
}));

interface ISetUser {
  token: string;
  user_detail: {
    ID: string;
    created: string;
    creator: string;
    deleted: boolean;
    email: string;
    first_name: string;
    groups: [];
    is_staff: boolean;
    is_superuser: boolean;
    last_login: string;
    last_name: string;
    phone: string;
    sequential_id: string;
    updated: string;
    updater: string;
    user_permissions: [];
  };
}

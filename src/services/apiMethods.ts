import { apiClient, apiClientWithAuth } from "./apiService";

export const login = async (params: { email: string; password: string }) => {
  try {
    const { email, password } = params;

    const postData = {
      email,
      password,
    };

    const { data } = await apiClient.post("/v1/signin", postData);

    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};

interface IAddUser {
  id: string;
  name: string;
  country: {
    code: string;
    text: string;
  };
  phone: string;
  email: string;
  charge: string;
  role: string;
}

export const addUser = async (params: IAddUser) => {
  try {
    const { id, name, email, phone, role, country, charge } = params;

    const postData = {
      cargo: charge.trim(),
      pais: country.text,
      email: email.trim(),
      full_name: name.trim(),
      phone: phone.trim(),
    };

    const { data } = await apiClientWithAuth.post("/v1/userapp", postData);

    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};

interface IChangePassword {
  password1: string;
  password2: string;
}

export const changePassword = async (params: IChangePassword) => {
  try {
    const { password1, password2 } = params;

    const postData = { password1, password2 };

    const { data } = await apiClientWithAuth.post(
      "/v2/password_reset/change_password",
      postData
    );

    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};

import { apiClient, apiClientWithAuth } from "./apiService";

export const login = async (params: { email: string; password: string }) => {
  try {
    const { email, password } = params;

    const { data } = await apiClient.post("/v1/signin", { email, password });

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

    const { data } = await apiClientWithAuth.post("/v1/userapp/", postData);

    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};

export const getCodeForPasswordReset = async (email: string) => {
  try {
    const { data } = await apiClient.post(
      "/v2/password_reset/generate_code_password/",
      { email }
    );

    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};

interface IChangePassword {
  email: string;
  password1: string;
  password2: string;
}

export const changePassword = async (params: IChangePassword) => {
  try {
    const { email, password1, password2 } = params;

    const { data } = await apiClientWithAuth.post(
      "/v2/password_reset/change_password/",
      { email, password1, password2 }
    );

    return data;
  } catch (error: any) {
    return { error: error.response.data.message };
  }
};

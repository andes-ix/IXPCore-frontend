import { createAsyncThunk } from "@reduxjs/toolkit";
import { useAlert } from "Common/Components/Alert/AlertProvider";

import {
  deleteUserList as deleteUserListApi,
  getUserGrid as getUserGridApi,
  addUserGrid as addUserGridApi,
  updateUserGrid as updateUserGridApi,
  deleteUserGrid as deleteUserGridApi,
} from "../../helpers/fakebackend_helper";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiClientWithAuth } from "services/index";

export const getUserList = createAsyncThunk("users/getUserList", async () => {
  try {
    const { data } = await apiClientWithAuth.get("/v1/user/");
    return data;
  } catch (error) {
    return error;
  }
});
export const addUserList = createAsyncThunk(
  "users/addUserList",
  async (values: any) => {
    try {
      const { email, first_name, phone, country, job_position } = values;
      const { data } = await apiClientWithAuth.post(`/v1/user/`, {
        email,
        first_name,
        last_name: "",
        password: "12345678",
        phone,
        country,
        job_position,
      });

      return data;
    } catch (error) {
      toast.error("User Added Failed", { autoClose: 2000 });
      return error;
    }
  }
);
export const updateUserList = createAsyncThunk(
  "users/updateUserList",
  async (values: any, extra: any) => {
    try {
      const { email, first_name, phone, country, job_position, ID, groups } =
        values;
      const { data } = await apiClientWithAuth.patch(`/v1/user/${ID}/`, {
        email,
        first_name,
        phone,
        country,
        job_position,
        groups,
      });

      toast.success("User updated Successfully", { autoClose: 2000 });
      return data;
    } catch (error) {
      toast.error("User updated Failed", { autoClose: 2000 });
      return error;
    }
  }
);
export const deleteUserList = createAsyncThunk(
  "users/deleteUserList",
  async (event: any) => {
    try {
      const response = deleteUserListApi(event);
      toast.success("User deleted Successfully", { autoClose: 2000 });
      return response;
    } catch (error) {
      toast.error("User deleted Failed", { autoClose: 2000 });
      return error;
    }
  }
);

export const getUserGrid = createAsyncThunk("users/getUserGrid", async () => {
  try {
    const response = getUserGridApi();
    return response;
  } catch (error) {
    return error;
  }
});
export const addUserGrid = createAsyncThunk(
  "users/addUserGrid",
  async (event: any) => {
    try {
      const response = addUserGridApi(event);
      const data = await response;
      toast.success("User Added Successfully", { autoClose: 2000 });
      return data;
    } catch (error) {
      toast.error("User Added Failed", { autoClose: 2000 });
      return error;
    }
  }
);
export const updateUserGrid = createAsyncThunk(
  "users/updateUserGrid",
  async (event: any) => {
    try {
      const response = updateUserGridApi(event);
      const data = await response;
      toast.success("User updated Successfully", { autoClose: 2000 });
      return data;
    } catch (error) {
      toast.error("User updated Failed", { autoClose: 2000 });
      return error;
    }
  }
);
export const deleteUserGrid = createAsyncThunk(
  "users/deleteUserGrid",
  async (event: any) => {
    try {
      const response = deleteUserGridApi(event);
      toast.success("User deleted Successfully", { autoClose: 2000 });
      return response;
    } catch (error) {
      toast.error("User deleted Failed", { autoClose: 2000 });
      return error;
    }
  }
);

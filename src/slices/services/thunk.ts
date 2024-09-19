import { createAsyncThunk } from "@reduxjs/toolkit";

import "react-toastify/dist/ReactToastify.css";
import { apiClientWithAuth } from "services/index";

export const getServiceDataTableStruct = createAsyncThunk(
  "service/getServiceDataTableStruct",
  async () => {
    try {
      const { data } = await apiClientWithAuth.get(
        "/v1/service/datatables_struct/"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const getServiceDataTableView = createAsyncThunk(
  "service/getServiceDataTableView",
  async (page: number) => {
    try {
      const pagination = { offset: 10, start: page * 10 };

      const { data } = await apiClientWithAuth.post(
        "/v1/service/datatables_view/",
        pagination
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const getServiceDetail = createAsyncThunk(
  "service/getServiceDetail",
  async (id: string) => {
    try {
      const { data } = await apiClientWithAuth.get(`/v1/service/${id}`);
      return data;
    } catch (error) {
      return error;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import "react-toastify/dist/ReactToastify.css";
import { apiClientWithAuth } from "services/index";

export const getBalanceDataTableStruct = createAsyncThunk(
  "balances/getBalanceDataTableStruct",
  async () => {
    try {
      const { data } = await apiClientWithAuth.get(
        "/v1/balance/datatables_struct/"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const getBalanceDataTableView = createAsyncThunk(
  "balances/getBalanceDataTableView",
  async (page: number) => {
    try {
      const pagination = { offset: 10, start: page * 10 };

      const { data } = await apiClientWithAuth.post(
        "/v1/balance/datatables_view/",
        pagination
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import "react-toastify/dist/ReactToastify.css";
import { apiClientWithAuth } from "services/index";

export const getPaymentDataTableStruct = createAsyncThunk(
  "payments/getPaymentDataTableStruct",
  async () => {
    try {
      const { data } = await apiClientWithAuth.get(
        "/v1/payment/datatables_struct/"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const getPaymentDataTableView = createAsyncThunk(
  "payments/getPaymentDataTableView",
  async (page: number) => {
    try {
      const pagination = { offset: 10, start: page * 10 };

      const { data } = await apiClientWithAuth.post(
        "/v1/payment/datatables_view/",
        pagination
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import { getInvoiceList as getInvoiceListApi } from "../../helpers/fakebackend_helper";
import { apiClientWithAuth } from "services";

export const getInvoiceList = createAsyncThunk(
  "invoice/getInvoiceList",
  async () => {
    try {
      const response = getInvoiceListApi();
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const getInvoiceDataTableStruct = createAsyncThunk(
  "invoices/getInvoiceDataTableStruct",
  async () => {
    try {
      const { data } = await apiClientWithAuth.get(
        "/v1/invoice/datatables_struct/"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const getInvoiceDataTableView = createAsyncThunk(
  "invoices/getInvoiceDataTableView",
  async (page: number) => {
    try {
      const pagination = { offset: 10, start: page * 10 };

      const { data } = await apiClientWithAuth.post(
        "/v1/invoice/datatables_view/",
        pagination
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import { getInvoiceList as getInvoiceListApi } from "../../helpers/fakebackend_helper";
import { apiClientWithAuth } from "services";
import { formatDateFilter } from "Common/utils/formatDateFilter";

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
  async ({
    page,
    daysSelecteds,
  }: {
    page: number;
    daysSelecteds?: string[];
  }) => {
    try {
      let bodyRequest: any = { offset: 10, start: page * 10 };
      if (daysSelecteds && daysSelecteds.length === 2) {
        const [startDate, endDate] = daysSelecteds;

        const filters = `[[\"invoice_date\",\"gt\",\"${formatDateFilter(
          startDate
        )}\"], [\"invoice_date\",\"lte\",\"${formatDateFilter(endDate)}\"]]`;

        bodyRequest = {
          ...bodyRequest,
          filters,
        };
      }

      const { data } = await apiClientWithAuth.post(
        "/v1/invoice/datatables_view/",
        bodyRequest
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

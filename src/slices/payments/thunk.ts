import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDateFilter } from "Common/utils/formatDateFilter";

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

        const filters = `[[\"date\",\"gt\",\"${formatDateFilter(
          startDate
        )}\"], [\"date\",\"lte\",\"${formatDateFilter(endDate)}\"]]`;

        bodyRequest = {
          ...bodyRequest,
          filters,
        };
      }

      const { data } = await apiClientWithAuth.post(
        "/v1/payment/datatables_view/",
        bodyRequest
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

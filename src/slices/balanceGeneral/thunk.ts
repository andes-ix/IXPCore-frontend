import { createAsyncThunk } from "@reduxjs/toolkit";
import { formatDateFilter } from "Common/utils/formatDateFilter";

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

        const filters = `[[\"date_balance\",\"gt\",\"${formatDateFilter(
          startDate
        )}\"], [\"date_balance\",\"lte\",\"${formatDateFilter(endDate)}\"]]`;

        bodyRequest = {
          ...bodyRequest,
          filters,
        };
      }

      const { data } = await apiClientWithAuth.post(
        "/v1/balance/datatables_view/",
        bodyRequest
      );
      return data;
    } catch (error: any) {
      return error;
    }
  }
);

export const getBalanceDetail = createAsyncThunk(
  "balances/getBalanceDetail",
  async () => {
    try {
      const ispId = localStorage.getItem("ispId");
      const { data } = await apiClientWithAuth.get(
        `/v1/balance/resumen/?isp=${ispId}`
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

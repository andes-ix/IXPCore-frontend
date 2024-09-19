import { createAsyncThunk } from "@reduxjs/toolkit";

import "react-toastify/dist/ReactToastify.css";
import { apiClientWithAuth } from "services/index";

export const getPrefixesDataTableStruct = createAsyncThunk(
  "prefixes/getPrefixesDataTableStruct",
  async () => {
    try {
      const { data } = await apiClientWithAuth.get(
        "/v1/prefixes/datatables_struct/"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const getPrefixesDataTableView = createAsyncThunk(
  "prefixes/getPrefixesDataTableView",
  async ({ page, service }: { page: number; service?: string }) => {
    try {
      let bodyRequest: any = { offset: 10, start: page * 10 };
      if (service) {
        const filters = `[[\"service\",\"equal\",\"${service}\"]]`;

        bodyRequest = {
          ...bodyRequest,
          filters,
        };
      }

      const { data } = await apiClientWithAuth.post(
        "/v1/prefixes/datatables_view/",
        bodyRequest
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

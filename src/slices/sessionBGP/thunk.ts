import { createAsyncThunk } from "@reduxjs/toolkit";

import "react-toastify/dist/ReactToastify.css";
import { apiClientWithAuth } from "services/index";

export const getSessionBGPDataTableStruct = createAsyncThunk(
  "sessionBGP/getSessionBGPDataTableStruct",
  async () => {
    try {
      const { data } = await apiClientWithAuth.get(
        "/v1/session_bgp/datatables_struct/"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);
export const getSessionBGPIPV4DataTableView = createAsyncThunk(
  "sessionBGP/getSessionBGPIPV4DataTableView",
  async ({ page, service }: { page: number; service?: string }) => {
    try {
      let bodyRequest: any = { offset: 10, start: page * 10 };
      if (service) {
        const filters = `[[\"service\",\"equal\",\"${service}\"],[\"type_ip\",\"equal\",\"1\"]]`;
        bodyRequest = {
          ...bodyRequest,
          filters,
        };
      }

      const { data } = await apiClientWithAuth.post(
        "/v1/session_bgp/datatables_view/",
        bodyRequest
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const getSessionBGPIPV6DataTableView = createAsyncThunk(
  "sessionBGP/getSessionBGPIPV6DataTableView",
  async ({ page, service }: { page: number; service?: string }) => {
    try {
      let bodyRequest: any = { offset: 10, start: page * 10 };
      if (service) {
        const filters = `[[\"service\",\"equal\",\"${service}\"],[\"type_ip\",\"equal\",\"2\"]]`;

        bodyRequest = {
          ...bodyRequest,
          filters,
        };
      }

      const { data } = await apiClientWithAuth.post(
        "/v1/session_bgp/datatables_view/",
        bodyRequest
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

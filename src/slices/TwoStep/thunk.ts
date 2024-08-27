import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiClientWithAuth } from "services/index";

export const getTwoStepStatus = createAsyncThunk(
  "twoStep/getTwoStepStatus",
  async () => {
    try {
      const { data } = await apiClientWithAuth.post(
        "/v1/users/status-authenticator/"
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiClientWithAuth } from "services/index";

export const getGroupsList = createAsyncThunk(
  "groups/getGroupsList",
  async () => {
    try {
      const { data } = await apiClientWithAuth.get("/v1/groups/");
      console.log(" ========= groups =========", data);
      return data;
    } catch (error) {
      return error;
    }
  }
);

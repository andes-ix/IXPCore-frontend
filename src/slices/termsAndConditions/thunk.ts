import { createAsyncThunk } from "@reduxjs/toolkit";

import { apiClient, apiClientWithAuth } from "services/index";

export const getTermsAndConditionsStatus = createAsyncThunk(
  "termsAndConditions/getTermsAndConditions",
  async (email: string | null) => {
    try {
      const { data } = await apiClient.post(
        "/v1/kvu2/get_accept_terms_and_conditions/",
        {
          email,
        }
      );
      return data;
    } catch (error) {
      return error;
    }
  }
);

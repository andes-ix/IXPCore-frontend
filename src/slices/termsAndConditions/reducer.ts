import { createSlice } from "@reduxjs/toolkit";
import { getTermsAndConditionsStatus } from "./thunk";

export const initialState = {
  termsAndCondition: {},
  errors: {},
};

const TermsAndConditionSlice = createSlice({
  name: "TermsAndCondition",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // List
    builder.addCase(
      getTermsAndConditionsStatus.fulfilled,
      (state: any, action: any) => {
        state.termsAndCondition = action.payload;
      }
    );
    builder.addCase(
      getTermsAndConditionsStatus.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );
  },
});

export default TermsAndConditionSlice.reducer;

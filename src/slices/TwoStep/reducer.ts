import { createSlice } from "@reduxjs/toolkit";
import { getTwoStepStatus } from "./thunk";

export const initialState = {
  twoStep: {},
  errors: {},
};

const TwoStepSlice = createSlice({
  name: "TwoStep",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // List
    builder.addCase(getTwoStepStatus.fulfilled, (state: any, action: any) => {
      console.log("si haces la peticion ====", action.payload);
      state.twoStep = action.payload;
    });
    builder.addCase(getTwoStepStatus.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
    });
  },
});

export default TwoStepSlice.reducer;

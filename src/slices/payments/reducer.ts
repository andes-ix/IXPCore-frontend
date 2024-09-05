import { createSlice } from "@reduxjs/toolkit";
import { getPaymentDataTableView, getPaymentDataTableStruct } from "./thunk";

export const initialState = {
  paymentDataView: {},
  paymentDataStruct: {},
  errors: {},
};

const PaymentSlice = createSlice({
  name: "Payments",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // List
    builder.addCase(
      getPaymentDataTableView.fulfilled,
      (state: any, action: any) => {
        state.paymentDataView = action.payload;
      }
    );
    builder.addCase(
      getPaymentDataTableView.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    builder.addCase(
      getPaymentDataTableStruct.fulfilled,
      (state: any, action: any) => {
        state.paymentDataStruct = action.payload;
      }
    );
    builder.addCase(
      getPaymentDataTableStruct.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );
  },
});

export default PaymentSlice.reducer;

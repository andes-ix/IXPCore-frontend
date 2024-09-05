import { createSlice } from "@reduxjs/toolkit";
import { getBalanceDataTableView, getBalanceDataTableStruct } from "./thunk";

export const initialState = {
  balanceDataView: {},
  balanceDataStruct: {},
  errors: {},
};

const GeneralBalanceSlice = createSlice({
  name: "GeneralBalances",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // List
    builder.addCase(
      getBalanceDataTableView.fulfilled,
      (state: any, action: any) => {
        state.balanceDataView = action.payload;
      }
    );
    builder.addCase(
      getBalanceDataTableView.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    builder.addCase(
      getBalanceDataTableStruct.fulfilled,
      (state: any, action: any) => {
        state.balanceDataStruct = action.payload;
      }
    );
    builder.addCase(
      getBalanceDataTableStruct.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );
  },
});

export default GeneralBalanceSlice.reducer;

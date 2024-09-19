import { createSlice } from "@reduxjs/toolkit";
import { getPrefixesDataTableView, getPrefixesDataTableStruct } from "./thunk";

export const initialState = {
  prefixeDataView: {},
  prefixeDataStruct: {},
  errors: {},
};

const PrefixeSlice = createSlice({
  name: "Prefixes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // List
    builder.addCase(
      getPrefixesDataTableView.fulfilled,
      (state: any, action: any) => {
        state.prefixeDataView = action.payload;
      }
    );
    builder.addCase(
      getPrefixesDataTableView.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    builder.addCase(
      getPrefixesDataTableStruct.fulfilled,
      (state: any, action: any) => {
        state.prefixeDataStruct = action.payload;
      }
    );
    builder.addCase(
      getPrefixesDataTableStruct.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );
  },
});

export default PrefixeSlice.reducer;

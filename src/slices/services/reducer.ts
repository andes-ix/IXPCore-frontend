import { createSlice } from "@reduxjs/toolkit";
import {
  getServiceDataTableView,
  getServiceDataTableStruct,
  getServiceDetail,
} from "./thunk";

export const initialState = {
  serviceDataView: {},
  serviceDetail: {},
  serviceDataStruct: {},
  errors: {},
};

const ServiceSlice = createSlice({
  name: "Services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // List
    builder.addCase(
      getServiceDataTableView.fulfilled,
      (state: any, action: any) => {
        state.serviceDataView = action.payload;
      }
    );
    builder.addCase(
      getServiceDataTableView.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    builder.addCase(
      getServiceDataTableStruct.fulfilled,
      (state: any, action: any) => {
        state.serviceDataStruct = action.payload;
      }
    );
    builder.addCase(
      getServiceDataTableStruct.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    //service detail
    builder.addCase(getServiceDetail.fulfilled, (state: any, action: any) => {
      state.serviceDetail = action.payload;
    });
    builder.addCase(getServiceDetail.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
    });
  },
});

export default ServiceSlice.reducer;

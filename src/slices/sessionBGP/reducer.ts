import { createSlice } from "@reduxjs/toolkit";
import {
  getSessionBGPIPV4DataTableView,
  getSessionBGPIPV6DataTableView,
  getSessionBGPDataTableStruct,
} from "./thunk";

export const initialState = {
  sessionBGPIPV4DataView: {},
  sessionBGPIPV6DataView: {},
  sessionBGPDataStruct: {},
  errors: {},
};

const SessionBGPSlice = createSlice({
  name: "SessionBGP",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get session ipv4 list
    builder.addCase(
      getSessionBGPIPV4DataTableView.fulfilled,
      (state: any, action: any) => {
        state.sessionBGPIPV4DataView = action.payload;
      }
    );
    builder.addCase(
      getSessionBGPIPV4DataTableView.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    // get session ipv6 list
    builder.addCase(
      getSessionBGPIPV6DataTableView.fulfilled,
      (state: any, action: any) => {
        state.sessionBGPIPV6DataView = action.payload;
      }
    );
    builder.addCase(
      getSessionBGPIPV6DataTableView.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    // get session bgp data table struct
    builder.addCase(
      getSessionBGPDataTableStruct.fulfilled,
      (state: any, action: any) => {
        state.sessionBGPDataStruct = action.payload;
      }
    );
    builder.addCase(
      getSessionBGPDataTableStruct.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );
  },
});

export default SessionBGPSlice.reducer;

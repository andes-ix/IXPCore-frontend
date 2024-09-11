import { createSlice } from "@reduxjs/toolkit";
import {
  getInvoiceList,
  getInvoiceDataTableView,
  getInvoiceDataTableStruct,
} from "./thunk";

export const initialState = {
  invoicelist: [],
  invoiceDataView: {},
  invoiceDataStruct: {},
  errors: {},
};

const InvoiceSlice = createSlice({
  name: "Invoices",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getInvoiceList.fulfilled, (state: any, action: any) => {
      state.invoicelist = action.payload;
    });
    builder.addCase(getInvoiceList.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
    });

    // get data view
    builder.addCase(
      getInvoiceDataTableView.fulfilled,
      (state: any, action: any) => {
        state.invoiceDataView = action.payload;
      }
    );
    builder.addCase(
      getInvoiceDataTableView.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );

    //get data struct
    builder.addCase(
      getInvoiceDataTableStruct.fulfilled,
      (state: any, action: any) => {
        state.invoiceDataStruct = action.payload;
      }
    );
    builder.addCase(
      getInvoiceDataTableStruct.rejected,
      (state: any, action: any) => {
        state.error = action.payload.error || null;
      }
    );
  },
});

export default InvoiceSlice.reducer;

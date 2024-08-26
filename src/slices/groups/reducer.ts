import { createSlice } from "@reduxjs/toolkit";
import { getGroupsList } from "./thunk";

export const initialState = {
  groupList: [],
  errors: {},
};

const GroupsSlice = createSlice({
  name: "Groups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // List
    builder.addCase(getGroupsList.fulfilled, (state: any, action: any) => {
      state.userList = action.payload;
    });
    builder.addCase(getGroupsList.rejected, (state: any, action: any) => {
      state.error = action.payload.error || null;
    });
  },
});

export default GroupsSlice.reducer;

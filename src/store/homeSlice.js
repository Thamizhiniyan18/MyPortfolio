import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {},
});

export const homeSliceActions = homeSlice.actions;
export default homeSlice.reducer;

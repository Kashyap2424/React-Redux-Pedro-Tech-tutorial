import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const themeSlice = createSlice({
  name: "theme",
  initialState: {
    value: initialState,
  },
  reducers: {
    changeThemeHandler: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeThemeHandler } = themeSlice.actions;

export default themeSlice.reducer;

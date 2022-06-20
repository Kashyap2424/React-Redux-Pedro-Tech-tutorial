import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  age: 0,
  email: "",
  phoneNumber: "",
};

export const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    value: initialState,
  },
  reducers: {
    userLogin: (state, action) => {
      state.value = action.payload;
    },

    userLogout: (state, action) => {
      state.value = initialState;
    },
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;

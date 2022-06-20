import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    value: {
      name: "Kashyap Kapdi",
      age: 19,
      email: "kapdikashyap2003@gmail.com",
      phoneNumber: "+91 96875-26355",
    },
  },
  reducers: {
    userLogin: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userLogin } = userSlice.actions;

export default userSlice.reducer;

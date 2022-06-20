import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userDetails",
  initialState: { value: { name: "", age: 0, email: "", phoneNumber: 0 } },
  reducers: {
    userLogin: (state, action) => {},
  },
});

export default userSlice.reducer;

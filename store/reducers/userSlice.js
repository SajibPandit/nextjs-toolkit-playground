import { createSlice } from "@reduxjs/toolkit";

const studentSlice = createSlice({
  name: "user",
  initialState: [
    {
      id: "1",
      name: "John Doe",
      email: "johndoe@gmail.com",
      phone: "0172364736",
      address: "Dhaka,Bangladesh",
    },
    {
      id: "2",
      name: "Steve Smith",
      email: "stevesmith@gmail.com",
      phone: "0172364736",
      address: "Khulna,Bangladesh",
    },
  ],
  reducers: {
    addUser: (state,action)=>{
      state.users = [action.payload,...state.users]
    }
  },
});

export const {addUser} = studentSlice.actions

export default studentSlice.reducer;

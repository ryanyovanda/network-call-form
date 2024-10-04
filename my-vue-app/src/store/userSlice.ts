// src/store/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'users',
  initialState: {
    list: [], // Initialize with an empty list
  },
  reducers: {
    setUsers(state, action) {
      state.list = action.payload; // Update users list
    },
    addUser(state, action) {
      state.list.push(action.payload); // Add new user
    },
  },
});

export const { setUsers, addUser } = userSlice.actions;
export default userSlice.reducer;

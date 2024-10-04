// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'; // Import your user slice

const store = configureStore({
  reducer: {
    users: userReducer, // Add your user reducer here
  },
});

export default store;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLogedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registration(state, action) {},
  },
});

export const { registration } = authSlice.actions;
export const authReducer = authSlice.reducer;

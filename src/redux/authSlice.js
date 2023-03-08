import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: null,
  id: null,

  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.isLoggedIn = true;
    },

    logOut(state, _) {
      state.email = null;
      state.token = null;
      state.id = null;
      state.isLoggedIn = false;
    },
    refreshUser(state, _) {
      state.isLoggedIn = true;
      state.isRefreshing = false;
    },
  },
});

export const { setUser, logOut, refreshUser } = authSlice.actions;
export const authReducer = authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchCharacters(state, action) {
      state.query = action.payload;
    },
  },
});

export const { searchCharacters } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;

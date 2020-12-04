import { createSlice } from '@reduxjs/toolkit';
import {IBeerArray} from "types"

const initialState: IBeerArray = {
  beers: [],
  isPulled: false,
};

const beerSlice = createSlice({
  name: 'beers',
  initialState,
  reducers: {
    setBeers(state, action) {
      state.beers = action.payload;
      state.isPulled = true;
    },
  },
});

export const { setBeers } = beerSlice.actions;

export const selectBeers = (state: IBeerArray) => state.beers;

export default beerSlice.reducer;
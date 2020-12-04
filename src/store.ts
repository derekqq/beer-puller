import { configureStore } from '@reduxjs/toolkit';
import beerReducer from 'slices/beerSlice';

const store = configureStore({
  reducer: {
    beer: beerReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rocketSlice';

const store = configureStore({
  reducer: {
    rockets: rocketReducer,
  },
});

export default store;

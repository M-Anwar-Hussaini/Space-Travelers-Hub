import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsFromApi = createAsyncThunk(
  'missions/getMissionsFromApi',
  async () => {
    try {
      const response = await fetch('https://api.spacexdata.com/v3/missions');
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
);

const initialState = {
  missions: [],
  isLoading: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
  },
  extraReducers: () => {
  },
});

export default missionSlice.reducer;
export const { join, leave } = missionSlice.actions;

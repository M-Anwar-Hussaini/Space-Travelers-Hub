import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const getMissionsFromApi = createAsyncThunk('missions/getMissionsFromApi', async () => {
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  missions: [],
  isLoading: false,
  hasError: false,
};

const missionSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    join: (state, action) => {
      const mission = state.missions.find((mission) => mission.id === action.payload);
      mission.status = true;
    },
    leave: (state, action) => {
      const mission = state.missions.find((mission) => mission.id === action.payload);
      mission.status = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissionsFromApi.fulfilled, (state, action) => {
        state.hasError = false;
        if (state.missions.length === 0) {
          state.missions = action.payload.map((mission) => {
            const newMission = {
              id: mission.mission_id,
              name: mission.mission_name,
              description: mission.description,
              status: false,
            };
            return newMission;
          });
        }
        state.isLoading = false;
      })

      .addCase(getMissionsFromApi.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })

      .addCase(getMissionsFromApi.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default missionSlice.reducer;
export const { join, leave } = missionSlice.actions;

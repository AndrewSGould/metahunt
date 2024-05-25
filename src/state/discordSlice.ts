import { createSlice } from '@reduxjs/toolkit';
import { DiscordState } from '../types';

const initialState: DiscordState = {
  isAuthenticated: false,
};

const discordSlice = createSlice({
  name: 'discord',
  initialState,
  reducers: {
    setDiscordIsAuthd: (state) => {
      state.isAuthenticated = true;
    },
    setDiscordIsNotAuthd: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { setDiscordIsAuthd, setDiscordIsNotAuthd } = discordSlice.actions;

export default discordSlice.reducer;

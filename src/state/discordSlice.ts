import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DiscordState } from '../types';

const initialState: DiscordState = {
  isAuthenticated: false,
};

const discordSlice = createSlice({
  name: 'discord',
  initialState,
  reducers: {
    setDiscordAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setDiscordAuth } = discordSlice.actions;

export default discordSlice.reducer;

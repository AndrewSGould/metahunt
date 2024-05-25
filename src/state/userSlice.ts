import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState } from '../types';

const initialState: UserState = {
  isAuthenticated: false,
  avatar: undefined,
  gamertag: undefined,
  roles: undefined,
  token: undefined,
  refreshToken: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserIsAuthd: (state) => {
      state.isAuthenticated = true;
    },
    setUserIsNotAuthd: (state) => {
      state.isAuthenticated = false;
    },
    setUserInfo: (state, action: PayloadAction<Partial<UserState>>) => {
      state.isAuthenticated = true;
      state.avatar = action.payload.avatar ?? state.avatar;
      state.gamertag = action.payload.gamertag ?? state.gamertag;
      state.refreshToken = action.payload.refreshToken ?? state.refreshToken;
      state.token = action.payload.token ?? state.token;
      state.roles = action.payload.roles ?? state.roles;
    },
    setToken: (state, action: PayloadAction<string | undefined>) => {
      state.token = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('jwt');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('gamertag');
      localStorage.removeItem('avatar');
      localStorage.removeItem('roles');

      state.isAuthenticated = false;
      state.avatar = undefined;
      state.gamertag = undefined;
      state.roles = undefined;

      window.location.href = '/';
    },
  },
});

export const {
  setUserIsAuthd,
  setUserIsNotAuthd,
  setUserInfo,
  setToken,
  logout,
} = userSlice.actions;

export default userSlice.reducer;

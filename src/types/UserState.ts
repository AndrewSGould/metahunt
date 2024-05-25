import { LoginResponse } from '.';

export type UserState = LoginResponse & {
  isAuthenticated: boolean;
};

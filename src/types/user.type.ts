import { BcmPlayer } from '../bcmx/types';
import DiscordLogin from './discordLogin.type';
import Login from './login.type';
import UserRegistration from './userRegistration.type';
import UserRole from './userRole.type';

type User = {
  id: number;
  xuid?: string;
  gamertag?: string;
  avatar?: string;
  region?: string;
  area?: string;
  login?: Login;
  discordLogin?: DiscordLogin;
  bcmPlayer?: BcmPlayer;
  userRoles: UserRole[];
  userRegistrations: UserRegistration[];
};

export default User;

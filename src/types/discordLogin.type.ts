import User from './user.type';

type DiscordLogin = {
  id: number;
  discordId: bigint; // Use `bigint` for ulong
  tokenType: string;
  accessToken?: string; // Assume encrypted
  refreshToken?: string; // Assume encrypted
  userId: number;
  user?: User;
};

export default DiscordLogin;

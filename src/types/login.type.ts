import User from './user.type';

type Login = {
  id: number;
  refreshToken?: string;
  refreshTokenExpiryTime: Date;
  userId: number;
  user: User;
};

export default Login;

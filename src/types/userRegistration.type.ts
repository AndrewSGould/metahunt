import Registration from './registration.type';
import User from './user.type';

type UserRegistration = {
  userId: number;
  user: User;
  registrationId: number;
  registration: Registration;
  registrationDate?: Date;
};

export default UserRegistration;

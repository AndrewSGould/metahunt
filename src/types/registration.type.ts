import UserRegistration from './userRegistration.type';

type Registration = {
  id: number;
  name?: string;
  startDate?: Date;
  endDate?: Date;
  userRegistrations: UserRegistration[];
};

export default Registration;

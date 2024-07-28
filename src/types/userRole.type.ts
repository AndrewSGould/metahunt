import Role from './role.type';
import User from './user.type';

type UserRole = {
  userId: number;
  user: User;
  roleId: number;
  role: Role;
};

export default UserRole;

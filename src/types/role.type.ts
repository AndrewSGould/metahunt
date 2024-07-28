import UserRole from './userRole.type';

type Role = {
  id: number;
  discordId: bigint;
  roleName: string;
  userRoles: UserRole[];
};

export default Role;

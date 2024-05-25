import { Link, useMatch } from 'react-router-dom';

export default function NavItem({
  path,
  activePath,
  title,
  icon,
}: NavItemProps) {
  const isActive = useMatch(activePath);

  return (
    <li className={isActive ? 'bg-slate-600 rounded-md text-white' : ''}>
      <Link to={path}>
        {icon}
        <h3>{title}</h3>
      </Link>
    </li>
  );
}

type NavItemProps = {
  path: string;
  title: string;
  activePath: string;
  icon: React.ReactNode;
};

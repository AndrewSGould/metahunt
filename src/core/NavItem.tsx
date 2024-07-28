import { Link, useMatch } from 'react-router-dom';

export default function NavItem({ path, title, icon }: NavItemProps) {
  const isActive = useMatch(path);

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
  icon: React.ReactNode;
};

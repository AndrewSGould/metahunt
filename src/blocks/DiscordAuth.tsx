import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import CardHeader from '../bits/CardHeader';

export default function DiscordAuth() {
  const user = useSelector((state: RootState) => state.user);
  const sortedRoles = user.roles
    ? [...user.roles].sort((a, b) => a.localeCompare(b))
    : [];

  function getRoleColor(role: string) {
    switch (role) {
      case '@everyone':
        return 'text-white';
      case 'Admin':
        return 'text-[#992d22]';
      case 'Bot':
        return 'text-[#95a5a6]';
      case 'Cyberhacker':
        return 'text-[#f2e800]';
      case 'BCM Founder':
        return 'text-[#d13eb6]';
      case 'Mod':
        return 'text-[#1abc9c]';
      case 'Stream Team':
        return 'text-[#9146ff]';
      case 'Sponsor':
        return 'text-[#f9e050]';
      case 'Enthusiast':
        return 'text-[#a0e64a]';
      case 'Homie':
        return 'text-[#a0e64a]';
      case 'Server Booster':
        return 'text-[#f47fff]';
      case 'Participant':
        return 'text-[#b7db89]';
      case 'Guest':
        return 'text-[#c691b6]';
      case 'RGSC Watchers':
        return 'text-[#546e7a]';
      case 'Twitch Watchers':
        return 'text-[#546e7a]';
    }
  }

  return (
    <>
      <CardHeader
        title='Discord Connection'
        tag='Connected!'
        tagType='success'
      />
      <p className='text-xs mb-3'>Your Discord is connected! Your roles are:</p>
      <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs font-semibold tracking-wide'>
        {sortedRoles.map((role) => (
          <li
            className={`w-full border-l-2 pl-1 rounded  ${getRoleColor(role)}`}
          >
            {role}
          </li>
        ))}
      </ul>
    </>
  );
}

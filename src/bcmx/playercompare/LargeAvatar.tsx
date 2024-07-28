import { FC } from 'react';
import TavisInvis from '../../assets/tavis_invis.png';

interface LargeAvatarProps {
  name: string;
  avatar?: string;
  isLoading?: boolean;
}

const LargeAvatar: FC<LargeAvatarProps> = ({
  name,
  avatar,
  isLoading = false,
}) => {
  return (
    <div className='col-span-2 border-2 flex justify-center items-center border-red-700/50 text-center text-2xl h-40 w-40 m-auto'>
      {isLoading ? (
        <div className='skeleton w-36 h-36'></div>
      ) : (
        <img src={avatar || TavisInvis} alt={`${name} Avatar`} />
      )}
    </div>
  );
};

export default LargeAvatar;

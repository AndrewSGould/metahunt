import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function Avatar() {
  const user = useSelector((state: RootState) => state.user);

  return (
    <div className='avatar h-6 w-6'>
      <div className='w-24 rounded-full'>
        <img alt='profile' src={user.avatar} />
      </div>
    </div>
  );
}

import { IconLogin, IconLogout } from '@tabler/icons-react';
import { RootState } from '../state/store';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../state/userSlice';
import { useNavigate } from 'react-router-dom';

export default function Signin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);

  function handleLogin() {
    window.location.href =
      'https://xbl.io/app/auth/' + process.env.REACT_APP_OXBL_APP;
  }

  function handleLogout() {
    dispatch(logout());
    navigate('/');
  }

  if (user.isAuthenticated)
    return (
      <li className='text-red-300'>
        <button type='button' onClick={handleLogout}>
          <IconLogout />
          Sign Out
        </button>
      </li>
    );
  else
    return (
      <li className='text-green-300'>
        <button type='button' onClick={handleLogin}>
          <IconLogin />
          Sign In
        </button>
      </li>
    );
}

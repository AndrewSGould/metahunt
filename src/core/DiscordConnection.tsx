import { useLocation, useNavigate } from 'react-router-dom';
import { useDiscordLoginMutation } from '../api/api';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { setUserInfo } from '../state/userSlice';
import { setDiscordAuth } from '../state/discordSlice';

export default function DiscordConnection() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const code = queryParams.get('code');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.user);

  const [discordLogin] = useDiscordLoginMutation();

  useEffect(() => {
    if (!code || !user.isAuthenticated) return;

    discordLogin({ code })
      .unwrap()
      .then((res: any) => {
        localStorage.setItem('jwt', res.token!);
        localStorage.setItem('refreshToken', res.refreshToken!);

        dispatch(setDiscordAuth(true));
        dispatch(setUserInfo(res));
        navigate('/settings');
      })
      .catch((error: any) => {
        console.error('Login failed:', error);
      });
  }, [code, discordLogin, dispatch, navigate, user.isAuthenticated]);

  return <></>;
}

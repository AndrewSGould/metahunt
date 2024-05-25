import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginResponse } from '../types/LoginResponse';
import { useDispatch } from 'react-redux';
import { setUserInfo, setUserIsAuthd } from '../state/userSlice';
import { useLoginMutation } from '../api/apiSlice';

export default function XblConnection() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const openXblCode = queryParams.get('code');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login] = useLoginMutation();

  useEffect(() => {
    if (!openXblCode) return;
    login({ openXblCode })
      .unwrap()
      .then((res: LoginResponse) => {
        localStorage.setItem('jwt', res.token!);
        localStorage.setItem('refreshToken', res.refreshToken!);
        localStorage.setItem('gamertag', res.gamertag!);
        localStorage.setItem('avatar', res.avatar!);
        localStorage.setItem('roles', JSON.stringify(res.roles));

        dispatch(setUserIsAuthd());
        dispatch(setUserInfo(res));
        navigate('/profile');
      })
      .catch(() => {
        alert('unhandled error when logging in');
      });
  }, [openXblCode, login, dispatch, navigate]);

  return <></>;
}

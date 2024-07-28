import { useEffect, useState } from 'react';
import Header from './core/Header';
import Nav from './core/Nav';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuth, setUserInfo } from './state/userSlice';
import { setDiscordAuth } from './state/discordSlice';
import { usePingDiscordQuery } from './api/api';
import { RootState } from './state/store';

function App() {
  const user = useSelector((state: RootState) => state.user);

  const [isNavOpen, setIsNavOpen] = useState(true);
  const { isSuccess } = usePingDiscordQuery(undefined, {
    skip: !user.isAuthenticated,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      dispatch(setUserAuth(true));
      dispatch(
        setUserInfo({
          avatar: localStorage.getItem('avatar')!,
          refreshToken: localStorage.getItem('refreshToken')!,
          gamertag: localStorage.getItem('gamertag')!,
          roles: JSON.parse(localStorage.getItem('roles')!),
          token,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setDiscordAuth(true));
    } else dispatch(setDiscordAuth(false));
  }, [dispatch, isSuccess]);

  return (
    <main className='bg-tertiary h-screen'>
      <Header setIsNavOpen={setIsNavOpen} />
      <div className='flex w-screen'>
        <Nav isNavOpen={isNavOpen} />
        <section className='w-full'>
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default App;

import { useEffect, useState } from 'react';
import Header from './core/Header';
import Nav from './core/Nav';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserInfo, setUserIsAuthd } from './state/userSlice';

function App() {
  const [isNavOpen, setIsNavOpen] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      dispatch(setUserIsAuthd());
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

  // TODO: on load of the app, ping the discord connection endpoint?
  // then set the state of connected or not

  return (
    <main className='bg-tertiary h-screen'>
      <Header setIsNavOpen={setIsNavOpen} />
      <div className='flex w-screen'>
        <Nav isNavOpen={isNavOpen} />
        <section className='m-6 w-full'>
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default App;

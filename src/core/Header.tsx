import { useSelector } from 'react-redux';
import BurgerMenu from '../icons/BurgerMenu';
import NotifBell from '../icons/NotifBell';
import { RootState } from '../state/store';

export default function Header({ setIsNavOpen }: HeaderProps) {
  const user = useSelector((state: RootState) => state.user);

  return (
    <header className='navbar bg-primary'>
      <section className='navbar-start flex gap-4'>
        <BurgerMenu setIsNavOpen={setIsNavOpen} />
        <h1>Metahunt.gg</h1>
      </section>
      <div className='navbar-center hidden text-white md:block'>
        <h1>Better Completions Matter</h1>
      </div>
      <section className='navbar-end'>
        {user.isAuthenticated && <NotifBell />}
      </section>
    </header>
  );
}

type HeaderProps = {
  setIsNavOpen: (value: (prev: boolean) => boolean) => void;
};

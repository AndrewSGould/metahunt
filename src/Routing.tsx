import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Abc from './bcmx/abc/Abc';
import BcmAdmin from './bcmx/admin/BcmAdmin';
import Leaderboards from './bcmx/leaderboards/Leaderboards';
import Monthly from './bcmx/monthly/Monthly';
import Oddjobs from './bcmx/oddjobs/Oddjobs';
import BcmxProfile from './bcmx/profile/Profile';
import Rgsc from './bcmx/rgsc/Rgsc';
import Yearlies from './bcmx/yearlies/Yearlies';
import DiscordConnection from './core/DiscordConnection';
import ErrorPage from './core/ErrorPage';
import Settings from './core/Settings';
import XblConnection from './core/XblConnection';
import PlayerCompare from './bcmx/playercompare/PlayerCompare';
import Dashboard from './dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        path: 'discord-connection',
        element: <DiscordConnection />,
      },
      {
        path: 'xbl-connection',
        element: <XblConnection />,
      },
      {
        path: 'bcmx/profile/:playerId',
        element: <BcmxProfile />,
      },
      {
        path: 'bcmx/leaderboards',
        element: <Leaderboards />,
      },
      {
        path: 'bcmx/monthly',
        element: <Monthly />,
      },
      {
        path: 'bcmx/rgsc',
        element: <Rgsc />,
      },
      {
        path: 'bcmx/yearlies',
        element: <Yearlies />,
      },
      {
        path: 'bcmx/abc',
        element: <Abc />,
      },
      {
        path: 'bcmx/oddjobs',
        element: <Oddjobs />,
      },
      {
        path: 'bcmx/admin',
        element: <BcmAdmin text='test' />,
      },
      {
        path: 'bcmx/playercompare',
        element: <PlayerCompare />,
      },
      {
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

export default router;

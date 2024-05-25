import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './core/ErrorPage';
import Leaderboards from './bcmx/leaderboards/Leaderboards';
import Monthly from './bcmx/monthly/Monthly';
import Rgsc from './bcmx/rgsc/Rgsc';
import Yearlies from './bcmx/yearlies/Yearlies';
import Abc from './bcmx/abc/Abc';
import Oddjobs from './bcmx/oddjobs/Oddjobs';
import Settings from './core/Settings';
import BcmxProfile from './bcmx/profile/Profile';
import Profile from './profile/Profile';
import { Provider } from 'react-redux';
import store from './state/store';
import DiscordConnection from './core/DiscordConnection';
import XblConnection from './core/XblConnection';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'profile',
        element: <Profile />,
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
        path: 'settings',
        element: <Settings />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

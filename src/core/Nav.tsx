import {
  IconAbc,
  IconCalendarMonth,
  IconCalendarTime,
  IconDice5,
  IconGraph,
  IconLayoutDashboard,
  IconMoodPuzzled,
  IconSettings,
  IconUserScan,
} from '@tabler/icons-react';
import Avatar from '../icons/Avatar';
import { AnimatePresence, motion } from 'framer-motion';
import NavItem from './NavItem';
import Signin from './Signin';
import { RootState } from '../state/store';
import { useSelector } from 'react-redux';

export default function Nav({ isNavOpen }: NavProps) {
  const user = useSelector((state: RootState) => state.user);

  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.ul
          initial={{ marginLeft: -224 }}
          animate={{ marginLeft: 0 }}
          exit={{ marginLeft: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className='menu bg-secondary border-r border-r-slate-500 flex-none w-56 h-[calc(100vh-64px)] flex-nowrap'
        >
          <div>
            <NavItem
              activePath='profile'
              path='profile'
              title='Dashboard'
              icon={<IconLayoutDashboard />}
            />
            {user.isAuthenticated && (
              <div>
                <hr className='border-slate-600 my-2' />
                <li className='text-green-200 pointer-events-none'>
                  <div>
                    <Avatar />
                    kT Echo
                    {/* <IconChevronDown className='swap-off fill-current w-4 h-4' /> */}
                  </div>
                </li>
                <hr className='border-slate-600 my-2' />
              </div>
            )}
            <li className='text-[#f0d964]'>
              <span className='pointer-events-none font-normal leading-tight tracking-widest'>
                BCMX
              </span>
            </li>
          </div>
          <div className='h-auto overflow-y-auto'>
            <NavItem
              activePath='bcmx/profile/:id'
              path='bcmx/profile/1'
              title='Profile'
              icon={<IconUserScan />}
            />
            <NavItem
              activePath='bcmx/leaderboards'
              path='bcmx/leaderboards'
              title='Leaderboards'
              icon={<IconGraph />}
            />
            <NavItem
              activePath='bcmx/monthly'
              path='bcmx/monthly'
              title='Monthly Bonus'
              icon={<IconCalendarMonth />}
            />
            <NavItem
              activePath='bcmx/rgsc'
              path='bcmx/rgsc'
              title='RGSC'
              icon={<IconDice5 />}
            />
            <NavItem
              activePath='bcmx/yearlies'
              path='bcmx/yearlies'
              title='Yearlies'
              icon={<IconCalendarTime />}
            />
            <NavItem
              activePath='bcmx/abc'
              path='bcmx/abc'
              title='ABC'
              icon={<IconAbc />}
            />
            <NavItem
              activePath='bcmx/oddjobs'
              path='bcmx/oddjobs'
              title='Odd Jobs'
              icon={<IconMoodPuzzled />}
            />
          </div>
          <div className='mt-auto'>
            <hr className='border-slate-600 my-2' />
            <NavItem
              activePath='settings'
              path='settings'
              title='Settings'
              icon={<IconSettings />}
            />
            <Signin />
          </div>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

type NavProps = {
  isNavOpen: boolean;
};

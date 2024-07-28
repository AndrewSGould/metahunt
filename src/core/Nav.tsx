import {
  IconAbc,
  IconCalendarMonth,
  IconCalendarTime,
  IconDice5,
  IconGavel,
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
              path='dashboard'
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
              path='bcmx/profile/1'
              title='Profile'
              icon={<IconUserScan />}
            />
            <NavItem
              path='bcmx/leaderboards'
              title='Leaderboards'
              icon={<IconGraph />}
            />
            <NavItem
              path='bcmx/monthly'
              title='Monthly Bonus'
              icon={<IconCalendarMonth />}
            />
            <NavItem path='bcmx/rgsc' title='RGSC' icon={<IconDice5 />} />
            <NavItem
              path='bcmx/yearlies'
              title='Yearlies'
              icon={<IconCalendarTime />}
            />
            <NavItem path='bcmx/abc' title='ABC' icon={<IconAbc />} />
            <NavItem
              path='bcmx/oddjobs'
              title='Odd Jobs'
              icon={<IconMoodPuzzled />}
            />
            {user.roles?.find((x) => x === 'BCM Admin') && (
              <NavItem path='bcmx/admin' title='Admin' icon={<IconGavel />} />
            )}
          </div>
          <div className='mt-auto'>
            <hr className='border-slate-600 my-2' />
            <NavItem path='settings' title='Settings' icon={<IconSettings />} />
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

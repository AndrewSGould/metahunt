import React from 'react';
import {
  IconAbc,
  IconCalendarMonth,
  IconCalendarTime,
  IconDice5,
  IconGraph,
  IconLayoutDashboard,
  IconLogout,
  IconMoodPuzzled,
  IconSettings,
  IconUserScan,
} from '@tabler/icons-react';
import Avatar from '../icons/Avatar';
import { AnimatePresence, motion } from 'framer-motion';

export default function Nav({ isNavOpen }: NavProps) {
  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.ul
          initial={{ marginLeft: -224 }}
          animate={{ marginLeft: 0 }}
          exit={{ marginLeft: 0 }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          className='menu bg-secondary border-r border-r-slate-500 w-56 h-[calc(100vh-64px)] flex-nowrap'
        >
          <div>
            <li>
              <a href='www.google.com'>
                <IconLayoutDashboard />
                Dashboard
              </a>
            </li>
            <hr className='border-slate-600 my-2' />
            <li className='text-green-200'>
              <div>
                <Avatar />
                kT Echo
                {/* <IconChevronDown className='swap-off fill-current w-4 h-4' /> */}
              </div>
            </li>
            <hr className='border-slate-600 my-2' />
            <li className='text-[#f0d964]'>
              <span className='pointer-events-none font-normal leading-tight tracking-widest'>
                BCMX
              </span>
            </li>
          </div>
          <div className='h-auto overflow-y-auto'>
            <li>
              <a href='www.google.com'>
                <IconUserScan />
                Profile
              </a>
            </li>
            <li>
              <a href='www.google.com'>
                <IconGraph />
                Leaderboards
              </a>
            </li>
            <li>
              <a href='www.google.com'>
                <IconCalendarMonth />
                Monthly Bonus
              </a>
            </li>
            <li>
              <a href='www.google.com'>
                <IconDice5 />
                RGSC
              </a>
            </li>
            <li>
              <a href='www.google.com'>
                <IconCalendarTime />
                Yearlies
              </a>
            </li>
            <li>
              <a href='www.google.com'>
                <IconAbc />
                ABC
              </a>
            </li>
            <li>
              <a href='www.google.com'>
                <IconMoodPuzzled />
                Odd Jobs
              </a>
            </li>
          </div>
          <div className='mt-auto'>
            <hr className='border-slate-600 my-2' />
            <li>
              <a href='www.google.com'>
                <IconSettings />
                Settings
              </a>
            </li>
            <li className='text-red-300'>
              <a href='www.google.com'>
                <IconLogout />
                Sign Out
              </a>
            </li>
          </div>
        </motion.ul>
      )}
    </AnimatePresence>
  );
}

type NavProps = {
  isNavOpen: boolean;
};

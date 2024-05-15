import { IconChevronDown, IconChevronRight } from '@tabler/icons-react';

export default function ArrowFlip() {
  return (
    <label className='swap swap-rotate'>
      {/* this hidden checkbox controls the state */}
      <input type='checkbox' />

      <IconChevronRight className='swap-on fill-current w-4 h-4' />
      <IconChevronDown className='swap-off fill-current w-4 h-4' />
    </label>
  );
}

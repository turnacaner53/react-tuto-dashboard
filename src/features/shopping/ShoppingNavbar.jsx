import { Link, useLocation } from 'react-router-dom';

import { Icon } from '@iconify/react';
import { Menu, User2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import UserInfo from './UserInfo';

const ShoppingNavbar = () => {
  const { pathname } = useLocation();

  return (
    <div className='border-b border-orange-700'>
      <div className='mx-6 flex items-center justify-between gap-2 py-4'>
        <NavLink
          className='flex items-center justify-center gap-2 rounded-sm bg-orange-600/70 px-4 py-2'
          to='/shopping'>
          <Icon
            icon='material-symbols:shopping-basket'
            className='text-red-700 dark:text-blue-400'
            width='24'
            height='24'
          />
          <h2 className='text-xl font-semibold'>Shopping</h2>
        </NavLink>
        <div className='mx-8 flex-grow'></div>
        <div className='flex gap-4 max-md:hidden'>
          <NavLink
            className={`${pathname === '/shopping' && 'bg-orange-400'} rounded-sm px-4 py-2 duration-200 hover:bg-orange-300`}
            to='/shopping'>
            Home
          </NavLink>
          <NavLink
            className={`${pathname === '/shopping/cart' && 'bg-orange-400'} rounded-sm px-4 py-2 duration-200 hover:bg-orange-300`}
            to='/shopping/cart'>
            Cart
          </NavLink>
        </div>
        <div className='mr-3 md:hidden'>
          <DropdownNavLinks />
        </div>
        <div>
          <UserInfo />
        </div>
      </div>
    </div>
  );
};

export default ShoppingNavbar;

const DropdownNavLinks = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='secondary' size='icon'>
          <Menu className='h-5 w-5' />
          <span className='sr-only'>Toggle user menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <NavLink to='/shopping'>
          <DropdownMenuItem>Home</DropdownMenuItem>
        </NavLink>
        <DropdownMenuSeparator />
        <NavLink to='/shopping/cart'>
          <DropdownMenuItem>Go to Cart</DropdownMenuItem>
        </NavLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NavLink = ({ to, ...props }) => {
  return <Link className='duration-200 hover:text-slate-400' to={to} {...props} />;
};

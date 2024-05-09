import { Link } from 'react-router-dom';

import { Menu } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import FootSearch from './FootSearch';

const FootNavbar = () => {
  return (
    <div className=''>
      <div className='mx-auto flex items-center justify-between gap-2 py-4'>
        <NavLink to='/foot-recipes'>
          <h2 className='text-xl font-semibold'>Foot Recipe</h2>
        </NavLink>
        <div className='mx-8 flex-grow'>
          <FootSearch />
        </div>
        <div className='flex gap-5 max-md:hidden'>
          <NavLink to='/foot-recipes'>Home</NavLink>
          <NavLink to='/foot-recipes/favourites'>Favourites</NavLink>
        </div>
        <div className='md:hidden'>
          <DropdownNavLinks />
        </div>
      </div>
    </div>
  );
};

FootNavbar.propTypes = {};

export default FootNavbar;

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
        <NavLink to='/foot-recipes'>
          <DropdownMenuItem>Home</DropdownMenuItem>
        </NavLink>
        <DropdownMenuSeparator />
        <NavLink to='/foot-recipes/favourites'>
          <DropdownMenuItem>Favourites</DropdownMenuItem>
        </NavLink>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NavLink = ({ to, ...props }) => {
  return <Link className='duration-200 hover:text-slate-400' to={to} {...props} />;
};

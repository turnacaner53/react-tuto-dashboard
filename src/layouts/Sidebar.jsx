import { Link } from 'react-router-dom';

import { SIDEBAR_NAV } from '@/routes/sidebar-nav';
import { Package2 } from 'lucide-react';

import MenuItem from './components/MenuItem';
import SidebarFooter from './components/SidebarFooter';

const Sidebar = () => {
  return (
    <div className='hidden border-r bg-muted/40 md:block'>
      <div className='flex h-full max-h-screen flex-col gap-2'>
        {/* SIDEBAR HEADER */}
        <div className='flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6'>
          <Link href='/' className='flex items-center gap-2 font-semibold'>
            <Package2 className='h-6 w-6' />
            <span className=''>REACT PROJECTS</span>
          </Link>
        </div>
        {/* SIDEBAR NAVLINKS */}
        <div className='flex-1'>
          <nav className='grid items-start px-2 text-sm font-medium lg:px-4'>
            {SIDEBAR_NAV.map((item, index) => (
              <MenuItem key={index} path={item.path} icon={item.icon} label={item.label} />
            ))}
          </nav>
        </div>
        {/* SIDEBAR FOOTER */}
        <div className='mt-auto p-4'>
        <SidebarFooter/>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import PropTypes from 'prop-types';

const MenuItem = ({ item, sheetOnClick }) => {
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isActive = pathname === item.path;

  const toggleSubMenu = () => {
    setSubMenuOpen(!subMenuOpen);
  };

  return (
    <div>
      {item?.subMenu ? (
        <>
          <NavLink
            onClick={toggleSubMenu}
            to={item.path}
            className={cn(
              `flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`,
              isActive && `bg-gray-800 text-white dark:bg-gray-600`,
            )}>
            <div className='flex flex-row items-center  space-x-4'>
              {item.icon}
              <span className=''>{item.label}</span>
            </div>
            <ChevronDown className={`${subMenuOpen ? 'rotate-180' : ''} flex`} size={16} />
          </NavLink>

          {subMenuOpen && item?.subMenu && item?.subMenuItems && (
            <div className='my-2 ml-6 flex flex-col space-y-1'>
              {item.subMenuItems &&
                item?.subMenuItems?.map((subItem, i) => {
                  return (
                    <NavLink
                      key={i}
                      onClick={sheetOnClick}
                      to={subItem.path}
                      className={`${subItem.path === pathname && 'bg-gray-800 font-bold text-white dark:bg-gray-600'} flex items-center gap-2 rounded-lg px-2 py-1 text-muted-foreground transition-all hover:text-primary`}>
                      <span className='h-6'>{subItem.icon}</span>
                      {subItem.label}
                    </NavLink>
                  );
                })}
            </div>
          )}
        </>
      ) : (
        <NavLink
          onClick={sheetOnClick}
          to={item.path}
          className={cn(
            `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`,
            isActive && `bg-gray-800 text-white dark:bg-gray-600`,
          )}>
          <span>{item.icon}</span>
          {item.label}
        </NavLink>
      )}
    </div>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
};

export default MenuItem;

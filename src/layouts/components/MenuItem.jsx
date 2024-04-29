import { NavLink, useLocation } from 'react-router-dom';

import { cn } from '@/lib/utils';
import PropTypes from 'prop-types';

const MenuItem = ({ path, icon, label }) => {
  const { pathname } = useLocation();
  const isActive = pathname === path;

  return (
    <NavLink
      to={path}
      className={cn(
        `flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary`,
        isActive && `bg-gray-300 dark:bg-gray-700 text-white`,
      )}>
      <span>{icon}</span>
      {label}
    </NavLink>
  );
};

MenuItem.propTypes = {
  path: PropTypes.string,
  icon: PropTypes.node,
  label: PropTypes.string,
};

export default MenuItem;

import { Outlet } from 'react-router-dom';

import ShoppingNavbar from '@/features/shopping/ShoppingNavbar';

const ShoppingLayout = () => {
  return (
    <>
      <ShoppingNavbar />
      <Outlet />
    </>
  );
};

export default ShoppingLayout;

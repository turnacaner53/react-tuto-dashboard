import { Outlet } from 'react-router-dom';

import FootNavbar from '@/features/foot-recipe/FootNavbar';

const FootLayout = () => {
  return (
    <>
      <FootNavbar />
      <Outlet />
    </>
  );
};

export default FootLayout;

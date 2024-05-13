import { Outlet } from 'react-router-dom';

import BlogNavbar from '@/features/blog/BlogNavbar';

const BlogLayout = () => {
  return (
    <>
      <BlogNavbar />
      <Outlet />
    </>
  );
};

export default BlogLayout;

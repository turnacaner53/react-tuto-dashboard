import BlogCard from '@/features/blog/BlogCard';
import { useGetAllBlogs } from '@/services/blog';

import { Spinner } from '@/components/ui/spinner';

const BlogHome = () => {
  let { data: blogs, isLoading, isError } = useGetAllBlogs();

  blogs = blogs?.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  if (isLoading) return <Spinner />;

  if (isError) return <p>Something went wrong!</p>;

  return (
    <div className='grid gap-4 sm:grid-cols-1 lg:grid-cols-2  xl:grid-cols-3'>
      {blogs && blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  );
};

BlogHome.propTypes = {};

export default BlogHome;

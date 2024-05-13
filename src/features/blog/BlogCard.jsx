import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const BlogCard = ({ blog }) => {
  return (
    <Card className='flex min-h-[180px] min-w-[200px] flex-col shadow-lg'>
      <CardHeader className='rounded-md bg-blue-800/60 py-2 capitalize'>
        <CardTitle>{blog.title}</CardTitle>
      </CardHeader>
      <CardContent className='mt-2 flex-grow py-2 text-justify'>
        <p>
          {blog.content && blog.content.length > 250
            ? blog.content.substring(0, 250) + '...'
            : blog.content}
        </p>
      </CardContent>
      <CardFooter className='flex items-center justify-between rounded-md bg-slate-600 p-2 dark:bg-slate-800/70'>
        <p className='text-sm text-white dark:text-muted-foreground'>
          {new Date(blog.date).toLocaleDateString('tr-TR')}
        </p>
        <Link
          className='text-blue-300 hover:text-blue-500 dark:text-blue-600 dark:hover:text-blue-800'
          to={`/blog/details/${blog._id}`}>
          <span className='capitalize'>read more</span>
        </Link>
      </CardFooter>
    </Card>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default BlogCard;

import { Link, useNavigate, useParams } from 'react-router-dom';

import ConfirmDialog from '@/components/alert/ConfirmDialog';
import { useDeleteBlog, useGetBlog } from '@/services/blog';
import { Icon } from '@iconify/react';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useToast } from '@/components/ui/use-toast';

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const { data: blog, isLoading, isError } = useGetBlog(id);
  const { mutate: deleteBlog, isLoading: isDeleting } = useDeleteBlog();

  const handleDeleteBlog = (id) => {
    deleteBlog(id, {
      onSuccess: () => {
        toast({
          variant: 'success',
          description: 'Blog deleted successfully.',
        });
        navigate('/blog');
      },
    });
  };

  if (isLoading) return <Spinner />;

  if (isError) return <p>Something went wrong!</p>;

  return (
    <>
      <div>
        <div className='flex items-center justify-between border-b border-slate-500/50 pb-4'>
          <h1 className='text-3xl capitalize'>{blog.title}</h1>
          <div className='flex flex-col items-end'>
            <p className='mr-2 text-muted-foreground'>
              {new Date(blog.date).toLocaleDateString('tr-TR')}
            </p>

            <div className='flex items-center space-x-2'>
              <Button
                variant='ghost'
                size='sm'
                onClick={() => navigate(`/blog/update/${blog._id}`)}
                className='  text-sm font-semibold text-blue-600 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-500'>
                <span className='flex items-center gap-2'>
                  <Icon icon='material-symbols:edit-square' />
                  Edit
                </span>
              </Button>
              <ConfirmDialog
                onClick={() => handleDeleteBlog(blog._id)}
                title={`Deleting ${blog.title}`}
                description={`Are you sure want to remove this blog?`}>
                <Button
                  variant='ghost'
                  size='sm'
                  className='   text-sm font-semibold text-red-800 hover:text-red-600 dark:text-red-500 dark:hover:text-red-700'>
                  <span className='flex items-center gap-2'>
                    <Icon icon='material-symbols:delete-forever-rounded' />
                    Delete
                  </span>
                </Button>
              </ConfirmDialog>
            </div>
          </div>
        </div>
        <div>
          <p className='mt-6 p-4 text-justify'>{blog.content}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

import { useCreateBlog, useGetBlog, useUpdateBlog } from '@/services/blog';
import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';

const formSchema = z.object({
  title: z.string().min(3).max(40),
  content: z.string(),
});

const BlogForm = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  const isUpdate = !!id;

  const { data: blog, isLoading, isError } = useGetBlog(id);
  const { mutate: createBlog, isLoading: isCreating } = useCreateBlog();
  const { mutate: updateBlog, isLoading: isUpdating } = useUpdateBlog();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: isUpdate ? blog : {},
  });

  const { control, handleSubmit, reset } = form;

  const isPending = isCreating || isUpdating;

  const onSubmit = (data) => {
    if (isUpdate) {
      updateBlog({ id, updatedBlog: data }, {
        onSuccess: () => {
          reset();
          toast({
            variant: 'success',
            description: 'Blog updated successfully.',
          });
          navigate(`/blog/details/${id}`);
        },
      });
    } else {
      createBlog(data, {
        onSuccess: () => {
          reset();
          toast({
            variant: 'success',
            description: 'Blog created successfully.',
          });
          navigate('/blog');
        },
      });
    }
  };

  return (
    <div className='container flex flex-col'>
      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder='Enter a title' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Content</FormLabel>
                <FormControl>
                  <Textarea className='hover:resize-y h-64' placeholder='Enter content' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button disabled={isPending} type='submit'>
            Submit
          </Button>
          {/* <DevTool placement='bottom-right' control={control} /> */}
        </form>
      </Form>
    </div>
  );
};

BlogForm.propTypes = {
  form: PropTypes.object,
  onSubmit: PropTypes.func,
  control: PropTypes.object,
  disabled: PropTypes.bool,
};

export default BlogForm;

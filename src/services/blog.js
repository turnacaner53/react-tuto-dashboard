import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '@/api/blog-mongodb';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export const useGetBlog = (id) => {
  return useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlog(id),
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useGetAllBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: getAllBlogs,
    onError: (error) => {
      console.error(error);
    },
  });
};

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    queryKey: ['createBlog'],
    mutationFn: (newBlog) => createBlog(newBlog),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('Blog created successfully');
    },
    onSettled: (_, error) => {
      if (error) console.error('An error occured to creating to the blog!', error);
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    queryKey: ['updateBlog'],
    mutationFn: ({ id, updatedBlog }) => updateBlog(id, updatedBlog),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('Blog updated successfully');
    },
    onSettled: async (_, error) => {
      if (error) console.error('An error occured to updating the blog!', error);
      await queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    queryKey: ['deleteBlog'],
    mutationFn: (id) => deleteBlog(id),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      console.log('Blog deleted successfully');
    },
    onSettled: async (_, error) => {
      if (error) console.error('An error occured to deleting the blog!', error);
      await queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};

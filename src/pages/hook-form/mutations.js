import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      console.log('data', data);
    },

    onSuccess: async () => {
      console.log('success');
      await queryClient.invalidateQueries(['users']);
    },
  });
};

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data) => {
      console.log('data', data);
    },

    onSuccess: async () => {
      console.log('success');
      await queryClient.invalidateQueries(['users']);
    },
  });
};

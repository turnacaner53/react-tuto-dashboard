import { getProducts } from '@/api/fake-store';
import { useQuery } from '@tanstack/react-query';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => getProducts(),
  });
};

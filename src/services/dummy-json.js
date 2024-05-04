import { getDummyJsonUsers } from '@/api/dummy-json';
import { useQuery } from '@tanstack/react-query';

export const useDummyJsonUsers = () => {
  return useQuery({
    queryKey: ['dummyJsonUsers'],
    queryFn: () => getDummyJsonUsers(),
  });
};

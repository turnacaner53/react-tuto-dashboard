import { getCurrentWeather } from '@/api/open-weather';
import { useQuery } from '@tanstack/react-query';

export const useCurrentWeather = (search) => {
  return useQuery({
    queryKey: ['dummyJsonUsers',search],
    queryFn: () => getCurrentWeather(search),
    enabled:false
  });
};

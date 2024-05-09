import { getRecipe, getRecipes } from '@/api/forkify';
import { useQuery } from '@tanstack/react-query';

export const useSearchRecipes = (search) => {
  return useQuery({
    queryKey: ['searchRecipes', search],
    queryFn: () => getRecipes(search),
    enabled: false,
  });
};

export const useGetRecipe =(id) =>{
  return useQuery({
    queryKey: ['getRecipe', id],
    queryFn: () => getRecipe(id),
  })
}
import { useParams } from 'react-router-dom';

import useSearchStore from '@/features/foot-recipe/store';
import { useGetRecipe } from '@/services/forkify';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import {  useToast } from '@/components/ui/use-toast';

const FootDetails = () => {
  const { toast } = useToast();
  let params = useParams();
  const favourites = useSearchStore((state) => state.favourites);

  const addFavourite = useSearchStore((state) => state.addFavourite);

  const { data, isLoading, isError } = useGetRecipe(params.id);

  const handleAddFav = (id) => {
    if (favourites.some((item) => item.id === id)) {
      toast({
        variant:'destructive',
        description: "This recipe is already in your favourites list.",
        
      })
    } else {
      addFavourite(data);
      toast({
        variant:'success',
        description: "This recipe added in your favourites list successfully.",
        
      })
    }
  };

  if (isLoading)
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );

  if (isError) return <div>Something went wrong...</div>;

  return (
    <div className='container mx-auto grid grid-cols-1 gap-6 py-6 lg:grid-cols-2'>
      <div className='row-start-2 lg:row-start-auto'>
        <div className='group h-96 overflow-hidden rounded-xl'>
          <img
            src={data?.image_url}
            alt={data?.title}
            className='h-full w-full transform object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span>Publisher: {data?.publisher}</span>
        <h3 className='truncate text-2xl font-bold'>{data?.title}</h3>

        <div>
          <span className='text-xl font-semibold'>Ingrediends:</span>
          <ul className='flex flex-col'>
            {data?.ingredients.map((ingredient, i) => (
              <li key={i}>
                {ingredient.quantity} - {ingredient.unit} {ingredient.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <Button onClick={() => handleAddFav(data.id)}>Save as Favourites</Button>
      </div>
    </div>
  );
};

FootDetails.propTypes = {};

export default FootDetails;

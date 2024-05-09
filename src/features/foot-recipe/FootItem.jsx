import { Link } from 'react-router-dom';

import ConfirmDialog from '@/components/alert/ConfirmDialog';
import { SquareX } from 'lucide-react';
import PropTypes from 'prop-types';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import useSearchStore from './store';

const FootItem = ({ item, favourite = false }) => {
  const removeFavourite = useSearchStore((state) => state.removeFavourite);

  return (
    <Card className='relative w-[250px] shadow-md'>
      <CardHeader>
        <CardTitle className='text-md text-nowrap text-center font-bold'>
          {item.title.length > 25 ? item.title.substring(0, 25) + '...' : item.title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-center'>
          <img src={item.image_url} alt={item.title} className='h-40 w-40 object-fill' />
          <div className='flex flex-col items-center pt-2'>
            <p className='text-sm text-gray-500'>{item.publisher}</p>
            <Link to={`/foot-recipes/details/${item.id}`}>
              <p className='pt-2 text-sm text-muted-foreground duration-200 hover:text-slate-600'>
                Recipe Details
              </p>
            </Link>
          </div>
        </div>
      </CardContent>
      <CardFooter className='absolute right-[0] top-5 mr-[-30px] h-4'>
        {favourite && (
          <ConfirmDialog
            onClick={() => removeFavourite(item.id)}
            description={`Are you sure want to remove this recipe (${item.title}) from your favourites`}>
            <Button variant='icon'>
              <SquareX size={24} />
            </Button>
          </ConfirmDialog>
        )}
      </CardFooter>
    </Card>
  );
};

FootItem.propTypes = {
  item: PropTypes.object.isRequired,
  favourite: PropTypes.bool,
};

export default FootItem;

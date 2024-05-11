import PropTypes from 'prop-types';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Icon } from '@iconify/react';

const Product = ({ product,onClick }) => {
  return (
    <Card className='border border-orange-600/60 shadow-md dark:bg-slate-900/60'>
      <CardContent className='h-[200px]'>
        <img
          src={product.image}
          alt={product.title}
          className='mt-6 h-full w-full object-contain'
        />
      </CardContent>
      <CardHeader>
        <CardTitle className='text-md truncate border-t border-orange-400 pt-2 text-center font-bold'>
          {product.title}
        </CardTitle>
      </CardHeader>
      <CardFooter className='flex justify-center'>
        <Button onClick={onClick} className='bg-orange-600/70 hover:bg-orange-600 gap-4'>
            <Icon icon='akar-icons:cart' width='20' height='20' className='text-white' />
          <span className='text-white'>Add to Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
    onClick: PropTypes.func
};

export default Product;

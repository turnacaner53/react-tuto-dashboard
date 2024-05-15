import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/components/ui/use-toast';

import QuantityButtons from './QuantityButtons';
import useBoundStore from './store/store';

const Product = ({ product }) => {
  const { toast } = useToast();

  const { cartProducts, addProduct } = useBoundStore(
    useShallow((state) => ({
      cartProducts: state.products,
      addProduct: state.addProduct,
    })),
  );

  const handleAdd = (product) => {
    addProduct(product);
    toast({
      variant: 'success',
      description: `${product.title} added to cart successfully.`,
    });
  };

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
        {cartProducts.find((cartProduct) => cartProduct.id === product.id) ? (
          <QuantityButtons productId={product.id} />
        ) : (
          <Button
            onClick={() => handleAdd(product)}
            className='gap-4 bg-orange-600/70 hover:bg-orange-600'>
            <Icon icon='akar-icons:cart' width='20' height='20' className='text-white' />
            <span className='text-white'>Add to Cart</span>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;

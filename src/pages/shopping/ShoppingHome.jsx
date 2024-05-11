import Product from '@/features/shopping/Product';
import useCartStore from '@/features/shopping/cart-store';
import { useProducts } from '@/services/fake-store';

import { Spinner } from '@/components/ui/spinner';
import { useToast } from '@/components/ui/use-toast';

const ShoppingHome = () => {
  const { toast } = useToast();

  const { data, isLoading, isError } = useProducts();

  const addToCart = useCartStore((state) => state.addToCart);

  const handleAdd = (product) => {
    addToCart(product);
    toast({
      variant: 'success',
      description: `${product.title} added to cart successfully.`,
    });
  };

  if (isLoading)
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );

  if (isError) return <div className='text-center'>Error fetching data</div>;

  return (
    <div className='grid gap-x-4 gap-y-4 sm:grid-cols-2 md:grid-cols-3 md:gap-y-8 lg:grid-cols-4'>
      {data.map((product, index) => (
        <Product key={index} product={product} onClick={() => handleAdd(product)} />
      ))}
    </div>
  );
};

export default ShoppingHome;

import Product from '@/features/shopping/Product';
import { useProducts } from '@/services/fake-store';

import { Spinner } from '@/components/ui/spinner';

const ShoppingHome = () => {
  const { data, isLoading, isError } = useProducts();

  if (isLoading)
    return (
      <div className='flex justify-center'>
        <Spinner />
      </div>
    );

  if (isError) return <div className='text-center'>Error fetching data</div>;

  return (
    <div className='grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 md:gap-y-8 xl:grid-cols-4'>
      {data.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ShoppingHome;

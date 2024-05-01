import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MoreData = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`,
      );
      const data = await response.json();

      if (data && data.products && data.products.length > 0) {
        setProducts((prev) => [...prev, ...data.products]);
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect(() => {
    if (products.length >= 100) {
      setDisabled(true);
    }
  }, [products]);

  if (loading) return <div>Loading...</div>;

  if (products.length === 0) return <div>No products found</div>;

  return (
    <div className='container flex flex-col'>
      <div className='grid grid-cols-2 lg:grid-cols-4'>
        {products.map((product) => (
          <Card
            className='m-2 rounded-md border border-gray-300 shadow-sm hover:shadow-md dark:border-gray-600'
            key={product.id}>
            <CardHeader>
              <CardTitle className='font-semibold'>{product.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={product.thumbnail}
                alt={product.title}
                className='h-46 mt-4 w-full rounded-sm object-contain'
              />
              <p className='mt-1 text-sm text-gray-500'>
                {product.description.length > 100
                  ? `${product.description.substring(0, 60)}...`
                  : product.description}
              </p>
              <p className='mt-2 text-lg font-semibold'>${product.price}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <Button
        onClick={() => setCount((count) => count + 1)}
        disabled={disabled}
        className='mb-2 mt-4'>
        {disabled ? 'You reached 100 products' : 'Load More Data'}
      </Button>
    </div>
  );
};

export default MoreData;

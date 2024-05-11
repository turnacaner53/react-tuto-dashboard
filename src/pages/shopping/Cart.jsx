import { Link } from 'react-router-dom';

import useCartStore from '@/features/shopping/cart-store';
import { Icon } from '@iconify/react';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      removeFromCart: state.removeFromCart,
      clearCart: state.clearCart,
    })),
  );

  const cartTotal = cart?.reduce((acc, item) => acc + item.price, 0);

  let combinedCart = cart.reduce((acc, item) => {
    let found = acc.find((i) => i.id === item.id);
    if (found) {
      found.count++;
    } else {
      item.count = 1;
      acc.push(item);
    }
    return acc;
  }, []);

  console.log(combinedCart);

  return (
    <div>
      {cart.length === 0 ? (
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='text-2xl'>Your cart is empty go to home page to shop product</h1>
          <Link
            to='/shopping'
            className='flex items-center justify-center gap-5 rounded-md bg-orange-500 px-6 py-3 hover:bg-orange-600/60'>
            <Icon icon='material-symbols:home' width='24' height='24' className='text-blue-400' />
            <span className='text-2xl'> Home </span>
          </Link>
        </div>
      ) : (
        <div className='grid grid-cols-1 gap-2 md:grid-cols-[60%_auto]'>
          <div className='md:col-start-2'>
            <div className=' mb-4 rounded-md border border-orange-600/30 p-2 shadow-sm'>
              <h3 className='mb-4 border-b border-zinc-600 p-2 text-xl'>Cart Summary</h3>
              <p>Cart Items Count: {cart.length}</p>
              <p>Cart Total: {Math.round(cartTotal)}$</p>
              <Button
                variant='outline'
                onClick={clearCart}
                className='my-4 gap-4 duration-200 hover:bg-orange-600 hover:text-white'>
                <Icon icon='material-symbols:delete-forever-outline' width='24' height='24' />
                <span className='text-inherit '>Clear All Items</span>
              </Button>
            </div>
          </div>
          <div className='md:col-start-1 md:row-start-1'>
            <div className='flex flex-col gap-4 '>
              {combinedCart.map((item) => (
                <div
                  key={item.id}
                  className='grid grid-cols-[120px_auto_50px] rounded-md border border-orange-600/30 p-2'>
                  <div className=''>
                    <img src={item.image} alt={item.title} className='h-20 w-20 object-contain' />
                  </div>

                  <div>
                    <div className='flex flex-col'>
                      <div className='flex items-center gap-2'>
                        <h2 className='text-md leading-none tracking-tight'>{item.title}</h2>
                        <span>({item.count})</span>
                      </div>
                      <p>{item.price}</p>
                      <p>
                        {item.rating.rate} -{' '}
                        <span className='text-muted-foreground'>{item.rating.count}</span>
                      </p>
                    </div>
                  </div>

                  <div className='w-[10%]'>
                    <Button variant='icon' onClick={() => removeFromCart(item.id)}>
                      X
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

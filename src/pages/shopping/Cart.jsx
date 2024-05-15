import { Link } from 'react-router-dom';

import useBoundStore from '@/features/shopping/store/store';
import { Icon } from '@iconify/react';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';

const Cart = () => {
  const {
    cartProducts,
    removeProduct,
    incrementQty,
    decrementQty,
    clearCart,
    total,
    userName,
    fullName,
    address,
  } = useBoundStore(
    useShallow((state) => ({
      cartProducts: state.products,
      removeProduct: state.removeProduct,
      incrementQty: state.incrementQty,
      decrementQty: state.decrementQty,
      clearCart: state.clearCart,
      total: state.total,
      userName: state.userName,
      fullName: state.fullName,
      address: state.address,
    })),
  );

  return (
    <div>
      {cartProducts.length === 0 ? (
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
              <h3 className='mb-4 border-b border-zinc-600 p-2 text-xl'>
                {fullName} ({userName}) Cart Summary
              </h3>
              <p>Individual Cart Items Count: {cartProducts.length}</p>
              {/* <p>Total Cart Items Count: {cartProducts.map()}</p> */}
              <p>Cart Total: {total.toFixed(2)}$</p>
              <p>Shipping Address: {address ? address : 'Please enter an address!'}</p>
              <Button
                variant='outline'
                onClick={() => clearCart()}
                className='my-4 gap-4 duration-200 hover:bg-orange-600 hover:text-white'>
                <Icon icon='material-symbols:delete-forever-outline' width='24' height='24' />
                <span className='text-inherit '>Clear All Items</span>
              </Button>
            </div>
          </div>
          <div className='md:col-start-1 md:row-start-1'>
            <div className='flex flex-col gap-4 '>
              {cartProducts.map((item) => (
                <div
                  key={item.id}
                  className='grid grid-cols-[120px_auto_20%] items-center rounded-md border border-orange-600/30 p-2'>
                  <div className=''>
                    <img src={item.image} alt={item.title} className='h-20 w-20 object-contain' />
                  </div>

                  <div>
                    <div className='flex flex-col'>
                      <div className='flex items-center gap-2'>
                        <h2 className='text-md overflow-hidden leading-none tracking-tight'>
                          {item.title}
                        </h2>
                        <span>({item.qty})</span>
                      </div>
                      <p>price: {item.price}$ </p>
                      <p> item total price: {item.price * item.qty}$</p>
                      <p>
                        rating: {item.rating.rate} -{' '}
                        <span className='text-muted-foreground'>({item.rating.count})</span>
                      </p>
                    </div>
                  </div>
                  <div className='flex  flex-col items-end justify-end space-y-2'>
                    <div className='flex items-center gap-2'>
                      <div
                        onClick={() => decrementQty(item.id)}
                        className='rounded-sm  bg-orange-600/70 p-2 hover:bg-orange-600'>
                        <Icon
                          icon='akar-icons:minus'
                          width='10'
                          height='10'
                          className='text-white'
                        />
                      </div>

                      <div
                        onClick={() => incrementQty(item.id)}
                        className='rounded-sm  bg-orange-600/70 p-2 hover:bg-orange-600'>
                        <Icon
                          icon='akar-icons:plus'
                          width='10'
                          height='10'
                          className='text-white'
                        />
                      </div>
                    </div>

                    <div
                      className='rounded-sm bg-orange-600/70 p-2 hover:bg-orange-600'
                      onClick={() => removeProduct(item.id)}>
                      <Icon
                        icon='material-symbols:delete-forever'
                        width='15'
                        height='15'
                        className='text-white'
                      />
                    </div>
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

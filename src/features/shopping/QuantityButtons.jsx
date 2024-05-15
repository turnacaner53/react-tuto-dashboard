import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';

import useBoundStore from './store/store';

const QuantityButtons = ({ productId }) => {
  const { getProductById, decrementQty, incrementQty } = useBoundStore(
    useShallow((state) => ({
      getProductById: state.getProductById,
      decrementQty: state.decrementQty,
      incrementQty: state.incrementQty,
    })),
  );

  const product = getProductById(productId);

  return (
    <>
      {product && (
        <div className='flex items-center gap-6'>
          <Button
            variant='icon'
            onClick={() => decrementQty(productId)}
            className='gap-4 bg-orange-600/70 hover:bg-orange-600'>
            <Icon icon='akar-icons:minus' width='20' height='20' className='text-white' />
          </Button>
          <p>{product.qty}</p>
          <Button
            variant='icon'
            onClick={() => incrementQty(productId)}
            className='gap-4 bg-orange-600/70 hover:bg-orange-600'>
            <Icon icon='akar-icons:plus' width='20' height='20' className='text-white' />
          </Button>
        </div>
      )}
    </>
  );
};

QuantityButtons.propTypes = {
  productId: PropTypes.number,
};

export default QuantityButtons;

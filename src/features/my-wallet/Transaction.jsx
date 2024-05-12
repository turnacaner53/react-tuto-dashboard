import { cn } from '@/lib/utils';
import { Icon } from '@iconify/react';
import { cva } from 'class-variance-authority';
import PropTypes from 'prop-types';

import { Button } from '@/components/ui/button';

const Transaction = ({
  variant,
  amount = '0',
  title = 'Transaction',
  description,
  onClick,
  className,
}) => {
  const transactionVariants = cva(
    'flex items-center justify-between grow gap-2 rounded-md px-2 py-1',
    {
      variants: {
        variant: {
          income: 'bg-blue-200 dark:bg-blue-500/50',
          expense: 'bg-red-200 dark:bg-red-500/50',
        },
      },
    },
  );

  return (
    <div className={cn(transactionVariants({ variant, className }))}>
      <div className='flex items-center gap-2'>
        <div
          className={`rounded-md p-1 text-sm font-bold 
          ${variant === 'income' ? 'bg-green-600' : 'bg-red-500'}`}>
          ${amount}
        </div>
        <div className='flex flex-col'>
          <div className='text-sm font-bold'>{title}</div>
          {description && <p className='text-xs text-muted-foreground'>{description}</p>}
        </div>
      </div>
      <div className='flex'>
        <Button
          onClick={onClick}
          variant='icon'
          className='float-end  hover:bg-slate-200 dark:hover:bg-slate-800'>
          <Icon
            icon='material-symbols:close-rounded'
            className='h-5 w-5 text-red-500 dark:text-white'
          />
        </Button>
      </div>
    </div>
  );
};

Transaction.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  amount: PropTypes.number,
  variant: PropTypes.oneOf(['income', 'expense']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Transaction;

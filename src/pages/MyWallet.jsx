import AddTransact from '@/features/my-wallet/AddTransact';
import Transaction from '@/features/my-wallet/Transaction';
import WalletChart from '@/features/my-wallet/WalletChart';
import useWalletStore from '@/features/my-wallet/wallet-store';
import { Icon } from '@iconify/react';
import { useShallow } from 'zustand/react/shallow';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const MyWallet = () => {
  const { transactions, removeTransaction } = useWalletStore(
    useShallow((state) => ({
      transactions: state.transactions,
      removeTransaction: state.removeTransaction,
    })),
  );
  let incomeBalance = 0;
  let expenseBalance = 0;
  let totatBalance = 0;

  const income = transactions.filter((transaction) => transaction.type === 'income');
  const expense = transactions.filter((transaction) => transaction.type === 'expense');

  incomeBalance = income.reduce((acc, curr) => acc + parseInt(curr.amount), 0);
  expenseBalance = expense.reduce((acc, curr) => acc + parseInt(curr.amount), 0);

  totatBalance = incomeBalance - expenseBalance;

  return (
    <div className='flex flex-col'>
      <div className='container mb-6 flex items-center justify-between'>
        <h1 className='text-2xl font-semibold text-primary/80'>My Wallet</h1>
        <AddTransact />
      </div>

      <div className='flex justify-evenly border-t border-blue-400/50 pt-4'>
        <div className=' w-[40%] rounded-md border border-gray-200  p-4 dark:border-gray-800'>
          <div className='flex items-center justify-center'>
            <Icon icon='bx:bxs-wallet' className='h-8 w-8 text-primary' />
            <h2 className='ml-2 text-xl font-semibold'>Wallet Summary</h2>
          </div>
          <div className='mt-4'>
            <h3 className='text-3xl font-semibold text-green-600'>$ {totatBalance}</h3>
            <p className='text-muted-foreground'>Balance</p>
          </div>
          <div className='mt-4'>
            <h3 className='text-3xl font-semibold text-blue-600'>$ {incomeBalance}</h3>
            <p className='text-muted-foreground'>total Income</p>
          </div>
          <div className='mt-4'>
            <h3 className='text-3xl font-semibold text-red-700'>$ {expenseBalance}</h3>
            <p className='text-muted-foreground'>total Expense</p>
          </div>
        </div>

        <div className='flex w-[40%] flex-col items-center justify-center rounded-md border border-gray-200 p-4 dark:border-gray-800'>
          <div className='flex h-[200px] w-[200px] items-center justify-center'>
            <WalletChart expense={expenseBalance} income={incomeBalance} />
          </div>
          <div className=' flex gap-2'>
            <div className='flex items-center gap-2'>
              <span className='h-3 w-3 rounded-md bg-[#9e3831] p-1'></span>
              <div className='text-muted-foreground'>Expense</div>
            </div>
            <div className='flex items-center gap-2'>
              <span className='h-3 w-3 rounded-md bg-[#324ab3] p-1'></span>
              <div className='text-muted-foreground'>Income</div>
            </div>
          </div>
        </div>
      </div>

      <div className='mx-4 mt-4 flex flex-col gap-8 lg:flex-row'>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-md font-medium'>Expense</CardTitle>
          </CardHeader>
          <CardContent>
            {expense.map((transaction, index) => (
              <Transaction
                className='mb-2'
                key={index}
                variant='expense'
                title={transaction.title}
                amount={parseInt(transaction.amount)}
                description={transaction.description}
                onClick={() => removeTransaction(transaction.id)}
              />
            ))}
          </CardContent>
        </Card>
        <Card className='w-full'>
          <CardHeader>
            <CardTitle className='text-md font-medium'>Income</CardTitle>
          </CardHeader>
          <CardContent>
            {income.map((transaction, index) => (
              <Transaction
                className='mb-2'
                key={index}
                variant='income'
                title={transaction.title}
                amount={parseInt(transaction.amount)}
                description={transaction.description}
                onClick={() => removeTransaction(transaction.id)}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

MyWallet.propTypes = {};

export default MyWallet;

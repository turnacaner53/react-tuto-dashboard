import { useState } from 'react';

import { Icon } from '@iconify/react';
import PropTypes from 'prop-types';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';

import AddTransactForm from './AddTransactForm';

const AddTransact = () => {
  const [sheetOpen, setSheetOpen] = useState(false);

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetTrigger asChild>
        <Button variant='outline' className='gap-2 bg-primary/20'>
          <Icon icon='eva:plus-circle-outline' className='h-6 w-6' />
          <span>Add Transaction</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add Transaction</SheetTitle>
          <SheetDescription> Add a new transaction to your wallet. </SheetDescription>
        </SheetHeader>
        <div>
          <AddTransactForm onClose={() => setSheetOpen(false)} />
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

AddTransact.propTypes = {
  children: PropTypes.node,
};

export default AddTransact;

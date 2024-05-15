import { useEffect } from 'react';

import { PopoverTrigger } from '@radix-ui/react-popover';
import { User2 } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent } from '@/components/ui/popover';

import useBoundStore from './store/store';

const UserInfo = () => {
  const { setAddress, address, fullName, userName, fetchUser } = useBoundStore(
    useShallow((state) => ({
      setAddress: state.setAddress,
      address: state.address,
      fullName: state.fullName,
      userName: state.userName,
      fetchUser: state.fetchUser,
    })),
  );

  useEffect(() => {
    async function fetchUserData() {
      await fetchUser();
    }

    fetchUserData();
  }, [fetchUser]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className='bg-orange-700' variant='secondary' size='icon'>
          <User2 className='h-5 w-5' />
        </Button>
      </PopoverTrigger>
      <PopoverContent side='right' align='start'>
        <div className='mb-4 flex flex-col items-start gap-2'>
          <p>Name: {fullName}</p>
          <p className='text-sm text-muted-foreground'>{userName}</p>
        </div>
        <div className='items-starts flex  flex-col gap-3'>
          <Label htmlFor='width'>Your Address</Label>
          <Input
            id='width'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder='enter your address...'
          />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default UserInfo;

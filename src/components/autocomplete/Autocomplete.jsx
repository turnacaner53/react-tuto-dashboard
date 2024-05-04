import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import PropTypes from 'prop-types';

import { Button } from '../ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '../ui/command';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Spinner } from '../ui/spinner';

const Autocomplete = ({ data, placeholderText = 'Select', loading = false }) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          aria-expanded={open}
          className='w-[200px] justify-between'>
          {value ? data.find((item) => item.value === value)?.label : placeholderText}
          <ChevronsUpDown className='ml-2 h-4 w-4 shrink-0 opacity-50' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-[200px] p-0'>
        <Command>
          <CommandInput placeholder='Search item...' />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {loading ? (
                <CommandItem>
                  <Spinner size='medium' />
                </CommandItem>
              ) : (
                data.map((item) => (
                  <CommandItem
                    key={item.value}
                    value={item.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? '' : currentValue);
                      setOpen(false);
                    }}>
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        value === item.value ? 'opacity-100' : 'opacity-0',
                      )}
                    />
                    {item.label.slice(0, 50) + (item.label.length > 50 ? '...' : '')}
                  </CommandItem>
                ))
              )}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

Autocomplete.propTypes = {
  data: PropTypes.array.isRequired,
  loading: PropTypes.bool,
  placeholderText: PropTypes.string,
};

export default Autocomplete;

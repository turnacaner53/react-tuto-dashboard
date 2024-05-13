import { useForm } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';
import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

import useWalletStore from './wallet-store';

const formSchema = z.object({
  title: z.string().min(3).max(30),
  amount: z.coerce.number().gte(1),
  description: z.string().max(100).optional(),
  type: z.enum(['income', 'expense'], { required_error: 'Please select a type' }),
});

const AddTransactForm = ({ onClose }) => {
  const addTransaction = useWalletStore((state) => state.addTransaction);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: uuidv4(),
      title: '',
      amount: '',
      description: '',
      type: 'income',
    },
  });

  const onSubmit = () => {
    addTransaction(form.getValues());

    //if submit success close the form
    onClose();
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='Enter a title' {...field} />
              </FormControl>
              <FormDescription>Title section.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='amount'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input type='number' {...field} />
              </FormControl>
              <FormDescription>Amount section.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => {
            return (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea placeholder='Enter a description' {...field} />
                </FormControl>
                <FormDescription>Description section.</FormDescription>
                <FormMessage />
              </FormItem>
            );
          }}
        />

        <FormField
          control={form.control}
          name='type'
          render={({ field }) => (
            <FormItem className='space-y-3'>
              <FormLabel>Transact Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className='flex flex-row gap-4'>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='income' />
                    </FormControl>
                    <FormLabel className='font-normal'>Income</FormLabel>
                  </FormItem>
                  <FormItem className='flex items-center space-x-3 space-y-0'>
                    <FormControl>
                      <RadioGroupItem value='expense' />
                    </FormControl>
                    <FormLabel className='font-normal'>Expense</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormDescription>Type section.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <div>
          <Button type='submit'>Submit</Button>
        </div>
        <DevTool placement='bottom-right' control={form.control} />
      </form>
    </Form>
  );
};

AddTransactForm.propTypes = {
  onClose: PropTypes.func,
};

export default AddTransactForm;

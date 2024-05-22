import { useEffect } from 'react';
import { useFieldArray, useForm, useWatch } from 'react-hook-form';

import { genders, languages, skills, states } from '@/constants/hook-form-data';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Icon } from '@iconify/react';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Checkbox } from '@/components/ui/checkbox';
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
import MultiSelect from '@/components/ui/mutli-select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { toast } from '@/components/ui/use-toast';

import { useCreateUser, useUpdateUser } from './mutations';
import { useUser, useUsers } from './queries';
import { defaultValues, schema } from './validation-schema';

const HookFormHome = () => {
  const form = useForm({
    // mode: 'all', // show all errors at once
    resolver: zodResolver(schema),
    defaultValues: defaultValues,
  });
  const { data } = useUsers();
  const isTeacher = useWatch({ control: form.control, name: 'isTeacher' });
  const id = useWatch({ control: form.control, name: 'id' });
  const variant = useWatch({ control: form.control, name: 'variant' });
  const userQuery = useUser(id);
  const createUserMutation = useCreateUser();
  const updateUserMutation = useUpdateUser();
  const { append, fields, remove, replace } = useFieldArray({
    control: form.control,
    name: 'students',
  });

  useEffect(() => {
    if (!isTeacher) {
      replace([]);
      form.unregister('students');
    }
  }, [isTeacher, replace, form]);

  // useEffect(() => {
  //   const sub = form.watch((value) => {
  //     console.log(value);
  //   });
  //   return () => sub.unsubscribe();
  // }, [form]);

  const handleUserClick = (id) => {
    form.setValue('id', id);
  };

  useEffect(() => {
    if (userQuery.data) {
      form.reset(userQuery.data);
    }
  }, [form, userQuery.data]);

  const onSubmit = (data) => {
    if (variant === 'create') {
      createUserMutation.mutate(data);
    } else {
      updateUserMutation.mutate(data);
    }

    console.log(JSON.stringify(data));
    toast({
      variant: 'secondary',
      title: ' Form Values',
      description: (
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4 '>
          <code className='text-wrap text-white'>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div className='mt-4 flex flex-row gap-6'>
      <div>
        <h2 className='my-2 mb-4 text-lg font-semibold'>Users</h2>
        <ul className='flex flex-col gap-2'>
          {data?.map((user) => (
            <li key={user.id}>
              <Button
                onClick={() => handleUserClick(user.id)}
                className='w-20'
                variant={user.id === id ? 'secondary' : 'outline'}>
                {user.label}
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h1 className='mb-4 text-2xl'>React Hook Form</h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='mb-8 max-w-[400px] space-y-6'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='name' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='email'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='states'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <MultiSelect
                      options={states}
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                      placeholder='Select state'
                      variant='secondary'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name='languages'
              className='flex justify-start'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Language</FormLabel>
                  <FormControl>
                    <ToggleGroup
                      type='multiple'
                      className='flex items-center justify-start'
                      onValueChange={field.onChange}
                      value={field.value}>
                      {languages.map((lang) => (
                        <FormItem
                          key={lang.id}
                          className={`flex items-center space-x-2 space-y-0 rounded-md border`}>
                          <FormControl>
                            <ToggleGroupItem value={lang.label}>
                              <span className='text-xs'>{lang.label}</span>
                            </ToggleGroupItem>
                          </FormControl>
                        </FormItem>
                      ))}
                    </ToggleGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='genders'
              control={form.control}
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>Gender</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={value}
                      onValueChange={onChange}
                      className='flex items-center'>
                      {genders.map((gender) => (
                        <FormItem
                          key={gender.id}
                          className={`flex items-center space-x-2 space-y-0`}>
                          <FormControl>
                            <RadioGroupItem value={gender.label} />
                          </FormControl>
                          <FormLabel>{gender.label}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name='skills'
              control={form.control}
              render={() => (
                <FormItem>
                  <div className='mb-4'>
                    <FormLabel className='text-base'>Skills</FormLabel>
                    <FormDescription>
                      Select the skills you have. You can select multiple skills.
                    </FormDescription>
                  </div>
                  {skills.map((item) => (
                    <FormField
                      key={item.id}
                      control={form.control}
                      name='skills'
                      render={({ field: { value, onChange } }) => {
                        return (
                          <FormItem
                            key={item.id}
                            className='flex flex-row items-start space-x-3 space-y-0'>
                            <FormControl>
                              <Checkbox
                                checked={value?.includes(item.id)}
                                onCheckedChange={(checked) => {
                                  const updatedValue = value || [];
                                  return checked
                                    ? onChange([...updatedValue, item.id])
                                    : onChange(updatedValue?.filter((value) => value !== item.id));
                                }}
                              />
                            </FormControl>
                            <FormLabel className='font-normal'>{item.label}</FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name='registrationDate'
              control={form.control}
              render={({ field }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Registration Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !field.value && 'text-muted-foreground',
                          )}>
                          {field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value}
                        onSelect={field.onChange}
                        // disabled={(date) =>
                        //   date > new Date() || date < new Date("1900-01-01")
                        // }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Select a date for registration</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name='formerEmploymentPeriod'
              control={form.control}
              render={({ field: { value, onChange } }) => (
                <FormItem className='flex flex-col'>
                  <FormLabel>Former Employee</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={'outline'}
                          className={cn(
                            'pl-3 text-left font-normal',
                            !value && 'text-muted-foreground',
                          )}>
                          {value?.from ? (
                            value.to ? (
                              <>
                                {format(value.from, 'LLL dd, y')} - {format(value.to, 'LLL dd, y')}
                              </>
                            ) : (
                              format(value.from, 'LLL dd, y')
                            )
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className='ml-auto h-4 w-4 opacity-50' />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='range'
                        defaultMonth={value?.from}
                        selected={{ from: value.from, to: value.to }}
                        onSelect={onChange}
                        numberOfMonths={2}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>Select a date range for former employee</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='salaryRange'
              control={form.control}
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <FormLabel>
                    Salary Range - {value[0]} - {value[1]}
                  </FormLabel>
                  <FormControl>
                    <Slider
                      min={1}
                      max={300}
                      step={1}
                      value={value}
                      onValueChange={onChange}></Slider>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name='isTeacher'
              control={form.control}
              render={({ field: { value, onChange } }) => (
                <FormItem>
                  <div className=' relative flex flex-row items-center justify-start gap-5 rounded-lg border p-3'>
                    <FormControl>
                      <Switch checked={value} onCheckedChange={onChange} />
                    </FormControl>
                    <FormLabel>Are you a teacher?</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            {isTeacher && (
              <div>
                <Button
                  className='gap-2'
                  onClick={() => append({ name: '' })}
                  type='button'
                  variant='text'>
                  Add New Student
                  <span>
                    <Icon icon='akar-icons:plus' className='mr-2 h-5 w-5' />
                  </span>
                </Button>
              </div>
            )}

            {fields.map((item, index) => (
              <div className='flex items-end justify-between gap-1' key={item.id}>
                <div className='grow'>
                  <FormField
                    name={`students[${index}].name`}
                    control={form.control}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Student Name</FormLabel>
                        <FormControl>
                          <Input placeholder='student name' {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex-none'>
                  <Button onClick={() => remove(index)} type='button' variant='icon'>
                    <Icon
                      icon='material-symbols:delete-outline'
                      width='24'
                      height='24'
                      color='#b73333'
                    />
                  </Button>
                </div>
              </div>
            ))}

            <div className='flex justify-between gap-2'>
              <Button className='min-w-32' type='submit'>
                {variant === 'create' ? 'New User' : 'Edit User'}
              </Button>
              <button onClick={() => schema.parse(form.getValues())}>parse</button>
              <Button
                variant='destructive'
                type='button'
                className='min-w-32'
                onClick={() => form.reset()}>
                Reset
              </Button>
            </div>
          </form>
        </Form>

        {/* <DevTool placement='bottom-right' control={form.control} /> */}
      </div>
    </div>
  );
};

export default HookFormHome;

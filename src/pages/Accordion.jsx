import { useState } from 'react';

import { accordionData } from '@/features/Accordion/data';
import { ExpandIcon, Info } from 'lucide-react';

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);
  const [mutliple, setMutliple] = useState([]);

  const handleSingleSelect = (id) => {
    setSelected(selected === id ? null : id);
  };

  const handleMultiSelect = (id) => {
    let newSelected = [...mutliple];
    const findIndex = newSelected.indexOf(id);

    if (findIndex === -1) newSelected.push(id);
    else newSelected.splice(findIndex, 1);

    setMutliple(newSelected);

    console.log(mutliple);
  };

  const handleExpandAll = () => {
    setMultiSelect(true)
    setMutliple(accordionData.map((item) => item.id));
  };

  return (
    <div className='flex h-full max-h-screen items-center justify-center flex-col mt-2'>
      <div className='flex gap-2'>
        <Button
          variant={multiSelect ? 'default' : 'outline'}
          onClick={() => {
            setMultiSelect(!multiSelect);
            setSelected(null);
            setMutliple([]);
          }}
          className='mb-6'>
          {multiSelect ? 'Disable' : 'Enable'} Multi Select
        </Button>
        <Button
          onClick={() => handleExpandAll()}
          variant='outline'
          size='icon'>
          <ExpandIcon className='h-4 w-4' />
        </Button>
      </div>
      {accordionData && accordionData.length > 0 ? (
        accordionData.map((item) => (
          <div
            key={item.id}
            className='w-96 p-4 border border-gray-300 bg-gray-200 dark:bg-slate-900 rounded-lg shadow-lg mb-4'>
            <div
              className='flex justify-between items-center cursor-pointer'
              onClick={
                multiSelect ? () => handleMultiSelect(item.id) : () => handleSingleSelect(item.id)
              }>
              <h3 className='text-lg font-semibold'>{item.question}</h3>
              <span>{selected === item.id ? '-' : '+'}</span>
            </div>
            {selected === item.id || mutliple.includes(item.id) ? (
              <p className='mt-2'>{item.answer}</p>
            ) : null}
          </div>
        ))
      ) : (
        <p>No data found</p>
      )}
      <div className='mt-auto'>
        <Alert variant='primary'>
          <Info className='h-5 w-5' />
          <AlertTitle>Accordion Example</AlertTitle>
          <AlertDescription>
            This is an example of an accordion component. You can click on the question to view the
            answer. You can also enable multi-select to view multiple answers at the same time.
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
};

Accordion.propTypes = {};

export default Accordion;

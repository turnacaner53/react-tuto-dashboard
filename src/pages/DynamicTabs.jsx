import { useState } from 'react';

import TABS_CONTENT from '@/constants/tabs-content';

const DynamicTabs = () => {
  const handleChange = (index) => {
    console.log('Tab index:', index);
  };

  return (
    <>
      <Tabs content={TABS_CONTENT} onChange={handleChange} />
    </>
  );
};

export default DynamicTabs;

const Tabs = ({ content, onChange }) => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  const handleOnClick = (index) => {
    setCurrentTabIndex(index);
    onChange(index);
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex gap-4'>
        {content.map((item, index) => (
          <div
            className={`my-4 cursor-pointer rounded-md p-4 transition-colors duration-300 ease-in-out hover:bg-gray-400 hover:dark:bg-gray-800 
            ${currentTabIndex === index ? 'bg-red-400 hover:bg-red-500 dark:bg-red-800 hover:dark:bg-red-900' : 'bg-gray-300 dark:bg-gray-600'}`}
            onClick={() => handleOnClick(index)}
            key={item.label}>
            <span
              className={`text-md ${currentTabIndex === index && 'font-bold text-emerald-800 dark:text-emerald-500'}`}>
              {item.label}
            </span>
          </div>
        ))}
      </div>
      <div className='mt-4 w-[90%] rounded-md border bg-emerald-800 p-6 text-center'>
        <p className='text-xl text-foreground '>
          {content[currentTabIndex] && content[currentTabIndex].content}
        </p>
      </div>
    </div>
  );
};

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState('hex');
  const [color, setColor] = useState('#000000');

  const randomColor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }

    setColor(() => hexColor);
  };

  const handleCreateRgbColor = () => {
    const r = randomColor(256);
    const g = randomColor(256);
    const b = randomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === 'hex') handleCreateHexColor();
    else if (typeOfColor === 'rgb') handleCreateRgbColor();
  }, [typeOfColor]);

  return (
    <div className='container flex flex-col items-center gap-4'>
      <div className='flex flex-wrap items-center justify-center gap-4'>
        <Button onClick={() => setTypeOfColor('hex')}>Create HEX Color</Button>
        <Button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</Button>
        <Button onClick={typeOfColor === 'hex' ? handleCreateHexColor : handleCreateRgbColor}>
          Generate Random Color
        </Button>
      </div>
      <div
        style={{ backgroundColor: color }}
        className={`flex h-[500px] w-[95%] flex-col items-center justify-center gap-8 rounded-md border border-black dark:border-gray-200`}>
        <p style={{ color: color }} className='py-2 text-center text-4xl font-bold invert'>
          Color Type: <span className='uppercase'>{typeOfColor}</span>
        </p>
        <h2 style={{ color: color }} className='py-2 text-center text-4xl font-bold invert'>
          Color: {color}
        </h2>
      </div>
    </div>
  );
};

export default RandomColor;

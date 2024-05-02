import { useState } from 'react';
import QRCode from 'react-qr-code';

import { GitBranch, GitCommit, GitGraph } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const QRCodeGenerate = () => {
  const [qrCode, setQrCode] = useState('');
  const [inputCode, setInputCode] = useState('');

  const githubLink = 'https://github.com/turnacaner53';

  const handleGenerateQRCode = () => {
    setQrCode(inputCode);
    setInputCode('');
  };

  return (
    <div className='container flex min-h-full flex-col'>
      <div className='grow'>
        <h1 className='mb-6 text-3xl font-bold text-blue-500'>Generate QR Code</h1>
        <div className='flex gap-2'>
          <Input
            id='qr-code-value'
            onChange={(e) => setInputCode(e.target.value)}
            type='text'
            placeholder='Enter your code'
            value={inputCode}
            className='w-2/3 max-w-md'
          />
          <Button
            onClick={handleGenerateQRCode}
            disabled={inputCode && inputCode.trim() !== '' ? false : true}>
            Generate
          </Button>
        </div>
        <p className='my-8 text-lg font-bold text-blue-500'>QR Code: {qrCode}</p>
        {qrCode && (
          <div className='inline-block border border-slate-500/50 bor p-2 shadow-md hover:shadow-xl'>
            <QRCode id='qr-code-value' value={qrCode} size={200} bgColor='#fff' />
          </div>
        )}
      </div>
      <div className='flex items-end justify-end gap-4'>
        <GitGraph color='#3B82F6' size={24} />
        <p className='mr-4 text-xl text-foreground'>My github link:</p>
        <QRCode
          className='inline-block border p-2 shadow-md'
          value={githubLink}
          size={100}
          bgColor='#fff'
        />
      </div>
    </div>
  );
};

export default QRCodeGenerate;

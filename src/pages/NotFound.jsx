import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center space-y-6'>
      <div className='flex items-center'>
        <p className='mr-4 border-r-2 p-2 pr-4 text-4xl font-semibold'>404</p>
        <h1 className='text-2xl font-semibold'>This page could not be found.</h1>
      </div>
      <Link
        className='text-lg font-semibold text-blue-500 hover:text-blue-900 dark:hover:text-slate-500'
        to='/'>
        <a>Go back to home</a>
      </Link>
    </div>
  );
};

export default NotFound;

import { useEffect, useState } from 'react';

const ScrollIndicator = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(false);
  const [errorMsg, seterrorMsg] = useState('');
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const fetchdata = async () => {
    try {
      setloading(true);
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const result = await response.json();
      const products = result.products;
      if (result && result.products && result.products.length > 0) {
        setData(products);
      }
    } catch (error) {
      seterrorMsg(error.message);
    } finally {
      setloading(false);
    }
  };

  const handleScrollPercentage = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    const height = scrollHeight - clientHeight;

    const percentage = (scrollTop / height) * 100;
    console.log(percentage);
    setScrollPercentage(percentage);
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPercentage);

    return () => {
      window.removeEventListener('scroll', handleScrollPercentage);
    };
  }, []);

  if (loading) return <p>Loading...</p>;
  if (errorMsg) return <p>Error: {errorMsg}</p>;

  return (
    <>
      <div className='flex'>
        <div className=' container flex flex-col items-center'>
          <h1 className='mb-6 text-center text-4xl uppercase'>Scroll It</h1>
          {data.map((item) => (
            <h2
              className='mb-4 border-b border-blue-600 py-1 text-foreground dark:border-blue-300'
              key={item.id}>
              {item.title}
            </h2>
          ))}
        </div>
        <div className={`h-max-min mr-[-12px] w-4 bg-blue-600`}>
          <div className='w-4 bg-violet-700' style={{ height: `${scrollPercentage}%` }}></div>
        </div>
      </div>
      <p className='fixed bottom-5 right-12'>
        Scroll percentage:{' '}
        {scrollPercentage && scrollPercentage !== undefined ? (
          <span className='font-bold text-red-600'>{Math.round(scrollPercentage)}</span>
        ) : (
          '0'
        )}
      </p>
    </>
  );
};

export default ScrollIndicator;

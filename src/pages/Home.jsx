import { useState } from 'react';

import Modal from '@/components/modal/Modal';
import Rating from '@/components/star-rating/Rating';
import SearchUsers from '@/features/users-search/SearchUsers';
import useFetch from '@/hooks/useFetch';
import useWindowResize from '@/hooks/useWindowResize';

import { Button } from '@/components/ui/button';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const { data, error, pending } = useFetch({ url: 'https://jsonplaceholder.typicode.com/users' });

  const windowSize = useWindowResize();

  // console.log(data, error, pending);

  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <Rating stars={10} size={36} color='red' />
        <Button onClick={() => setShowModal((show) => !show)}>Open Modal</Button>
        <div className='container'>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
        <SearchUsers />
        <div className=' mt-4  flex flex-col items-center gap-2'>
          <h1 className='text-xl'>Window resize hook example</h1>
          <p>Window width: {windowSize.width}</p>
          <p>Window height: {windowSize.height}</p>
        </div>
      </div>
    </>
  );
};

export default Home;

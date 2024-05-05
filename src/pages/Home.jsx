import { useState } from 'react';

import Modal from '@/components/modal/Modal';
import Rating from '@/components/star-rating/Rating';

import { Button } from '@/components/ui/button';
import SearchUsers from '@/features/users-search/SearchUsers';
import useFetch from '@/hooks/useFetch';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const {data , error, pending} = useFetch({url: 'https://jsonplaceholder.typicode.com/users'});
  
  // console.log(data, error, pending);

  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <Rating stars={10} size={36} color='red' />
        <Button onClick={() => setShowModal((show) => !show)}>Open Modal</Button>
        <div className='container'>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
        </div>
      </div>
      <SearchUsers />
    </>
  );
};

export default Home;

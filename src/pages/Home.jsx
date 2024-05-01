import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@/components/star-rating/Rating';

const Home = () => {
    return (
        <div className='flex items-center flex-col'>
            <Rating stars={10} size={36} color='red'/>
        </div>
    )
}

Home.propTypes = {
}

export default Home

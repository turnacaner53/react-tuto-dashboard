import { useState } from 'react';

import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import PropTypes from 'prop-types';

const Rating = ({ stars = 4, size = 24 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };

  const handleMouseEnter = (index) => {
    setHover(index);
  };

  const handleMouseLeave = (index) => {
    setHover(rating);
  };

  return (
    <div className='flex'>
      {[...Array(stars)].map((_, i) => {
        i += 1;

        return (
          <Star
            className={cn(
              `text-gray-400`,
              i <= (hover || rating) ? 'text-yellow-600' : 'text-gray-400',
            )}
            key={i}
            size={size}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          />
        );
      })}
    </div>
  );
};

Rating.propTypes = {
  stars: PropTypes.number,
  size: PropTypes.number,
};

export default Rating;

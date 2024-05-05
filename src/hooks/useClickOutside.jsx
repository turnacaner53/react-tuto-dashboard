import  { useEffect } from 'react';

import PropTypes from 'prop-types';

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

useClickOutside.propTypes = {
  ref: PropTypes.object.isRequired,
  handler: PropTypes.func.isRequired,
};

export default useClickOutside;

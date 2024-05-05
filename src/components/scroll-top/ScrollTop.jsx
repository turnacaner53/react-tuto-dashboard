import { useEffect, useState } from 'react';

import { ArrowDown, ArrowUp } from 'lucide-react';
import PropTypes from 'prop-types';

import { Button } from '../ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

const ScrollTop = ({ scrollTo = 'top' }) => {
  const [visible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const toggleVisible = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    // Listen for Scrolling Event
    window.addEventListener('scroll', toggleVisible, false);
    return () => {
      window.removeEventListener('scroll', toggleVisible, false);
    };
  }, []);

  return (
    <TooltipProvider>
    <Tooltip >
      <TooltipTrigger asChild>
        {visible && (
          <Button
            onClick={scrollTo === 'top' ? handleScrollToTop : handleScrollToBottom}
            variant='icon'
            className={`fixed right-4 h-12 w-12 rounded-full bg-slate-500 ${scrollTo === 'top' ? 'bottom-4' : 'top-4'}`}>
            {scrollTo === 'top' ? <ArrowUp /> : <ArrowDown />}
          </Button>
        )}
      </TooltipTrigger>
        <TooltipContent side='left'>
        <div>
          <p className='text-center'>Scroll to {scrollTo === 'top' ? 'top' : 'bottom'}</p>
        </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

ScrollTop.propTypes = {
  scrollTo: PropTypes.oneOf(['top', 'bottom']),
};

export default ScrollTop;

import React, { useRef } from 'react';

import useClickOutside from '@/hooks/useClickOutside';
import PropTypes from 'prop-types';

const Modal = ({ id, header = 'Header', body, footer, onClose }) => {
  const ref = useRef();
  useClickOutside(ref, onClose);

  return (
    <>
      <div className='fixed inset-0 bg-black opacity-50'></div>

      <div
        ref={ref}
        id={id || 'Modal'}
        className='fixed left-0 right-0 top-[30%] z-10 mx-auto w-[60%] animate-slideUp overflow-auto'>
        <div className='relative m-auto border border-red-700/40 bg-slate-900 p-0  '>
          <div className='bg-emerald-700 px-6 py-4'>
            <span
              onClick={onClose}
              className='float-right mt-[-12px] cursor-pointer text-xl font-bold hover:text-slate-800'>
              &times;
            </span>
            <h2>{header}</h2>
          </div>
          <div className='h-24 px-4 py-2'>{body ? body : <div>Modal body</div>}</div>
          <div className='bg-emerald-900/50 px-3 py-2'>{footer ? footer : <h2>Footer</h2>}</div>
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  header: PropTypes.string,
  body: PropTypes.string,
  footer: PropTypes.string,
  onClose: PropTypes.func,
};

export default Modal;

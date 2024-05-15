import { create } from 'zustand';
import { devtools, persist, subscribeWithSelector } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

import { createCartSlice } from './cart-slice';
import { createUserSlice } from './user-slice';

// combine slices into a single store
const useBoundStore = create(
  // use devtools for debugging (using redux devtools extension)
  // use immer to allow direct state mutation
  devtools(
    persist(
      subscribeWithSelector(
        immer((...a) => ({
          ...createUserSlice(...a),
          ...createCartSlice(...a),
        })),
      ),
        {
            name: 'shopping-store',
            whitelist: ['userName', 'fullName', 'address'],
        },
    ),
  ),
);

export default useBoundStore;

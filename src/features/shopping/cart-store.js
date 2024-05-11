import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  addToCart: (product) => {
    set((state) => {
      const updatedCart = [...state.cart, product];
      return { cart: updatedCart };
    });
  },
  removeFromCart: (id) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      return { cart: updatedCart };
    });
  },
  clearCart: () => set({ cart: [] }),
}));

export default useCartStore;

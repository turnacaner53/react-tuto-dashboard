const product = {
  id: 0,
  title: '',
  price: 0,
  description: '',
  category: '',
  image: '',
};

export const createCartSlice = (set, get) => ({
  products: [],
  total: 0,
  incrementQty: (id) =>
    set((state) => {
      const product = state.products.find((product) => product.id === id);
      if (product) product.qty += 1;
      state.total += product.price;
    }),
  decrementQty: (id) =>
    set((state) => {
      const productIndex = state.products.findIndex((product) => product.id === id);
      if (productIndex !== -1) {
        if (state.products[productIndex].qty === 1) {
          state.products.splice(productIndex, 1);
        } else {
          state.products[productIndex].qty -= 1;
          state.total -= state.products[productIndex].price;
        }
      }
    }),
  addProduct: (product) =>
    set((state) => {
      state.products.push({ ...product, qty: 1 });
      state.total += product.price;
    }),
  removeProduct: (id) =>
    set((state) => {
      let price = state.products.find((product) => product.id === id).price;
      let qty = state.products.find((product) => product.id === id).qty;
      state.total -= price * qty;
      state.products = state.products.filter((product) => product.id !== id);
    }),
  getProductById: (id) => get().products.find((product) => product.id === id),
  setTotal: (total) =>
    set((state) => {
      state.total = total;
    }),
  clearCart: () =>
    set((state) => {
      state.products = [];
      state.total = 0;
    }),
});

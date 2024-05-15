export const createUserSlice = (set) => ({
  userName: '',
  fullName: '',
  age: 0,
  address: '',
  setAddress: (address) =>
    set((state) => {
      state.address = address;
    }),

  fetchUser: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    set({
      userName: 'johndoe',
      fullName: 'John Doe',
      age: 30,
      address: '',
    });
  },
});

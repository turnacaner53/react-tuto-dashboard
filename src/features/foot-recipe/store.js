import { create } from 'zustand';

const useSearchStore = create((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  list: [],
  setList: (list) => set(()=>({list})),
  favourites: [],
  addFavourite: (recipe) => set((state) => ({ favourites: [...state.favourites, recipe] })),
  removeFavourite: (id) => set((state) => ({ favourites: state.favourites.filter((item) => item.id !== id) })),
}));

export default useSearchStore;

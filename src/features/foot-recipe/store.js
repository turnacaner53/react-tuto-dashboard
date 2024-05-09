import { create } from 'zustand';



const useSearchStore = create((set) => ({
  search: '',
  setSearch: (search) => set({ search }),
  loading: false,
  setLoading: (loading) => set({ loading }),
  list: [],
  setList: (list) => set({ list }),
  favourites: JSON.parse(localStorage.getItem('foot-favourites')) || [],
  addFavourite: (recipe) => {
    set((state) => {
      const updatedFavourites = [...state.favourites, recipe];
      localStorage.setItem('foot-favourites', JSON.stringify(updatedFavourites));
      return { favourites: updatedFavourites };
    });
  },
  removeFavourite: (id) => {
    set((state) => {
      const updatedFavourites = state.favourites.filter((item) => item.id !== id);
      localStorage.setItem('foot-favourites', JSON.stringify(updatedFavourites));
      return { favourites: updatedFavourites };
    });
  },
}));

export default useSearchStore;

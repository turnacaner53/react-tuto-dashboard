import { useEffect } from 'react';

import { useSearchRecipes } from '@/services/forkify';
import { useShallow } from 'zustand/react/shallow';

import { Input } from '@/components/ui/input';

import useSearchStore from './store';
import { useNavigate } from 'react-router-dom';

const FootSearch = () => {
  const navigate= useNavigate()
  const { search, setSearch, setList, setLoading } = useSearchStore(
    useShallow((state) => ({
      search: state.search,
      setSearch: state.setSearch,
      loading: state.loading,
      setLoading: state.setLoading,
      list: state.list,
      setList: state.setList,
      onSubmit: state.onSubmit,
    })),
  );

  const searchParams = search;

  const { data, isLoading, refetch } = useSearchRecipes(searchParams);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearch(search);

    setLoading(isLoading);
    if (searchParams) refetch();
    navigate('/foot-recipes')
  };

  useEffect(() => {
    if (isLoading) setLoading(isLoading);
    if (data) {
      setList(data?.data?.recipes);
      setLoading(false);
    }
  }, [data, setList, isLoading, setLoading]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type='text'
        placeholder='Search recipes...'
        loading={isLoading}
      />
    </form>
  );
};

export default FootSearch;

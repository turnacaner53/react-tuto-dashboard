import { Spinner } from '@/components/ui/spinner';
import FootItem from '@/features/foot-recipe/FootItem';
import useSearchStore from '@/features/foot-recipe/store';
import { useShallow } from 'zustand/react/shallow';

const FootRecipes = () => {
  const { list, loading } = useSearchStore(
    useShallow((state) => ({
      list: state.list,
      loading: state.loading,
    })),
  );

  if (loading) return <Spinner />

  if (list.length === 0) return <div>No Result. Search something</div>;

  return (
    <div className='container flex flex-wrap justify-center gap-6 py-6'>
      {list &&
        list?.map((item, index) => (
          <FootItem key={index} item={item} />
        ))}
    </div>
  );
};

FootRecipes.propTypes = {};

export default FootRecipes;

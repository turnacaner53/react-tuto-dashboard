import FootItem from '@/features/foot-recipe/FootItem';
import useSearchStore from '@/features/foot-recipe/store';

const FootFavourites = () => {
  const favourites = useSearchStore((state) => state.favourites);

  if (favourites?.length === 0) return <div>No Favourites. Try to add some</div>;

  return (
    <div className='container flex flex-wrap justify-center gap-6 py-6'>
      {favourites &&
        favourites?.map((item, index) => <FootItem favourite={true} key={index} item={item} />)}
    </div>
  );
};

FootFavourites.propTypes = {};

export default FootFavourites;

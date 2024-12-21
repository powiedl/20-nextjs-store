import SectionTitle from '@/components/global/SectionTitle';
import ProductsGrid from '@/components/products/ProductsGrid';
import { fetchUserFavorites } from '@/utils/actions';

const FavoritesPage = async () => {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0) return <div>No favorites yet.</div>;
  return (
    <div>
      <SectionTitle text='Favorites' />
      <ProductsGrid products={favorites.map((favorite) => favorite.product)} />
    </div>
  );
};
export default FavoritesPage;

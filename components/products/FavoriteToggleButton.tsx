import { FaHeart } from 'react-icons/fa';
import { Button } from '../ui/button';
import { CardSignInButton } from '../form/Buttons';
import { auth } from '@clerk/nextjs/server';
import { fetchFavoriteId } from '@/utils/actions';
import FavoriteToggleForm from './FavoriteToggleForm';

const FavoriteToggleButton = async ({ productId }: { productId: string }) => {
  //console.log('FavoriteToggleButton,productId', productId);
  const { userId } = auth();
  if (!userId) return <CardSignInButton />;
  //console.log('FavoriteToggleButton', productId);
  const favoriteId = await fetchFavoriteId({ productId });

  return <FavoriteToggleForm productId={productId} favoriteId={favoriteId} />;
};

export default FavoriteToggleButton;

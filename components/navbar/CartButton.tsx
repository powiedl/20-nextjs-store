import { Button } from '../ui/button';
import { LuShoppingCart as LuShop, LuShoppingCart } from 'react-icons/lu';
import Link from 'next/link';

const CartButton = async (): Promise<Awaited<JSX.Element>> => {
  const numItemsInCart = 4;

  return (
    <Button
      asChild
      variant='outline'
      size='icon'
      className='flex justify-center items-center relative'
    >
      <Link href='/cart'>
        <LuShoppingCart />
        <span className='absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-sm'>
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};
export default CartButton;

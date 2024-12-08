import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { LuLayoutGrid, LuList } from 'react-icons/lu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { fetchAllProducts } from '@/utils/actions';
import Link from 'next/link';

const ProductsContainer = async ({
  layout,
  search,
}: {
  layout: string;
  search: string;
}): Promise<Awaited<React.ReactNode>> => {
  const products = await fetchAllProducts({ search });
  const totalProducts = products.length;
  const searchTerms = search ? `&search=${search}` : '';
  return (
    <>
      {/* HEADER */}
      <section>
        <div className='flex justify-between items-center'>
          <h4 className='font-medium text-lg'>
            {totalProducts} product{totalProducts > 1 && 's'}
          </h4>
          <div className='flex gap-x-4'>
            <Button
              variant={layout === 'grid' ? 'default' : 'ghost'}
              size='sm'
              asChild
            >
              <Link href={`/products?layout=grid${searchTerms}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === 'list' ? 'default' : 'ghost'}
              size='sm'
              asChild
            >
              <Link href={`/products?layout=list${searchTerms}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className='mt-4' />
      </section>

      {/* PRODUCTS */}
      <div>
        {totalProducts === 0 ? (
          <h5>Sorry, no products matched your search ...</h5>
        ) : layout === 'grid' ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;

import ProductsContainer from '@/components/products/ProductsContainer';
import { GetServerSidePropsContext } from 'next';

const ProductsPage = async (context: GetServerSidePropsContext) => {
  const _context = await context;
  const url = new URL(_context.request.url);
  console.log('ProductsPage,_context', _context);

  console.log('ProductsPage,searchParams', searchParams);
  const sP = searchParams as { layout?: 'grid' | 'list'; search?: string };
  const layout = sP.layout || 'grid';
  const search = sP.search || '';
  console.log('ProductsPage', layout, search);
  /* @ts-expect-error Server Component */
  return <ProductsContainer layout={layout} search={search} />;
};
export default ProductsPage;

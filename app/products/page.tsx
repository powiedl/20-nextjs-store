import ProductsContainer from '@/components/products/ProductsContainer';

const ProductsPage = ({
  searchParams,
}: {
  searchParams: { layout?: 'grid' | 'list'; search?: string };
}) => {
  const layout = searchParams.layout || 'grid';
  const search = searchParams.search || '';
  console.log('ProductsPage', searchParams);
  /* @ts-expect-error Server Component */
  return <ProductsContainer layout={layout} search={search} />;
};
export default ProductsPage;

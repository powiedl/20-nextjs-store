import ProductsContainer from '@/components/products/ProductsContainer';

type SearchParams = { layout?: 'grid' | 'list'; search?: string };

const ProductsPage = async (props: any) => {
  const sP =
    ((await props.searchParams) as SearchParams) || ({} as SearchParams);
  const layout = sP.layout || 'grid';
  const search = sP.search || '';
  console.log('ProductsPage,searchParams', sP);
  console.log('ProductsPage', layout, search);
  return <ProductsContainer layout={layout} search={search} />;
};

export default ProductsPage;

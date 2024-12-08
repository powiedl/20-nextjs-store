import LoadingContainer from '@/components/global/LoadingContainer';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Hero from '@/components/home/Hero';
import { Suspense } from 'react';
const HomePage = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<LoadingContainer />}>
        {/* @ts-expect-error Server Component */}
        <FeaturedProducts />
      </Suspense>
    </>
  );
};
export default HomePage;

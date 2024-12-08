import Link from 'next/link';
import { Button } from '../ui/button';
import HeroCarousel from './HeroCarousel';

const Hero = () => {
  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 gap-24 items-center'>
      <div>
        <h1 className='text-4xl font-bold max-w-2xl tracking-tight sm:text-6xl'>
          We are changing the way people shop
        </h1>
        <p className='mt-8 max-w-xl text-lg leading-8 text-muted-foreground'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          necessitatibus, quas nihil dolorum ullam dolore mollitia quo
          cupiditate eveniet soluta?
        </p>
        <Button asChild size='lg' className='mt-10'>
          <Link href='/products'>Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
};
export default Hero;

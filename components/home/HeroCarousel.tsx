import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import hero1 from '@/public/images/hero1.jpg';
import hero2 from '@/public/images/hero2.jpg';
import hero3 from '@/public/images/hero3.jpg';
import hero4 from '@/public/images/hero4.jpg';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';

const carouselImages = [hero1, hero2, hero3, hero4];

const HeroCarousel = () => {
  return (
    <div className='hidden lg:block'>
      <Carousel opts={{ loop: true }}>
        <CarouselContent>
          {carouselImages.map((img, ndx) => (
            <CarouselItem key={ndx}>
              <Card>
                <CardContent className='p-2'>
                  <Image
                    src={img}
                    alt='hero'
                    className='w-full h-[24rem] rounded-md object-cover'
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
export default HeroCarousel;
import { Skeleton } from '@/components/ui/skeleton';

const loading = () => {
  return (
    <section>
      <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
        {/* IMAGE FIRST COL */}
        <Skeleton className='w-full rounded-md relative h-96' />
        {/* PRODUCT INFO SECOND COL */}
        <div className='max-w-md h-96'>
          <Skeleton className='capitalize text-3xl font-bold w-48 h-12' />
          <Skeleton className='text-xl mt-2 w-32 h-6' />
          <Skeleton className='text-xl mt-2 w-32 h-8' />
          <Skeleton className='text-xl mt-2 w-28 h-8' />

          <Skeleton className='mt-6 leading-8text-muted-foreground w-full h-48' />
        </div>
      </div>
    </section>
  );
};
export default loading;

import { cn } from '@/lib/utils';

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn('mx-auto max-w-6xl xl:max-w-7xl px-8', className)}>
      {children}
    </div> // cn filtert alle falsy Werte und returned einen String mit allen anderen Werten
  );
};
export default Container;

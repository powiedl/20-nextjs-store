import { fetchProductReviews } from '@/utils/actions';
import SectionTitle from '../global/SectionTitle';
import ReviewCard from './ReviewCard';

const ProductReviews = async ({ productId }: { productId: string }) => {
  const reviews = await fetchProductReviews(productId);
  return (
    <div className='mt-16'>
      <SectionTitle text='product reviews' />
      <div className='grid md:grid-cols-2 gap-8 my-8'>
        {reviews.length === 0 && <p>No reviews yet ...</p>}
        {reviews.map((r) => {
          const { comment, rating, authorImageUrl, authorName } = r;
          const reviewInfo = {
            comment,
            rating,
            image: authorImageUrl,
            name: authorName,
          };
          return <ReviewCard key={r.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
};
export default ProductReviews;

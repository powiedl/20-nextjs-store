import { deleteReviewAction, fetchProductReviewsByUser } from '@/utils/actions';
import ReviewCard from '@/components/reviews/ReviewCard';
import SectionTitle from '@/components/global/SectionTitle';
import FormContainer from '@/components/form/FormContainer';
import { IconButton } from '@/components/form/Buttons';
import { Icon } from '@radix-ui/react-select';
const ReviewsPage = async () => {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length === 0)
    return <SectionTitle text='you have no reviews yet' />;

  return (
    <>
      <SectionTitle text='Your Reviews' />
      <section className='grid md:grid-cols-2 gap-8 mt-4 '>
        {reviews.map((review) => {
          const { id, comment, rating, product } = review;
          const { image, name } = product;
          const reviewInfo = { id, comment, rating, image, name };
          return (
            <ReviewCard key={id} reviewInfo={reviewInfo}>
              <DeletReview reviewId={id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
};

const DeletReview = ({ reviewId }: { reviewId: string }) => {
  const deleteReview = deleteReviewAction.bind(null, { reviewId });
  return (
    <FormContainer action={deleteReview}>
      <IconButton actionType='delete' />
    </FormContainer>
  );
};
export default ReviewsPage;

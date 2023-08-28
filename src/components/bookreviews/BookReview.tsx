type BookReviewData = {
  id: string;
  userId: string;
  bookId: string;
  review: string;
  rating: number;
};

const BookReview = ({ id, userId, bookId, review, rating }: BookReviewData) => {
  return (
    <>
      <p>
        {id}
        {userId}
        {bookId}
        {review}
        {rating}
      </p>
    </>
  );
};

export default BookReview;

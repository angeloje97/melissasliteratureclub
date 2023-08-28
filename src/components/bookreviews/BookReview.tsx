type BookReviewData = {
  id: String;
  userId: String;
  bookId: String;
  review: String;
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

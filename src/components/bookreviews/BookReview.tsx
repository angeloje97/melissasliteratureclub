export type BookReviewData = {
  id: string;
  userId: string;
  bookId: string;
  title: string;
  review: string;
  rating: number;
};

export const defaultData: BookReviewData = {
  id: "",
  userId: "",
  bookId: "",
  title: "",
  review: "",
  rating: 0,
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

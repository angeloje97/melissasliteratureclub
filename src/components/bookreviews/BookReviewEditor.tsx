import { ChangeEvent, FormEvent, useState } from "react";
import { defaultData, type BookReviewData } from "./BookReview";
import useObject from "~/resources/customhooks/useObject";
import RequiresLogin from "../requirements/RequiresLogin";
import { useSession } from "next-auth/react";
type BookReviewEditorData = {
  onSave: (data: BookReviewData) => void;
  onDelete: (data: BookReviewData) => void;
  onPublish: (data: BookReviewData) => void;
  originalData?: BookReviewData;
};

const BookReviewEditor = ({
  onSave,
  onDelete,
  onPublish,
  originalData,
}: BookReviewEditorData) => {
  const [reviewData, setReviewKey, setReviewData] = useObject(
    originalData ?? defaultData
  );
  const [updating, setUpdating] = useState(false);
  const session = useSession();
  const [bookName, setBookName] = useState("");
  const inputClass = "w-full rounded border-2 p-1 mt-2";
  const buttonClass = "rounded border-2 p-2";

  const handleBookTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setBookName(event.target.value);
  };

  const handleFormSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!session.data) return;
    if (updating) return;
    setUpdating(true);

    setReviewData((prev) => {
      const current = { ...prev };
      current.userId = session.data?.user.id;

      return current;
    });

    setUpdating(false);
  };

  return (
    <RequiresLogin redirect="/" prefix="Review Editor">
      <form onSubmit={handleFormSubmission}>
        <span className="flex gap-2">
          <input
            type="text"
            className={`${inputClass} w-2/5`}
            placeholder="Review Title"
            id="title"
            onChange={(event) => {
              setReviewKey("title", event.target.value);
            }}
            value={reviewData.title}
          />
          <input
            type="search"
            placeholder="Book Title"
            className={`${inputClass} w-2/5`}
            onChange={handleBookTitle}
            value={bookName}
          />
          <input
            className={`${inputClass} w-1/5`}
            type="number"
            min={0}
            max={10}
            step={0.01}
            placeholder="Rating out of 5"
            onChange={(event) => {
              setReviewKey("rating", parseInt(event.target.value));
            }}
            value={reviewData.rating}
          />
        </span>
        <textarea
          className={`${inputClass}`}
          rows={20}
          onChange={(event) => {
            setReviewKey("review", event.target.value);
          }}
          value={reviewData.review}
        />
        <span className="flex justify-end gap-2">
          <button className={buttonClass} type="reset">
            Delete
          </button>
          <button className={buttonClass} type="submit">
            Save
          </button>
          <button className={buttonClass} type="button">
            Publish
          </button>
        </span>
      </form>
    </RequiresLogin>
  );
};

export default BookReviewEditor;

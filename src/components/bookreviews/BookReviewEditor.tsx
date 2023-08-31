import type { BookReviewData } from "./BookReview";
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
  const inputClass = "w-full rounded border-2 p-1 mt-2";
  const buttonClass = "rounded border-2 p-2";

  return (
    <form>
      <span className="flex gap-2">
        <input
          type="text"
          className={`${inputClass} w-2/5`}
          placeholder="Review Title"
        />
        <input
          type="search"
          placeholder="Book Title"
          className={`${inputClass} w-2/5`}
        />
        <input
          className={`${inputClass} w-1/5`}
          type="number"
          min={0}
          max={10}
          step={0.01}
          placeholder="Rating out of 5"
        />
      </span>
      <textarea className={`${inputClass}`} rows={20} />
      <span className="flex justify-end gap-2">
        <button className={buttonClass}>Delete</button>
        <button className={buttonClass}>Save</button>
        <button className={buttonClass}>Publish</button>
      </span>
    </form>
  );
};

export default BookReviewEditor;

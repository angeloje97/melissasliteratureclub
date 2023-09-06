import { useState } from "react";
import { BookReviewData } from "~/components/bookreviews/BookReview";

const handleValue = (obj: BookReviewData) => {};

const useObject = <T>(initialData: T) => {
  const [data, setData] = useState(initialData);

  const setFunction = <K extends keyof T>(
    key: K,
    value: T[K],
    action?: (obj: T) => void
  ) => {
    setData((prev) => {
      const newObj = { ...prev, [key]: value };
      if (action) action(newObj);
      return newObj;
    });
  };

  return [data, setFunction, setData] as const;
};

export default useObject;

// //Testing the custom hook

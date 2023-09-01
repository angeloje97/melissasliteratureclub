import { useState } from "react";

const useObject = <T>(initialData: T) => {
  const [data, setData] = useState(initialData);

  const setFunction = <K extends keyof T>(key: K, value: T[K]) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return [data, setFunction] as const;
};

export default useObject;

// //Testing the custom hook

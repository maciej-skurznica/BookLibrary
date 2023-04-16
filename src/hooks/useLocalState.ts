import { Book } from "src/components/Bestsellers/Bestsellers.interfaces";
import { useState } from "react";

// This hook is a combination of useState and localStorage in one.
// It tries to get the data from localStorage and if it doesn't exist, then it uses the initialValue.
const useLocalState = (
  key: string,
  initialValue: string | Book[] | boolean
) => {
  const storedValue = window.localStorage.getItem(key);
  const item = storedValue ? JSON.parse(storedValue) : initialValue;
  const [state, setState] = useState(item);

  const updateState = (value: string | Book) => {
    window.localStorage.setItem(key, JSON.stringify(value));
    setState(value);
  };

  return [state, updateState];
};

export default useLocalState;

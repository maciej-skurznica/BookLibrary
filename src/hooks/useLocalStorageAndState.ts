import { Book } from "src/components/Bestsellers/Bestsellers.interfaces";
import { useState } from "react";

const useLocalStorageAndState = (
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

export default useLocalStorageAndState;

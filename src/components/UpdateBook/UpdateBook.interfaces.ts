import { Book } from "src/components/Bestsellers/Bestsellers.interfaces";

export interface UpdateBookProps {
  favourites: Book[];
  handleFavUpdate: (book: Book) => void;
}

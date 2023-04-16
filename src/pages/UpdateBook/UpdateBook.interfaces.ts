import { Book } from "src/pages/Bestsellers/Bestsellers.interfaces";

export interface UpdateBookProps {
  favourites: Book[];
  handleFavUpdate: (book: Book) => void;
}

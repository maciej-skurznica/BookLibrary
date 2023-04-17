import { Book } from "src/pages/Bestsellers/Bestsellers.interfaces";

export interface FavouritesProps {
  favourites: Book[];
  handleClick: (book: Book) => void;
}

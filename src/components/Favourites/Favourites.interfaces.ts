import { Book } from "src/components/Bestsellers/Bestsellers.interfaces";

export interface FavouritesProps {
  favourites: Book[];
  handleClick: (book: Book) => void;
}

import { Book } from "src/pages/Bestsellers/Bestsellers.interfaces";

export interface ListItemProps {
  book: Book;
  insideFav?: boolean;
  handleClick: (book: Book) => void;
}

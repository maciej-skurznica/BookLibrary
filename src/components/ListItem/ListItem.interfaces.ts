import { Book } from "src/components/Bestsellers/Bestsellers.interfaces";

export interface ListItemProps {
  book: Book;
  insideFav?: boolean;
  handleClick: (book: Book) => void;
}

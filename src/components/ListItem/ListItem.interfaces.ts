import { Book } from "src/components/Bestsellers/Bestsellers.interfaces";

export interface ListItemProps {
  book: Book;
  handleClick: (book: Book) => void;
}

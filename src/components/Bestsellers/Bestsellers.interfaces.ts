export interface Book {
  title: string;
  author: string;
  price: string;
  rating: number;
  bookImage: string;
  bookLink: string;
  isFavorite: boolean;
}

export interface List {
  books: BookList[];
}

export interface BookList {
  title: string;
  author: string;
  price: string;
  book_image: string;
  amazon_product_url: string;
}

export interface BestsellersProps {
  handleClick: (book: Book) => void;
  favourites: Book[];
}

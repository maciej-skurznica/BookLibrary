export interface Book {
  title: string;
  author: string;
  price: number;
  rating: number;
  bookImage: string;
  bookLink: string;
  isEdited: boolean;
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

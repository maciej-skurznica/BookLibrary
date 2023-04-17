import randNumAsStr from "src/utils/randNumAsStr";
import randomNumber from "src/utils/randomNumber";
import { Book, BookList, List } from "./Bestsellers.interfaces";

// A function that maps an array of books with the books in the favourites array
export const mapWithFavourites = (arr: Book[], favArr: Book[]) => {
  return arr.reduce((acc: Book[], book: Book) => {
    const match = favArr.find((el) => el.title === book.title);
    return [...acc, match ?? { ...book, isFavorite: false }];
  }, []);
};

// A functions that cleans/reduces the data from the API
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const cleanBookData = (data: any): Book[] => {
  // Step 1: Reduce the data to an array of book objects with the needed properties
  const reducedData = data.results.lists.reduce((acc1: Book[], list: List) => {
    const books = list.books.reduce(
      (
        acc2: Book[],
        { title, author, price, book_image, amazon_product_url }: BookList
      ) => {
        return [
          ...acc2,
          {
            title,
            author,
            price: price === "0.00" ? randNumAsStr(2, 18, 2) : price,
            rating: randomNumber(3, 5, 0),
            bookImage: book_image,
            bookLink: amazon_product_url,
            isFavorite: false
          }
        ];
      },
      []
    );
    return [...acc1, ...books];
  }, []);

  // Step 2: Remove duplicates from the array
  const finalData = reducedData.reduce((acc: Book[], el: Book) => {
    if (!acc.find((item) => item.title === el.title)) {
      return [...acc, el];
    }
    return acc;
  }, []);

  return finalData;
};

import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import ListItem from "src/components/ListItem";
import randNumAsStr from "src/utils/randNumAsStr";
import randomNumber from "src/utils/randomNumber";
import SearchBar from "src/components/SearchBar";
import Skeleton from "react-loading-skeleton";
import useLocalState from "src/hooks/useLocalState";
import { useLocation } from "react-router-dom";
import {
  BestsellersProps,
  Book,
  BookList,
  List
} from "./Bestsellers.interfaces";
import { Container, ListContainer, Title } from "./Bestsellers.styles";
import { useEffect, useState } from "react";

// The most important and complex component in the app
// It fetches data from the NYT API and renders a list of books
// It also renders a search bar and manages the search functionality
const Bestsellers = ({ handleClick, favourites }: BestsellersProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [locationKey, setLocationKey] = useLocalState("locationKey", "");
  const location = useLocation();
  const apiKey = import.meta.env.VITE_NYT_API_KEY;

  // A function that matches the fetched books with the books in the favourites array
  // and replaces the books in the fetched array with the books in the favourites array
  const matchWithFavorites = (arr: Book[], favArr: Book[]) => {
    return arr.reduce((acc: Book[], book: Book) => {
      const match = favArr.find((el) => el.title === book.title);
      return [...acc, match ?? { ...book, isFavorite: false }];
    }, []);
  };

  const handleSearch = (value: string) => setSearchTerm(value);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async (signal: AbortSignal) => {
      try {
        const { data, status } = await axios(
          `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`,
          { signal }
        );

        if (status !== 200) {
          throw new Error("Error fetching data");
        }

        // The received data is quite large and cluttered so I used number of steps to clean it up
        // 1. I reduced the data to an array of books objects
        // There list contains a list of genera and each genre contains a list of books
        // I reduced the books from all the places to one single array
        // Also each book object contains data that I don't need so I reduced it to only the data I need
        const reducedData = data.results.lists.reduce(
          (acc1: Book[], list: List) => {
            const books = list.books.reduce(
              (
                acc2: Book[],
                {
                  title,
                  author,
                  price,
                  book_image,
                  amazon_product_url
                }: BookList
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
          },
          []
        );

        // 2. I removed the duplicates from the array
        // Some books are listed in multiple genres so I removed them
        const removedDuplicates = reducedData.reduce(
          (acc: Book[], el: Book) => {
            if (!acc.find((item) => item.title === el.title)) {
              return [...acc, el];
            }
            return acc;
          },
          []
        );

        // 3. I matched the books with the books in the favourites array
        // and replaced the books in the fetched array with the books in the favourites array (if any)
        setBooks(matchWithFavorites(removedDuplicates, favourites));
      } catch (error) {
        if (axios.isCancel(error))
          return console.log("Request canceled:", error.message);
        else console.log(error);
      }
    };

    setSearchTerm("");
    // calls the fetchData function
    fetchData(signal);

    // aborts the fetch request if the component is unmounted
    return () => controller.abort();
  }, []);

  // when books are updated this useEffect is triggered
  useEffect(() => {
    // I used this method to set searchTerm with the location state only when coming from the landing page
    if (location.key !== locationKey) {
      setSearchTerm(location.state?.searchTerm ?? "");
      setLocationKey(location.key ?? "");
    }
  }, [books]);

  // searchTerm is not always updated in the useEffect above
  // so this useEffect is triggered when searchTerm is updated or when books are updated
  // and books are in the first useEffect above
  // btw. I placed them in the order as they are triggered for better readability
  useEffect(() => {
    // this handles the search functionality
    if (searchTerm.length && books.length) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      const notFound = filteredBooks.length === 0;
      setNotFound(notFound);
      setFilteredBooks(matchWithFavorites(filteredBooks, favourites));
    } else {
      setFilteredBooks(books);
    }
  }, [books, searchTerm]);

  // when favourites are updated this useEffect is triggered
  // that way I can see the changes in the favourite button
  useEffect(() => {
    setFilteredBooks(matchWithFavorites(filteredBooks, favourites));
  }, [favourites]);

  return (
    <Container>
      <Title>New York Times Bestsellers</Title>
      <SearchBar
        placeholder="Search"
        handleSearch={handleSearch}
        notFound={notFound}
      />
      <ListContainer>
        {notFound ? (
          <></>
        ) : filteredBooks.length ? (
          filteredBooks.map((book) => (
            <ListItem key={book.title} book={book} handleClick={handleClick} />
          ))
        ) : (
          Array.from({ length: 10 }).map((_, i) => (
            <Skeleton key={i} height={"52px"} />
          ))
        )}
      </ListContainer>
    </Container>
  );
};

export default Bestsellers;

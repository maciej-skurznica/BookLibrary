import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import ListItem from "src/components/ListItem";
import SearchBar from "src/components/SearchBar";
import Skeleton from "react-loading-skeleton";
import useLocalState from "src/hooks/useLocalState";
import { useLocation } from "react-router-dom";
import { BestsellersProps, Book } from "./Bestsellers.interfaces";
import { cleanBookData, mapWithFavourites } from "./Bestsellers.helpers";
import { Container, ListContainer, Title } from "./Bestsellers.styles";
import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_NYT_API_KEY;

// The most important and complex page component in the app
// It fetches data from the NYT API and renders a list of books
// It also renders a search bar and manages the search functionality
const Bestsellers = ({ handleClick, favourites }: BestsellersProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [prevKey, setPrevKey] = useLocalState("prevKey", "");
  const { key: locationKey, state: locationState } = useLocation();

  const handleSearch = (value: string) => setSearchTerm(value);

  const handleReset = () => {
    setSearchTerm("");
    setNotFound(false);
  };

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

        const cleanedData = cleanBookData(data);
        const finalData = mapWithFavourites(cleanedData, favourites);
        setBooks(finalData);
      } catch (error) {
        if (axios.isCancel(error))
          return console.log("Request canceled:", error.message);
        else console.log(error);
      }
    };

    // calls the fetchData function
    fetchData(signal);

    // If user submits a search in the landing page it is redirected to the this page
    // I used this method to set searchTerm with the value that was entered in the landing page searchBar
    if (locationKey && locationState?.searchTerm && locationKey !== prevKey) {
      setSearchTerm(locationState.searchTerm);
      setPrevKey(locationKey);
    }

    // aborts the fetch request if the component is unmounted
    return () => controller.abort();
  }, []);

  useEffect(() => {
    // this handles the search functionality
    if (searchTerm.length && books.length) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      !filteredBooks.length && setNotFound(true);
      filteredBooks.length &&
        setFilteredBooks(mapWithFavourites(filteredBooks, favourites));
    }
    // this handles books being loaded, searchBar(searchTerm) reset and favourites being updated
    else if (books.length) {
      setFilteredBooks(mapWithFavourites(books, favourites));
    }
  }, [books, favourites, searchTerm]);

  return (
    <Container>
      <Title>New York Times Bestsellers</Title>
      <SearchBar
        placeholder="Search"
        handleSearch={handleSearch}
        notFound={notFound}
        handleReset={handleReset}
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
            // used index as key because this is only a skeleton and no item will be changed or removed from the list
            <Skeleton key={i} height={"52px"} />
          ))
        )}
      </ListContainer>
    </Container>
  );
};

export default Bestsellers;

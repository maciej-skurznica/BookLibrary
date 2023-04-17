import { Book } from "src/pages/Bestsellers/Bestsellers.interfaces";
import { Empty } from "./Favourites.styles";
import { FavouritesProps } from "./Favourites.interfaces";
import ListItem from "src/components/ListItem";
import SearchBar from "src/components/SearchBar";
import {
  Container,
  ListContainer,
  Title
} from "src/pages/Bestsellers/Bestsellers.styles";
import { useCallback, useEffect, useState } from "react";

const Favourites = ({ favourites, handleClick }: FavouritesProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [filteredFav, setFilteredFav] = useState<Book[]>([]);

  // improves performance by memoizing the function so the SearchBar component doesn't re-render every time this component re-renders
  const handleSearch = useCallback((value: string) => setSearchTerm(value), []);

  // improves performance by memoizing the function so the SearchBar component doesn't re-render every time this component re-renders
  const handleReset = useCallback(() => {
    setSearchTerm("");
    setNotFound(false);
  }, []);

  // A function that filters the favourites array based on the search term
  useEffect(() => {
    if (searchTerm.length && favourites.length) {
      const filtered = favourites.filter((book) =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredFav(filtered);
      setNotFound(!filtered.length);
    } else {
      setFilteredFav(favourites);
    }
  }, [searchTerm, favourites]);

  return (
    <Container>
      <Title>Favourites</Title>
      <SearchBar
        placeholder="Search"
        handleSearch={handleSearch}
        notFound={notFound}
        handleReset={handleReset}
      />
      <ListContainer>
        {notFound ? (
          <></>
        ) : filteredFav.length ? (
          filteredFav.map((book) => (
            <ListItem
              key={book.title}
              book={book}
              handleClick={handleClick}
              insideFav
            />
          ))
        ) : (
          <Empty>Go to Bestsellers and choose favourite books</Empty>
        )}
      </ListContainer>
    </Container>
  );
};

export default Favourites;

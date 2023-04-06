import { Book } from "src/components/Bestsellers/Bestsellers.interfaces";
import { Empty } from "./Favourites.styles";
import { FavouritesProps } from "./Favourites.interfaces";
import ListItem from "src/components/ListItem";
import SearchBar from "src/components/SearchBar";
import {
  Container,
  ListContainer,
  Title
} from "src/components/Bestsellers/Bestsellers.styles";
import { useEffect, useState } from "react";

const Favourites = ({ favourites, handleClick }: FavouritesProps) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [filteredFav, setFilteredFav] = useState<Book[]>([]);

  const handleSearch = (value: string) => setSearchTerm(value);

  const handleReset = () => {
    setSearchTerm("");
    setNotFound(false);
  };

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

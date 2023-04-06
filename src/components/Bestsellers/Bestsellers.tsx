import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import ListItem from "src/components/ListItem";
import randNumAsStr from "src/utils/randNumAsStr";
import randomNumber from "src/utils/randomNumber";
import SearchBar from "src/components/SearchBar";
import Skeleton from "react-loading-skeleton";
import { useLocation } from "react-router-dom";
import {
  BestsellersProps,
  Book,
  BookList,
  List
} from "./Bestsellers.interfaces";
import { Container, ListContainer, Title } from "./Bestsellers.styles";
import { useEffect, useState } from "react";

const Bestsellers = ({ handleClick, favourites }: BestsellersProps) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const [locationKey, setLocationKey] = useState<string>("");
  const location = useLocation();
  const apiKey = import.meta.env.VITE_NYT_API_KEY;

  const matchWithFavorites = (arr: Book[], favArr: Book[]) => {
    return arr.reduce((acc: Book[], book: Book) => {
      const match = favArr.find((el) => el.title === book.title);
      return [...acc, match ?? { ...book, isFavorite: false }];
    }, []);
  };

  const handleSearch = (value: string) => setSearchTerm(value);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data, status } = await axios(
          `https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=${apiKey}`
        );

        if (status !== 200) {
          throw new Error("Error fetching data");
        }

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
                    isEdited: false,
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

        const removedDuplicates = reducedData.reduce(
          (acc: Book[], el: Book) => {
            if (!acc.find((item) => item.title === el.title)) {
              return [...acc, el];
            }
            return acc;
          },
          []
        );

        setBooks(matchWithFavorites(removedDuplicates, favourites));
      } catch (error) {
        console.log(error);
      }
    };

    setSearchTerm("");
    fetchData();
  }, []);

  useEffect(() => {
    console.log("useEffect", location.key, locationKey);
    if (location.key !== locationKey) {
      setSearchTerm(location.state?.searchTerm ?? "");
      setLocationKey(location.key ?? "");
    }
  }, [books]);

  useEffect(() => {
    if (searchTerm.length && books.length) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      const notFound = filteredBooks.length === 0;
      setNotFound(notFound);
      setFilteredBooks(filteredBooks);
    } else {
      setFilteredBooks(books);
    }
  }, [books, searchTerm]);

  useEffect(() => {
    setFilteredBooks(matchWithFavorites(filteredBooks, favourites));
  }, [favourites]);

  return (
    <Container>
      <Title>New York Times Bestsellers</Title>
      {console.log(searchTerm, location.key)}
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

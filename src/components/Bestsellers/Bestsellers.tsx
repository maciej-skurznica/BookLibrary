import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import ListItem from "src/components/ListItem";
import randomNumber from "src/utils/randomNumber";
import SearchBar from "src/components/SearchBar";
import Skeleton from "react-loading-skeleton";
import { useLocation } from "react-router-dom";
import { Book, BookList, List } from "./Bestsellers.interfaces";
import { Container, ListContainer, Title } from "./Bestsellers.styles";
import { useEffect, useState } from "react";

const Bestsellers = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [notFound, setNotFound] = useState<boolean>(false);
  const location = useLocation();
  const apiKey = import.meta.env.VITE_NYT_API_KEY;

  const handleSearch = (value: string) => {
    const notFound =
      books.filter((book) => book.title.toLowerCase().includes(value))
        .length === 0;
    setNotFound(notFound);
    setSearchTerm(value);
  };

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
                    price:
                      price === "0.00"
                        ? randomNumber(2, 18, 2)
                        : parseFloat(price),
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
        setBooks(removedDuplicates);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setSearchTerm(location.state?.searchTerm ?? "");
  }, [books]);

  useEffect(() => {
    if (searchTerm.length) {
      const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchTerm)
      );
      setFilteredBooks(filteredBooks);
    } else {
      setFilteredBooks(books);
    }
  }, [books, searchTerm]);

  return (
    <Container>
      <div>{location.state?.searchTerm}</div>
      <Title>New York Times Bestsellers</Title>
      <SearchBar
        placeholder="Search"
        handleSearch={handleSearch}
        notFound={notFound}
      />
      <ListContainer>
        {filteredBooks.length === 0 ? (
          <></>
        ) : filteredBooks.length ? (
          filteredBooks.map((book) => <ListItem key={book.title} book={book} />)
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

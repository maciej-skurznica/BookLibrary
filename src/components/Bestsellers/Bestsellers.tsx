import axios from "axios";
import ListItem from "src/components/ListItem";
import randomNumber from "src/utils/randomNumber";
import SearchBar from "src/components/SearchBar";
import { useLocation } from "react-router-dom";
import { Book, BookList, List } from "./Bestsellers.interfaces";
import { Container, ListContainer, Title } from "./Bestsellers.styles";
import { useEffect, useState } from "react";

const Bestsellers = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const location = useLocation();
  const apiKey = import.meta.env.VITE_NYT_API_KEY;

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
        setBooks(reducedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <div>{location.state?.searchTerm}</div>
      <Title>New York Times Bestsellers</Title>
      <SearchBar placeholder="Search" />
      <ListContainer>
        {books.length &&
          books.map((book) => <ListItem key={book.title} book={book} />)}
      </ListContainer>
    </Container>
  );
};

export default Bestsellers;

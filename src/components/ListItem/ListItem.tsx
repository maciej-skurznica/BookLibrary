import BookIcon from "src/assets/BookIcon";
import HeartIcon from "src/assets/HeartIcon";
import { ListItemProps } from "./ListItem.interfaces";
import Rating from "src/components/Rating";
import {
  Container,
  FavButton,
  IconDiv,
  Text,
  TitleText
} from "./ListItem.styles";

const ListItem = ({ book, handleClick }: ListItemProps) => {
  return (
    <Container>
      <IconDiv>
        <BookIcon />
      </IconDiv>
      <TitleText>
        <a href={book.bookLink} target="_blank" rel="noreferrer">
          {book.title}
          <span>by {book.author}</span>
        </a>
      </TitleText>
      <Rating rating={book.rating} />
      <Text>{`${book.price} GBP`}</Text>
      <FavButton isFav={book.isFavorite} onClick={() => handleClick(book)}>
        <HeartIcon />
      </FavButton>
    </Container>
  );
};

export default ListItem;

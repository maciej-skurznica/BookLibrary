import BookIcon from "src/assets/BookIcon";
import HeartIcon from "src/assets/HeartIcon";
import { ListItemProps } from "./ListItem.interfaces";
import Rating from "src/components/Rating";
import {
  Button,
  Container,
  FavButton,
  IconDiv,
  Price,
  StyledLink,
  Text,
  TitleText
} from "./ListItem.styles";

const ListItem = ({ book, handleClick, insideFav }: ListItemProps) => {
  const elements = {
    default: (
      <>
        <Rating rating={book.rating} />
        <Text>{`${book.price} GBP`}</Text>
      </>
    ),
    fav: (
      <>
        <Price>{`${book.price} GBP`}</Price>
        <Rating rating={book.rating} />
        <StyledLink to={`/favourites/${book.title}`}>Edit</StyledLink>
        <Button onClick={() => handleClick(book)}>Delete</Button>
      </>
    )
  };

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
      {insideFav ? elements.fav : elements.default}
      <FavButton isFav={book.isFavorite} onClick={() => handleClick(book)}>
        <HeartIcon />
      </FavButton>
    </Container>
  );
};

export default ListItem;

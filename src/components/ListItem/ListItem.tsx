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

const ListItem = ({
  book: { title, author, price, rating, bookLink, isFavorite }
}: ListItemProps) => {
  return (
    <Container>
      <IconDiv>
        <BookIcon />
      </IconDiv>
      <TitleText>
        <a href={bookLink} target="_blank" rel="noreferrer">
          {title}
          <span>by {author}</span>
        </a>
      </TitleText>
      <Rating rating={rating} />
      <Text>{`${price} GBP`}</Text>
      <FavButton isFav={isFavorite}>
        <HeartIcon />
      </FavButton>
    </Container>
  );
};

export default ListItem;

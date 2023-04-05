import BookIcon from "src/assets/BookIcon";
import HeartIcon from "src/assets/HeartIcon";
import Rating from "src/components/Rating";
import {
  Container,
  FavButton,
  IconDiv,
  Text,
  TitleText
} from "./ListItem.styles";

const ListItem = () => {
  const author = "Stephen King";

  return (
    <Container>
      <IconDiv>
        <BookIcon />
      </IconDiv>
      <TitleText>
        BILLY SUMMERS<span>by {author}</span>
      </TitleText>
      <Rating rating={4} />
      <Text>8 GPB</Text>
      <FavButton isFav={true}>
        <HeartIcon />
      </FavButton>
    </Container>
  );
};

export default ListItem;

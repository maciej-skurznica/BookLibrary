import BookIcon from "src/assets/BookIcon";
import HeartIcon from "src/assets/HeartIcon";
import { ListItemProps } from "./ListItem.interfaces";
import Rating from "src/components/Rating";
import React from "react";
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

const ListItem = React.memo(
  ({ book, handleClick, insideFav }: ListItemProps) => {
    // I the design, the order of the elements is different in the two cases, so I've created a default and a fav object.
    // I've used the insideFav prop to decide which object to use.
    // So if this ListItem is inside the Favourites page, it will use the fav object, otherwise it will use the default object.
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
        <FavButton
          isFav={book.isFavorite}
          onClick={() => handleClick(book)}
          data-testid={"fav-button"}
        >
          <HeartIcon />
        </FavButton>
      </Container>
    );
  }
);

ListItem.displayName = "ListItem";

export default ListItem;

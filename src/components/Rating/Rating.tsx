import { RatingProps } from "./Rating.interfaces";
import StarIcon from "src/assets/StarIcon";
import { Container, OuterDiv } from "./Rating.styles";

const Rating = ({ rating }: RatingProps) => {
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <OuterDiv key={index} filled={index < rating}>
            <StarIcon />
          </OuterDiv>
        );
      })}
    </Container>
  );
};

export default Rating;

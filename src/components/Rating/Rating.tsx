import { RatingProps } from "./Rating.interfaces";
import StarIcon from "src/assets/StarIcon";
import { Container, OuterDiv } from "./Rating.styles";

const Rating = ({ rating, handleRating }: RatingProps) => {
  return (
    <Container>
      {Array.from({ length: 5 }).map((_, index) => {
        return (
          <OuterDiv
            key={index}
            filled={index < rating}
            disabled={handleRating === undefined}
            onClick={handleRating ? () => handleRating(index + 1) : undefined}
          >
            <StarIcon />
          </OuterDiv>
        );
      })}
    </Container>
  );
};

export default Rating;

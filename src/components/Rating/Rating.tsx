import { RatingProps } from "./Rating.interfaces";
import StarIcon from "src/assets/StarIcon";
import { Container, OuterDiv } from "./Rating.styles";

// Reusable rating component which can be used in different places
// Each star is a button which can be clicked to change the rating
// If the handleRating prop is not passed, the stars are disabled
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

import ArrowIcon from "src/assets/ArrowIcon";
import { Book } from "src/pages/Bestsellers/Bestsellers.interfaces";
import Rating from "src/components/Rating/Rating";
import { UpdateBookProps } from "./UpdateBook.interfaces";
import { useState } from "react";
import {
  Button,
  Container,
  Div,
  EditForm,
  EditTitle,
  Image,
  Input,
  Label,
  ReturnButton
} from "./UpdateBook.styles";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = ({ favourites, handleFavUpdate }: UpdateBookProps) => {
  // To get the single book I used this approach in this case
  const { title } = useParams();
  const book = favourites.find((el) => el.title === title);
  // ↑
  const [rating, setRating] = useState<number>(book?.rating || 0);
  const [price, setPrice] = useState<string>(book?.price || "");
  // this is later used to navigate back to the favourites page
  const navigate = useNavigate();

  const handleRating = (rating: number) => setRating(rating);

  const handleCostChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value).toFixed(2));
  };

  const handleSubmit = () => {
    alert("Book updated!");
    handleFavUpdate({ ...book, rating, price } as Book);
  };

  return (
    <Container>
      <Image>
        <div>
          {book?.title} by {book?.author}
        </div>
      </Image>
      <EditTitle>Edit</EditTitle>
      <EditForm>
        <div>
          <Label>Cost</Label>
          <Input
            type="number"
            placeholder={`${book?.price} GBP`}
            max={25}
            min={0}
            onChange={handleCostChange}
          />
        </div>
        <div>
          <Label>Rating</Label>
          <Div>
            <Rating rating={rating} handleRating={handleRating} />
          </Div>
        </div>
        <Button onClick={handleSubmit}>UPDATE</Button>
      </EditForm>
      <ReturnButton onClick={() => navigate("/favourites")}>
        <ArrowIcon />
        <div>Return to:</div>
        <span>Favourites</span>
      </ReturnButton>
    </Container>
  );
};

export default UpdateBook;

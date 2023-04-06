import ArrowIcon from "src/assets/ArrowIcon";
import { UpdateBookProps } from "./UpdateBook.interfaces";
import {
  Button,
  Container,
  EditForm,
  EditTitle,
  Image,
  Input,
  Label,
  ReturnButton
} from "./UpdateBook.styles";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBook = ({ favourites }: UpdateBookProps) => {
  const { title } = useParams();
  const book = favourites.find((el) => el.title === title);
  const navigate = useNavigate();

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
          <Input type="text" />
        </div>
        <div>
          <Label>Rating</Label>
          <Input type="text" />
        </div>
        <Button type="submit">UPDATE</Button>
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

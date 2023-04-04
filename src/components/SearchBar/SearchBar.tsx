import Magnifier from "src/assets/Magnifier";
import { useNavigate } from "react-router-dom";
import { Button, Container, Form, IconDiv, Input } from "./SearchBar.styles";
import { FunctionComponent, useState } from "react";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar: FunctionComponent<SearchBarProps> = (props) => {
  const [value, setValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length < 3) {
      setValue("");
      setValid(false);
      return;
    }
    navigate("/bestsellers", { state: { searchTerm: value } });
    setValue("");
    setValid(true);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <IconDiv>
          <Magnifier />
        </IconDiv>
        <Input
          type="text"
          placeholder={
            valid ? props.placeholder : "Please enter at least 3 characters"
          }
          value={value}
          onChange={handleChange}
          valid={valid}
        />
        <Button type="submit">GO</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;

import Magnifier from "src/assets/Magnifier";
import RestartIcon from "src/assets/RestartIcon";
import { SearchBarProps } from "./SearchBar.interfaces";
import {
  Button,
  Container,
  Form,
  IconDiv,
  Input,
  ResetButton
} from "./SearchBar.styles";
import { FunctionComponent, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SearchBar: FunctionComponent<SearchBarProps> = ({
  placeholder,
  notFound,
  handleSearch,
  handleReset
}) => {
  const [value, setValue] = useState<string>("");
  const [valid, setValid] = useState<boolean>(true);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (value.length < 3) {
      setValue("");
      setValid(false);
      return;
    }
    if (location.pathname === "/") {
      navigate("/bestsellers", { state: { searchTerm: value } });
    }
    setValue("");
    setValid(true);
    if (handleSearch) handleSearch(value);
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
            valid
              ? notFound
                ? "Not found"
                : placeholder
              : "Please enter at least 3 characters"
          }
          value={value}
          onChange={handleChange}
          valid={valid}
        />
        {handleReset && (
          <ResetButton onClick={handleReset} type="reset">
            <RestartIcon />
          </ResetButton>
        )}
        <Button type="submit">GO</Button>
      </Form>
    </Container>
  );
};

export default SearchBar;

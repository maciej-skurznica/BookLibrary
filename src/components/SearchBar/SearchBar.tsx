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

// The same SearchBar component is used throughout the app
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

  // The handleSubmit function is used to handle the search
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // prevents the page from reloading
    event.preventDefault();

    // if the search term is less than 3 characters, the search is not executed
    if (value.length < 3) {
      setValue("");
      setValid(false);
      return;
    }

    // if the user in on "/" page, the search is executed and the user is redirected to "/bestsellers
    // the search term is passed to the "/bestsellers" page via state
    if (location.pathname === "/") {
      navigate("/bestsellers", { state: { searchTerm: value } });
    }

    // resets values to default
    setValue("");
    setValid(true);
    if (handleSearch) handleSearch(value);
  };

  // Updates the value of the search term on every change
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

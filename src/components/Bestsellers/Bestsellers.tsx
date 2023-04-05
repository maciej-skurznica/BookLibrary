import ListItem from "src/components/ListItem";
import SearchBar from "src/components/SearchBar";
import { useLocation } from "react-router-dom";
import { Container, List, Title } from "./Bestsellers.styles";

const Bestsellers = () => {
  const location = useLocation();

  // fetch data from NYT API

  return (
    <Container>
      <div>{location.state?.searchTerm}</div>
      <Title>New York Times Bestsellers</Title>
      <SearchBar placeholder="Search" />
      <List>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </List>
    </Container>
  );
};

export default Bestsellers;

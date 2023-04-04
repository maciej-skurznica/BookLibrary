import { Container } from "./Landing.styles";
import SearchBar from "src/components/SearchBar";

const Landing = () => {
  return (
    <Container>
      <SearchBar placeholder="What books would you like to find?" />
      <div className="title1">New York Times Bestsellers</div>
      <div className="photos-tiles"></div>
      <div className="title2">Favourites</div>
      <div className="photos-tiles"></div>
    </Container>
  );
};

export default Landing;

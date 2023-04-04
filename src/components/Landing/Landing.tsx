import SearchBar from "src/components/SearchBar";
import {
  Container,
  MainContainer,
  PhotoTiles,
  Section,
  StyledLink
} from "./Landing.styles";

const Landing = () => {
  return (
    <Container>
      <SearchBar placeholder="What books would you like to find?" />
      <MainContainer>
        <Section>
          <StyledLink to="/bestsellers">New York Times Bestsellers</StyledLink>
          <PhotoTiles>photo</PhotoTiles>
        </Section>
        <Section>
          <StyledLink to="/favourites">Favourites</StyledLink>
          <PhotoTiles>photo</PhotoTiles>
        </Section>
      </MainContainer>
    </Container>
  );
};

export default Landing;

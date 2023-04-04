import "react-loading-skeleton/dist/skeleton.css";
import axios from "axios";
import { BookPhotos } from "./Landing.interfaces";
import generateRandomNumbers from "src/utils/generateRandomNumbers";
import SearchBar from "src/components/SearchBar";
import Skeleton from "react-loading-skeleton";
import {
  Container,
  MainContainer,
  PhotoTiles,
  Section,
  SkeletonBox,
  StyledImg,
  StyledLink
} from "./Landing.styles";
import { useEffect, useState } from "react";

const Landing = () => {
  const [booksPhotos, setBooksPhotos] = useState<BookPhotos[]>([]);
  const apiKey = import.meta.env.VITE_PEXELS_API_KEY;
  const numberOfFetchedPhotos = 80;

  useEffect(() => {
    const fetchBooksPhotos = async () => {
      try {
        const { data, status } = await axios(
          `https://api.pexels.com/v1/search?query=Books&orientation=landscape&size=small&per_page=${numberOfFetchedPhotos}`,
          { headers: { Authorization: apiKey } }
        );

        if (status !== 200) {
          throw new Error("Error fetching photos");
        }

        const arr = generateRandomNumbers(6, 0, numberOfFetchedPhotos - 1);
        const randomPhotos = arr.reduce((acc: BookPhotos[], el) => {
          const url = data.photos[el].src.landscape;
          const alt = data.photos[el].alt;
          return [...acc, { url, alt }];
        }, []);
        setBooksPhotos(randomPhotos);
      } catch (error) {
        console.log(error);
      }
    };
    setTimeout(() => fetchBooksPhotos(), 400);
  }, []);

  return (
    <Container>
      <SearchBar placeholder="What books would you like to find?" />
      <MainContainer>
        <Section>
          <StyledLink to="/bestsellers">New York Times Bestsellers</StyledLink>
          <PhotoTiles>
            {booksPhotos.length
              ? booksPhotos.map(
                  ({ url, alt }, i) =>
                    i <= 2 && <StyledImg key={alt} alt={alt} src={url} />
                )
              : Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <SkeletonBox key={i}>
                      <Skeleton borderRadius={8} height={"100%"} duration={3} />
                    </SkeletonBox>
                  ))}
          </PhotoTiles>
        </Section>
        <Section>
          <StyledLink to="/favourites">Favourites</StyledLink>
          <PhotoTiles>
            {booksPhotos.length
              ? booksPhotos.map(
                  ({ url, alt }, i) =>
                    i > 2 && <StyledImg key={alt} alt={alt} src={url} />
                )
              : Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <SkeletonBox key={i}>
                      <Skeleton borderRadius={8} height={"100%"} duration={3} />
                    </SkeletonBox>
                  ))}
          </PhotoTiles>
        </Section>
      </MainContainer>
    </Container>
  );
};

export default Landing;

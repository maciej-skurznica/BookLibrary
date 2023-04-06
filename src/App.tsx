import { Book } from "./components/Bestsellers/Bestsellers.interfaces";
import { GlobalStyle } from "src/styles/global";
import { primaryTheme } from "src/styles/themes";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import useLocalStorageAndState from "./hooks/useLocalStorageAndState";
import { Bestsellers, Favourites, Landing, Sidebar } from "src/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [favourites, setFavourites] = useLocalStorageAndState(
    "favourites",
    [] as Book[]
  );

  const handleFavourites = (book: Book) => {
    const isInArr = favourites.find((el: Book) => el.title === book.title);
    setFavourites(
      !isInArr
        ? [...favourites, { ...book, isFavorite: !book.isFavorite }]
        : [...favourites].filter((el) => el.title !== book.title)
    );
  };

  return (
    <ThemeProvider theme={primaryTheme}>
      <SkeletonTheme baseColor={"#E5E5E5"} highlightColor={"#E9EDF6"}>
        <BrowserRouter>
          <GlobalStyle />
          <Sidebar>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route
                path="bestsellers"
                element={
                  <Bestsellers
                    handleClick={handleFavourites}
                    favourites={favourites}
                  />
                }
              />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;

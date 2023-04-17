import { Book } from "./pages/Bestsellers/Bestsellers.interfaces";
import { GlobalStyle } from "src/styles/global";
import Settings from "./pages/Settings/Settings";
import { Sidebar } from "src/components";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { useCallback } from "react";
import useLocalState from "src/hooks/useLocalState";
import { Bestsellers, Favourites, Landing, UpdateBook } from "src/pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, primaryTheme } from "src/styles/themes";

function App() {
  // used custom hook to store theme and favourites in local storage so they persist on refresh
  const [theme, setTheme] = useLocalState("theme", false);
  const [favourites, setFavourites] = useLocalState("favourites", [] as Book[]);

  // used to add or remove a book from favourites
  const handleFavourites = useCallback(
    (book: Book) => {
      const isInArr = favourites.find((el: Book) => el.title === book.title);
      setFavourites(
        !isInArr
          ? [...favourites, { ...book, isFavorite: !book.isFavorite }]
          : [...favourites].filter((el) => el.title !== book.title)
      );
    },
    [favourites]
  );

  // used to update the rating and price of a book in favourites
  const handleFavUpdate = useCallback(
    (book: Book) => {
      const updated = [...favourites].map((el) =>
        el.title === book.title ? { ...el, ...book } : el
      );
      setFavourites(updated);
    },
    [favourites]
  );

  const handleTheme = useCallback(() => setTheme(!theme), []);

  return (
    <ThemeProvider theme={theme ? darkTheme : primaryTheme}>
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
              <Route
                path="/favourites"
                element={
                  <Favourites
                    handleClick={handleFavourites}
                    favourites={favourites}
                  />
                }
              />
              <Route
                path="/favourites/:title"
                element={
                  <UpdateBook
                    favourites={favourites}
                    handleFavUpdate={handleFavUpdate}
                  />
                }
              />
              <Route
                path="/settings"
                element={<Settings handleTheme={handleTheme} theme={theme} />}
              />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;

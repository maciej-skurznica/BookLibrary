import { Book } from "./components/Bestsellers/Bestsellers.interfaces";
import { GlobalStyle } from "src/styles/global";
import Settings from "./components/Settings/Settings";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import useLocalStorageAndState from "./hooks/useLocalStorageAndState";
import {
  Bestsellers,
  Favourites,
  Landing,
  Sidebar,
  UpdateBook
} from "src/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { darkTheme, primaryTheme } from "src/styles/themes";

function App() {
  const [theme, setTheme] = useLocalStorageAndState("theme", false);
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

  const handleFavUpdate = (book: Book) => {
    const updated = [...favourites].map((el) =>
      el.title === book.title ? { ...el, ...book } : el
    );
    setFavourites(updated);
  };

  const handleTheme = () => setTheme(!theme);

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

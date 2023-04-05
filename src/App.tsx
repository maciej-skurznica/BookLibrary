import { GlobalStyle } from "src/styles/global";
import { primaryTheme } from "src/styles/themes";
import { SkeletonTheme } from "react-loading-skeleton";
import { ThemeProvider } from "styled-components";
import { Bestsellers, Favourites, Landing, Sidebar } from "src/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <SkeletonTheme baseColor={"#E5E5E5"} highlightColor={"#E9EDF6"}>
        <BrowserRouter>
          <GlobalStyle />
          <Sidebar>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="bestsellers" element={<Bestsellers />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </Sidebar>
        </BrowserRouter>
      </SkeletonTheme>
    </ThemeProvider>
  );
}

export default App;

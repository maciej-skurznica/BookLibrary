import { GlobalStyle } from "src/styles/global";
import { primaryTheme } from "src/styles/themes";
import { ThemeProvider } from "styled-components";
import { Bestsellers, Favourites, Landing, Sidebar } from "src/components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="bestsellers" element={<Bestsellers />} />
            <Route path="/favorites" element={<Favourites />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

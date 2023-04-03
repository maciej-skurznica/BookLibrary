import { GlobalStyle } from "src/styles/global";
import { primaryTheme } from "src/styles/themes";
import { ThemeProvider } from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Sidebar } from "src/components";

function App() {
  return (
    <ThemeProvider theme={primaryTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <Sidebar>
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

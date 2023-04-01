import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Landing, Sidebar } from "src/components";
import { GlobalStyle } from "src/styles/global";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

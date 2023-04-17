import Bestsellers from "./Bestsellers";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const mockBestsellers = [
  {
    title: "Book One",
    author: "Author One",
    rating: 4,
    price: "12.99",
    bookImage: "",
    bookLink: "",
    isFavorite: true
  },
  {
    title: "Book Two",
    author: "Author Two",
    rating: 3,
    price: "15.99",
    bookImage: "",
    bookLink: "",
    isFavorite: true
  }
];

const handleClick = vi.fn();

describe("Bestsellers", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Bestsellers favourites={mockBestsellers} handleClick={handleClick} />
      </BrowserRouter>
    );
  });

  it("should render Bestsellers component with the correct elements", () => {
    const title = screen.getByText(/Bestsellers/i);
    const searchBar = screen.getByPlaceholderText(/Search/i);

    expect(title).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
  });

  // this is the last component I wrote tests and I run out of time to write more tests cases
});

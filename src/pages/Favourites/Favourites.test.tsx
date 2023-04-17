import { BrowserRouter } from "react-router-dom";
import Favourites from "./Favourites";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

const mockFavourites = [
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

describe("Favourites", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Favourites favourites={mockFavourites} handleClick={handleClick} />
      </BrowserRouter>
    );
  });

  it("should render Favourites component with the correct elements", () => {
    const title = screen.getByText(/Favourites/i);
    const searchBar = screen.getByPlaceholderText(/Search/i);
    const listItemOne = screen.getByText(/Book One/i);
    const listItemTwo = screen.getByText(/Book Two/i);

    expect(title).toBeInTheDocument();
    expect(searchBar).toBeInTheDocument();
    expect(listItemOne).toBeInTheDocument();
    expect(listItemTwo).toBeInTheDocument();
  });

  it("should filter favourites list based on search input", () => {
    const searchBar = screen.getByPlaceholderText(/Search/i);
    userEvent.type(searchBar, "Book One");

    expect(screen.getByText(/Book One/i)).toBeInTheDocument();
    expect(screen.queryByTestId("Book Two")).not.toBeInTheDocument();
  });

  it("should show empty message when no favourites are available", () => {
    render(
      <BrowserRouter>
        <Favourites favourites={[]} handleClick={handleClick} />
      </BrowserRouter>
    );
    const emptyMessage = screen.getByText(
      /Go to Bestsellers and choose favourite books/i
    );
    expect(emptyMessage).toBeInTheDocument();
  });
});

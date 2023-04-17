import { BrowserRouter } from "react-router-dom";
import ListItem from "./ListItem";
import { fireEvent, render, screen } from "@testing-library/react";

const mockBook = {
  title: "Test Book",
  author: "Test Author",
  bookImage: "https://example.com",
  bookLink: "https://example.com",
  price: "10",
  rating: 4,
  isFavorite: false
};

const mockHandleClick = vi.fn();

describe("ListItem", () => {
  test("renders the book title, author and correctly", () => {
    render(
      <BrowserRouter>
        <ListItem
          book={mockBook}
          handleClick={mockHandleClick}
          insideFav={false}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Test Book")).toBeInTheDocument();
    expect(screen.getByText("by Test Author")).toBeInTheDocument();
    expect(screen.getByText("10 GBP")).toBeInTheDocument();
  });

  test("renders the Edit and Delete buttons when insideFav is true", () => {
    render(
      <BrowserRouter>
        <ListItem
          book={mockBook}
          handleClick={mockHandleClick}
          insideFav={true}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });

  test("triggers handleClick when clicking on Delete button", () => {
    render(
      <BrowserRouter>
        <ListItem
          book={mockBook}
          handleClick={mockHandleClick}
          insideFav={true}
        />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Delete"));
    expect(mockHandleClick).toHaveBeenCalledWith(mockBook);
  });

  test("triggers handleClick when clicking on the FavButton", () => {
    render(
      <BrowserRouter>
        <ListItem
          book={mockBook}
          handleClick={mockHandleClick}
          insideFav={false}
        />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByTestId("fav-button"));
    expect(mockHandleClick).toHaveBeenCalledWith(mockBook);
  });
});

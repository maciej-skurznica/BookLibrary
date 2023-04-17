import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import UpdateBook from "./UpdateBook";
import { fireEvent, render, screen } from "@testing-library/react";

describe("UpdateBook", () => {
  const mockFavourites = [
    {
      title: "TestBook",
      author: "TestAuthor",
      rating: 4,
      price: "10.99",
      bookImage: "https://example.com",
      bookLink: "https://example.com",
      isFavorite: true
    }
  ];

  const mockHandleFavUpdate = vi.fn();

  it("should render the UpdateBook component with the correct elements", () => {
    // ARRANGE
    render(
      <MemoryRouter initialEntries={["/favourites/TestBook"]}>
        <UpdateBook
          favourites={mockFavourites}
          handleFavUpdate={mockHandleFavUpdate}
        />
      </MemoryRouter>
    );

    // ACT
    const editTitle = screen.getByText(/Edit/i);
    const costLabel = screen.getByText(/Cost/i);
    const ratingLabel = screen.getByText(/Rating/i);
    const updateButton = screen.getByRole("button", { name: /UPDATE/i });
    const returnButton = screen.getByRole("button", { name: /Return to:/i });

    // EXPECT
    expect(editTitle).toBeInTheDocument();
    expect(costLabel).toBeInTheDocument();
    expect(ratingLabel).toBeInTheDocument();
    expect(updateButton).toBeInTheDocument();
    expect(returnButton).toBeInTheDocument();
  });

  it("should call handleFavUpdate when the update button is clicked", () => {
    // ARRANGE
    window.alert = vi.fn();

    render(
      <MemoryRouter initialEntries={["/favourites/TestBook"]}>
        <UpdateBook
          favourites={mockFavourites}
          handleFavUpdate={mockHandleFavUpdate}
        />
      </MemoryRouter>
    );

    // ACT
    const updateButton = screen.getByRole("button", { name: /UPDATE/i });
    fireEvent.click(updateButton);

    // EXPECT
    expect(mockHandleFavUpdate).toHaveBeenCalledTimes(1);
    expect(window.alert).toHaveBeenCalledTimes(1);
  });
});

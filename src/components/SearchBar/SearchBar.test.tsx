import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import SearchBar from "./SearchBar";
import { fireEvent, render, screen } from "@testing-library/react";

describe("SearchBar", () => {
  it("should display an input field, reset button, and submit button", () => {
    // ARRANGE
    const mockHandleSearch = vi.fn();
    const mockHandleReset = vi.fn();

    render(
      <BrowserRouter>
        <SearchBar
          placeholder="Search"
          handleSearch={mockHandleSearch}
          handleReset={mockHandleReset}
        />
      </BrowserRouter>
    );

    // ACT
    const inputElement = screen.getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "Sample" } });

    const resetButton = screen.getByTestId("reset");
    fireEvent.click(resetButton);

    const submitButton = screen.getByRole("button", { name: /go/i });
    fireEvent.submit(submitButton);

    // EXPECT
    expect(inputElement).toBeInTheDocument();
    expect(resetButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
    expect(mockHandleSearch).toHaveBeenCalledWith("Sample");
    expect(mockHandleReset).toHaveBeenCalledTimes(1);
  });

  it("should display a validation error if the input value is less than 3 characters", () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <SearchBar placeholder="Search" />
      </BrowserRouter>
    );

    // ACT
    const inputElement = screen.getByPlaceholderText("Search");
    fireEvent.change(inputElement, { target: { value: "Te" } });

    const submitButton = screen.getByRole("button", { name: /go/i });
    fireEvent.submit(submitButton);

    // EXPECT
    expect(
      screen.getByPlaceholderText("Please enter at least 3 characters")
    ).toBeInTheDocument();
  });
});

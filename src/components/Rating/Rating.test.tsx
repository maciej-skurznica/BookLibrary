import "@testing-library/jest-dom";
import Rating from "./Rating";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Rating", () => {
  // Test: should render the correct number of stars
  it("should render the correct number of stars", () => {
    // ARRANGE
    const rating = 3;
    render(<Rating rating={rating} />);

    // ACT - Implicit within the render call

    // EXPECT
    const stars = screen.getAllByRole("button");
    expect(stars.length).toBe(5);
  });

  // Test: should call handleRating with the correct value when a star is clicked
  it("should call handleRating with the correct value when a star is clicked", () => {
    // ARRANGE
    const rating = 3;
    let calledWith: number | undefined = undefined;
    const handleRating = (value: number) => {
      calledWith = value;
    };

    render(<Rating rating={rating} handleRating={handleRating} />);

    // ACT
    const starToClick = screen.getAllByRole("button")[2];
    fireEvent.click(starToClick);

    // EXPECT
    expect(calledWith).toBe(3);
  });
});

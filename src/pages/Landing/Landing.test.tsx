import { BrowserRouter } from "react-router-dom";
import Landing from "./Landing";
import { render, screen, waitFor } from "@testing-library/react";

describe("Landing", () => {
  it("should render the Landing component with the correct elements", async () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );

    // ACT
    const searchPlaceholder = screen.getByPlaceholderText(
      /What books would you like to find\?/i
    );
    const bestsellersLink = screen.getByText(/New York Times Bestsellers/i);
    const favouritesLink = screen.getByText(/Favourites/i);

    // EXPECT
    expect(searchPlaceholder).toBeInTheDocument();
    expect(bestsellersLink).toBeInTheDocument();
    expect(favouritesLink).toBeInTheDocument();
  });

  it("should display skeleton loaders while fetching data", async () => {
    // ARRANGE
    render(
      <BrowserRouter>
        <Landing />
      </BrowserRouter>
    );

    // ACT
    const skeletonLoaders = screen.queryAllByTestId("skeleton-box");

    // EXPECT
    expect(skeletonLoaders.length).toBeGreaterThan(0);

    // Wait for the images to be loaded and check if the skeletons are removed
    await waitFor(() => {
      expect(screen.queryAllByTestId("skeleton-box").length).toEqual(0);
    });
  });
});

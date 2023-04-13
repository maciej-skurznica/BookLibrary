import "@testing-library/jest-dom";
import navigationLinks from "src/assets/navigationLinks";
import NavigationSidebar from "./NavigationSidebar";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("NavigationSidebar", () => {
  // Helper function to render the component with Router
  const renderWithRouter = (route: string) => {
    window.history.pushState({}, "Test page", route);
    render(
      <Router>
        <NavigationSidebar />
      </Router>
    );
  };

  // Test: should render navigation links
  it("should render navigation links", () => {
    // ARRANGE
    renderWithRouter("/");

    // ACT - Implicit within the renderWithRouter call

    // EXPECT
    navigationLinks.forEach(({ path }) => {
      expect(screen.getByTestId(path)).toBeInTheDocument();
    });
  });
});

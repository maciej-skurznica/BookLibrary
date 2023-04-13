import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./Sidebar";
import { render, screen } from "@testing-library/react";

describe("Sidebar", () => {
  // Test: should render user profile photo
  it("should render user profile photo", () => {
    // ARRANGE
    render(
      <Router>
        <Sidebar>
          <></>
        </Sidebar>
      </Router>
    );

    // ACT - Implicit within the render call

    // EXPECT
    const userPhoto = screen.getByAltText("profile photo");
    expect(userPhoto).toBeInTheDocument();
  });

  // Test: should render child components
  it("should render child components", () => {
    // ARRANGE
    const testChild = <div>Test child component</div>;
    render(
      <Router>
        <Sidebar>{testChild}</Sidebar>
      </Router>
    );

    // ACT - Implicit within the render call

    // EXPECT
    const childComponent = screen.getByText("Test child component");
    expect(childComponent).toBeInTheDocument();
  });
});

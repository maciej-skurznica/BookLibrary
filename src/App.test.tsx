import App from "./App";
import { render, screen } from "@testing-library/react";

describe("App", () => {
  it("should render Landing component on initial route", () => {
    render(<App />);
    expect(screen.getByText("New York Times Bestsellers")).toBeInTheDocument();
  });
});

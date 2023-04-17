import Settings from "./Settings";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Settings", () => {
  it("should display the theme button and toggle theme when clicked", () => {
    // ARRANGE
    const mockHandleTheme = vi.fn();
    const theme = false;

    render(<Settings handleTheme={mockHandleTheme} theme={theme} />);

    // ACT
    const themeButton = screen.getByRole("button", { name: /dark theme/i });
    fireEvent.click(themeButton);

    // EXPECT
    expect(themeButton).toBeInTheDocument();
    expect(themeButton).toHaveTextContent("Dark Theme | On");
    expect(mockHandleTheme).toHaveBeenCalledTimes(1);
  });
});

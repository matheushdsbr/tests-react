import { render, screen } from "@testing-library/react";
import Link from ".";

describe("Link Component", () => {
  it("link renders correctly", () => {
    render(<Link />);

    expect(screen.getByText("Home")).toBeInTheDocument();
  });
});

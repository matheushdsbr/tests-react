import { render } from "@testing-library/react";
import Link from ".";

test("link renders correctly", () => {
  const { debug } = render(<Link />);

  debug();
});

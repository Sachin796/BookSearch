import React from "react";
import MainSearchPageComponent from "./index";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

it("Displays text as expected", () => {
  const { getByTestId } = render(<MainSearchPageComponent />);
  expect(getByTestId("booktitle").textContent).toBe("Book Finder");
});

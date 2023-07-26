import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NotFound } from "../pages/NotFound";

test("probando componente NotFound", () => {
  render(<NotFound />);
  const element = screen.getByText("Error Not Found");
  expect(element).toBeInTheDocument();
});

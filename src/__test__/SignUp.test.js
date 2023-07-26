import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { SignUp } from "../pages/SignUp";

test("probando componente NotFound", () => {
  render(<SignUp />);
  const element = screen.getByText("In repair");
  expect(element).toBeInTheDocument();
});

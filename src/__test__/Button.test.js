import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Button } from "../components/Button";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

test("navigates to /Explora when button is clicked", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Button />
    </BrowserRouter>
  );

  const buttonElement = getByText("Comenzar");
  fireEvent.click(buttonElement);
  expect(mockNavigate).toHaveBeenCalledWith("/Explora");
});

import React from "react";
import { render, fireEvent, act, screen } from "@testing-library/react";
import FormSearch from "../components/FormSearch";

// jest.mock("../utils/token", () => ({
//   API_TOKEN: "token_mock",
// }));

const mockOnValuesChanges = jest.fn();

jest.mock("../utils/getHttp", () => ({
  getGenres: () =>
    Promise.resolve({
      genres: [
        {
          id: 1,
          name: "Action",
        },
        {
          id: 2,
          name: "Adventure",
        },
      ],
    }),
}));

test("Prueba del componente FormSearch", async () => {
  render(<FormSearch onValuesChanges={mockOnValuesChanges} />);

  await act(async () => {
    await Promise.resolve();
  });

  const searchInput = screen.getByPlaceholderText("Search");
  fireEvent.change(searchInput, { target: { value: "Test Search" } });

  const genreInput = screen.getByLabelText("Genres");
  fireEvent.change(genreInput, { target: { value: "Action" } });

  const searchButton = screen.getByRole("button", { type: "submit" });
  fireEvent.click(searchButton);
  expect(mockOnValuesChanges).toHaveBeenCalledWith("Test Search", "1");
});

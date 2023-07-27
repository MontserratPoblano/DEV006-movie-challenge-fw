import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MovieDetailsTotal } from "../components/MovieDetailsTotal";

jest.mock("../utils/getHttp", () => ({
  getHttpMovie: () => {
    return Promise.reject(new Error("Error fetching movie details"));
  },
  getHttpTrailer: () => {
    return Promise.reject(new Error("Error fetching trailer details"));
  },
}));

test("Probando componente MovieDetailsTotal muestre Loading mientras se cargan las peliculas", async () => {
  await act(async () => {
    render(<MovieDetailsTotal />);
  });
  expect(screen.getByText("Loading")).toBeInTheDocument();
});

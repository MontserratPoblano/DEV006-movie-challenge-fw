import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";
import { TvShows } from "../pages/TvShows";

test("probando componente TvShows", () => {
  render(
    <MemoryRouter>
      <TvShows />
    </MemoryRouter>
  );

  expect(screen.getByText("Inicio")).toBeInTheDocument();
  expect(screen.getByText("Movies")).toBeInTheDocument();
  expect(screen.getByText("TvShows")).toBeInTheDocument();
});

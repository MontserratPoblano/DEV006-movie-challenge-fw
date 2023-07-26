import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GeneralInfoMovie } from "../components/GeneralInfoMovie";

test("Prueba el componente GeneralInfoMovies", () => {
  const selectedMovie = {
    poster_path: "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
    original_language: "uk",
    overview: "Mavka a Soul of the Forest and its Warden",
    title: "Mavka: The Forest Song",
    runtime: 120,
  };

  const category = [
    {
      name: "Animation",
    },
    {
      name: "Adventure",
    },
  ];

  render(
    <GeneralInfoMovie selectedMovie={selectedMovie} category={category} />
  );
  const imageElement = screen.getByRole("img", { name: selectedMovie.title });
  expect(imageElement).toBeInTheDocument();
  expect(imageElement).toHaveAttribute(
    "src",
    `https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`
  );
  const titleElement = screen.getByText("Mavka: The Forest Song");
  expect(titleElement).toBeInTheDocument();
  const overviewElement = screen.getByText(
    "Mavka a Soul of the Forest and its Warden"
  );
  expect(overviewElement).toBeInTheDocument();
  const genreElement = screen.getByText("Animation");
  expect(genreElement).toBeInTheDocument();

});

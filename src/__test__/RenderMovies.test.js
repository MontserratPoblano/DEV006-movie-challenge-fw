import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RenderMovies } from "../components/RenderMovies";

const mockhandleMovieSelection=jest.fn();

const movies2=[]

const movies=[
    {
        poster_path: "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
        original_language: "uk",
        overview: "Mavka a Soul of the Forest and its Warden",
        title: "Mavka: The Forest Song",
        release_date: "2023-07-19",
        id:1
      },
      {
        poster_path: "/15GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
        original_language: "en",
        overview: "Barbie",
        title: "Barbie",
        release_date: "2023-07-19",
        id:2
      }

]

const styles="move-card"

test("Probando el componente RenderMovies",()=>{

    render(<RenderMovies movies={movies} handleMovieSelection={mockhandleMovieSelection} styles={styles}/>)
    const imageElement = screen.getByRole("img", { name: "Mavka: The Forest Song" });
    expect(imageElement).toBeInTheDocument();
     expect(imageElement).toHaveAttribute(
    "src",
    "https://image.tmdb.org/t/p/w300/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg"
  );

})

test("Probando el componente RenderMovies cuando no hay peliculas",()=>{

    render(<RenderMovies movies={movies2} handleMovieSelection={mockhandleMovieSelection} styles={styles}/>)
    const parrafoElement=screen.getByText("you have not made any search")
    expect(parrafoElement).toBeInTheDocument();
    

})
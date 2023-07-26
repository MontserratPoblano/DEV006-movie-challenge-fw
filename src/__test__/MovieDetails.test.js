import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
//import "@testing-library/jest-dom";
import '@testing-library/jest-dom/extend-expect';
import { MovieDetails } from "../components/MovieDetails";
//import YouTube from 'react-youtube';




test("Prueba el componente MovieDetails", () => {

   
  const selectedMovie = {
    poster_path: "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
    original_language: "uk",
    overview: "Mavka a Soul of the Forest and its Warden",
    title: "Mavka: The Forest Song",
    release_date: "2023-07-19",
  };
        const trailer = {
            videos: {
              results: [
                {
                    id:  "64b6e9d837806200e2acf168",iso_639_1: "en", key: "a7LknNfORNI",name: "Extended Preview",official: true, site: "YouTube"
                },{
                    id:"644823dec51acd0566a95dcc",iso_639_1: "en",key: "r51cYVZWKdY",name: "Official Trailer ",official: true, site: "YouTube"
                }]
    }
  };


  render(<MovieDetails selectedMovie={selectedMovie} trailer={trailer} />);
  const titleElement = screen.getByText("Mavka: The Forest Song");
  const overviewElement = screen.getByText("Mavka a Soul of the Forest and its Warden");
  expect(overviewElement).toBeInTheDocument();
  expect(titleElement).toBeInTheDocument();
  const buttonPlayElement = screen.getByText("Play Trailer");
  expect(buttonPlayElement).toBeInTheDocument();
  fireEvent.click(buttonPlayElement);
  const buttonCloseElement = screen.getByText("Close");
  expect(buttonCloseElement).toBeInTheDocument();
  fireEvent.click(buttonCloseElement);
});

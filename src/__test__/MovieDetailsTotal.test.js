import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MovieDetailsTotal } from "../components/MovieDetailsTotal";
//import { RenderMovies } from "../components/RenderMovies";

jest.mock("../utils/token", () => ({
      API_TOKEN: "token_mock",
    }));

jest.mock("../utils/getHttp", () => ({
  getHttpMovie: () => {
   Promise.resolve({
      poster_path: "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
      original_language: "uk",
      overview: "Mavka a Soul of the Forest and its Warden",
      title: "Mavka: The Forest Song",
      runtime: 120,
    });
  },
  getHttpTrailer: () => {
     Promise.resolve({
      videos: {
        results: [
          {
            id: "64b6e9d837806200e2acf168",
            iso_639_1: "en",
            key: "a7LknNfORNI",
            name: "Extended Preview",
            official: true,
            site: "YouTube",
          },
          {
            id: "644823dec51acd0566a95dcc",
            iso_639_1: "en",
            key: "r51cYVZWKdY",
            name: "Official Trailer ",
            official: true,
            site: "YouTube",
          },
        ],
      },
    });
  },
}));

test("Probando componente MovieDetailsTotal", async () => {
    render(<MovieDetailsTotal />);
  
    // Asegúrate de que el mensaje de carga sea mostrado mientras los datos están cargando
    expect(screen.getByText("Loading")).toBeInTheDocument();
  
    // Espera a que los datos sean resueltos para poder continuar con las pruebas
    await waitFor(() => expect(screen.getByText("Mavka: The Forest Song")).toBeInTheDocument());
  
    // Asegúrate de que los detalles de la película sean mostrados correctamente
    expect(screen.getByText("Mavka: The Forest Song")).toBeInTheDocument();
    expect(screen.getByText("120 min")).toBeInTheDocument();
    // ... agrega más aserciones si hay más detalles que verificar
  
    // Asegúrate de que el trailer sea mostrado
    expect(screen.getByText("Extended Preview")).toBeInTheDocument();
    expect(screen.getByText("Official Trailer")).toBeInTheDocument();
    // ... agrega más aserciones si hay más trailers que verificar
  });
  



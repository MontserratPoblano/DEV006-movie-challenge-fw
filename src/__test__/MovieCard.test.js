
import { render, screen,fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {MovieCard} from "../components/MovieCard";

const mocksetSelectedMovie= jest.fn();

const movie={
    poster_path: "/14GEZCzCGhV7FMFaWi4Ec22Kcai.jpg",
    original_language: "uk",
    overview: "Mavka a Soul of the Forest and its Warden",
    title: "Mavka: The Forest Song",
    release_date: "2023-07-19"
}

test("Prueba el componente MovieCard",()=>{
    render(<MovieCard movie={movie} setSelectedMovie={mocksetSelectedMovie}/>)
    const imageElement = screen.getByRole('img', { name: movie.title });
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', `https://image.tmdb.org/t/p/w300${movie.poster_path}`);
    expect(imageElement).toHaveAttribute('width', '200');
    expect(imageElement).toHaveAttribute('height', '300');
    const titleElement=screen.getByText("Mavka: The Forest Song")
    expect(titleElement).toBeInTheDocument();
    const yearElement=screen.getByText("2023")
        expect(yearElement).toBeInTheDocument();

    fireEvent.click(screen.getByRole('listitem'));
    expect(mocksetSelectedMovie).toHaveBeenCalledTimes(1);
    expect(mocksetSelectedMovie).toHaveBeenCalledWith(movie);

})
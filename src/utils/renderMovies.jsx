import { MovieCard } from "../components/MovieCard";

export const renderMovies = (movies,handleMovieSelection) => {

  return movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} setSelectedMovie={handleMovieSelection} />
  ));
};

import { MovieCard } from "../components/MovieCard";

export const renderMovies = (movies,selectMovie) => {

  return movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} setSelectedMovie={selectMovie} />
  ));
};

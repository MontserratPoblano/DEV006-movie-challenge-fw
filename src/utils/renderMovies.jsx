import { MovieCard } from "../components/MovieCard";

export const renderMovies = (movies) => {
  return movies.map((movie) => (
    < MovieCard key={movie.id} movie={movie} />
  ));
};

import { MovieCard } from "../components/MovieCard";

export const renderMovies = (movies,setSelectedMovie) => {

  return movies.map((movie) => (
    <MovieCard key={movie.id} movie={movie} setSelectedMovie={setSelectedMovie} />
  ));
};

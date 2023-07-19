/* eslint-disable react/prop-types */
import { MovieCard } from "../components/MovieCard";

export const RenderMovies = ({ movies, handleMovieSelection, styles }) => {
  return (
    <ul className={styles}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          setSelectedMovie={handleMovieSelection}
        />
      ))}
    </ul>
  );
};

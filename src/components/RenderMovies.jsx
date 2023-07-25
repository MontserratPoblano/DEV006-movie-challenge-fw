/* eslint-disable react/prop-types */
import { MovieCard } from "./MovieCard";

export const RenderMovies = ({ movies, handleMovieSelection, styles }) => {
 
  return (
    movies.length >0 ? ( <ul className={styles}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          setSelectedMovie={handleMovieSelection}
        />
      ))}
    </ul>) : <p style={{ color: '#898989' } }>you have not made any search</p>
   
  );
};

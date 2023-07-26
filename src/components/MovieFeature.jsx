/* eslint-disable react/prop-types */
import React from "react";
import { useEffect, useState } from "react";
import styles from "./MovieFeature.module.css";
import { getHttpDiscover, getHttpTrailer } from "../utils/getHttp";
import { RenderMovies } from "../components/RenderMovies";
import { MovieDetails } from "../components/MovieDetails";

export function MovieFeature() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    getHttpDiscover().then((data) => {
      setMovies(data.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      setSelectedMovie(movies[0]);
    }
  }, [movies]);

  useEffect(()=>{
    if(selectedMovie){
      getHttpTrailer(selectedMovie.id).then((result) => {
        setTrailer(result);
      });
    }
  },[selectedMovie])

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    
  };

  

  return (
    <div className={styles.container}>
      <div>
        {selectedMovie ?  <MovieDetails selectedMovie={selectedMovie} trailer={trailer} /> : <p>No found</p>}
      </div>
      <h1 className={styles.titleRecomendation}>Películas recomendadas</h1>
      <RenderMovies
        movies={movies}
        handleMovieSelection={handleMovieSelection}
        styles={styles.movieGrid}
      />
    </div>
  );
}

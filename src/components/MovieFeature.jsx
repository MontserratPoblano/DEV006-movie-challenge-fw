/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./MovieFeature.module.css";
import { getHttp } from "../utils/getHttp";
import { renderMovies } from "../utils/renderMovies";
import { FaPlay } from "react-icons/fa";

export function MovieFeature() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({
    title: "Loading Movies",
  });

  useEffect(() => {
    getHttp("/discover/movie").then((data) => {
      setMovies(data.results);
      setSelectedMovie(data.results[0]);
    });
  }, []);

  const listMovies = renderMovies(movies);


  return (
    
    <div className={styles.container} >
      <div className={styles.backImage} style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/w400${selectedMovie.backdrop_path}")`}}>
        <button className={styles.btnTrailer}><FaPlay className={styles.faIcon}/>Play Trailer</button>
        <h1 className={styles.movieTitle}>{selectedMovie.title}</h1>
        {selectedMovie.overview ? <p className={styles.textOverview}>{selectedMovie.overview}</p> : null}
      </div>
      <ul className={styles.movieGrid}>{listMovies}</ul>
    </div>
  );
}

/* eslint-disable react/prop-types */
import React from "react";

import styles from "./MovieCard.module.css";

export function MovieCard({ movie,setSelectedMovie }) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  const year=movie.release_date.split("-")
  
  return (
    <li className={styles.principal} onClick={()=>setSelectedMovie(movie)}>
      <img 
      className={styles.imageCard}
      width={200} 
      height={300}
      src={imageUrl} 
      alt={movie.title}/>
      <div>{movie.title}</div>
      <div>{year[0]}</div>
    </li>
  );
}

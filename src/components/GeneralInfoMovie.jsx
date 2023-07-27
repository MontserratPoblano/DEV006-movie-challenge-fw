/* eslint-disable react/prop-types */
// import React from "react";
import Styles from "./GeneralInfoMovie.module.css";

export function GeneralInfoMovie({ selectedMovie,category }) {
  
  return (
    <div className={Styles.container}>
      <img
        src={`https://image.tmdb.org/t/p/original${selectedMovie.poster_path}`}
        width={150}
        height={150}
        className={Styles.imagen}
        alt={selectedMovie.title}
      />
      <div>
        <h1 className={Styles.title}>{selectedMovie.title}</h1>
        <p className={Styles.paragraph}><span>Overview:</span></p>
        <p className={Styles.paragraph}>{selectedMovie.overview}</p>
        <p className={Styles.paragraph}><span>Genre:</span></p>
        <ul className={Styles.list}>
          {category && category.length > 0 ? (category.map((genre, index) => (
            <li key={index}>{genre.name}</li>
          ))) : (<p className={Styles.paragraph}>Genre not available</p>)}
        </ul>
        <p className={Styles.paragraph}>Original language: {selectedMovie.original_language}</p>
        <p className={Styles.paragraph}>Duration:  {selectedMovie.runtime}min</p>
      </div>
    </div>
  );
}

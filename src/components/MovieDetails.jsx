/* eslint-disable react/prop-types */
import React from "react";

import RenderTrailer from "./RenderTrailer";
import { FaPlay } from "react-icons/fa";
import { useState } from "react";
import styles from "./MovieDetails.module.css";
import { AiFillCloseCircle } from "react-icons/ai";

export function MovieDetails({ selectedMovie, trailer }) {
  const [play, setPlay] = useState(false);

  return (
    <div>
      <div
        className={styles.backImage}
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/w400${selectedMovie.backdrop_path}")`,
        }}
      >
        <h1 className={styles.movieTitle}>{selectedMovie.title}</h1>
        {selectedMovie.overview ? (
          <p className={styles.textOverview}>{selectedMovie.overview}</p>
        ) : null}
      </div>
      <div className={styles.container}>
      <button className={styles.btnTrailer} onClick={() => setPlay(true)}>
          <FaPlay className={styles.faIcon} />
          Play Trailer
        </button>
        {trailer && play ? (
          <RenderTrailer
            trailer={trailer}
          />
        ) : null}
        {play?
          <button className={styles.btnTrailerClose} onClick={() => setPlay(false)}>
          <AiFillCloseCircle className={styles.faIcon} />
          Close
        </button>: null}
       
      </div>
    </div>
  );
}

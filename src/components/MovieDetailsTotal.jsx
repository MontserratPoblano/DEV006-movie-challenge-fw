import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHttpTrailer, getHttpMovie } from "../utils/getHttp";
import RenderTrailer from "./RenderTrailer";
import { GeneralInfoMovie } from "./GeneralInfoMovie";
import styles from "./MovieDetailsTotal.module.css";

export function MovieDetailsTotal() {
  let { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [trailer, setTrailer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Promise.all([getHttpMovie(movieId), getHttpTrailer(movieId)])
      .then(([movieResult, trailerResult]) => {
        setSelectedMovie(movieResult);
        setTrailer(trailerResult);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [movieId]);

  
  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error:{error}</div>;
  }

  if (!selectedMovie) {
    return null;
  }

  return (
    <div>
      <div className={styles.general}>
        <RenderTrailer styles={styles.containerYoutube} trailer={trailer} />
      </div>

      <GeneralInfoMovie
        selectedMovie={selectedMovie}
        category={selectedMovie.genres}
      />
    </div>
  );
}

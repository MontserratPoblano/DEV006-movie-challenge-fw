import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHttpTrailer, getHttpMovie } from "../utils/getHttp";
import RenderTrailer from "./RenderTrailer";
import { GeneralInfoMovie } from "./GeneralInfoMovie";
import styles from "./MovieDetailsTotal.module.css";

export function MovieDetailsTotal() {
  let { movieId } = useParams();
  const [selectedMovie, setSelectedMovie] = useState({
    title: "Loading Movies",
  });
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    getHttpMovie(movieId).then((result) => {
      setSelectedMovie(result);
    }).catch((error)=>{
      console.log(error)
    })
  }, [movieId]);

  useEffect(() => {
    getHttpTrailer(movieId).then((result) => {
      console.log(result)
      setTrailer(result);
    }).catch((error)=>{
      console.log(error)
    });
  }, [movieId]);

  if(!selectedMovie){
    return <div>Loading....</div>
  }

  return (
    <div>
      <div className={styles.general}>
        <RenderTrailer styles={styles.containerYoutube} trailer={trailer} />
      </div>
 
      <GeneralInfoMovie selectedMovie={selectedMovie} category={selectedMovie.genres} />
    </div>
  );
}

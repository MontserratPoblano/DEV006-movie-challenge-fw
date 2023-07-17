/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./MovieFeature.module.css";
import { getHttpDiscover, getHttpTrailer} from "../utils/getHttp";
import { renderMovies } from "../utils/renderMovies";
import { FaPlay } from "react-icons/fa";
import renderTrailer from "../utils/renderTrailer";

export function MovieFeature() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({
    title: "Loading Movies",
  });
  const[trailer,setTrailer]=useState(null)
  const[play,setPlay]=useState(false)
 
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

  

  const handleMovieSelection=(movie)=>{
    setSelectedMovie(movie)
    getHttpTrailer(movie.id).then((result)=>{
     setTrailer(result)
    })
  }

  
  const showTrailer=renderTrailer(trailer);
  const listMovies = renderMovies(movies,handleMovieSelection);

  return (
    
    <div className={styles.container} >
      <div className={styles.backImage} style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/w400${selectedMovie.backdrop_path}")`}}>
        {trailer && play ? showTrailer : null}
        <button className={styles.btnTrailer} onClick={()=>setPlay(true)}><FaPlay className={styles.faIcon}/>Play Trailer</button>
        <h1 className={styles.movieTitle}>{selectedMovie.title}</h1>
        {selectedMovie.overview ? <p className={styles.textOverview}>{selectedMovie.overview}</p> : null}
      </div>
      <h1 className={styles.titleRecomendation} >Películas recomendadas</h1>
      <ul className={styles.movieGrid}>{listMovies}</ul>
    </div>
  );

      }
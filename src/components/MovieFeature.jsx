/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./MovieFeature.module.css";
import { getHttp, getHttpTrailer} from "../utils/getHttp";
import { renderMovies } from "../utils/renderMovies";
import { FaPlay } from "react-icons/fa";
import YouTube from 'react-youtube';

export function MovieFeature() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({
    title: "Loading Movies",
  });
  const[trailer,setTrailer]=useState(null)
  const[play,setPlay]=useState(false)
 
  useEffect(() => {
    getHttp("/discover/movie/").then((data) => {
      setMovies(data.results);
    });
  }, []);


  useEffect(() => {
    if (movies.length > 0) {
      setSelectedMovie(movies[0]);
    }
  }, [movies]);

  

  const selectMovie=(movie)=>{
    setSelectedMovie(movie)
    getHttpTrailer(movie.id).then((result)=>{
     setTrailer(result)
    })
  }

  const renderTrailer=()=>{
    const trailerVideo=trailer.videos.results.find((video)=>video.name ==="Official Trailer")
      return (
        <YouTube videoId={trailerVideo.key}/>
      )
    }
  

  const listMovies = renderMovies(movies,selectMovie);

  return (
    
    <div className={styles.container} >
      <div className={styles.backImage} style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/w400${selectedMovie.backdrop_path}")`}}>
        {trailer && play ? renderTrailer() : null}
        <button className={styles.btnTrailer} onClick={()=>setPlay(true)}><FaPlay className={styles.faIcon}/>Play Trailer</button>
        <h1 className={styles.movieTitle}>{selectedMovie.title}</h1>
        {selectedMovie.overview ? <p className={styles.textOverview}>{selectedMovie.overview}</p> : null}
      </div>
      <h1 className={styles.titleRecomendation} >Películas recomendadas</h1>
      <ul className={styles.movieGrid}>{listMovies}</ul>
    </div>
  );

      }
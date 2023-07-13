/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styles from "./MovieFeature.module.css";
import { getHttp} from "../utils/getHttp";
import { renderMovies } from "../utils/renderMovies";
import { FaPlay } from "react-icons/fa";
// import YouTube from 'react-youtube';

export function MovieFeature() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({
    title: "Loading Movies",
  });
  // const[trailer,setTrailer]=useState(null)
 
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

  

  // const selectMovie=(movie)=>{
  //   const data=getHttp(movie.id)
  //   data.then((result)=>{
  //     console.log(result)
  //     console.log(result.headers)
  //     return result
  //   })
  //   setSelectedMovie(movie)
  // }

  const listMovies = renderMovies(movies,setSelectedMovie);

  return (
    
    <div className={styles.container} >
      <div className={styles.backImage} style={{ 
      backgroundImage: `url("https://image.tmdb.org/t/p/w400${selectedMovie.backdrop_path}")`}}>
       
        <button className={styles.btnTrailer}><FaPlay className={styles.faIcon}/>Play Trailer</button>
        <h1 className={styles.movieTitle}>{selectedMovie.title}</h1>
        {selectedMovie.overview ? <p className={styles.textOverview}>{selectedMovie.overview}</p> : null}
      </div>
      <h1 className={styles.titleRecomendation} >Películas recomendadas</h1>
      <ul className={styles.movieGrid}>{listMovies}</ul>
    </div>
  );

      }
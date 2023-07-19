
import { getHttpSearch, getMoviesByGenre } from "../utils/getHttp";
import { RenderMovies } from "../utils/RenderMovies";
import  Formfilter from "./Formfilter";
import { useState } from "react";
import styles from "./MovieFeature.module.css";



export function Search() {
  const[searchMovies,setSearchMovies]=useState([]);
  

const onValuesChanges = (searchText,selectGenre) => {
  getHttpSearch(searchText).then((data) => {
    setSearchMovies(data.results);
  });
  getMoviesByGenre(selectGenre).then((data) => {
    console.log(data.results)
    setSearchMovies(data.results);

  });
};

const handleMovieSelection=()=>{
};

  return (
    <div>
      <Formfilter onValuesChanges={onValuesChanges} />
       <div>
        <RenderMovies movies={searchMovies}  handleMovieSelection={handleMovieSelection} styles={styles.movieGrid}/>
      </div> 
      
    </div>
  );
}


import { getHttpSearch, getMoviesByGenre } from "../utils/getHttp";
import { RenderMovies } from "../utils/RenderMovies";
import  Formfilter from "./Formfilter";
import { useState } from "react";
import styles from "./MovieFeature.module.css";



export function Search() {
  const[searchMovies,setSearchMovies]=useState([]);
  

const onValuesChanges = (searchText,selectGenre) => {
  if(searchText !==""){
  getHttpSearch(searchText).then((data) => {
    setSearchMovies(data.results);
  });
}else if(selectGenre !==null){
  getMoviesByGenre(selectGenre).then((data) => {
    setSearchMovies(data.results);

  });
}
else{
  setSearchMovies([])
}
}

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


import { getHttpSearch, getMoviesByGenre } from "../utils/getHttp";
import { RenderMovies } from "./RenderMovies";
import  FormSearch from "./FormSearch";
import { useState,useEffect } from "react";
import styles from "./MovieFeature.module.css";
import {  useNavigate } from "react-router-dom";



export function Search() {
  const[searchMovies,setSearchMovies]=useState([]);
  const [searchText, setSearchText] = useState(''); 
  const [selectGenre, setSelectGenre] = useState(null)
  const navigate=useNavigate();
  

  useEffect(()=>{
    if(searchText !==""){
       getHttpSearch(searchText).then((data) => {
      setSearchMovies(data.results);
       })
      }else if(selectGenre !==null){
        getMoviesByGenre(selectGenre).then((data) => {
           setSearchMovies(data.results);
           });
          }
  
      
    },[searchText,selectGenre])

    const onValuesChanges = (searchText,selectGenre) => {
      setSearchText(searchText)
      setSelectGenre(selectGenre)
    }



const handleMovieSelection=(movie)=>{
 
  navigate(`/Movies/${movie.id}`)

};

  return (
    <div>
      <FormSearch onValuesChanges={onValuesChanges} />
       <div>
        <RenderMovies movies={searchMovies} handleMovieSelection={handleMovieSelection} styles={styles.movieGrid}/>
      </div> 
      
    </div>
  );
}

import styles from "./Search.module.css";
import { BsSearchHeart } from "react-icons/bs";
import { useState } from "react";
import { getHttpSearch } from "../utils/getHttp";
import { renderMovies } from "../utils/renderMovies";
//import { useEffect } from "react";

export function Search() {
  const [searchText, setSearchText] = useState("");
  const [searchMovies, setSearchMovies] = useState([]);

  const handleChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getHttpSearch(searchText).then((data) => {
      console.log(data.results);
      setSearchMovies(data.results);
      setSearchText("");
    });
  };

 
  const totalMovies = renderMovies(searchMovies, () => {});

  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
          <input
            type="text"
            placeholder="Search"
            maxLength="25"
            className={styles.searchInput}
            value={searchText}
            onChange={handleChange}
          />
          <button className={styles.buttonSearch} type="submit" >
            <BsSearchHeart />
          </button>
        </div>
      </form>
      <div>
        <ul className={styles.movieGrid}>
          {totalMovies.length > 0
            ? totalMovies
            : "You haven't performed a search yet...."}
        </ul>
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from "react";
import { getGenres } from "../utils/getHttp";
import styles from "../components/FormSearch.module.css";
import { BsSearchHeart } from "react-icons/bs";


function FormSearch({onValuesChanges}) {
  const [genres, setGenres] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectGenre, setSelectGenre]=useState(null)



  useEffect(() => {
    getGenres().then((data) => {
      setGenres(data.genres);
    });
  }, []);

  const handleSearchChange = ({ target }) => {
    setSearchText(target.value);
  };

  const handleGenreChange = ({ target }) => {
    const selectedGenreName = target.value;
    const selectedOption = Array.from(target.list.options).find(
      (option) => option.value === selectedGenreName
    );
    const selectedGenreId = selectedOption.getAttribute("data-id");
        setSelectGenre(selectedGenreId)

  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onValuesChanges(searchText,selectGenre);
     setSearchText("");
     setSelectGenre(null);
    e.target.reset()

  };



  return (
    <div>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.searchBox}>
        <label className={styles.label} htmlFor="search">
          Search
        </label>
          <input
            type="text"
            id="search"
            placeholder="Search"
            maxLength="25"
            className={styles.searchInput}
            value={searchText}
            onChange={handleSearchChange}
          />
          <button className={styles.buttonSearch} type="submit">
            <BsSearchHeart />
          </button>
        </div>
        <label className={styles.label} htmlFor="categor">
          Genres
        </label>
        <input
          type="text"
          list="category"
          id="categor"
          name="categor"
          className={styles.list}
          onChange={handleGenreChange}
        />
        <datalist id="category" value={selectGenre} >
          {genres.map((genre, index) => (
            <option key={index} data-id={genre.id} value={genre.name}>
            </option>
          ))}
        </datalist>
      </form>
    </div>
  );
}

export default FormSearch;
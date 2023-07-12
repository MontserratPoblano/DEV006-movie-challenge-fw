import styles from "./Search.module.css";
import { BsSearchHeart } from "react-icons/bs"
import { useState } from "react";

export function Search() {
    const [searchText,setSearchText]= useState("")

  return (
    <form className={styles.container}>
      <div className={styles.searchBox}>
        <input 
        type="text"
        placeholder="Search" 
        maxLength="25" 
        className={styles.searchInput}  
        value={searchText}
        onChange={e=>setSearchText(e.target.value)} />
        <button className={styles.buttonSearch} type="submit">
          <BsSearchHeart />
        </button>
      </div>
    </form>
  );
}

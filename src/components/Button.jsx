import React from "react";
import styles from "./Button.module.css"
import { useNavigate } from "react-router-dom";

export function Button() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Explora");
  };

  return (
    <div>
    <button className={styles.btnHome} onClick={handleButtonClick}>
      Comenzar
    </button>
    </div>
  );
}

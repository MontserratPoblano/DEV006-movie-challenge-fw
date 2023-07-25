import React from "react";
/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Header({ inicio, option1, option2,enlace1,enlace2,enlace3 }) {
  return (
    <header className="header">
      <img
        className={styles.logoImage}
        src="./src/images/logo.png"
        alt="Logo"
      />
      <nav>
        <ul>
          <li key={1}>
            <Link to={enlace1} className={styles.link}>
              {inicio}
            </Link>
          </li>
          <li key={2}>
            <Link to={enlace2} className={styles.link}>
              {option1}
            </Link>
          </li>
          <li key={3}>
            <Link to={enlace3} className={styles.link}>
              {option2}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

Header.protoTypes = {
  inicio: PropTypes.string.isRequired,
  option1: PropTypes.string,
  option2: PropTypes.string,
};

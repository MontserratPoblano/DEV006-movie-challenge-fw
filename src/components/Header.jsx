/* eslint-disable react/prop-types */
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export function Header({ inicio, option1, option2 }) {
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
            <Link to="/" className={styles.link}>
              {inicio}
            </Link>
          </li>
          <li key={2}>
            <Link to="/SignIn" className={styles.link}>
              {option1}
            </Link>
          </li>
          <li key={3}>
            <Link to="SignUp" className={styles.link}>
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

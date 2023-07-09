import styles from "./Button.module.css"
import { useNavigate } from "react-router-dom";

export function Button() {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/Movies");
  };

  return (
    <div>
    <button className={styles.btnHome} onClick={handleButtonClick}>
      Comenzar
    </button>
    </div>
  );
}

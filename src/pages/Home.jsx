import React from "react";
import styles from "../pages/Home.module.css";
import { Header } from "../components/Header";
import { Button } from "../components/Button";




export function Home() {
  return (
    <div>
     <Header 
     inicio="Inicio"
     option1="Sign Up"
     option2="Sign In"
     enlace1={"/"}
     enlace2={"/SignUp"}
     enlace3={"/SignIn"}
     />
      <main>
        <div className={styles.content}>
          <img
            className={styles.imageHome}
            src="./src/images/principal2.jpg"
            alt="Familia viendo peliculas"
          />
        </div>
        <p className={styles.welcome}>
          ¡Bienvenido a Junior films! Descubre la magia del cine con solo un
          clic. Lo mejor de todo no necesitas supscripción
        </p>
          <Button />
      </main>
    </div>
  );
}

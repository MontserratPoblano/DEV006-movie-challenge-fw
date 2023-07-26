import React from "react";
import { Header } from "../components/Header";

export function TvShows() {
  return (
    <div>
      <Header
        inicio="Inicio"
        option1="Movies"
        option2="TvShows"
        enlace1={"/"}
        enlace2={"/Movies"}
        enlace3={"/TvShows"}
      />
      <h1 style={{ color: "#898989" }}>In repair</h1>;
    </div>
  );
}

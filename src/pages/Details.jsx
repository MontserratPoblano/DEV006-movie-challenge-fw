import { Header } from "../components/Header";

import { MovieDetailsTotal } from "../components/MovieDetailsTotal";



export function Details(){
   

    return <div>
        <Header 
        inicio="Inicio"
        option1="Movies"
        option2="TvShows"
        enlace1={"/"}
        enlace2={"/Movies"}
        enlace3={"/TvShows"}
        />
        <MovieDetailsTotal />

    
    </div>
}
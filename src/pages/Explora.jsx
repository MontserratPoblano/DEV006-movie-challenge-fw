
import { MovieFeature } from "../components/MovieFeature";
import { Header } from "../components/Header";



export function Explora(){
   

    return <div>
        <Header 
        inicio="Inicio"
        option1="Movies"
        option2="TvShows"
        enlace1={"/"}
        enlace2={"/Movies"}
        enlace3={"/TvShows"}
        />
        <MovieFeature />

    
    </div>
}
import React from "react";
import { Header } from "../components/Header";
import { Search } from "../components/Search";


export function Movies(){
    return <div>
        <Header 
        inicio="Inicio"
        option1="Movies"
        option2="Back"
        enlace1={"/"}
        enlace2={"/Movies"}
        enlace3={"/Explora"}
        />
        <Search />
        


    </div>
}
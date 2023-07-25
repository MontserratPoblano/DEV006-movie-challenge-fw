import { API_TOKEN } from "./token"

const headers = {
  Authorization: API_TOKEN,
  accept: "application/json",
};

const API_SEARCH = "https://api.themoviedb.org/3/search/movie";
const API_DISCOVER="https://api.themoviedb.org/3/discover/movie";
const API_GENRES="https://api.themoviedb.org/3/genre/movie/list";

export function getHttpDiscover() {
  return fetch(API_DISCOVER, {
    method: "GET",
    headers,
  }).then((response) => response.json());
}


export function getHttpTrailer(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?append_to_response=videos`,{
    method: "GET",
    headers,
  }
  ).then((response) => {
    return response.json();
  });
}

export function getHttpSearch(searchText) {
  return fetch(`${API_SEARCH}?query=${searchText}`,{
    method: "GET",
    headers,
  }
  ).then((response) => response.json());
}

 export function getGenres() {
  return fetch(`${API_GENRES}`,{
    method: "GET",
    headers,
  }
  ).then((response) => response.json());
}

export function getMoviesByGenre(genreid){
return fetch(`${API_DISCOVER}?sort_by=popularity.desc&with_genres=${genreid}`,{
    method: "GET",
    headers,
  }
).then((response)=>response.json())
}


export function getHttpMovie(id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}`,{
    method: "GET",
    headers,
  }
  ).then((response) => response.json())
}

const API_TOKEN = import.meta.env.VITE_REACT_API_TOKEN;
//const API_KEY =  import.meta.env.VITE_REACT_API_KEY;
const headers = {
  Authorization: API_TOKEN,
  accept: "application/json",
};

const API_SEARCH = "https://api.themoviedb.org/3/search/movie";
const API_DISCOVER="https://api.themoviedb.org/3/discover/movie";

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


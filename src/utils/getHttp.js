
 const env=import.meta.env.VITE_REACT_API_KEY
 const env2=import.meta.env.VITE_REACT_API_ONLY_KEY
 
const API="https://api.themoviedb.org/3"
export function getHttp(path) {
  return fetch(API+path, {
    method: 'GET',
    headers: {
      Authorization:
      env,
        accept: "application/json",
    },
  }).then((response) => response.json());
}


export function getHttpTrailer(id){
  return fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${env2}&append_to_response=videos`
  ).then((response) => response.json());
}


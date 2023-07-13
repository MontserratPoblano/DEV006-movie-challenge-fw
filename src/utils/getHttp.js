

 const env=import.meta.env.VITE_REACT_API_KEY
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


// export function getHttpTrailer(id){
//   return fetch(`${API}/movie/${id}`, {
//     method: 'GET',
//     headers: {
//       Authorization:
//        env,
//       append_to_response: "videos",
//     },
//   }).then((response) => response.json());
// }


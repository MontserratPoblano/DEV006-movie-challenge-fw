import React from "react";
import { HashRouter, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { Explora } from "./pages/Explora";
import { Movies } from "./pages/Movies";
import { TvShows } from "./pages/TvShows";
import { NotFound } from "./pages/NotFound";
import { Details } from "./pages/Details";

function App() {
  return (
    <HashRouter>
  
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<TvShows />} />
        <Route path="/SignIn" element={<TvShows />} />
        <Route path="/Explora" element={<Explora />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/TvShows" element={<TvShows />} />
        <Route path="/Movies/:movieId" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

   </HashRouter>
  );
}

export default App;

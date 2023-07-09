// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Explora } from "./pages/Explora";
import { Movies } from "./pages/Movies";
import { TvShows } from "./pages/TvShows";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<TvShows />} />
        <Route path="/SignIn" element={<TvShows />} />
        <Route path="/Explora" element={<Explora />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/TvShows" element={<TvShows />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

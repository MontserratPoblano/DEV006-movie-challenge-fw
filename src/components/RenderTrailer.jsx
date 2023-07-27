/* eslint-disable react/prop-types */
// import React from "react";
import YouTube from 'react-youtube';


const RenderTrailer = ({trailer,styles}) => {
  if (!trailer || !trailer.videos || trailer.videos.results.length === 0) {
    return <p>Trailer Not Found</p>;
  }
  const trailerVideo = trailer.videos.results.find(
    (video) => video.name === "Official Trailer"
  ) || trailer.videos.results[0]
  return <YouTube styles={styles} videoId={trailerVideo.key} opts={{width:"100%", height:"400px", playerVars: {
    autoplay: 0,
  }}}  />;
};

export default RenderTrailer;
  
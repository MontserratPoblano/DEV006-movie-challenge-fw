/* eslint-disable react/prop-types */
import React from "react";
import YouTube from 'react-youtube';


const RenderTrailer = ({trailer,styles}) => {
    if(!trailer) return null;
  const trailerVideo = trailer.videos.results.find(
    (video) => video.name === "Official Trailer"
  ) || trailer.videos.results[0]
  return <YouTube styles={styles} videoId={trailerVideo.key} opts={{width:"100%", height:"100%", playerVars: {
    autoplay: 0,
  }}}  />;
};

export default RenderTrailer;
  
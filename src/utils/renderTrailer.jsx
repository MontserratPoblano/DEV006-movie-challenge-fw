import YouTube from 'react-youtube';

const renderTrailer = (trailer) => {
    if(!trailer) return null;
  const trailerVideo = trailer.videos.results.find(
    (video) => video.name === "Official Trailer"
  );
  return <YouTube videoId={trailerVideo.key} />;
};

export default renderTrailer;
  
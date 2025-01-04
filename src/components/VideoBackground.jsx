import React from 'react'
import { useSelector } from 'react-redux';
import useTrailerVideo from '../customHooks/useTrailerVideo';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);
  useTrailerVideo(movieId);

  return (
    <div className='w-screen aspect-video '>
      <iframe
        className='w-screen h-full'
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&playlist=${trailerVideo?.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  )
}

export default VideoBackground;
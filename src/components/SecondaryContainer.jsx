import React from 'react'
import Movielist from './Movielist';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log("movies", movies);

  return (
    <div className='bg-black'>
      <div className="-mt-44 pl-4 relative z-20">
        <Movielist title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <Movielist title={"Trending"} movies={movies.popularMovies} />
        {/* {/* <Movielist title={"Popular"} movies={movies.nowPlayingMovies} /> */}
        <Movielist title={"Upcoming Movies"} movies={movies.upcomingMovies} />
      </div>
    </div>
  )
}

export default SecondaryContainer;
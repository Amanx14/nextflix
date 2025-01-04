import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useUpcomingMovies from '../customHooks/useUpComingMovies'


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header/>
      <MainContainer />
      <SecondaryContainer />
      {
        /* Main Container
            - Video Background
            - Video Title
          Secondary Container
            - MovieList * n
              - cards * n

        */
      }
      
    </div>
  )
}

export default Browse
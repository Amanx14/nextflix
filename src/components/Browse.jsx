import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies'
import MainContainer from "./MainContainer"
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../customHooks/usePopularMovies'
import useUpcomingMovies from '../customHooks/useUpComingMovies'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();

  const showViewButton = useSelector((store) => store.GPT);

  return (
    <div>
      <Header />
      {
        showViewButton?.showGPTSearch ? (
          <GPTSearch />
        ) : (
          <>
            <MainContainer />
            <SecondaryContainer />
          </>
        )
      }

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
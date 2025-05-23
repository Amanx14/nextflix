import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-36'>
      <img className="rounded" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  )
}

export default MovieCard
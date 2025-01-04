import React from 'react'
import MovieCard from './MovieCard'

const Movielist = ({ title, movies }) => {

    return (
        <div className='px-2 text-white'>
            <h1 className='text-xl font-semibold py-3'>{title}</h1>
            <div className='flex overflow-x-scroll no-scrollbar'>
                <div className='flex gap-x-3'>
                    {
                        movies && movies.map((movie) => (
                            <MovieCard key={movie.id} posterPath={movie.poster_path} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Movielist
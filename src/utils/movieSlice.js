import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name : 'movies',
    initialState : {
        nowPlayingMovies : null,
        trailerVideo : null,
        popularMovies : null,
        upcomingMovies : null
    },
    reducers : {
        addNowPlayingMovies : (state, action)=> {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo : (state, aciton)=> {
            state.trailerVideo = aciton.payload
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload
        }
    }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies } = movieSlice.actions;
export default movieSlice.reducer;
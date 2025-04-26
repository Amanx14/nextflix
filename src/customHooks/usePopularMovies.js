import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/tv/popular?&page=1", API_OPTIONS);
            const data = await response.json();
            if (response.status === 200) {
                dispatch(addPopularMovies(data.results));
            }
        }
        catch (error) {
            console.log("Error Message", error);
        }
    }

    useEffect(() => {
        getPopularMovies();
    }, [])
}

export default usePopularMovies;
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?&page=1", API_OPTIONS);
            const data = await response.json();
            if (response.status === 200) {
                console.log(data.results, "upcoming");
                dispatch(addUpcomingMovies(data.results));
            }
        }
        catch (error) {
            console.log("Error Message", error);
        }
    }

    useEffect(() => {
        getUpcomingMovies();
    }, [])
}

export default useUpcomingMovies;
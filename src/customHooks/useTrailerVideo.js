import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const useTrailerVideo = (movieId) => {
    const dispatch = useDispatch();
    
    const fetchTrailer = async () => {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
            const data = await response.json();

            const filerData = data.results.filter((video) => video.type === "Trailer")
            const trailer = filerData.length > 0 ? filerData[0] : data.results[0];
            dispatch(addTrailerVideo(trailer));
        }
        catch (error) {
            console.log("Error", error);
        }
    }

    useEffect(() => {
        fetchTrailer();
    }, []);
}

export default useTrailerVideo;
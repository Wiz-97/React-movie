import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [currentMovie, setCurrentMovie] = useState("");
    const {id} = useParams();
    const getMovie = async () => {
        const json = await(
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setCurrentMovie(json);
        setLoading(false);
    }

    useEffect(() => {
        getMovie();
    }, []);

    return <div>
        {loading ? (
            <h1>Loading...</h1>
        ) : (
            <div>
        <img src={currentMovie.data.movie.medium_cover_image}></img>
        <h3>Title : {currentMovie.data.movie.title}</h3>
        <h3>Summary : {currentMovie.data.movie.summary}</h3>
        <h3>Genre : {currentMovie.data.movie.genres}</h3>
        <h2>
            <Link to={`/`}>Go Home</Link>
        </h2>
      </div>
        )}
        </div>
    
}

export default Detail;

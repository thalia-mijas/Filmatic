import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import * as API from "../../services/movies";

function Details() {
  const [movieDetail, setMovieDetail] = useState([]);
  const params = useParams();
  const [genres, setGenres] = useState("");
  var gen = "";

  useEffect(() => {
    API.getMovieDetailById(params.id).then(setMovieDetail).catch(console.log);
  }, []);

  return (
    <>
      <div className="movie-poster">
        {console.log(movieDetail)}
        <h2>{movieDetail.title}</h2>
        <img
          alt={movieDetail.title}
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
        />
        <p>
          <b>Overview:</b> {movieDetail.overview}
        </p>
        <p>
          <b>Vote average:</b> {movieDetail.vote_average}
        </p>
      </div>
    </>
  );
}

export default Details;

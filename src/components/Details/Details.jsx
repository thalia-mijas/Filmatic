import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
import * as API from "../../services/movies";

function Details() {
  const [movieDetail, setMovieDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    API.getMovieDetailById(params.id).then(setMovieDetail).catch(console.log);
  }, [params.id]);

  return (
    <>
      <div className="movie-page">
        {console.log(movieDetail)}
        <h2>{movieDetail.title}</h2>
        <div className="movie-details">
          <div className="movie-img">
            <img
              alt={`Poster of ${movieDetail.title}`}
              src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
            />
          </div>
          <div className="movie-info">
            <span>
              <b>Genres:</b>
            </span>
            <ul>
              {movieDetail.genres?.map((genre) => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
            <p>
              <b>Overview:</b> {movieDetail.overview}
            </p>
            <p>
              <b>Vote average:</b> {movieDetail.vote_average}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;

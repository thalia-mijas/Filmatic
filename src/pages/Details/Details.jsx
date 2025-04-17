import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/movies";
import "./Details.css";

function Details() {
  const [movieDetail, setMovieDetail] = useState([]);
  const params = useParams();

  useEffect(() => {
    API.getMovieDetailById(params.id).then(setMovieDetail).catch(console.log);
  }, [params.id]);

  return (
    <>
      {movieDetail.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="movie-page">
          <h2>{movieDetail.title}</h2>
          <div className="movie-details">
            <div className="movie-img">
              {movieDetail.poster_path === null ? (
                <img alt={`Default poster`} src="/poster_filmatic.png" />
              ) : (
                <img
                  alt={`Poster of ${movieDetail.title}`}
                  src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
                />
              )}
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
              <p>
                <b>Release date:</b> {movieDetail.release_date}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Details;

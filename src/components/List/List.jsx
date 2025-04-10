import { useState, useEffect } from "react";
import "./List.css";
import MovieCard from "../MovieCard/MovieCard";
import * as API from "../../services/movies";

function List() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.getAllMovies()
      .then(setMovies)
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  }, []);

  return (
    <>
      {movies.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="card-cont">
          {console.log(movies.results)}
          {movies.results.map((movie) => (
            <MovieCard key={movie.title} {...movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default List;

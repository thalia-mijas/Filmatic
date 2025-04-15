import { useState, useEffect } from "react";
import MovieCard from "../../components/MovieCard/MovieCard.jsx";
import * as API from "../../services/movies.js";
import "./Home.css";

function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.getAllMovies()
      .then(setMovies)
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  }, [error]);

  return (
    <>
      {movies.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="card-cont">
          {movies.results.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </div>
      )}
    </>
  );
}

export default Home;

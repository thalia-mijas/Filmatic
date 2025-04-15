import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as API from "../../services/movies";
import MovieCard from "../MovieCard/MovieCard";

const Searcher = () => {
  const [movieSearched, setMovieSearched] = useState([]);
  const [error, setError] = useState(null);
  const params = useParams();

  useEffect(() => {
    API.getMovieBySearch(params.elect)
      .then(setMovieSearched)
      .catch((err) => {
        setError(err.message);
        console.log(error);
      });
  }, [params.elect, error]);

  return (
    <>
      {movieSearched.length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div className="card-cont">
          {movieSearched.results.map((movieSearched) => (
            <MovieCard key={movieSearched.id} {...movieSearched} />
          ))}
        </div>
      )}
    </>
  );
};

export default Searcher;

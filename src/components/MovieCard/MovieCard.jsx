import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({ title, poster_path, id }) {
  return (
    <Link to={`detail/${id}`}>
      <div className="movie-poster">
        <h3>{title}</h3>
        <img
          alt={`Poster of ${title}`}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        />
      </div>
    </Link>
  );
}

export default MovieCard;

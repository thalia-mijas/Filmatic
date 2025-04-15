import { Link } from "react-router-dom";
import "./MovieCard.css";
import { useLocation, useNavigate } from "react-router-dom";

function MovieCard({ title, poster_path, id }) {
  const location = useLocation().pathname;
  const navigation = useNavigate();

  // if (location != "/") {
  //   navigation("/");
  // }

  return (
    <Link to={`../details/${id}`}>
      <div className="movie-poster">
        <h3>{title}</h3>
        {poster_path === null ? (
          <img alt={`Default poster`} src="/poster_filmatic.png" />
        ) : (
          <img
            alt={`Poster of ${title}`}
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          />
        )}
      </div>
    </Link>
  );
}

export default MovieCard;

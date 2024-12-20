import React from "react";
import { Link } from "react-router-dom";
import { useMovieContext } from "../contexts/MovieContext";
import { useAuthContext } from "../contexts/AuthContext";
import { toast } from "react-toastify";

const MovieCard = ({ movie }) => {
  const { user } = useAuthContext();
  const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
  const favorite = isFavorite(movie.id);

  const onFavoriteClick = (e) => {
    e.preventDefault();
    if (!user)
      return toast.error("You have to login to add movies to favorites.");
    favorite ? removeFromFavorites(movie.id) : addToFavorites(movie);
  };

  if (user) {
    return (
      <div className="movie-card">
        <Link to={`/movie/${movie.id}`}>
          <div className="movie-poster">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="movie-overlay">
              <button
                className={`favorite-btn ${favorite && "active"}`}
                onClick={onFavoriteClick}
              >
                ♥
              </button>
            </div>
          </div>
        </Link>
        <Link to={`/movie/${movie.id}`}>
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.release_date.split("-")[0]}</p>
          </div>
        </Link>
      </div>
    );
  } else {
    return (
      <div
        className="movie-card"
        onClick={() => toast.error("You have to login to see movies detail")}
      >
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <div className="movie-overlay">
            <button
              className={`favorite-btn ${favorite && "active"}`}
              onClick={onFavoriteClick}
            >
              ♥
            </button>
          </div>
        </div>
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.release_date.split("-")[0]}</p>
        </div>
      </div>
    );
  }
};

export default MovieCard;

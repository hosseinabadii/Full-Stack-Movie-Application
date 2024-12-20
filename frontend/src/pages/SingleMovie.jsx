import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../services/moviesApi";
import Loading from "../components/Loading";
import MovieDetails from "../components/MovieDetails";
import { useAuthContext } from "../contexts/AuthContext";

const SingleMovie = () => {
  const { movieId } = useParams();
  const { user } = useAuthContext();
  const [movieDetails, setMovieDetails] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchMovieDetails = async () => {
      try {
        const popularMovies = await getMovieDetails(movieId);
        setMovieDetails(popularMovies);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, []);

  if (!user)
    return (
      <div className="w-full mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
        <p className="text-center text-red-700">
          You have to login to see this page.
        </p>
      </div>
    );

  return (
    <div>
      {error && <div className="error">{error}...</div>}
      {loading ? <Loading /> : <MovieDetails movie={movieDetails} />}
    </div>
  );
};

export default SingleMovie;

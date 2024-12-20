import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import Loading from "../components/Loading";
import { useAuthContext } from "../contexts/AuthContext";
import { getPopularMovies, searchMovies } from "../services/moviesApi";
import { toast } from "react-toastify";

const Home = () => {
  const { user } = useAuthContext();
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
        setError(null);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    if (loading) return;
    if (!user) return toast.error("You have to login to search movies.");

    setLoading(true);
    try {
      const searchResults = await searchMovies(searchQuery);
      setMovies(searchResults);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-3xl font-bold">Welcome to Movies World</h2>
        <p>
          Explore the most popular movies and discover new favorites. If you
          create an account, you can search for movies, bookmark your favorites,
          and view detailed information about each movie.
        </p>
      </div>
      <form
        onSubmit={handleSearch}
        className="max-w-xl mx-auto my-0 flex gap-4 py-4 px-4 justify-center"
      >
        <input
          type="text"
          name="search-query"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="py-3 px-4 rounded border-0 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700"
        />
        <button
          type="submit"
          className="bg-[#e50914] text-white py-3 px-6 rounded transition-colors whitespace-nowrap hover:bg-[#f40612]"
        >
          Search
        </button>
      </form>

      {error && <div className="error">{error}...</div>}

      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 gap-6 p-4 w-full sm:grid-cols-3">
          {movies &&
            movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      )}
    </div>
  );
};

export default Home;

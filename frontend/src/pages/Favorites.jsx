import React from "react";
import MovieCard from "../components/MovieCard";
import { useMovieContext } from "../contexts/MovieContext";

const Favorites = () => {
  const { favorites } = useMovieContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="w-full mx-auto bg-slate-50 p-8 rounded-lg shadow-md">
        <h2 className="mb-8 text-center text-3xl text-gray-800">
          Your Favorites
        </h2>
        <div className="grid grid-cols-1 gap-6 p-4 w-full sm:grid-cols-3 movies-grid">
          {favorites.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <div className="max-w-xl my-16 mx-auto text-center py-16 px-8 bg-slate-50 rounded-xl">
        <h2 className="mb-8 text-3xl text-[#e50914]">No Favorite Movies Yet</h2>
        <p className="text-[#999] text-lg">
          Add some movies to your favorites and they will apear here.
        </p>
      </div>
    );
  }
};
export default Favorites;

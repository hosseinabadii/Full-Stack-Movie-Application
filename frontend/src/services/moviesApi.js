import axios from "axios";

const api = axios.create({ baseURL: "https://api.themoviedb.org/3" });

const API_KEY = process.env.REACT_APP_THEMOVIEDB_API_KEY;

const getPopularMovies = async () => {
  const response = await api
    .get("/movie/popular", {
      params: {
        api_key: API_KEY,
      },
    })
    .catch((error) => {
      const errorMessage = "Failed to fetch popular movies";
      console.log(errorMessage, error.message);
      throw new Error(errorMessage);
    });

  return response?.data?.results;
};

const searchMovies = async (query) => {
  const response = await api
    .get("/search/movie", {
      params: {
        api_key: API_KEY,
        query,
      },
    })
    .catch((error) => {
      const errorMessage = `Failed to search for '${searchQuery}' movies`;
      console.log(errorMessage, error.message);
      throw new Error(errorMessage);
    });

  return response?.data?.results;
};

const getMovieDetails = async (movieId) => {
  const response = await api
    .get(`/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
      },
    })
    .catch((error) => {
      const errorMessage = "Failed to fetch movie details";
      console.log(errorMessage, error.message);
      throw new Error(errorMessage);
    });

  return response?.data;
};

export { getPopularMovies, searchMovies, getMovieDetails };

import React from 'react';

const MovieDetails = ({ movie }) => {
  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-100 rounded-lg shadow-lg">
      {/* Title Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">{movie.title}</h1>
        <p className="text-lg text-gray-600 mt-2 italic">
          Released: {movie.release_date}
        </p>
      </div>

      {/* Movie Info Section */}
      <div className="flex flex-col lg:flex-row lg:space-x-8 bg-white rounded-lg shadow-md p-6">
        {/* Poster Image */}
        <div className="lg:w-1/3 text-center mb-4 lg:mb-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Movie Overview */}
        <div className="lg:w-2/3">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Overview</h2>
          <p className="text-lg text-gray-700 leading-relaxed">{movie.overview}</p>
        </div>
      </div>

      {/* Additional Details */}
      <div className="mt-8 space-y-8">
        {/* Details Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Details</h2>
          <ul className="space-y-2">
            <li className="text-lg">
              <span className="font-bold text-gray-600">Runtime:</span> {movie.runtime} minutes
            </li>
            <li className="text-lg">
              <span className="font-bold text-gray-600">Budget:</span> ${movie.budget.toLocaleString()}
            </li>
            <li className="text-lg">
              <span className="font-bold text-gray-600">Revenue:</span> ${movie.revenue.toLocaleString()}
            </li>
          </ul>
        </div>

        {/* Ratings Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ratings</h2>
          <ul className="space-y-2">
            <li className="text-lg">
              <span className="font-bold text-gray-600">Vote Average:</span> {movie.vote_average}
            </li>
            <li className="text-lg">
              <span className="font-bold text-gray-600">Vote Count:</span> {movie.vote_count.toLocaleString()}
            </li>
          </ul>
        </div>

        {/* Genres Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Genres</h2>
          <div className="flex flex-wrap space-x-2">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>

        {/* Production Companies Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Production Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movie.production_companies.map((company) => (
              <div
                key={company.id}
                className="bg-gray-50 border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4">
                  {company.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w45${company.logo_path}`}
                      alt={company.name}
                      className="w-12 h-12 object-contain rounded-md shadow-sm hover:scale-110 transition-transform"
                    />
                  )}
                  <div>
                    <p className="font-bold text-gray-800">{company.name}</p>
                    <p className="text-sm text-gray-500">{company.origin_country}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Production Countries Section */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Production Countries</h2>
          <ul className="space-y-2">
            {movie.production_countries.map((country) => (
              <li key={country.iso_3166_1} className="text-lg text-gray-700">
                {country.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

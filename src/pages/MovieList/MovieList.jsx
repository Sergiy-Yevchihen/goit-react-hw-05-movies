import React from 'react';
import { useLocation } from 'react-router-dom';
import { MovieLink } from './MovieList.styled';

const MovieList = ({ trendMovies }) => {
  const location = useLocation();

  return (
    <ul>
      {trendMovies.map(movie => (
        <li key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.original_title || movie.name}
          </MovieLink>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;